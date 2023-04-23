import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import {canConstruct} from "./index.ts"

Deno.test("ransomNote", () => {
    // create unit tests for the function canConstruct
    // it checks if the 1st param "ransomNote" can be constructed by using letters
    // in the 2nd param "magazine"

    // example 1
    const ransomNote1 = "a";
    const magazine1 = "b";
    const expected1 = false;
    assertEquals(canConstruct(ransomNote1, magazine1), expected1);

    // example 2
    const ransomNote2 = "aa";
    const magazine2 = "ab";
    const expected2 = false;
    assertEquals(canConstruct(ransomNote2, magazine2), expected2);

    // example 3
    const ransomNote3 = "aa";
    const magazine3 = "aab";
    const expected3 = true;
    assertEquals(canConstruct(ransomNote3, magazine3), expected3);

    // example 4
    const ransomNote4 = "aab";
    const magazine4 = "aba";
    const expected4 = true;
    assertEquals(canConstruct(ransomNote4, magazine4), expected4);
})