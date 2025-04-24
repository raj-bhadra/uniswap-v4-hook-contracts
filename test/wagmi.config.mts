import { defineConfig } from "@wagmi/cli";
import { foundry } from "@wagmi/cli/plugins";

const commonExcludes = ["Strings.sol/**", "Vm.sol/**", "ECDSA.sol/**", "ShortStrings.sol/**"];

export default defineConfig([
  {
    out: "src/generated/abis.ts",
    plugins: [
      foundry({
        project: "../contracts/",
        include: ["AddTwo.sol/**"],
      }),
    ],
  },
]);
