// Binary Search Tree Big O
// Average and Best - Insertion - O(log n) Searching - O(log n)
// Worst case - 1 sided & 1 branch - O(n) - This would be a bad use case for BST

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode
            return this;
        }
        else {
            var current = this.root;
            while(true){
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }
                    else {
                        current = current.left;
                    }
                }
                else if(value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }
                    else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            }
            else if(value > current.value){
                current = current.right;
            }
            else{
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log(tree.find(5));

console.log(tree)