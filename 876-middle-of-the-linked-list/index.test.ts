import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import {middleNode} from "./index.ts"

Deno.test("middleOfTheLinkedList", () => {
    // Example 1:
    // Input: head = [1,2,3,4,5]
    // Output: [3,4,5]
    // Explanation: The middle node of the list is node 3.
    const head1 = {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val:4,
                    next: {
                        val: 5,
                        next: null
                    }
                }
            }
        }

    }
    const result1 = middleNode(head1)
    assertEquals(result1, {val: 3, next: {val: 4, next: {val: 5, next: null}}})

    // Example 2:
    // Input: head = [1,2,3,4,5,6]
    // Output: [4,5,6]
    // Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
    const head2 = {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val:4,
                    next: {
                        val: 5,
                        next: {
                            val: 6,
                            next: null
                        }
                    }
                }
            }
        }
    }
    const result2 = middleNode(head2)
    assertEquals(result2, {val: 4, next: {val: 5, next: {val: 6, next: null}}})
})