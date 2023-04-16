import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { _isPalindrome, ListNode } from "./index.ts";

Deno.test("roman to integer", () => {
    const listOne: ListNode = {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 2,
                next: {
                    val: 1,
                    next: null
                }
            }
        }
    };
    const listTwoFalse: ListNode = {
        val: 1,
        next: {
            val: 2,
            next: {
                    val: 3,
                    next: null
            }
        }
    }

    const listThreeFalse: ListNode = {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: null
                }
            }
        }
    };

    const listFourTrue: ListNode = {
            val: 0,
            next: null
    }

    const listFiveTrue: ListNode = {
        val: 1,
        next: {
            val: 0,
            next: {
                val: 1,
                next: null
            }
        }
    }

    assertEquals(_isPalindrome(listOne), true);
    assertEquals(_isPalindrome(listTwoFalse), false);
    assertEquals(_isPalindrome(listThreeFalse), false);
    assertEquals(_isPalindrome(listFourTrue), true);
    assertEquals(_isPalindrome(listFiveTrue), true);
})