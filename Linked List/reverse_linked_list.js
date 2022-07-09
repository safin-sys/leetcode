class Node {
    constructor(val, next) {
        this.val = val ? val : 0
        this.next = next ? next : null
    }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
const e = new Node(5)
a.next = b
b.next = c
c.next = d
d.next = e

const reverse_iterate = head => {
    let prev = null
    let curr = head

    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}

const reverse_recursion = head => {
    if (head === null || head.next === null) return head
    let reversedList = reverse_recursion(head.next)
    head.next.next = head
    head.next = null
    return reversedList
}