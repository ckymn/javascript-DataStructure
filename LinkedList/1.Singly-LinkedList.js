class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Listenin sonuna eleman ekleme islemi "push"
  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  //Listenin sonundan eleman silme islemi "pop", burda'ki dikkat edilecek yer dizi olmadigi icin son elemana kadar tum node'larin uzerinden gecmesidir. Ve diger onemli nokta son  degerimiz "tail" oldugu icin tail degerini referans alabiliriz
  pop() {
    const deletedTail = this.tail;
    //eger listemiz bos ise null donderiyoruz.
    if (this.length === 0) return null;
    //eger listemizde tek deger varsa head ve tail'de o deger olacagi icin ikisindide null yapmaliyiz
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedTail;
    }
    //eger listemiz birden fazla node varsa.son dugum'den onceki icin "next" baglantisini silin
    let currentNode = this.head;
    //en son node'u bulmak icin next'i null olmayanlarin tumunu gezmek zorundayiz , yukarda'da dedigimiz gibi LinkedList'ler array'ler gibi degil bulmak ,silmek icin hepsini dolasman gerekiyor.
    while (currentNode.next != null) {
      //daha sonra son elemana ulasincaya kadar son next'leri currentNode'a atadi
      currentNode = currentNode.next;
    }
    this.tail = currentNode;
    this.length--;
    return deletedTail;
  }

  //Listenin basina bir oge ekleme islemidir.
  unshift(value) {
    //yeni bir degisken eklenecegi zaman nesnemizi olsuturuyoruz
    const node = new Node(value);
    //eger basta listemiz bos ise olusturulan nesnemizi head, ve tail'e atiyoruz
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    }
    //eger basta bir degerimiz varsa
    else {
      //this.head yani baslangic degiskenimiz'i yeni olusan node'un next' degerine atiyoruz
      node.next = this.head;
      //daha sonra yeni bir head olusturup onuda node'u referans gosterecek sekilde tanimliyoruz . Eger bu sistem aklinizda tam oturmadiysa link'ten biraz kurcalama yaptiktan sonra halledebilirsiniz. :)
      this.head = node;
    }
    this.length++;
    return this;
  }

  //Listenin basindan bir deger silemek istersek
  shift() {
    //eger liste bos ise return null donecek
    if (this.length === 0) return null;
    //silinecek degeri belirliyorum
    const currentHead = this.head;
    //daha sonra baglantiyi kesince daha sonraki elemanlarin uzayda kaybolamamasi icin(:D) onlari silecegimiz bas elemanin bir sonraki degerini(this.head.next)'i head olarak ayarlamamiz gerekiyor
    this.head = this.head.next;
    this.length--;
    return currentHead;
  }

  //belli bir index'teki degeri bulup, onu geriye dondermek . Bu is icin basta bahsettigimiz gibi tum Listeyi donemeleri gerekiyor.
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current.value;
  }
  //Listede verilen index'i get ile bulur. daha sonra value degerini ona atar.
  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  //Listeye Deger Ekleme
  insert(index, value) {
    if (index < 0 || index > this.lenght) return undefined;
    //eger verilen index degeri son elemana denk geliyorsa push metodu kullanilmali
    if (index === this.length) {
      this.push(value);
      return true;
    }
    //eger verilen index degeri ilk deger ise veya index degeri 0 ise unshift metodu kullanilmali
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    const node = new Node(value);
    //Listeye eklenecek degerden once gelen degsiken tanimi (!next ifadesini kullanacagimizdan get cagirdik)
    let prev_node = this.get(index - 1);
    let aft_node = prev_node.next;
    node.next = aft_node;
    prev_node.next = node;

    this.length++;
    return true;
  }

  //Listeden belli bir degeri silme islemi
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removed = this.head;
    let previous = this.get(index - 1);
    removed = previous.next;
    previous.next = removed.next;

    this.length--;
    return removed.value;
  }

  //Listeyi ters cevirme islemi
  reverse() {
    //aslinda bizim liste duzeni soyle olacak eski (head===null) , yeni (head===tail);
    let prev = null;
    let next = null;

    while (this.head != null) {
      next = this.head.next; //yeni olusturacagimiz head'i kaybetmemek icin this.head.next baglantisini next'e atiyoruz
      this.head = prev; //sonra (head===null) yapiyoruz.

      prev = this.head;
      this.head = next;
    }
    return prev;
  }
  //Listedeki son degei bul
  getLast() {
    if (!this.head) {
      return null;
    }
    let lastNode = this.head;
    while (lastNode) {
      if (!lastNode.next) {
        return lastNode;
      }
      lastNode = lastNode.next;
    }
  }

  //Listedeki ilk degeri bul
  getFirst() {
    return this.head;
  }

  //Listeyi temizleme
  clear() {
    this.head = null;
  }

  //Liste boyutu
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  //Listenin value degerlerini gosterir
  toString(){
    if(!this.length) return "";
    let str = `${this.head.value}`;
    let current = this.head;

    for(let i = 0; i < this.length -1; i++){
      current = current.next;
      str += `->${current.value}`
    }
    return str;
  }

  //Listenin value ve next degerlerini gosterir.
  print(){
    let arr = [];
    if(this.length){
      let current = this.head;
      
      for(let i = 0; i < this.length; i++){
        arr.push(current);
        current = current.next;
      }
    }
    return arr;
  }
}

let list = new LinkedList();
list.push("muhammet");
list.push(12);
list.push(14);
list.push("A");

list.remove(1);

console.log(list.print());