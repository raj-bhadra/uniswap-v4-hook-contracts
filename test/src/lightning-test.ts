import {
  type EciesScheme,
  encryptionSchemes,
  type EncryptResultOf,
  type PlaintextOf,
  type PlaintextWithContextOf,
  SupportedFheType,
} from '@inco/js/encryption';
import {addTwoAbi, incoLightningAbi} from '@inco/js/abis';
import {decodeSecp256k1PublicKey, generateSecp256k1Keypair, getEciesEncryptor, incoLiteReencryptor} from '@inco/js/lite'
import {handleTypes, HexString} from '@inco/js'
import {
  type Account,
  type Address,
  type Chain,
  createPublicClient,
  createWalletClient,
  getContract,
  type Hex,
  hexToBytes,
  http,
  type PublicClient,
  type Transport,
  type WalletClient,
} from 'viem';
import {privateKeyToAccount} from 'viem/accounts';
import {beforeAll, describe, expect, it} from 'vitest';

// E2EConfig contains all configuration needed to run a test against
// a specific deployment.
export interface E2EConfig {
  // Ethereum Private key of the user account sending the transaction or
  // requesting a reencryption. Needs to have some tokens on the chain.
  senderPrivKey: Hex;
  chain: Chain;
  // RPC of the host chain.
  hostChainRpcUrl: string;
  // Address of the IncoLite.sol contract.
  incoLiteAddress: Address;
  // Address of the confidential token contract.
  dappAddress: Address;
  // ECIES network public key that will be used for inputs.
  eciesPubKey: Hex;
  // gRPC endpoint of the covalidator. We use the connectrpc protocol. It
  // should be in the format http(s)://<host>:<port>.
  covalidatorGrpcEndpoint: string;
  // Address of the SessionVerifier.sol contract.
  sessionVerifierContractAddress: Address;
}

async function encryptInput<T extends SupportedFheType>(
  plaintextWithContext: PlaintextWithContextOf<EciesScheme, T>,
  cfg: E2EConfig,
): Promise<{
  inputCt: EncryptResultOf<EciesScheme, T>;
}> {
  console.log();
  console.log('###############################################');
  console.log(`# Step 1. Encrypt value "${plaintextWithContext.plaintext.value}" with ECIES`);
  console.log('###############################################');

  console.log();
  console.log('Generating an ephemeral key pair for ECIES...');
  const ephemeralKeypair = await generateSecp256k1Keypair();
  const eciesPubKey = decodeSecp256k1PublicKey(hexToBytes(cfg.eciesPubKey));

  console.log();
  console.log(`Encoding the plaintext ${plaintextWithContext.plaintext.value} alongside its HADU...`);
  console.log(
    `H=${plaintextWithContext.context.hostChainId} A=${plaintextWithContext.context.aclAddress} D=${plaintextWithContext.context.contractAddress} U=${plaintextWithContext.context.userAddress}`,
  );
  const encryptor = getEciesEncryptor({
    scheme: encryptionSchemes.ecies,
    pubKeyA: eciesPubKey,
    privKeyB: ephemeralKeypair,
  });
  const inputCt = await encryptor(plaintextWithContext);
  console.log(
    `Got encrypted message: ${prettifyInputCt(inputCt.ciphertext.value)} (${(inputCt.ciphertext.value.length - 2) / 2} bytes total)`,
  );

  return { inputCt };
}

// Sends a tx on the host chain to call `addTwo`.
async function addTwo<T extends SupportedFheType>(
  inputCt: EncryptResultOf<EciesScheme, T>,
  walletClient: WalletClient<Transport, Chain, Account>,
  publicClient: PublicClient<Transport, Chain>,
  cfg: E2EConfig,
): Promise<{ requestId: bigint; resultHandle: HexString }> {
  const chain = cfg.chain;
  console.log();
  console.log('###############################################');
  console.log(`# Step 2. Send a tx to ${chain.name}`);
  console.log('###############################################');

  const dapp = getContract({
    abi: addTwoAbi,
    address: cfg.dappAddress,
    client: walletClient,
  });

  console.log();
  console.log(`Simulating the call to add 2 to ${prettifyInputCt(inputCt.ciphertext.value)}`);
  const {
    result: [requestId, resultHandle],
  } = await dapp.simulate.addTwoEOA([inputCt.ciphertext.value]);
  console.log(`Result handle: ${resultHandle}`);

  console.log();
  console.log(`Calling the dapp contract to add 2 to ${prettifyInputCt(inputCt.ciphertext.value)}`);
  // With some testing, we found that 300000 gas is enough for this tx.
  // ref: https://testnet.monadexplorer.com/tx/0x562e301221c942c50c758076d67bef85c41cd51def9d8f4ad2d514aa8ab5f74d
  // ref: https://sepolia.basescan.org/tx/0x9141788e279a80571b0b5fcf203a7dc6599b6a3ad14fd3353e51089dc3c870a6
  const txHash = await dapp.write.addTwoEOA([inputCt.ciphertext.value], { gas: BigInt(300000) });
  console.log(`Tx submitted: ${chain.blockExplorers?.default.url ?? 'no-explorer'}/tx/${txHash}`);

  console.log();
  console.log('Waiting for tx to be included in a block...');
  const receipt = await publicClient.waitForTransactionReceipt({ hash: txHash });
  console.log(`Transaction included in block ${receipt.blockNumber}`);

  return { requestId, resultHandle };
}

