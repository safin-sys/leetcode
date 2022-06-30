const s = "(){}[]"

const valid_parentheses = (s) => {
    const e = [")", "}", "]"]
    if (e.includes(s[0])) return false

    const stack = []
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if (!e.includes(element)) {
            stack.push(s[i])
        } else {
            if (
                s[i] === ")" && stack[stack.length - 1] === "(" ||
                s[i] === "}" && stack[stack.length - 1] === "{" ||
                s[i] === "]" && stack[stack.length - 1] === "["
            ) {
                stack.pop(stack.length - 1)
            } else return false
        }
    }

    return !stack.length ? true : false
}

console.log(valid_parentheses(s));