import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { maxSubArray } from "./index.ts";

Deno.test("maximumSubarray", () => {
    // Example 1
    assertEquals(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), 6);

    // Example 2
    assertEquals(maxSubArray([1]), 1);

    // Example 3
    assertEquals(maxSubArray([5,4,-1,7,8]), 23);
})