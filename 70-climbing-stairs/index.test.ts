import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { climbStairs } from "./index.ts";

Deno.test("climbStairs", () => {
    // Example 1
    assertEquals(climbStairs(2), 2);

    // Example 2
    assertEquals(climbStairs(3), 3);

    // Example 3
    assertEquals(climbStairs(4), 5);

    // Example 4
    assertEquals(climbStairs(5), 8);

    // Example 5
    assertEquals(climbStairs(6), 13);

    // Example 6
    assertEquals(climbStairs(7), 21);
});