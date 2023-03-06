// Write a function named sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. return an array that includes both values that sum to zero or undefined if a pair does not exist.

// naive solution - time complexity - O(N^2) - Space complexity - O(1)
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                console.log([arr[i], arr[j]])
                return[arr[i], arr[j]];
            }
        }
    }
}

// refactored time complexity - O(n), space complexity - O(1)
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left<right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            console.log([arr[left], arr[right]])
            return [arr[left], arr[right]];
        }
        else if(sum > 0){
            right--;
        }
        else {
            left++;
        }
    }
}

sumZero([-3,-2,-1,0,1,2,3])
sumZero ([1,4,-3,2])
sumZero([-4,-3,-2,-1,0,1,2,5,6])