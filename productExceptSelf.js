function productExceptSelf(nums) {
    let output = [];
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] = product;
        product *= nums[i];
    }
    product = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= product;
        product *= nums[i];
    }
    return output;

    // let output = [];
    // poppedNum = 0;

    // nums.forEach(num => {
    //     poppedNum = nums.shift();

    //     output.push(nums.reduce((a, b) => a * b));
    //     nums.push(poppedNum)
    // });

    // return output;
}

console.log(productExceptSelf([-1, 1, 0, -3, 3]));