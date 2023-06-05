import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { maximumWealth } from "./index.ts";

Deno.test("maximumWealth", () => {
    // Example 1
    assertEquals(
        maximumWealth([
            [1, 2, 3],
            [3, 2, 1],
        ]),
        6,
    );

    // Example 2
    assertEquals(
        maximumWealth([
            [1, 5],
            [7, 3],
            [3, 5],
        ]),
        10,
    );

    // Example 3
    assertEquals(
        maximumWealth([
            [2, 8, 7],
            [7, 1, 3],
            [1, 9, 5],
        ]),
        17,
    );
    
});