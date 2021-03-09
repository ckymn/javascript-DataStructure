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
        let node = new Node();
        if(!this.head){
            this.head = node;
            this.tail = node;
        }
        else{
            let iter = this.tail;
            this.tail = node;
            this.tail.next = iter;
            node.prev = iter;
        }
        this.length++;
        return node;
    }
}