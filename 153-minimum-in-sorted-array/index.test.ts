import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { findMin } from "./index.ts";

Deno.test("findMin", () => {
    // Example 1
    assertEquals(findMin([3, 4, 5, 1, 2]), 1);

    // Example 2
    assertEquals(findMin([4, 5, 6, 7, 0, 1, 2]), 0);

    // Example 3
    assertEquals(findMin([11, 13, 15, 17]), 11);
});