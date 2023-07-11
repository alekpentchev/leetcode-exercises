import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { wordBreak } from "./index.ts";

Deno.test("wordBreak", () => {
    // Example 1
    assertEquals(wordBreak("leetcode", ["leet", "code"]), true);

    // Example 2
    assertEquals(wordBreak("applepenapple", ["apple", "pen"]), true);

    // Example 3
    assertEquals(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]), false);

    // Example 4
    assertEquals(wordBreak("cars", ["car", "ca", "rs"]), true);
});