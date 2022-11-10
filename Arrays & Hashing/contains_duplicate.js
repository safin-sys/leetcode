const nums = [1, 2, 3, 1];

/**
 * DUH!
 *
 * time = O(n^2)
 * space = O(1)
 */
const contains_duplicate_bruteforce = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            return nums[i] === nums[j];
        }
    }
    return false;
};

/**
 * [1, 2, 3, 1]
 * sorted = [1, 1, 2, 3]
 * now only comparing the adjecent values is enough and we iterate through the array once
 *
 * time = O(n log n)
 * space = O(1)
 */
const contains_duplicate_sort = (nums) => {
    const sorted = nums.sort();
    for (let i = 0; i < nums.length; i++) {
        if (sorted[i] === sorted[i + 1]) {
            return true;
        }
    }

    return false;
};

/**
 * Hashset is just a fancy name for regular Set
*/

const contains_duplicate_hashset = (nums) => {
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
    }

    return false;
};

console.log(contains_duplicate_hashset(nums));
