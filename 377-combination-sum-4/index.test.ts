import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { combinationSum4 } from "./index.ts";

Deno.test("combinationSum4", () => {
    // Example 1
    assertEquals(combinationSum4([1,2,3], 4), 7);

    // Example 2
    assertEquals(combinationSum4([9], 3), 0);

    // Example 3
    assertEquals(combinationSum4([1,2,3], 32), 181997601);
});