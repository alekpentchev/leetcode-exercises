import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { lengthOfLIS } from "./index.ts";

Deno.test("lengthOfLIS", () => {
    // Example 0
    assertEquals(lengthOfLIS([1,2,4,3]), 3);

    // Example 1
    assertEquals(lengthOfLIS([10,9,2,5,3,7,101,18]), 4);

    // Example 2
    assertEquals(lengthOfLIS([0,1,0,3,2,3]), 4);

    // Example 3
    assertEquals(lengthOfLIS([7,7,7,7,7,7,7]), 1);
});