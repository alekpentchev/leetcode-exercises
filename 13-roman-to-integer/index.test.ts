// create unit tests for the roman to integer exercise
// write it using deno test utilities

import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { romanToInt } from "./index.ts";

Deno.test("roman to integer", () => {
    assertEquals(romanToInt("III"), 3);
    assertEquals(romanToInt("IV"), 4);
    assertEquals(romanToInt("IX"), 9);
    assertEquals(romanToInt("LVIII"), 58);
    assertEquals(romanToInt("MCMXCIV"), 1994);
    assertEquals(romanToInt("MMXVIII"), 2018);
    assertEquals(romanToInt("MCMXCVI"), 1996);
})