
function addUpTo (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
    sum += i;
    }
    return sum;
}

console.log(addUpTo(6))

function addUpToV2 (n) {
    return n * (n + 1) / 2;
}

console.log(addUpToV2 (6))
