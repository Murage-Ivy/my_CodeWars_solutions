// brute force solution


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

function containDuplicates(nums) {
    let set = new Set(nums)
    return set.size !== nums.length
}


console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containDuplicates([1, 2, 3, 4, 4]))