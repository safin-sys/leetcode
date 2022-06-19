const nums = [1, 2, 3, 5]

const contains_duplicate_bruteforce = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return true
        }
    }
    return false
}

console.log(contains_duplicate_bruteforce(nums));

const contains_duplicate_sort = nums => {
    nums.sort()
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) return true
    }
    return false
}

console.log(contains_duplicate_sort(nums));

const contains_duplicate_hashset = nums => {
    const hashset = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (hashset.has(nums[i])) return true
        hashset.add(nums[i])
    }
    return false
}

console.log(contains_duplicate_hashset(nums));