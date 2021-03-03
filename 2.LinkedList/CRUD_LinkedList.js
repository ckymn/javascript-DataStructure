class Node{
	constructor(value,index){
  	this.value = value;
    this.next = null;
  }
}

//head: ilk node degerini gosterir suanda null olarak ayarlanmistir.
//tail: son node degerini gosterir suanda null olarak ayarlanmistir.
//lenght: listenin uzunlugunu gosterir baslangic 0'a ayarlanmistir.

class LinkedList {
	constructor(){
  	this.head = null;
    this.tail = null;
    this.length = 0;
  }

	//Listenin sonuna eleman ekleme islemi "push"
  push(value){
  	//node nesnesini olsturduk
    const node = new Node(value);
    //eger head kismina deger atanmamis ise deger atamasi yapiliyor
    if(!this.head){
    	this.head = node;
      this.tail = node;
    }
    //eger baslangicta head varsa tail'in referansini bir sonraki node'u gostericek
    //daha sonra olusan yeni node'un next yeni olusacak node'u gosterir ve dongu boyle devam eder
   	else {
    	this.tail = node;
      this.tail.next = node;
    }
    this.length++;
  }

	//Listenin sonundan eleman silme islemi "pop", burda'ki dikkat edilecek yer dizi olmadigi icin son elemana kadar tum node'larin uzerinden gecmesidir. Ve diger onemli nokta son  degerimiz "tail" oldugu icin tail degerini referans alabiliriz
  pop(){
  	const deletedTail = this.tail;
  	//eger listemiz bos ise null donderiyoruz.
  	if(this.length === 0) return null;
    //eger listemizde tek deger varsa head ve tail'de o deger olacagi icin ikisindide null yapmaliyiz
    if(this.head === this.tail){
    	this.head = null;
      this.tail = null;
      
      return deletedTail;
    }
    //eger listemiz birden fazla node varsa.son dugum'den onceki icin "next" baglantisini silin
    let currentNode = this.head;
    //en son node'u bulmak icin next'i null olmayanlarin tumunu gezmek zorundayiz , yukarda'da dedigimiz gibi LinkedList'ler array'ler gibi degil bulmak ,silmek icin hepsini dolasman gerekiyor.
    while(currentNode.next != null){
    	//daha sonra son elemana ulasincaya kadar son next'leri currentNode'a atadi
      currentNode = currentNode.next;
    }
    this.tail = currentNode;
    this.length--;
    return deletedTail;
  }
  
  //Listenin basina bir oge ekleme islemidir.
  unshift(value){
  //yeni bir degisken eklenecegi zaman nesnemizi olsuturuyoruz
  	const node = new Node(value);
    //eger basta listemiz bos ise olusturulan nesnemizi head, ve tail'e atiyoruz
    if(!this.tail){
    	this.head = node;
      this.tail = node
    }
    //eger basta bir degerimiz varsa
    else{
    	//this.head yani baslangic degiskenimiz'i yeni olusan node'un next' degerine atiyoruz
    	node.next = this.head;
      //daha sonra yeni bir head olusturup onuda node'u referans gosterecek sekilde tanimliyoruz . Eger bu sistem aklinizda tam oturmadiysa link'ten biraz kurcalama yaptiktan sonra halledebilirsiniz. :)
      this.head = node;
    }
    this.length++;
    return this;
  }

	//Listenin basindan bir deger silemek istersek
  shift(){
  	//eger liste bos ise return null donecek
  	if(this.length === 0) return null;
    //silinecek degeri belirliyorum
    const currentHead = this.head;
    //daha sonra baglantiyi kesince daha sonraki elemanlarin uzayda kaybolamamasi icin(:D) onlari silecegimiz bas elemanin bir sonraki degerini(this.head.next)'i head olarak ayarlamamiz gerekiyor
    this.head = this.head.next;
    this.length--;
    return currentHead;
  }

	//belli bir index'teki degeri bulup, onu geriye dondermek . Bu is icin basta bahsettigimiz gibi tum Listeyi donemeleri gerekiyor.
  get(index){
  	if(index >= this.length || index < 0){}
  }
}



let list = new LinkedList();
list.push(10);
list.push(12);
list.push(13);
list.unshift(24);
list.shift();
console.log(list);
