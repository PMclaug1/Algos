// Search - given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

// naive - O(n) - linear search
// function search(arr, num){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === num){
//             console.log(i);
//             return i;
//         }
//     }
//     return -1;
// }

// binary search - Big O - Log(n)

function search(arr, num){
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (arr[middle] < num){
            min = middle + 1;
        }
        else if (arr[middle] > num){
            max = middle - 1;
        }
        else{
            console.log(middle)
            return middle
        }
    }
    return -1;
}

search([1,2,3,4,5,6],4) //3
search([1,2,3,4,5,6],6) //5