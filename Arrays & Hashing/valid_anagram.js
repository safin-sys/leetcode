const txt = "anagram"
const anagram = "nagaram"

const valid_anagram_sort = (txt, anagram) => {
    const txtArr = txt.split("").sort().join()
    const anagramArr = anagram.split("").sort().join()
    return txtArr === anagramArr
}

console.log(valid_anagram_sort(txt, anagram));

const valid_anagram_hashmap = (txt, anagram) => {
    if (txt.length != anagram.length) return false
    const txtHash = {}
    const anagramHash = {}

    for (let i = 0; i < txt.length; i++) {
        txtHash[txt[i]] = 1 + (txtHash[txt[i]] ? txtHash[txt[i]] : 0)
        anagramHash[anagram[i]] = 1 + (anagramHash[anagram[i]] ? anagramHash[anagram[i]] : 0)
    }

    for (T in txtHash) {
        if (txtHash[T] !== anagramHash[T]) return false
    }
    return true
}

console.log(valid_anagram_hashmap(txt, anagram));