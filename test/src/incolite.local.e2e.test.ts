import { anvil } from 'viem/chains';
import { describe } from 'vitest';
import { parseLocalEnv } from '@inco/js/local';
import { runE2ETest } from './lightning-test';
import * as dotenv from 'dotenv';
import {readFileFromRoot} from "./repo.ts";
import * as path from "path";

dotenv.config({path: '../.env'})

describe(`IncoLite on Local Node E2E`, { timeout: 50_000 }, async () => {
  const cwd = process.cwd();
  const dumpParams = process.env.DUMP_ENV_FILE;
  if (!dumpParams) {
    throw new Error('DUMP_ENV_FILE doesn\'t exist!');
  }
  const buf = await readFileFromRoot(dumpParams);
  const { SENDER_PRIVATE_KEY, ADD_TWO_ADDRESS, ECIES_PUBLIC_KEY, EXECUTOR_ADDRESS, SESSION_VERIFIER_ADDRESS } =
    parseLocalEnv(buf);
  runE2ETest(Math.floor(Math.random() * 100), {
    chain: anvil,
    senderPrivKey: SENDER_PRIVATE_KEY,
    hostChainRpcUrl: 'http://127.0.0.1:8545',
    dappAddress: ADD_TWO_ADDRESS,
    covalidatorGrpcEndpoint: 'http://localhost:50055',
    eciesPubKey: ECIES_PUBLIC_KEY,
    incoLiteAddress: EXECUTOR_ADDRESS,
    sessionVerifierContractAddress: SESSION_VERIFIER_ADDRESS,
  });
});

