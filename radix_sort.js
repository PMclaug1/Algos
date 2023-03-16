//radix sort

//define a function that accepts a list of nums
//figure out how many digits the largest # has
//loop from k = 0 up to the largest # of digits
//for each iteration: create buckets for each digit (0-9)
//place each # in the corresponding bucket based on k-th digit
//replace existing array with values in buckets, starting with 0 and going up to 9
//return array

//Big O - O(nk) - Space Complexity - O(n + k)

//helper functions

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    console.log(maxDigitCount)
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);            
        }
        console.log(digitBuckets)
        nums = [].concat(...digitBuckets);
        console.log(nums)
    }
    return nums;
}

console.log(radixSort([22, 1, 445, 2394, 99978, 33, 576, 698, 327]))