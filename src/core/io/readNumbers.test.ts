import assert from "assert";
import * as sinon from "ts-sinon";
import { promises as fs } from "fs";
import * as readNumbersLib from "./readNumbers";

describe("readNumbers", function () {
  it("should read a file and return the numbers inside", async function () {
    const fsStub = sinon.default.stub(fs)
    fsStub.readFile.resolves(`1\n2\n3`);
    const result = await readNumbersLib.default('madeuppath');
    assert.deepStrictEqual(result, [1, 2, 3]);
  });
  after(function () {
    sinon.default.restore();
  });
});
