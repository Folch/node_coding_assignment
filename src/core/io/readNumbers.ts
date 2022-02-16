import { promises as fs } from "fs";

async function readNumbers(path: string): Promise<number[]> {
  const data = await fs.readFile(path);
  const numbers = data
    .toString()
    .split("\n")
    .map((str) => Number.parseInt(str));
  return numbers;
}

export default readNumbers;
