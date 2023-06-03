
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


export function middleNode(head: ListNode | null): ListNode | null {
    const temp = []
    
    let node = head
    if (!node) return null
    while (node.val) {
        temp.push(node)
        if (!node.next) {
            break
        }
        node = node.next
    }
    
    const middleNodeIndex = Math.ceil(temp.length / 2 - temp.length % 2)
    return temp[middleNodeIndex]
}