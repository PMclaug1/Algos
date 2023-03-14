//Created a function named bubble sort that takes an array.
//start looping from a variable named i from end to beginning
//start an inner loop with variable j from beginning
//if arr[j] is > than arr[j+1] swap those values
//return sorted array

// swap function
//ES5
// function swap(arr, idx1, idx2){
//     var temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx1] = temp;
// }

//ES2015
// const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// }

function bubbleSort(arr) {
    for (var i = arr.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

//refactored ES2015

function bubbleSort1(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

console.log(bubbleSort([12, 2, 37, 14]))
console.log(bubbleSort([12, 2, 37, 14]))
