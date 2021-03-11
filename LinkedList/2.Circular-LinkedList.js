class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.length) {
      let node = this.head;
      while (node != null) {
        node = node.next;
      }
      return node; //en son degeri donecek
    }
    return undefined;
  }

  push(value) {
    const node = new Node(value);
    let tail;

    if (this.head === null) 
      this.head = node;
    else {
      tail = this.getElementAt(this.length - 1); //son elemani
      tail.next = node;
    }
    node.next = this.head; //circular basa baglaniyor.
    this.length++;
  }

  insert(value,index){
    if(index >= 0 && index <= this.length){
      const node = new Node(value);
      let current = this.head;

      //basa eleman ekleme
      if(index === 0){
        if(this.head === null){// hic eleman yoksa
            this.head = node;
            node.next = this.head;// kendisini gostericek(node -> node)
        }
        else{ //bir eleman varsa
          node.next = current;
          current = this.getElementAt(this.length);
          this.head = node;
          tail.next = this.head;
        }
      }
    }
  }
}

let list = new LinkedList();
list.push(2);
list.push(3);
list.push(100);

console.log(list);
console.log("ali...")