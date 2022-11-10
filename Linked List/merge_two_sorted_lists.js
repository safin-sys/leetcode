class Node {
    constructor(val, next) {
        this.val = val ? val : 0
        this.next = next ? next : null
    }
}

const aa = new Node(1)
const ab = new Node(2)
const ac = new Node(4)

const ba = new Node(1)
const bb = new Node(3)
const bc = new Node(4)

aa.next = ab
ab.next = ac

ba.next = bb
bb.next = bc

const merge_two_lists = (l1, l2) => {
    let merged_list = new Node()
    let tail = merged_list

    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1
            l1 = l1.next
        } else {
            tail.next = l2
            l2 = l2.next
        }
        tail = tail.next
    }

    if (l1) {
        tail.next = l1
    } else if (l2) {
        tail.next = l2
    }

    return merged_list.next
}

console.log(merge_two_lists(aa, ba));