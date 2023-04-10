
//implement a stack w/ an array. Can use push/pop to maintain LIFO
//can also use shift/unshift, but this is less efficient
//because you are adding/removing from the beginning(must reindex whole array each time)
//for large sets of data arrays are inefficent. Linked list is preferable
var stack = []
stack.push("create new file")
stack.push("resized file")
stack.push("cloned out blur")
stack.pop()
console.log(stack)
