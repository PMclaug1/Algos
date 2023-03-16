//break up array into halves until you have arrays that are empty or 1 element - can use slice
//once you have smaller sorted arrays, merge those arrays with other sorted arrays until you merge all
//Once array is merged return sorted array

//Big O - O(n log n)
//O(log n) decompositions and O(n) comparisons per decomposition
//O(n) space complexity

function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid))
    return merge(left, right);
}

console.log(mergeSort([1,5,16,3,12,15,4,22]))