async function basicReencrypt(
  resultHandle: HexString,
  walletClient: WalletClient<Transport, Chain, Account>,
  cfg: E2EConfig,
): Promise<PlaintextOf<EciesScheme, SupportedFheType>> {
  console.log();
  console.log('###############################################');
  console.log('# Step 3. Request basic reencryption');
  console.log('###############################################');

  console.log();
  console.log('Signing EIP712 message...');
  const reencryptor = await incoLiteReencryptor({
    chainId: BigInt(cfg.chain.id),
    walletClient: walletClient,
    kmsConnectRpcEndpointOrClient: cfg.covalidatorGrpcEndpoint,
  });

  console.log();
  console.log('Requesting reencryption on covalidator...');
  console.log('Covalidator endpoint:', cfg.covalidatorGrpcEndpoint);
  const decrypted = await reencryptor({
    handle: resultHandle,
  });
  console.log(`Got reencrypted message: ${decrypted.value}`);

  return decrypted;
}

export function runE2ETest(valueToAdd: number, cfg: E2EConfig) {
  const account = privateKeyToAccount(cfg.senderPrivKey);
  const viemChain = cfg.chain;
  // TODO: my attempt to override gas fees to work around insufficient balance error without success:
  // const viemChain = defineChain({ ...getViemChain(cfg.chain), fees: { maxPriorityFeePerGas: parseGwei('10') } });
  const walletClient = createWalletClient({
    chain: viemChain,
    transport: http(cfg.hostChainRpcUrl),
    account,
  });
  const publicClient = createPublicClient({
    chain: viemChain,
    transport: http(cfg.hostChainRpcUrl),
  }) as PublicClient<Transport, Chain>;

  const plaintextWithContext: PlaintextWithContextOf<EciesScheme, typeof handleTypes.euint256> = {
    plaintext: {
      scheme: encryptionSchemes.ecies,
      value: BigInt(valueToAdd),
      type: handleTypes.euint256,
    },
    context: {
      hostChainId: BigInt(cfg.chain.id),
      aclAddress: cfg.incoLiteAddress,
      userAddress: account.address,
      contractAddress: cfg.dappAddress,
    },
  };

  describe('IncoLite AddTwo E2E', () => {
    // Will hold the handle of the result of the `addTwoEOA` call.
    let resultHandle: HexString;
    let requestId: bigint;
    let callbackFulfillPromise: Promise<void>;

    beforeAll(async () => {
      console.warn('Running this test has some prerequisites:');
      console.warn(`- The IncoLite contract ${cfg.incoLiteAddress} must be deployed on ${cfg.chain.name}`);
      console.warn(`- The dapp contract ${cfg.dappAddress} must be deployed on ${cfg.chain.name}`);
      console.warn(
        `- The sender ${privateKeyToAccount(cfg.senderPrivKey).address} must have some ${cfg.chain.name} tokens`,
      );

      // Step 1.
      const { inputCt } = await encryptInput(plaintextWithContext, cfg);

      // Already start watching for the fullfilled event. This is because on
      // Monad, stuff is happening so fast that it's better to start watching
      // for events as soon as possible.
      const incoLite = getContract({
        abi: incoLightningAbi,
        address: cfg.incoLiteAddress,
        client: publicClient,
      });
      if (!incoLite) {
        throw new Error(`IncoLite contract not found at address ${cfg.incoLiteAddress}`);
      }
      callbackFulfillPromise = new Promise((resolve) => {
        incoLite.watchEvent.RequestFulfilled({ requestId }, { onLogs: () => resolve() });
      });

      // Step 2.
      const res = await addTwo(inputCt, walletClient, publicClient, cfg);
      resultHandle = res.resultHandle;
      requestId = res.requestId;
    });

    it('should read from the decrypted message', async () => {
      console.log();
      console.log(`Waiting for RequestFulfilled event with requestId ${requestId}...`);
      await callbackFulfillPromise;
      console.log('RequestFulfilled event received');

      const dapp = getContract({
        abi: addTwoAbi,
        address: cfg.dappAddress,
        client: publicClient,
      });

      const lastResult = await dapp.read.lastResult();
      expect(lastResult).toBe(BigInt(valueToAdd + 2));
    }, 20_000);

    it('should reencrypt a message', async () => {
      // Step 3.
      const decrypted = await basicReencrypt(resultHandle, walletClient, cfg);
      expect(decrypted.value).toBe(BigInt(valueToAdd + 2));
    }, 10_000);
  });
}

function prettifyInputCt(hex: HexString): string {
  return `${hex.slice(0, 8)}...${hex.slice(-6)}`;
}
