class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.right = right;
    this.left = left;
    this.height = 1;
  }
}

class AVL {
  constructor() {
    this.root = null;
  }

  // dugum yukseklikleri
  height(N) {
    if (N === null) return 0;
    return N.height; // hegiht : sol.h - sag.h
  }

  // saga dondurme
  rightRotate(y) {
    let x = y.left;
    let T2 = x.right;
    x.right = y;
    y.left = T2;
    // yukseklikleri guncelleme
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
    // new root
    return x;
  }

  // sola dondurme
  leftRotate(x) {
    let y = x.right;
    let T2 = y.left;
    y.left = x;
    x.right = T2;
    // yukseklikleri guncelleme
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
    //new root
    return y;
  }

  // denge faktoru : aralarindaki yukseklik farki hesaplama
  getBalanceFactor(N) {
    if (N === null) return 0;
    return this.height(N.left) - this.height(N.right);
  }

  insertNodeHelper(node, data) {
    // hicbir dugum yoksa
    if (node === null) return new Node(data);
    if (data < node.value) {
      node.left = this.insertNodeHelper(node.left, data);
    } else if (data > node.value) {
      node.right = this.insertNodeHelper(node.right, data);
    } else {
      return node;
    }

    // her dugum icin denge faktorunu guncelle
    node.height = !+Math.max(this.height(node.left), this.height(node.right));

    // yukseklik farki hesaplama
    let balanceFactor = this.getBalanceFactor(node);

    // sola dengesizlik var
    if (balanceFactor > 1) {
      if (data < node.left.value) {
        // sol-sol durumu : sag'a dondurme (right rotation)
        return this.rightRotate(node);
      } else if (data > node.left.value) {
        // sol-sag durumu : 1-> sol'a dondurme
        node.left = this.leftRotate(node.left);
        // 2 -> sag'a dondurme
        return this.rightRotate(node);
      }
    }
    // saga dengesizlik var
    if (balanceFactor < -1) {
      if (data > node.right.value) {
        // sag-sag durumu : sol'a dondurme (left rotation)
        return this.leftRotate(node);
      } else if (data < node.right.value) {
        // sag-sol durumu : 1-> sag'a dondurme
        node.right = this.rightRotate(node.right);
        // 2-> sol'a dondurme
        return this.leftRotate(node);
      }
    }

    return node;
  }
  // node ekleme
  insertNode(data) {
    console.log(data);
    this.root = this.insertNodeHelper(this.root, data);
  }
  // en kucuk node degeri 
  nodeWithMinimumValue(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  deleteNodeHelper(node, data) {
    // find the node to be deleted and remove it
    if (this.root == null) {
      return this.root;
    }
    if (data < node.value) {
      node.left = deleteNodeHelper(node.left, data);
    } else if (data > node.value) {
      node.right = deleteNodeHelper(node.right, data);
    } else {
      if (node.left === null || node.right === null) {
        let temp = null;
        if (temp == node.left) {
          temp = node.right;
        } else {
          temp = node.left;
        }

        if (temp == null) {
          temp = node;
          node = null;
        } else {
          node = temp;
        }
      } else {
        let temp = this.nodeWithMinimumValue(node.right);
        node.value = temp.data;
        node.right = deleteNodeHelper(node.right, temp.data);
      }
    }
    if (node == null) {
      return node;
    }

    // yukseklikleri guncelleme
    node.height = Math.max(this.height(node.left), this.height(node.right));

    let balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor > 1) {
      if (this.getBalanceFactor(node.left) >= 0) {
        return this.rightRotate(node);
      } else {
        node.left = this.leftRotate(node.left);
        return this.rightRotate(node);
      }
    }
    if (balanceFactor < -1) {
      if (this.getBalanceFactor(node.right) <= 0) {
        return this.leftRotate(node);
      } else {
        node.right = this.rightRotate(node.right);
        return this.leftRotate(node);
      }
    }
    return node;
  }
  // node silme
  deleteNode(data) {
    console.log(data);
    this.root = this.deleteNodeHelper(root, data);
  }
  // preOrder ile ekrana bastirma node -> left -> right || node -> right -> left
  preOrder(){
      this.preOrderHelper(this.root)
  }
  preOrderHelper(node) {
    if (node) {
      console.log(node.value);
      this.preOrderHelper(node.left);
      this.preOrderHelper(node.right);
    }
  }
}

const avl = new AVL();
avl.insertNode(33);
avl.insertNode(13);
avl.insertNode(53);
avl.insertNode(9);
avl.insertNode(21);
avl.insertNode(61);
avl.insertNode(8);
avl.insertNode(11);
avl.preOrder();
console.log(avl);