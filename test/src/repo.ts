import {readFile} from "fs/promises";
import * as path from "path";
import * as dotenv from "dotenv";

const root = path.resolve(__dirname, '..', '..');
const envPath = path.join(root, "/.env");

export function loadDotenv() {
  dotenv.config({ path: envPath });
}

export function resolveRoot(...paths: string[]): string {
  return path.resolve(root, ...paths);
}

export async function readFileFromRoot(...paths: string[]): Promise<Buffer> {
  return await readFile(resolveRoot(...paths));
}
