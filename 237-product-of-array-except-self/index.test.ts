import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { productExceptSelf } from "./index.ts";

Deno.test("productExceptSelf", () => {
    // Example 1
    assertEquals(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
    
    // Example 2
    assertEquals(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);

    // Example 3
    assertEquals(productExceptSelf([1, 2]), [2, 1]);
});