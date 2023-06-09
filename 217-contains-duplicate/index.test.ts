import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { containsDuplicate } from "./index.ts";

Deno.test("containsDuplicate", () => {
    // Example 1
    assertEquals(containsDuplicate([1, 2, 3, 1]), true);

    // Example 2
    assertEquals(containsDuplicate([1, 2, 3, 4]), false);

    // Example 3
    assertEquals(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
});