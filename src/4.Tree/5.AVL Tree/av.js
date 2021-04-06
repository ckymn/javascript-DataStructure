class Node {
    constructor(value, left=null, right=null){
        this.value = value;
        this.right = right;
        this.left  = left;
        this.height =  1;
    }
}

class AVL {
    constructor(){
        this.root = null;
    }
    
    // yukseklik donderme 
    height(N){
        if(N === null) return 0;
        return N.height;
    }

    // saga donderme : sol -> sol dengesizligini cozer
    singleRightRotate(N){
        let ll = N.left; // N'nin solu ll oldu
        let T2 = ll.right;// N'nin soluna' ll'nin sagini ekle 
        ll.right = N; // N artik ll'nin sag dugumu oldu
        N.left = T2
        N.height = Math.max(this.height(N.left) - this.height(N.right))+1;
        ll.height = Math.max(this.height(ll.left) - this.height(ll.right))+1;
        return ll;
    }
    // sola sonra saga donderme : sol -> sag dengesizligini cozer
    doubleRotateRight(N){
        N.left = this.singleLeftRotate(N.left);// agacin "sagini" sola donerme yapar
        return this.singleRightRotate(N); // "agaci" saga donderme yapar
    }

    // sola donderme : sag -> sag dengesizligini cozer
    singleLeftRotate(N){
        let rr = N.right;// N'nin sagi rr 
        let T2 = rr.left;// N'nin sagin'a rr'nin solunu ekle
        rr.left = N; // N artik rr'nin sol durumu oldu
        N.right = T2;
        N.height = Math.max(this.height(N.left) - this.height(N.right))+1;
        rr.height = Math.max(this.height(rr.left) - this.height(rr.right))+1;        
    }
    // saga sonra sola donderme : sag -> sol dengesizligini cozer
    dobuleRotateLeft(N){
        N.right = this.singleRightRotate(N.right);// agacin "solunu" saga donderme yapar
        return this.singleLeftRotate(N); // agaci sola donderir.
    }

    // ekleme
    insert(current,data){
        if(current === null){
            return (new Node(data));
        }
        if(data < current.value){
            current.left = this.insert(current.left);
            if(this.height(current.left) - this.height(current.right) === 2){
                if(data < current.left.value)// sol -> sol dengesizligi
                    current = singleRotateRight(current);// saga tek donderme
                current = doubleRotateRight(current);// once sola sonra saga donderme(cift sag)
            }
        }
        else if(data > current.value){
            current.right = this.insert(current.right);
            if(this.height(current.left) - this.height(current.right) === -2){
                if(data > current.right.value)// sag -> sag dengesizlig
                    current = singleLeftRotate(current);// saga tek donderme
                current = dobuleRotateLeft(current);//once saga sonra sola donderme(cift sol)
            }
        }
        // agacin yukseklik durumu : hangisi daha fazla ise ordaki degeri 1 arrtidik
        current.height = Math.max(this.height(current.left) , this.height(current.right)) +1
    }
    // node ekle
    insertNode(data){
        this.root =  this.insert(this.root, data);
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
console.log(avl);