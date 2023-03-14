// insertion sort

// Pick 2nd element in array
// compare 2nd element w/ the one before it and swap if needed
// continue to the next element, and if it is in the incorrect order iterate through sorted portion and insert in correct place
// repeat until sorted and return array

//Big O - O(n^2) 

function insertionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
        console.log(arr);
    }
    return arr;
}

console.log(insertionSort([3,1,15,76,21]))