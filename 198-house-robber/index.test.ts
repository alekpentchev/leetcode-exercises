import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { rob, rob2 } from "./index.ts";

Deno.test("rob", () => {
    // Example 1
    assertEquals(rob([1, 2, 3, 1]), 4);
    assertEquals(rob2([1, 2, 3, 1]), 4);
    
    // Example 2
    assertEquals(rob([2, 7, 9, 3, 1]), 12);
    assertEquals(rob2([2, 7, 9, 3, 1]), 12);
    
    // Example 3
    assertEquals(rob([2, 1, 1, 2]), 4);
    assertEquals(rob2([2, 1, 1, 2]), 4);
});