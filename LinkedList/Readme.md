# LINKED LIST :
- bagli liste soyut bir veri saklama metodudur.
- soyut veri tipleri Abstract Data Types olarak adlandirilir.
- ozel tipte bir veri saklama birimidir.
- *! saklanan her veri , kendinden sonra gelen veri isaret edetmek zorundadir
- resimden'de anlasilacagi uzere herbir kareye node(dugum) , oklar ise pointer(isaretci) denir
- bir node nextnode'un degerinin referansini gosterir.
- bagli listeler(linked list) ilk baslangic deger olarak ise head(bas) kismi ile baslar.
- tek yonlu bagli listeler son deger [null] degerini gosterir.
- dairesel bagli listeler son deger ilk degeri[head] degerini gosterir
- cift yonlu bagli listeler ise cift pointer tutar [nextNode,prevNode] degerlerini gosteririr

![LindeList](https://i1.wp.com/gokhan-gokalp.com/wp-content/uploads/2015/06/singly.jpeg?ssl=1])

## LINKED LIST CESITLERI :

  - 1. Tek Yonlu Bagli Listeler-(Singly Linked List)
  - 2. Dairesel Bagli Listeler-(Circular Linked List)
  - 3. Cift Yonlu Bagli Listeler-(Doubly Linked List)

## LINKED LIST ISLEMLERI :

  - 1. Traverse Islemi :
    - bir veri yapisi icindeki node(dugumleri) arasi dolasma islemleridir.
  - 2. Eleman Ekleme Islemi :
    - bir veri yapisina eleman ekleme(sona-basa-ortaya) islemidir.
  - 3. Eleman Silme Islemi :
    - bir veri yapisinadan eleman silme(sona-basa-ortaya) islemidir.
  - 4. Sort Islemleri :
    - siralama islemleridir.
  - 5. Merge Islemleri :
    - listeleri birlestirme islemleridir.

## LINKED LIST AVANTAJLARI :

  - dinamik bir veri yapisina sahiptir.(istedigimiz kadar eleman eklenebilir)
  - eleman ekleme ve silme islemleri kolaydir.(index degeri ile ugrasmiyoruz)

## LINKED LIST DEZAVANTAJLARI :
  - random erisim yoktur.
  - ekstra hafiza kullaniyor (pointer[isaretci])
