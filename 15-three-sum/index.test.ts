import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { threeSum } from "./index.ts";

Deno.test("threeSum", () => {
    // Example 1
    assertEquals(threeSum([-1, 0, 1, 2, -1, -4]), [ [-1, -1, 2], [-1, 0, 1] ]);

    // Example 2
    assertEquals(threeSum([]), []);

    // Example 3
    assertEquals(threeSum([0]), []);

    // Example 4
    assertEquals(threeSum([0, 0, 0]), [ [0, 0, 0] ]);

    // Example 5
    assertEquals(threeSum([-2, 0, 1, 1, 2]), [ [-2, 0, 2], [-2, 1, 1] ]);
});