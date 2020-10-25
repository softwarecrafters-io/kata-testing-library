import {average, sum} from "./stats";
import {describe, expect, it} from "./testLib";
import * as statsAsync from "./statsAsync";

describe("Stats should", ()=>{
    it("calculates the sum of all elements of the array", ()=>{
        const result = sum([1,2,3]);
        const expected = 6;

        expect(expected).toBe(result);
    });

    it("calculates the average of all elements of the array", ()=>{
        const result = average([1,2,3]);
        const expected = 2;

        expect(expected).toBe(result);
    });
})

describe("Stats should (async)", ()=> {
    it("calculates the sum of all elements of the array (async)", async () => {
        const numbers = [1, 2, 3];
        const result = await statsAsync.sum(numbers);
        const expected = 6;

        expect(result).toBe(expected);
    });

    it("calculates the average of all elements of the array (async)", async () => {
        const numbers = [1, 2, 3];
        const result = await statsAsync.average(numbers);
        const expected = 2;

        expect(result).toBe(expected);
    });
});

