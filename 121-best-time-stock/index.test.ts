import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { maxProfit } from "./index.ts";

Deno.test("maxProfit", () => {
    // Example 1
    assertEquals(maxProfit([7, 1, 5, 3, 6, 4]), 5);

    // Example 2
    assertEquals(maxProfit([7, 6, 4, 3, 1]), 0);

    // Example 3
    assertEquals(maxProfit([2, 4, 1]), 2);
});