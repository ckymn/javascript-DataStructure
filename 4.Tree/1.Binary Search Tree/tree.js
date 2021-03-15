class Node {
  constructor(value) {
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.tree = null;
    this.sag = sag;
    this.sol = sol;
  }

  push(element) {
    // Agac bos ise
    if (this.tree === null) {
      const node = new Node();
      node.sol = null;
      node.sag = null;
      node.value = element;
      return node;
    }
    // Agac dolu ise
    let iter = node;
    if (iter.value < element) {// sag'a gidecek
      node.sag = this.push(node.sag); // recursive
    } else { // sol'a gidecek
      node.sol = this.push(node.sol); // recursive
    }
  }
  
  // Infix : left -> root -> right || right -> root -> left = kucukten buyuge dogru siralama islemi yapar
  // Prefix : root -> left -> right || root -> right -> left
  // Postfix: left -> right -> root || right -> root -> left
  print(){ 
    if(this.tree === null) return;
    
    print()
  }
}
