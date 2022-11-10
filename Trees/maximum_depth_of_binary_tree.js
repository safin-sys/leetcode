class Node {
    constructor(val, left, right) {
        this.val = val ? val : 0
        this.left = left ? left : null
        this.right = right ? right : null
    }
}

const root = new Node(3)

const b1 = new Node(9)
const b2 = new Node(20)

const b2l1 = new Node(15)
const b2l2 = new Node(7)

root.left = b1
root.right = b2

b2.left = b2l1
b2.right = b2l2

const max_depth_dfs = root => {
    if (root === null) return root
    return 1 + Math.max(max_depth_dfs(root.left), max_depth_dfs(root.right))
}

// console.log(max_depth_dfs(root));

const max_depth_bfs = root => {
    const q = [[root]]


    return q
}

console.log(max_depth_bfs(root));