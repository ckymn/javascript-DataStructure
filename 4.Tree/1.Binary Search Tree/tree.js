class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = left;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // ekleme - recursive
  insert(data) {
    let current = this.root;
    // Agac bos ise
    if (!this.root) {
      const newNode = new Node(data);
      this.root = newNode;
      return this;
    }
    // Agac dolu ise
    const searchTree = (current) => {
      if (data < current.value) {// sol'a gidecek
        if (current.left === null){// sol bos ise dugum ekleyin
          current.left = new Node(data);
          return this;
        }return searchTree(current.left);// sol bos degilse recursive.
      }
      else if(data > current.value){// sag'a gidecek
        if (current.right === null){// sol bos ise dugum ekleyin
          current.right = new Node(data);
          return this;
        }return searchTree(current.right);// sag bos degilse recursive.
      }
      else 
        return null;
    };
    return searchTree(current);
  }
  // en kucuk node bulma
  findMin(){
    let current = this.root;
    while(current.left !== null)
      current = current.left;
    return current.value;
  }

  // en buyuk node bulma
  findMax(){
    let current = this.root;
    while(current.right !== null)
      current = current.right;
    return current.value;
  }

  // node bulma
  find(data){
    let current = this.root;
    while(current.value !== data){
      if(data < current.value)
        current = current.left;
      current = current.right;
    }
    return current;
  }

  // mevcut olup olmadigi
  isPresent(data){
    let current = this.root;
    while(current){
      if(data === current.value)
        return true;
      if(data < current.data)
        current = current.left;
      current = current.right;
    }
    return false;
  }

  //silme - recursive
  remove(data){
    const removeNode = (node, data) => {
      if(node === null)
        return null;
      // kaldirilacak eleman soldan secilir
      else if(data < node.data){
        node.left = removeNode(node.left , data);
        return node;
      }
      // 
      else if(data === node.data){
        //dugumde cocuk yok
        if(node.left === null && node.right === null)
          return null;
        //dugumde sol cocuk yok
        if(node.left === null)
          return node.right;
        //dugumde sag cocuk yok
        if(node.right === null)
          return node.left;
        //dugumde iki cocuk'ta varsa
        let temp = node.right;
        while(temp.left !== null)
          temp = temp.left;
        node.data = temp.data;
        node.right = removeNode(node.right, temp.data);
        return node;
      }
      // kaldirilacak eleman sagdan secilir
      else{
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }
}

let bst = new BST();

bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);
bst.remove(4);
console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.isPresent(4));
console.log(bst);