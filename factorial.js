// iterative

function factorial(num){
    result = 1;
    for (var i = num; i > 1; i--){
        result *= i;
    }
    return result;
}

// recursive

function factorialRecursive(num){
    if(num === 1) return 1;
    return num * factorial(num-1)
}

console.log(factorial(4))
console.log(factorialRecursive(4))