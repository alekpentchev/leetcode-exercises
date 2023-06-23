import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { maxArea } from "./index.ts";

Deno.test("maxArea", () => {
    // Example 1
    assertEquals(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);

    // Example 2
    assertEquals(maxArea([1, 1]), 1);

    // Example 3
    assertEquals(maxArea([4, 3, 2, 1, 4]), 16);
});