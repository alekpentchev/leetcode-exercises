import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { maxProduct } from "./index.ts";

Deno.test("maxProduct", () => {
    // Example 1
    assertEquals(maxProduct([2, 3, -2, 4]), 6)

    // Example 2
    assertEquals(maxProduct([-2, 0, -1]), 0)

    // Example 3
    assertEquals(maxProduct([-2]), -2)

    // Example 4
    assertEquals(maxProduct([-1,-1]), 1)

    // Example 5
    assertEquals(maxProduct([0,2]), 2)
    
    // Example 6
    assertEquals(maxProduct([-4,-3,-2]), 12)
    
})