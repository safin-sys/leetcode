const head = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
        }
    }
}
const head_copy = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
        }
    }
}

const reverse_linked_list_iterative = (head) => {
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

console.log(reverse_linked_list_iterative(head));

const reverse_linked_list_recursion = (head) => {
    if (!head) return null

    let newHead = head
    if (head.next) {
        newHead = reverse_linked_list_recursion(head.next)
        head.next.next = head
    }
    head.next = null
    return newHead
}

console.log(reverse_linked_list_recursion(head_copy));