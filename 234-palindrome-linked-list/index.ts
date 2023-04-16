export interface ListNode {
    val: number
    next: ListNode | null
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
export const _isPalindrome = function (head: ListNode): boolean {
    let transformed = ''
    let middleIndex = 0
    let firstHalf = ''
    let secondHalf = ''

    // Firstly, let's transform the linked list to a string
    let current = head
    while (true) {
        transformed += current.val
        if (!current.next) break
        current = current.next
    }

    // Get the middle index of the string, and split it into two parts
    // I'm using Math.floor for cases where N % 2 !== 0
    middleIndex = Math.floor(transformed.length / 2)

    firstHalf = transformed.slice(0, middleIndex)
    secondHalf = transformed.slice(middleIndex, transformed.length)
    // transform the second half to be in the same order as the first one
    secondHalf = secondHalf.split('').reverse().join('');

    // for cases where N % 2 !== 0
    // let's add to the firstHalf the last entry of the secondHalf
    // e.g. firstHalf = '1'; secondHalf = '10' --> firstHalf = '10'; secondHalf = '10'
    if (firstHalf.length !== secondHalf.length) {
        firstHalf += secondHalf[secondHalf.length - 1]
    }

    return firstHalf === secondHalf
};

// Not the most performant solution, but memory-wise it's good
// Runtime could be improved