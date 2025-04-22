import {readFile} from "fs/promises";
import * as path from "path";

const root = path.resolve(__dirname, '..', '..');

export function resolveRoot(...paths: string[]): string {
  return path.resolve(root, ...paths);
}

export async function readFileFromRoot(...paths: string[]): Promise<Buffer> {
  return await readFile(resolveRoot(...paths));
}
