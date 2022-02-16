/**
 * Given an array 'arr', returns the first two numbers that sum up to 'sum'.
 * @param arr array of numbers to search for
 * @param sum target
 * @returns 
 */
export function find2Numbers(arr: number[], sum: number): number[] {
  const size = arr.length;
  const s = new Set();
  for (let i = 0; i < size; i++) {
    const currentDiff = sum - arr[i];
    if (s.has(currentDiff)) {
      return [arr[i], currentDiff];
    }
    s.add(arr[i]);
  }
  return [];
}

/**
 * Given an array 'arr', returns the first three numbers that sum up to 'sum'.
 * @param arr array of numbers to search for
 * @param sum target
 * @returns 
 */
export function find3Numbers(arr: number[], sum: number): number[] {
  const size = arr.length;
  for (let i = 0; i < size - 2; i++) {
    const s = new Set();
    const currentDiff = sum - arr[i];
    for (let j = i + 1; j < size; j++) {
      if (s.has(currentDiff - arr[j])) {
        return [arr[i], arr[j], currentDiff - arr[j]];
      }
      s.add(arr[j]);
    }
  }
  return [];
}
