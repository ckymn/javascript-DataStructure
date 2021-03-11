class Node{
    constructor(value, prev = null ,next = null){
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        let node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }
        else{
            this.tail.next = node;
            node.prev = 
            this.tail = node;
        }
        this.length++;
        return node;
    }
}