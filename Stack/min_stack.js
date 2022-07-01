class MinStack {
    constructor(stack) {
        this.stack = stack = []
    }
    push(val) {
        this.stack.push(val)
    }
    pop() {
        this.stack.pop()
    }
    top() {
        return this.stack[this.stack.length - 1]
    }
    getMin() {
        let temp = this.stack[0]
        this.stack.forEach(item => {
            item < temp ? temp = item : temp = temp
        })
        return temp
    }
}