class Stack extends Array {
  constructor(...values) {
    super(...values);
  }

  _push(value) {
    this.push(value);
  }

  _pop() {
    if (this.length === 0) throw new Error("Nothing to pop!");
    this.pop();
  }

  _peeks(){
      if(this.length === 0) throw new Error("Stack is Empty!");
      return this[this.length - 1];
  }

  _isEmpty(){
      return this.length === 0;
  }

  _clear(){
    this.length = 0;
  }

  _size(){
      return this.length;
  }
}

const list = new Stack();
list._push(100);
list._push(200);

console.log(list);
console.log(list._peeks());
console.log(list._size());
console.log(list._isEmpty());
