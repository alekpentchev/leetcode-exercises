import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import {kWeakestRows} from "./index.ts"

Deno.test("middleOfTheLinkedList", () => {
    // Example 1:
    // Input: mat =
    // [[1,1,0,0,0],
    //  [1,1,1,1,0],
    //  [1,0,0,0,0],
    //  [1,1,0,0,0],
    //  [1,1,1,1,1]],
    // k = 3
    // Output: [2,0,3]
    // Explanation:
    // The number of soldiers for each row is:
    // row 0 -> 2
    // row 1 -> 4
    // row 2 -> 1
    // row 3 -> 2
    // row 4 -> 5
    // Rows ordered from the weakest to the strongest are [2,0,3,1,4]
    const mat1 = [
        [1,1,0,0,0],
        [1,1,1,1,0],
        [1,0,0,0,0],
        [1,1,0,0,0],
        [1,1,1,1,1]
    ]
    const result1 = kWeakestRows(mat1, 3)
    assertEquals(result1, [2,0,3])

    // Example 2:
    // Input: mat =
    // [[1,0,0,0],
    //  [1,1,1,1],
    //  [1,0,0,0],
    //  [1,0,0,0]],
    // k = 2
    // Output: [0,2]
    // Explanation:
    // The number of soldiers for each row is:
    // row 0 -> 1
    // row 1 -> 4
    // row 2 -> 1
    // row 3 -> 1
    // Rows ordered from the weakest to the strongest are [0,2,3,1]
    const mat2 = [
        [1,0,0,0],
        [1,1,1,1],
        [1,0,0,0],
        [1,0,0,0]
    ]
    const result2 = kWeakestRows(mat2, 2)
    assertEquals(result2, [0,2])


    // Example 3:
    const mat3 = [[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]]
    const k3 = 3
    const expected3 = [2,0,3]
    const result3 = kWeakestRows(mat3, k3)
    assertEquals(result3, expected3)

    // Example 4:
    const mat4 = [[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1]]
    const k4 = 1
    const expected4 = [0]
    const result4 = kWeakestRows(mat4, k4)
    assertEquals(result4, expected4)

    // Example 5:
    const mat5 = [[1,0],[0,0],[1,0]]
    const k5 = 2
    const expected5 = [1,0]
    const result5 = kWeakestRows(mat5, k5)
    assertEquals(result5, expected5)
})