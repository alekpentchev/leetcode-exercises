import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { coinChange } from "./index.ts";

Deno.test("coinChange", () => {
    // Example 1
    assertEquals(coinChange([1, 2, 5], 11), 3);

    // Example 2
    assertEquals(coinChange([2], 3), -1);

    // Example 3
    assertEquals(coinChange([1], 0), 0);
});