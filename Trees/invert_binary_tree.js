class Node {
    constructor(val, left, right) {
        this.val = val ? val : 0
        this.left = left ? left : null
        this.right = right ? right : null
    }
}

const root = new Node(4)

const b1 = new Node(2)
const b2 = new Node(7)

const b1l1 = new Node(1)
const b1l2 = new Node(3)

const b2l1 = new Node(6)
const b2l2 = new Node(9)

root.left = b1
root.right = b2

b1.left = b1l1
b1.right = b1l2

b2.left = b2l1
b2.right = b2l2

const invert_tree = root => {
    if (root === null) return root
    let temp = root.left
    root.left = root.right
    root.right = temp

    invert_tree(root.left)
    invert_tree(root.right)

    return root
}

console.log(invert_tree(root));