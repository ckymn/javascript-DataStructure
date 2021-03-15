class Stack extends Array {
  constructor(...values) {
    super(...values);
  }

  _push(value) {
    // if (this.length === 0) throw new Error("Nothing to push!")
    this.push(value);
  }

  _pop() {
    // if (this.length === 0) throw new Error("Nothing to pop!");
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
list._push(300);
console.log(list);

list._pop();
console.log(list);
