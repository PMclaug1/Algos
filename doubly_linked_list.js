class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var popopedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail= poppedNode.previous
            this.tail.next = null;
        }
        this.length--;
        return poppedNode
    }
}

list = new DoublyLinkedList()
list.push(5)

console.log(list)