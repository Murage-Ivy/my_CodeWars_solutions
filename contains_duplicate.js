// brute force solution


// The time complexity is O(n2)
// The space complexity is O(1)
// where n represents the length of the input
// n * n  + 1
// O(n2) + 1
// O(n2)
function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}




// Optimal soultion 

// the time complexity is O(n) which means it is linear
// the time complexity of a size is O(1) time is constant
// O(n)
function containDuplicates(nums) {
    let set = new Set(nums)
    return set.size !== nums.length
}


console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containDuplicates([1, 2, 3, 4, 4]))