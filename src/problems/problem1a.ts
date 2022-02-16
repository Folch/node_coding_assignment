import * as logic from "../core/logic/findNumbers";

function problem1a(numbers: number[]): void {
  console.log('\nPROBLEM 1a\n');
  const sum = 2020;
  const duplet = logic.find2Numbers(numbers, sum);
  if (duplet.length) {
    console.log(`These 2 numbers sum up to ${sum}: ${duplet}`);
    console.log(`and their product is ${duplet[0] * duplet[1]}`);
  } else {
    console.log(`No 2 numbers sum up to ${sum}`);
  }
}

export default problem1a;
