import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { twoSum } from "./index.ts";

Deno.test("twoSum", () => {
    // Example 1
    assertEquals(twoSum([2, 7, 11, 15], 9), [0, 1]);

    // Example 2
    assertEquals(twoSum([3, 2, 4], 6), [1, 2]);

    // Example 3
    assertEquals(twoSum([3, 3], 6), [0, 1]);
});