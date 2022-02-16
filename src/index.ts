import { join } from "path";
import readNumbers from "./core/io/readNumbers";
import problem1a from "./problems/problem1a";
import problem1b from "./problems/problem1b";

async function main(): Promise<void> {
  const path = join("..", "input", "input1.txt");
  const numbers = await readNumbers(path);
  problem1a(numbers);
  problem1b(numbers);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
