const arr = [1, 3, 4, 2]
const t = 6

const two_sum_bruteforce = (arr, t) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] + arr[i] === t) return [i, j]
        }
    }
    return false
}

// console.log(two_sum_bruteforce(arr, t));

const two_sum_hashmap = (arr, t) => {
    const hash = {}
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = i
        console.log(arr[i], i);
    }

    // for (let j = 0; j < arr.length; j++) {
    // if (hash[t - arr[j]]) return [j, hash[t - arr[j]]]
    // if (hash[t - arr[j]]) return ([j])
    // }
    // return false
}

console.log(two_sum_hashmap(arr, t));

const two_sum_hashmap_clever = (arr, t) => {
    const hash = {}
    for (let i = 0; i < arr.length; i++) {
        if (hash[t - arr[i]] != undefined) return [hash[t - arr[i]], i]
        hash[arr[i]] = i
    }
    return false
}

// console.log(two_sum_hashmap_clever(arr, t));