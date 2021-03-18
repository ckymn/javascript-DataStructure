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
    const newNode = new Node(data);
    // Agac bos ise
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    const addSide = (str) => {
      if(!current[str]){
        current[str] = newNode;
        return this;
      }
      current = current[str];
    }

    while(true){
      if(data === current.value) return this;
      if(data < current.value) addSide("left"); 
      if(data > current.value) addSide("right");
    }
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

  //okuma
  /**
   * 1.Infix(inOrder) : Left->Node->Right || Right->Node->Left
   * 2.Prefix(preOrder): Node->Left-Right || Node->Right->Left
   * 3.Postfix(postOrder): Left->Right->Node || Right->Left->Node
   */
  inOrder(){
    let arr = [];
    let current = this.root;
    
    let traverse = (node) =>{
      if(node.left) traverse(node.left);
      arr.push(node.value);
      if(node.right) traverse(node.right);
    }

    traverse(current);
    return arr;
  }

  postOrder(){
    let arr =  [];
    let current = this.root;

    let traverse = (node) =>{
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      arr.push(node.value);
    }

    traverse(current);
    return arr;
  }

  preOrder(){
    let arr = [];
    let current = this.root;

    let traverse = (node) =>{
      arr.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }

    traverse(current);
    return arr;
  }
}

let bst = new BST();

bst.insert(4);
bst.insert(2);
console.log(bst.postOrder());
console.log(bst.isPresent(2))