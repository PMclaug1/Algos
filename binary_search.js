// write a function named binarySerach, accepts a sorted array and a value
// create a left pointer at the start and a right pointer at the end of the array
// While the left pointer comes  before the right pointer
//create a pointer in the middle - if you find the value you want return the index
//if the value is too small move the left pointer up
//if the value is too large move the right pointer down
//if the value does not exist return -1


function binarySearch(arr, val) {
    var left = 0;
    var right = arr.length - 1;
    var middle = Math.floor((left + right) / 2);
    while (arr[middle] !== val && left <= right) {
        if (val < arr[middle]) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
        middle = Math.floor((left + right) / 2);
    }
    if (arr[middle] === val) {
        return middle;
    }
    return -1;
}

//refactored

// function binarySearch(arr, val) {
//     var left = 0;
//     var right = arr.length - 1;
//     var middle = Math.floor((left + right) / 2);
//     while(arr[middle] !== val && left <= right) {
//         if(val < arr[middle]) right = middle - 1;
//         else left = middle + 1;
//         middle = Math.floor((left + right) / 2);
//     }
//     return arr[middle] === val ? middle : -1;
// }

console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)) // 2
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)) // 16
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) // -1