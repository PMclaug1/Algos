//adds noSwaps - breaks out of loop if no swap was made. (Array is fully sorted, does not need to check further)

//Time complexity - N^2, if data is sorted or nearly sorted best case O(n)

function bubbleSort(arr) {
    var noSwaps;
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            // console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);

            }
        }
        if(noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([1,2,3,4,8,5,6,7]))