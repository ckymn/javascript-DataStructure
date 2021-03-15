class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  _push(value) {
    this.items[this.count] = value;
    console.log(`${value} added to ${this.count}`);
    this.count++;

    return this.count - 1;
  }

  _pop() {
    if(this.count === 0) return undefined;
    let deleteItem = this.items[this.count - 1 ];
    console.log(`${deleteItem} removed`);  
    this.count--;
  
    return deleteItem;
  }

  _peeks(){
      if(this.length === 0) throw new Error("Stack is Empty!");
      return this.items[this.length - 1];
  }

  _isEmpty(){
      return this.count === 0;
  }

  _clear(){
    this.count = 0;
  }

  _size(){
      return this.count;
  }
}

const list = new Stack();
list._push(100);
list._push(200);
list._push(300);
console.log(list);

list._pop();
console.log(list);