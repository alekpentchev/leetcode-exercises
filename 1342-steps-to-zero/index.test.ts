import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { numberOfSteps } from "./index.ts";

Deno.test("numberOfSteps", () => {
    // Example 1:
    // Input: num = 14
    // Output: 6
    // Explanation:
    // Step 1) 14 is even; divide by 2 and obtain 7.
    // Step 2) 7 is odd; subtract 1 and obtain 6.
    // Step 3) 6 is even; divide by 2 and obtain 3.
    // Step 4) 3 is odd; subtract 1 and obtain 2.
    // Step 5) 2 is even; divide by 2 and obtain 1.
    // Step 6) 1 is odd; subtract 1 and obtain 0.
    const num1 = 14
    const result1 = numberOfSteps(num1)
    assertEquals(result1, 6)

    // Example 2:
    // Input: num = 8
    // Output: 4
    // Explanation:
    // Step 1) 8 is even; divide by 2 and obtain 4.
    // Step 2) 4 is even; divide by 2 and obtain 2.
    // Step 3) 2 is even; divide by 2 and obtain 1.
    // Step 4) 1 is odd; subtract 1 and obtain 0.
    const num2 = 8
    const result2 = numberOfSteps(num2)
    assertEquals(result2, 4)

    // Example 3:
    // Input: num = 123
    // Output: 12
    const num3 = 123
    const result3 = numberOfSteps(num3)
    assertEquals(result3, 12)

});