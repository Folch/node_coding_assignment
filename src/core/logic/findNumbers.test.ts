import assert from "assert";
import * as findNumbers from './findNumbers';

describe("findNumbers", function () {
  describe("find2Numbers", function () {
    it("should return the first two numbers that sum up to 4", function () {
      const arr = [2, 1, 3, 4, 0, 2];
      const result = findNumbers.find2Numbers(arr, 4);
      assert.deepStrictEqual(result.sort(), [1, 3].sort());
    });
    it("should return an empty array if there is no solution", function () {
      const arr = [2, 1, 4];
      const result = findNumbers.find2Numbers(arr, 4);
      assert.deepStrictEqual(result, []);
    });
  });
  describe("find3Numbers", function () {
    it("should return the first three numbers that sum up to 4", function () {
      const arr = [2, 1, 3, 4, 0, 2];
      const result = findNumbers.find3Numbers(arr, 4);
      assert.deepStrictEqual(result.sort(), [2, 0, 2].sort());
    });
    it("should return an empty array if there is no solution", function () {
      const arr = [2, 1, 4];
      const result = findNumbers.find3Numbers(arr, 4);
      assert.deepStrictEqual(result, []);
    });
  });
});
