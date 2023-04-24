import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { fizzBuzz } from "./index.ts";

// write unit tests for fizz buzz with deno.test
Deno.test('fizzBuzz', () => {
    // example 1
    const input1 = 3
    const output1 = ["1","2","Fizz"]
    const result1 = fizzBuzz(input1)
    assertEquals(result1, output1)

    // example 2
    const input2 = 5
    const output2 = ["1","2","Fizz","4","Buzz"]
    const result2 = fizzBuzz(input2)
    assertEquals(result2, output2)

    // example 3
    const input3 = 15
    const output3 = ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
})