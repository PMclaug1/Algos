class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val)
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    traverse(){
        var current = this.head;
        while(current){
            current = current.next;
        }
    }
    pop(){
        if(!this.head){
            return undefined;
        }
        var current = this.head;
        var newTail = current;
        //stops when there is no next
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    //removes head
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    //adds to beginning of list
    unshift(val){
        var newNode = new Node(val)
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    //return value by list position
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current
    }
    //Use get method to find node. Update value and return true. (False if not present)
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    //inserts value at given index
    insert(index, val){
        if(index < 0 || index >= this.length) return false;
        if(index === this.length){
            this.push(val)
            return true;
        }
        if(index === 0){
            this.unshift(val)
            return true;
        }
        var newNode = new Node(val);
        var previous = this.get(index - 1);
        var temp = previous.next;
        previous.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
}

var list = new SinglyLinkedList();
list.push("Hello")
list.push("Goodbye")
list.push("!")
list.push("Next")
list.pop()
list.shift()
list.unshift("Test")
console.log(list.get(2))
list.set(2, "Update")
list.insert(1, "Insert")
list.insert(2, "Insert Again")

console.log(list)