import { Lightning } from '@inco/js/lite';
import { parseLocalEnv } from '@inco/js/local';
import { anvil } from 'viem/chains';
import { describe } from 'vitest';
import { runE2ETest } from './lightning-test';
import { loadDotEnv, readFileFromRoot } from './repo.ts';

describe(`Lightning Local Node E2E`, { timeout: 50_000 }, async () => {
  loadDotEnv();
  const dumpParams = process.env.DUMP_ENV_FILE;
  if (!dumpParams) {
    throw new Error("DUMP_ENV_FILE doesn't exist!");
  }
  const buf = await readFileFromRoot(dumpParams);
  const { SENDER_PRIVATE_KEY, ECIES_PUBLIC_KEY, EXECUTOR_ADDRESS } = parseLocalEnv(buf);
  const zap = Lightning.custom({
    executorAddress: EXECUTOR_ADDRESS,
    eciesPublicKey: ECIES_PUBLIC_KEY,
    chainId: BigInt(anvil.id),
    covalidatorUrl: 'http://localhost:50055',
  });
  runE2ETest(Math.floor(Math.random() * 100), zap, {
    chain: anvil,
    senderPrivKey: SENDER_PRIVATE_KEY,
    hostChainRpcUrl: 'http://127.0.0.1:8545',
  });
});
