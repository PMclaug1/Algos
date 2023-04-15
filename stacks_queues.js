
//implement a stack w/ an array. Can use push/pop to maintain LIFO
//can also use shift/unshift, but this is less efficient
//because you are adding/removing from the beginning(must reindex whole array each time)
//for large sets of data arrays are inefficent. Linked list is preferable
// var stack = []
// stack.push("create new file")
// stack.push("resized file")
// stack.push("cloned out blur")
// stack.pop()
// console.log(stack)


//Big O - Stacks
//Insertion and removal - O(1)
//Searching and access O(N) - if this is important, 
//another data structure would probably be better

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

var stack = new Stack()
stack.push(23)
stack.push(37)
stack.push(45)
stack.pop()

console.log(stack)

//Queues
//Add and remove data. FIFO
//Big O - Insertion and removal O(1)
//Searching/Access - O(N)

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.first){
            return null;
        }
        else {
            var temp = this.first;
            if(this.first === this.last){
                this.last = null;
            }
            else {
                this.first = this.first.next;
                this.size--;
                return temp.value;
            }
        }
    }
}


var queue = new Queue;
queue.enqueue(5)
queue.enqueue(10)
queue.enqueue(15)
queue.dequeue()
console.log(queue)