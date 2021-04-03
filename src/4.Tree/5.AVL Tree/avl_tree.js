class Node {
    constructor(value, left = null, right = null){
        this.value = value;
        this.right = right;
        this.left = left;
        this.height = 1;
    }
}

class AVL {
    constructor(){
        this.root = null;
    }

    // dugum yukseklikleri
    height(N){
        if(N === null)
            return 0;
        return N.height;
    }

    // saga dondurme 
    rightRotate(y){
        let x = y.left;
        let T2 = x.right;
        x.right = y;
        y.left = T2;
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
    return x;
    }

    // sola dondurme
    leftRotate(x){
        let y = x.right;
        let T2 = y.left;
        y.left = x;
        x.right = T2;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        return y;
    }

    // denge faktoru : aralarindaki yukseklik farki hesaplama
    getBalanceFactor(N){
        if(N === null)
            return 0;
        return this.height(N.left) - this.height(N.right);
    }

    insertNodeHelper(node, data){
        // konumu bul ve dugumu ekle
        if(node === null)
            return new Node(data);
        if(data < node.value){
            node.left = this.insertNodeHelper(node.left, data);
        }else if(data > node.value){
            node.right = this.insertNodeHelper(node.right, data);
        }else {
            return node;
        }

        // her dugum icin denge faktorunu guncelle
        node.height = ! + Math.max(this.height(node.left) , this.height(node.right));
        
        // yukseklik farki hesaplama
        let balanceFactor = this.getBalanceFactor(node);
        // dengesizlik var
        if(balanceFactor > 1){
            if(data < node.left.value){
                return this.rightRotate(node);
            }else if(data > node.left.value){
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }
        // dengesizlik yok
        if (balanceFactor < -1) {
            if (data > node.right.value) {
              return this.leftRotate(node);
            } else if (data < node.right.value) {
              node.right = this.rightRotate(node.right);
              return this.leftRotate(node);
            }
          }
          
          return node;
    }
    insertNode(data){
        console.log(data);
        root = this.insertNodeHelper(root, data);
    }
}

const avl = new AVL();
avl.insertNode(33);
avl.insertNode(13);
avl.insertNode(53);
avl.insertNode(9);
avl.insertNode(21);

console.log(avl);