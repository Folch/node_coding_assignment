import * as logic from "../core/logic/findNumbers";

function problem1b(numbers: number[]): void {
  console.log('\nPROBLEM 1b\n');
  const sum = 2020;
  const triplet = logic.find3Numbers(numbers, sum);
  if (triplet.length) {
    console.log(`These 3 numbers sum up to ${sum}: ${triplet}`);
    console.log(`and their product is ${triplet[0] * triplet[1] * triplet[2]}`);
  } else {
    console.log(`No 3 numbers sum up to ${sum}`);
  }
}

export default problem1b;
