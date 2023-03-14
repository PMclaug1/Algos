// selection sort

// store the first element as the smallest value
// compare this item to the next item until you find a smaller number
// save index of value to swap indexes, if smaller # is found swap
// if the minimum is not the value you initially began with swap the two
// repeat this with the next element until the array is sorted

// Big O - O(n^2)

function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    for (let i = 0; i < arr.length; i++) {
        var min = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) swap(arr, i, min)
        console.log(arr)
    }
    return arr;
}

console.log(selectionSort([1,3,2,5,4,9,6,11]))