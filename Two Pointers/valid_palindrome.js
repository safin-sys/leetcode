const s = "race a car"

//clean the input
//reverse the clean input

const valid_palindrome_cheating = (s) => {
    const clean = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    return clean.split("").reverse().join("") === clean
}

// console.log(valid_palindrome_cheating(s));

const valid_palindrome_pointers = s => {
    const clean = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    for (let i = 0; i < clean.length; i++) {
        if (clean[i] != clean[clean.length - i - 1]) return false
        // console.log(clean[i], clean[clean.length - i - 1])
    }
    return true
}

console.log(valid_palindrome_pointers(s));