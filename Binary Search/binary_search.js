const nums = [-1, 0, 3, 5, 9, 12]
const target = 9

const search_noob = (nums, target) => {
    return nums.indexOf(target)
}

// console.log(search_noob(nums, target));

const search = (nums, target) => {
    let l = 0
    let r = nums.length - 1

    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        if (nums[m] < target) {
            l = m + 1
        } else if (nums[m] > target) {
            r = m - 1
        } else {
            return m
        }
    }

    return -1
}

console.log(search(nums, target));