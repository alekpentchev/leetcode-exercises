import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { search, search2 } from "./index.ts";

Deno.test("twoSum", () => {
    // Example 1
    assertEquals(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
    assertEquals(search2([4, 5, 6, 7, 0, 1, 2], 0), 4);

    // Example 2
    assertEquals(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
    assertEquals(search2([4, 5, 6, 7, 0, 1, 2], 3), -1);

    // Example 3
    assertEquals(search([1], 0), -1);
    assertEquals(search2([1], 0), -1);
});


[6,7,0,1,2,4,5]