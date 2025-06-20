const questions = [
    {
        "question" : "Az alábbi állítások közül melyik igaz a referenciára?",
        "answers" : [
            "Mindig kell kezdőértéket adni.",
            "Mindenhol  használható, ahol a pointer használható.",
            "C++-ban mindig referenciát kell használni pointer helyett.",
            "Meg lehet változtatni, hogy mire mutasson a referencia."
        ],
        "key" : [
            true,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Mire használjuk a friend kulcsszót a C++-ban?",
        "answers" : [
            "Segítségével megadhatjuk azokat a függvényeket, amelyek hozzáférnek a privát és protected tagokhoz.",
            "Öröklődés esetén közvetlenül is elérhetjük a privát adattagokat inicializáláskor és a konstruktorinicializáló listában adhatunk értéket nekik.",
            "A friend az asszociáció megadása C++-ban.",
            "A nem publikus tagokhoz való hozzáférés engedélyezése más osztályok számára"
        ],
        "key" : [
            true,
            false,
            false,
            true
        ]
    },
    {
        "question" : "Melyik állítás igaz a C++ öröklődésre?",
        "answers" : [
            "Egy osztálynak lehet több ősosztálya.",
            "Ha van virtuális metódusom, akkor célszerű a destruktort is virtuálissá tenni.",
            "A gyerekosztály konstruktorában mindig expliciten meg kell hívnunk az ősosztály konstruktorát",
            "A leszármazott osztályt bárhol \"használhatom\", ahol őstípust használhatok."
        ],
        "key" : [
            true,
            true,
            false,
            true
        ]
    },
    {
        "question" : "Mi jellemzi a C++ string osztalyt?",
        "answers" : [
            "Felüldefiniálta például a + vagy az = operátorokat",
            "Ha létrehozáskor nem adunk meg paramétert, akkor egy üres string jön létre",
            "Csak statikus hosszúságú szövegek tárolására alkalmas",
            "Automatikus memóriakezelést biztosít"
        ],
        "key" : [
            true,
            true,
            false,
            true
        ]
    },
    {
        "question" : "Mikor történik memóriaszivárgás C++-ban?",
        "answers" : [
            "Ha a vermen (stack-en) hozok létre egy objektumot, de nem szabadítom fel.",
            "Ha dinamikusan példányosítok egy objektumot, de nem szabadítom fel.",
            "Ha new-val foglalok memóriát, de free-vel szabadítom fel.",
            "Ha std :: vector-t használok, de a használat végén nem hívom meg az erase metódusát."
        ],
        "key" : [
            false,
            true,
            false,
            false
        ]
    },
    {
        "question" : "Hogyan tudok dinamikusan memériat foglalni C++-ban?",
        "answers" : [
            "A new[] operátor segítségével.",
            "A malloc függvény segítségével.",
            "C++-ban mindig dinamikusan foglalódik a memória.",
            "A new operátor segítségével."
        ],
        "key" : [
            true,
            true,
            false,
            true
        ]
    },
    {
        "question" : "Melyik valasz igaz az alabbi kéd esetében? \n class pelda {\npublic:\n    virtual void foo() override final {\n\n    }\n};",
        "answers" : [
            "A kód helyes, lefordul.",
            "Nem fordul le, mert csak akkor lehet final-t alkalmazni, ha az osztály öröklődik egy másik osztályból.",
            "A kód nem fog lefordulni, mert a foo metódus biztosan nem definiál felül semmit, így az override miatt fordítási hibát kapunk.",
            "A kód nem fog lefordulni, mert a foo metódus biztosan nem definiál felül semmit, így előbb felül kell definiálni, csak azután lehet a final-t alkalmazni."
        ],
        "key" : [
            false,
            false,
            true,
            false
        ]
    },
    {
        "question" : "Melyik allitas igaz a this-re?",
        "answers" : [
            "Ha az adott objektumot szeretném visszaadni érték szerint, akkor a \"return *this;\" utasítást kell használnom.",
            "Ha az adott objektumra mutató pointert szeretném visszaadni, akkor a \"return *this;\" utasítást kell használnom.",
            "Ha az adott objektumot szeretném visszaadni referencia szerint, akkor a \"return *this;\" utasítást kell használnom.",
            "Az osztályra mutató pointer, amit a fordító automatikusan generál."
        ],
        "key" : [
            true,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Mi igaz a C++-ban a statikus osztalytagra?",
        "answers" : [
            "Megadhatjuk a láthatóságát.",
            "Csak az adott osztály férhet hozzá.",
            "Osztály szinten tárolódik, nem objektum szinten.",
            "Lehet const."
        ],
        "key" : [
            true,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Melyik allitas igaz a konstruktor inicializalo listara?",
        "answers" : [
            "Kötelező ott inicializálni az adattagokat.",
            "Számít, hogy milyen sorrendben inicializáljuk a változókat.",
            "Referencia adattagokat inicializálhatunk itt.",
            "A constans adattagoknak csak ott adhatunk értéket."
        ],
        "key" : [
            false,
            false,
            true,
            false
        ]
    },
    {
        "question" : "Milyen paraméterek esetében műkodik a polimorfizmus?",
        "answers" : [
            "Pointer típusú paraméterek.",
            "Referencia típusú paraméterek.",
            "Konstans referencia típusú paraméterek.",
            "Érték szerinti paramétátadásnál."
        ],
        "key" : [
            true,
            true,
            true,
            false
        ]
    },
    {
        "question" : "Melyik tagfügvényből nem lehet több egy osztályban?",
        "answers" : [
            "Masoló konstruktor",
            "Értékado operátor",
            "Konverziós operátor",
            "Indexer operátor",
            "Destruktor",
            "Konstruktor"
        ],
        "key" : [
            false,
            false,
            false,
            false,
            true,
            false
        ]
    },
    {
        "question" : "Melyik állitás igaz a C++ az operátor kiterjesztésre (overloading)?",
        "answers" : [
            "Csak beépitett operátorokat lehet felüldefiniálni.",
            "Olvashatóbb kódot lehet a segitségükkel készíteni.",
            "Nem változtathatom meg a paraméterek számát és típusát.",
            "Minden esetben megvalósítható a felüldefiniálás tagfüggvény segítségével.",
            "Nem lehet minden operátort felüldefiniálni.",
            "Nem változhat meg a precedenciája."
        ],
        "key" : [
            true,
            true,
            false,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Mi jellemző a C++ kivételkezelésére?",
        "answers" : [
            "Egy kivételt mindig el lehet kapni őstípus szerint.",
            "Egy try blokkhoz több catch is tartozhat.",
            "Minden kivétel osztálynak az std :: exception-ből kell származnia.",
            "A finally blokk mindig lefut a try blokk elhagyásakor.",
            "A kivételeket mindig referencia szerint kell elkapni.",
            "A catch( ... ) bármilyen típusú kivételt képes elkapni."
        ],
        "key" : [
            false,
            true,
            false,
            false,
            false,
            true
        ]
    },
    {
        "question" : "Mi igaz a C++ destruktorra?",
        "answers" : [
            "Lehet visszatérési értéke",
            "Automatikusan hívódik meg objektum törlésekor",
            "Nem lehet paramétere",
            "Az osztályban több destruktor is definiálható",
            "Lehet virtuális",
            "Lehet statikus"
        ],
        "key" : [
            false,
            true,
            true,
            false,
            true,
            false
        ]
    },
    {
        "question" : "Melyik állitas igaz egy privát adattagra, ha az adott osztalynak nincs friend-je?",
        "answers" : [
            "Nem lesz része a leszármazott osztálynak.",
            "Publikus öröklődés esetén a leszármazott osztályban publikus lesz az adattag.",
            "A leszármazott osztályból közvetlenül hozzáférhetünk.",
            "Mindenképp inicializálni kell a konstruktor inicializáló listában.",
            "Csak az adott objektum férhet hozzá.",
            "Nem adhatok vissza referenciát az adott adattagra."
        ],
        "key" : [
            false,
            false,
            false,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Ha csak annyit latunk egy kodrészletbdl, hogy \"int i;\", akkor melyik allitas lehet igaz az i-re?",
        "answers" : [
            "Az i lehet lokális változó.",
            "Az i lehet konstans.",
            "Az i lehet globális változó.",
            "Az i típusa lehet long long is.",
            "Az i lehet statikus változó.",
            "Az i típusa lehet előjeltelen egész szám is."
        ],
        "key" : [
            true,
            true,
            true,
            true,
            true,
            true
        ]
    },
    {
        "question" : "Milyen sorrendben lesznek inicializalva az osztaly adattagjai?",
        "answers" : [
            "A szabvány nem definiálja a sorrendet",
            "Amelyiknek van alapértelmezett értéke, azok lesznek inicializálva először, utána a többi",
            "Abban a sorrendben, ahogy a konstruktor inicializáló listában megadjuk",
            "Abban a sorrendben, ahogy az osztályban deklarálva vannak"
        ],
        "key" : [
            false,
            false,
            false,
            true
        ]
    },
    {
        "question" : "Mi igaz a delegating konstruktorra?",
        "answers" : [
            "Olyan speciális konstruktor, amit az osztályon kívülről nem lehet hívni",
            "A C++ nem támogatja ezt",
            "Ugyanazon osztály egy másik konstruktorának inicializáló listájából hívható",
            "A hívó és a hívott konstruktorok paraméter számának meg kell egyeznie"
        ],
        "key" : [
            false,
            false,
            true,
            false
        ]
    },
    {
        "question" : "Mit jelent az, hogy a metódus const? (Például class A { string& foo(string& s) const; };",
        "answers" : [
            "Magát az objektumot, azaz annak adattagjait nem lehet megváltoztatni",
            "Azt jelenti, hogy a paramétereket nem lehet megváltoztatni, csak így nem kell mindegyik elé kiírni",
            "A metódus lesz const, azaz semmilyen memóriaterületen nem történhet változás, amíg a metódus fut",
            "A visszatéréi típus lesz const, csak C++ esetében ezt így kell megadni"
        ],
        "key" : [
            true,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Mi a különbség a new és new[] operátorok között?",
        "answers" : [
            "Nincs olyan, hogy new[]",
            "Az new-val egy objektumnak foglalunk helyet, a new[] több elemnek is képes helyet foglalni",
            "A new hiba esetében kivételt dob, míg a new[] nullptr-rel tér vissza",
            "Nincs különbség köztük, csak az írásmódjuk tér el"
        ],
        "key" : [
            false,
            true,
            false,
            false
        ]
    },
    {
        "question" : "Mi a különbség a new és new[] operátorok között?",
        "answers" : [,
            "A new ugyanaz, mint a malloc, de a new[]-nak nincs C-s megfelelője",
            "new-val tudunk egyszerű típusnak is helyet fogolni (pl. int), de new[] csak osztályokra használható",
            "Ha egy C típusnak foglalunk helyet, akkor a new C*- gal ter vissza, a new[] C **- gal, mert egy tömbnek foglaltunk helyet"
        ],
        "key" : [
            false,
            false,
            false
        ]
    },
    {
        "question" : "Mitől lesz egy osztály absztrakt C++-ban?",
        "answers" : [
            "Van olyan metódusa, amelyik nincs megvalósítva.",
            "Az osztály örökölt tisztán (pure) virtuális metódust, amit nem valósított meg.",
            "Van az osztályban tisztán (pure) virtuális metódus.",
            "Ki van írva elé, hogy abstract."
        ],
        "key" : [
            false,
            true,
            true,
            false
        ]
    },
    {
        "question" : "Melyik esetben jon létre egy példany az Example osztalybél (azaz Example tipusi objektum)? (class Example {/* ... */};)",
        "answers" : [
            "Example *e5 = &ee; // ahol ee Example tipus objektum",
            "Example *e2 = new Example;",
            "Example *e1 = new Example[1];",
            "Example e3();",
            "catch (const Exception& e) { ... }",
            "throw Exception();"
        ],
        "key" : [
            false,
            false,
            true,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Mit nem lehet megváltoztatni az operátor-kiterjesztés esetében?",
        "answers" : [
            "Melyik névtérben található",
            "Az operator nevet",
            "A visszatérési típusát",
            "Az operátor prioritását",
            "A paraméter típusát",
            "A precedenciat",
            "A paraméterek számát"
        ],
        "key" : [
            false,
            true,
            false,
            true,
            false,
            true,
            true
        ]
    },
    {
        "question" : "C++-ban mi a különbség a class és a struct között?",
        "answers" : [
            "Hasonló a kettő, de a struct-ból nem lehet örököltetni",
            "Az alapértelmezett láthatóság a class esetében private, míg a struct esetében public",
            "Az osztálynak lehet metodusa, a struktúrának nem",
            "A struct az a C-s struktúra, míg a class az a C++-os osztály",
            "Az osztálynak mindig kell megvalósítani konstruktort, a struktúrának nem kötelező",
            "Nincs különbség, teljesen ugyanazt jelentik"
        ],
        "key" : [
            false,
            true,
            false,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Az alábbi állitasok közül melyik igaz a referenciára?",
        "answers" : [
            "Meg lehet változtatni, azaz átállíthatom egy másik változóra is",
            "Ha deklarációnál nem adjuk meg, hogy kire mutasson, akkor definiálatlan lesz",
            "A referencia egy alias, azaz valaminek egy másik neve",
            "Deklarációnál meg kell adni, hogy minek \"a másik neve\""
        ],
        "key" : [
            false,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Milyen lesz a láthatósaga annak az adattagnak a leszármazott osztályban, aminek az ősosztályban a láthatósaga protected volt, és az öröklődés private?",
        "answers" : [
            "private",
            "protected",
            "public",
            "nem lesz elérhető a leszármazott osztályban"
        ],
        "key" : [
            true,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Milyen feltételeknek kell teljesülnie, hogy egy metódus egyszerre override és final legyen, de ne kapjunk forditási hibát?",
        "answers" : [
            "A metodus nem lehet static",
            "Ebből az osztályból nem származik másik osztály",
            "A metódus virtuális",
            "Ezt a metódust nem definiáltuk felül egy leszármazott osztályban",
            "A metódus felüldefiniál egy örökölt metódust"
        ],
        "key" : [
            true,
            false,
            true,
            true,
            true
        ]
    },
    {
        "question" : "Melyik állitás igaz a C++ kivételkezelésre?",
        "answers" : [
            "Mindig referencia szerint kell elkapni a kivételt.",
            "\"Bármilyen\" típus teldobhaunk kivételnek.",
            "Egy kivételt az ősosztály típusa alapján is el lehet kapni",
            "A finnaly block minden esetben le fog futni.",
            "Egy elkapott kivetelt a throw; utasítas segítségével eldobhatunk",
            "A catch ( ... ) tetszőleges kivetelt elkap",
            "A ... minden kivételt képes elkapni."
        ],
        "key" : [
            false,
            true,
            true,
            false,
            true,
            true,
            true
        ]
    },
    {
        "question" : "Ha A, B és C 3 osztály, és példanyosítjuk ezeket egy blokkban ebben a sorrendben (A a; B b; C c;), akkor a blokkból való kilépéskor milyen sorrendben fognak megszűnni?",
        "answers" : [
            "a, b, c",
            "A fordító specifikálja a sorrendet",
            "A szabvány nem definiálja",
            "A blokk elhagyásakor nem szűnnek meg, csak akkor, amikor a függvényből visszatérünk"
        ],
        "key" : [
            false,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Mire jó a \"using namespace std;\"?",
        "answers" : [
            "Így deklarálhatjuk az std névteret",
            "Használata esetén nem kell kiírni a cout elé az std :: scope-ot",
            "Ennek segítségével tudjuk megvalósítani a C++-os I/O hibakezelést",
            "C++-ban kötelező a használata, különben nem működne az I/O"
        ],
        "key" : [
            false,
            true,
            false,
            false
        ]
    },
    {
        "question" : "Mi a hasonlóság a másoló konstruktor és az értékadó operátor között?",
        "answers" : [
            "A kettő ugyanaz, csak a nevük tér el",
            "Mindkettő az objektum másolását végzi",
            "Egy osztálynak csak egy másoló konstruktora és egy értékadó operátora lehet",
            "Minkettőt az objektum létrehozásakor használjuk"
        ],
        "key" : [
            false,
            true,
            false,
            false
        ]
    },
    {
        "question" : "Mikor szükséges virtuálissá tenni a destruktort?",
        "answers" : [
            "Ha van virtuális metódus, akkor legyen virtuális.",
            "Mindig legyen virtuális.",
            "Ha polimorfikusan akarjuk törölni az objektumot.",
            "Nem kell virtuálissá tenni."
        ],
        "key" : [
            true,
            false,
            true,
            false
        ]
    },
    {
        "question" : "Mely állítások igazak a statikus (static) metódusokra?",
        "answers" : [
            "Az osztály példányosítása nélkül is hívható.",
            "Csak statikus adattagokhoz férhet hozzá.",
            "Csak statikus metódusból hívható.",
            "Csak statikus metódust hívhat."
        ],
        "key" : [
            true,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Mi történik, hogy ha malloc által foglalt memóriát delete-tel akarjuk törölni?",
        "answers" : [
            "Nem okoz gondot, úgy működik, mintha free-t hívtunk volna",
            "A program viselkedése nem definiált",
            "A delete miatt meg fog hívódni az objektum destruktora, de más különbség nincs",
            "A fordító automatikusan kicseréli free-re"
        ],
        "key" : [
            false,
            true,
            false,
            false
        ]
    },
    {
        "question" : "Az alábbiak közül melyek szükségesek ahhoz, hogy egy örökölt metódust felüldefiniáljunk a leszármazott osztályban?",
        "answers" : [
            "A visszatérési típusuk meg kell egyezzen.",
            "A metódus paraméterlistája meg kell egyezzen az felüldefiniálandó metódus paraméterlistájában.",
            "A metódus neve meg kell egyezzen az ősosztályban található metódus nevével.",
            "Az a metódus, amelyik felüledfiniálja az örökölt metódust, az nem lehet final."
        ],
        "key" : [
            false,
            true,
            true,
            false
        ]
    },
    {
        "question" : "Milyen feltételnek kell teljesülnie egy általunk definiált kivétel osztályra?",
        "answers" : [
            "Kell lennie publikus paraméter nélküli konstruktorának",
            "Az std :: exception osztályból kell származnia",
            "Meg kell valósítani a publikus what() metódust",
            "Tetszőleges osztályt lehet kivételként használni C++-ban"
        ],
        "key" : [
            false,
            false,
            false,
            true
        ]
    },
    {
        "question" : "Az alábbi állítások közül melyik igaz a referenciára?",
        "answers" : [
            "C++-ban mindig referenciát kell használni pointer helyett.",
            "Mindenhol használható, ahol a pointer használható.",
            "Mindig kell kezdőértéket adni.",
            "Meg lehet változtatni, hogy mire mutasson a referencia."
        ],
        "key" : [
            false,
            false,
            true,
            false
        ]
    },
    {
        "question" : "Hogyan tudok dinamikusan memóriát foglalni C++-ban?",
        "answers" : [
            "A malloc függvény segítségével.",
            "C++-ban mindig dinamikusan foglalódik a memória.",
            "A new[] operátor segítségével.",
            "A new operátor segítségével."
        ],
        "key" : [
            true,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Melyik állítás igaz a C++ öröklődésre?",
        "answers" : [
            "Ha van virtuális metódusom, akkor célszerű a destruktort is virtuálissá tenni.",
            "A gyerekosztály konstruktorában mindig expliciten meg kell hívnunk az ősosztály konstruktorát",
            "Egy osztálynak lehet több ősosztálya.",
            "A leszármazott osztályt bárhol \"használhatom\", ahol őstípust használhatok."
        ],
        "key" : [
            false,
            true,
            true,
            true
        ]
    },
    {
        "question" : "Melyik állítás igaz a konstruktor inicializáló listára?",
        "answers" : [
            "Számít, hogy milyen sorrendben inicializáljuk a változókat.",
            "Referencia adattagokat inicializálhatunk itt.",
            "A constans adattagoknak csak ott adhatunk értéket.",
            "Kötelező ott inicializálni az adattagokat."
        ],
        "key" : [
            false,
            true,
            false,
            false
        ]
    },
    {
        "question" : "Melyik állítás igaz a konstruktor inicializáló listára?",
        "answers" : [
            "Olyan adattagokat itt kell inicializalni, amelyeknek nincs default konstruktora",
            "Referenciat itt inicializalhatom, a konstruktor torzseben nem",
            "Konstans adattagnak adthatunk értéket",
            "A használata kötelező"
        ],
        "key" : [
            true,
            true,
            true,
            false
        ]
    },
    {
        "question" : "Adott egy metódus, aminek van egy nem const paramétere. Mi történik, ha egy const objektumot szeretnék átadni ennek a metódusnak?",
        "answers" : [
            "Csak akkor kapunk fordítási hibát, ha az adott objektumot megváltoztatjuk",
            "Fordítási hibát kapok",
            "Csak akkor dobódik kivétel, ha az adott objektumon változtatunk",
            "Futási hibát kapunk és kivétel dobódik"
        ],
        "key" : [
            false,
            true,
            false,
            false
        ]
    },
    {
        "question" : "Melyik állítás igaz a std :: string osztályra?",
        "answers" : [
            "Van default konstruktora",
            "Felüldefiniálja a = operátort",
            "Automatikusan konvertálható számmá",
            "Az indexer operátor használata biztonságos"
        ],
        "key" : [
            true,
            true,
            false,
            false
        ]
    },
    {
        "question" : "C++-ban milyen feltétel szükséges ahhoz, hogy egy osztály absztrakt legyen és ne lehessen példányosítnai?",
        "answers" : [
            "Van tisztán virtuális metódusa",
            "C++ nem lehet absztrakt osztályt definiálni",
            "Kiírjuk elé az abstract kulcsszót",
            "Valamelyik metódusa elé odaírjuk, hogy abstract"
        ],
        "key" : [
            true,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Melyik állítás igaz a destruktorra?",
        "answers" : [
            "Mindig kötelező megvalósítani",
            "Csak egy lehet belőle az osztályban",
            "Ha van ősosztály, akkor meg kell hívni az ősosztály destruktorát",
            "Lehet virtuális",
            "Nem lehet paramétere",
            "Ha az osztályban foglalunk dinamikusan memóriát, akkor az mindig itt kell felszabadítani"
        ],
        "key" : [
            false,
            true,
            false,
            true,
            true,
            false
        ]
    },
    {
        "question" : "Mi szükséges ahhoz, hogy egy ősztályban lévő foo metódust felüldefiniáljunk egy leszármazott osztályban?",
        "answers" : [
            "A foo az ősosztályban virtuális legyen",
            "A leszármazott osztályban lévő foo metódusnak ugyanannyi paramétere legyen, mint az ősosztályban lévőnek",
            "Ugyanaz legyen a visszatérés típusa a leszármazott osztályban, mint ami az ősosztályban volt",
            "A foo az ősosztályban ne legyen final"
        ],
        "key" : [
            true,
            true,
            false,
            true
        ]
    },
    {
        "question" : "Melyik állítás i̱gaz egy statikus metódusra?",
        "answers" : [
            "Lehet virtuális",
            "Lehet const",
            "Használhatjuk az osztály this pointerét a metódusban",
            "Az osztály példányosítása nélkül is meghívható"
        ],
        "key" : [
            false,
            false,
            false,
            true
        ]
    },
    {
        "question" : "Melyik állítás lehet igaz a - operátor felüldefiniálására?",
        "answers" : [
            "Megváltoztathatom a prioritását",
            "Mindig pontosan két operandusa van",
            "Bármilyen típusú paraméterre felül lehet definiálni",
            "Nem lehet void a visszatérés típusa"
        ],
        "key" : [
            false,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Melyik állítás igaz a konverziós operátorra?",
        "answers" : [
            "Egy paramétere van",
            "Nem lehet konstans",
            "Nem tudjuk megváltoztatni a precedenciáját",
            "Nem kell megadni a visszatérés típusát"
        ],
        "key" : [
            true,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Melyik állítás igaz a dinamikusan foglalt memóriára C++-ban?",
        "answers" : [
            "Nekünk kell gondoskodni a memória felszabadításáról",
            "A heap-en (kupac) foglalódik le a memória",
            "A new operátor segítségével foglalhatunk",
            "A new operátor egy pointerrel tér vissza, ami a lefoglalt memóriaterületre mutat",
            "Minden esetben a delete operátorral kell felszabadítani a memóriát",
            "A foglaláskor minden esetben autómatikusan meghívódik a konstruktor"
        ],
        "key" : [
            true,
            true,
            true,
            true,
            false,
            false
        ]
    },
    {
        "question" : "Melyik állítás igaz egy final osztályra?",
        "answers" : [
            "Az osztály adattagjait nem lehet megváltoztatni",
            "Az osztály metódusait nem lehet felüldefiniálni",
            "Osztály nem lehet final, csak egy metódus",
            "Abból az osztályból nem lehet származtatni"
        ],
        "key" : [
            false,
            true,
            false,
            true
        ]
    },
    {
        "question" : "Melyik állítás igaz a konstruktorra?",
        "answers" : [
            "Ha van ősosztály, akkor minden esetben expliciten meg kell hívni az ősosztály konstruktorát a leszármazott osztály konstruktorából",
            "Megadhatunk a paramétereinek default értéket",
            "Lehet virtuális",
            "A konstruktorban inicializálhatjuk a referencia adattagokat"
        ],
        "key" : [
            false,
            true,
            false,
            true
        ]
    },
    {
        "question" : "Melyik nem definialt (undefined behaviour) viselkedés C++-ban?",
        "answers" : [
            "Változó definiálása kezdőérték nélkül",
            "Olyan tagfüggvény meghívása, amelyik nincs implementálva",
            "Tömb túlidexelése",
            "Függvényhívásnál a paraméterlista kiértékelési sorrendje",
            "A size_t méretének explicit felhasználása (például, hogy az adott architektúrán 32 bit)",
            "Előjeles egész szám túlcsordulása"
        ],
        "key" : [
            false,
            false,
            true,
            false,
            false,
            true
        ]
    },
    {
        "question" : "Melyik állítás igaz egy friend függvényre?",
        "answers" : [
            "Használhatja a this pointert",
            "Szabályozhatjuk a láthatóságát",
            "Hozzáfér az osztály privát tagjaihoz",
            "Az osztály tagfüggvénye"
        ],
        "key" : [
            false,
            false,
            true,
            false
        ]
    },
    {
        "question" : "Mi szükséges ahhoz, hogy ne kapjuk fordítási hibát akkor, ha egy Pelda osztályban lévő foo metódusra alkalmazzuk az override jelzőt?",
        "answers" : [
            "A Pelda osztálynak publikusan kell származnia az ősosztályból",
            "A Pelda osztályban a foo metódus nem lehet final",
            "A Pelda osztálynak származnia kell egy másik osztályból",
            "A foo metódusnak virtuálisnak kell lennie"
        ],
        "key" : [
            false,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Milyen lehet a láthatósága annak az adattagnak egy ősosztályban, aminek a láthatósága private a leszármazott osztályban, és az öröklődés láthatósága private?",
        "answers" : [
            "public",
            "protected",
            "private"
        ],
        "key" : [
            true,
            true,
            false
        ]
    },
    {
        "question" : "Melyik állítás igaz a const metódusokra?",
        "answers" : [
            "Meghívhat nem konstans metódust",
            "Lemásolhatja az objektumot",
            "Szabadíthat fel memóriát",
            "Nem adhat vissza nem konstans értéket",
            "Nem változtathatják meg az adott objektum állapotát",
            "Nem adhat vissza nem konst referenciát az adott objektum adattagjára"
        ],
        "key" : [
            true,
            true,
            true,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Melyik állítás igaz a konstruktor inicializáló listára?",
        "answers" : [
            "Használata kötelező",
            "Ha egy adattagot itt inicializálunk, akkor a konstruktor törzsében már nem változtathatjuk meg",
            "Számít, hogy milyen sorrendben adjuk meg az adattagokat a listában",
            "Referencia adattagnak adhatunk itt értéket",
            "Csak itt inicializálhatjuk a konstans adattagokat",
            "Tömböket itt nem lehet inicializálni"
        ],
        "key" : [
            false,
            false,
            false,
            true,
            false,
            false
        ]
    },
    {
        "question" : "A p egy int-re mutato pointer, míg r egy referencia ugyanarra az int-re, amire p mutat. Peldaul:\ni = 5;\n*p = &i;\n&r = i;\nMelyik állítás igaz?",
        "answers" : [
            "Az p++; és az r++; utasításoknak ugyanaz lesz az eredménye",
            "A p-t és az r-et is meg tudom változtatni úgy, hogy másik változóra \"mutassanak\"",
            "A *p és a r értéke az inicializálás után megegyezik"
        ],
        "key" : [
            false,
            false,
            true
        ]
    },
    {
        "question" : "Mi férhet hozzá egy protected adattaghoz?",
        "answers" : [
            "A leszármazott osztály, ha az öröklődés publikus",
            "Az adott osztály destruktora",
            "A leszármazott osztály, akkor is, ha az öröklődés privát",
            "A friend osztály",
            "Az osztály ősosztálya"
        ],
        "key" : [
            true,
            true,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Melyik állítás igaz a Maci osztály másoló konstruktorára (copy constructor)?",
        "answers" : [
            "Ha ezt megvalósítottuk, akkor mindig meg kell valósítani az értkadó operátort is",
            "Ha ezt megvalósítjuk, akkor nem szükséges más konstruktort megvalósítani",
            "Kötelező megvalósítani",
            "Mindig egy \"const Maci&\" a paramétere",
            "Szerepelnie kell benne a \"return *this;\" utasításnak",
            "Ha nem valósítjuk meg, akkor a fordító automatikusan generál egyet"
        ],
        "key" : [
            false,
            false,
            false,
            false,
            false,
            true
        ]
    },
    {
        "question" : "Melyik allítas igaz a friend fuggvényre?",
        "answers" : [
            "Hozzáfér a protected adattagohoz",
            "Egy függvény több osztálynak is a friend-je lehet",
            "Az osztály példányosítása nélkül is hívható",
            "Akármennyi paramétere lehet"
        ],
        "key" : [
            true,
            true,
            true,
            true
        ]
    },
    {
        "question" : "Melyik állítás igaz az std vector-ra?",
        "answers" : [
            "Megadhatjuk, hogy milyen elemeket szeretnénk tárolni",
            "Az indexer operátor segítségével elérjük az i-edik elemet",
            "A végére beszúrás hatékony és gyors művelet",
            "Az elemeket egy halmazban tárolja",
            "Automatikusan bővíti a tároló méretét",
            "Iterátorral bejárhatjuk az elemeket"
        ],
        "key" : [
            true,
            true,
            true,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Melyik állítás igaz a destruktorra?",
        "answers" : [
            "Az objektum megszünésekor automatikusan hívódik.",
            "A neve megegyezik az osztály nevével.",
            "Lehet const.",
            "Adhatunk meg paramétert."
        ],
        "key" : [
            true,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Egy metóduson belül, az alábbiak közül melyik egy helyes lokális változó deklaráció/definíció?",
        "answers" : [
            "int *i = nullptr;",
            "int &i;",
            "int *i;",
            "int i, j = 8, k;",
            "int &i = 7;",
            "int i; int *j = &i;"
        ],
        "key" : [
            true,
            false,
            true,
            true,
            false,
            true
        ]
    },
    {
        "question" : "Mit jelent az, ha az alábbi utasítát látjuk a kódban?\nthrow;",
        "answers" : [
            "Egy elkapott kivételt ismét eldobunk.",
            "Fordítási hibát kapunk.",
            "Alapértelmezett kivétel dobódik."
        ],
        "key" : [
            true,
            false,
            false
        ]
    },
    {
        "question" : "Melyik állítás igaz a tisztán virtuális (pure virtual) metódusra?",
        "answers" : [
            "Lehet statikus.",
            "Nem lehet const.",
            "A tartalmazó osztályt nem lehet példányosítani.",
            "Nem lehet paramétere.",
            "Mindig virtuálisnak kell lennie",
            "Nem lehet meghívni az adott osztályból.",
            "Nem lehet megvalósítani.",
            "A metódus mögött az \"= NULL\" segítségével jelezhetjük."
        ],
        "key" : [
            false,
            false,
            true,
            false,
            true,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Melyik állítás igaz a konstruktorra?",
        "answers" : [
            "Láthatósága lehet privát",
            "Lehet virtuális",
            "Kötelező implementálni",
            "Automatikusan hívódik példányosításkor",
            "A paramétereinek lehet alapértelmezett (default) értéke",
            "Lehet statikus"
        ],
        "key" : [
            true,
            false,
            false,
            true,
            true,
            false
        ]
    },
    {
        "question" : "Melyik állítás igaz a metódus lokális változójára?",
        "answers" : [
            "A veremben (stack) foglalódik memória a lokális változónak",
            "Nekünk kell felszabadítani",
            "Az int nullára inicializálódik",
            "Automatikusan foglalódik memória a lokális változónak"
        ],
        "key" : [
            true,
            false,
            false,
            true
        ]
    },
    {
        "question" : "Melyik állítás igaz az alábbi lambda esetében?\n[k, l](int i) { return k < i && i < 1; }",
        "answers" : [
            "A k és az I típusa int",
            "Lehet olyan eset, hogy nem logikai értékkel tér vissza",
            "A k és az l változókat érték szerint veszi át",
            "A lambdának egy paramétere van"
        ],
        "key" : [
            false,
            true,
            true,
            true
        ]
    },
    {
        "question" : "Mi szükséges ahhoz, hogy egy metódus final legyen, de ne kapjunk fordítási hibát?",
        "answers" : [
            "Felüldefiniáljon egy metódust",
            "A metódus ne legyen const",
            "A metódus ne legyen statikus",
            "Az öröklődés is final legyen",
            "A metódus egy leszármazott osztályban ne legyen felüldefiniálva",
            "A metódus virtuális legyen"
        ],
        "key" : [
            false,
            false,
            true,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Mi lehet statikus?",
        "answers" : [
            "Globális változó",
            "Függvényen belül lokális változó",
            "Osztály metódusa",
            "Metódus visszatéréi értéke",
            "Osztály",
            "Osztály adattagja"
        ],
        "key" : [
            true,
            true,
            true,
            false,
            false,
            true
        ]
    },
    {
        "question" : "Melyik utasítással foglalunk a kupacon (heap) memóriát? A példában a Kutya egy osztály, és létezik a példányosítához szükséges konstruktor.",
        "answers" : [
            "new Kutya;",
            "malloc(sizeof(Kutya));",
            "new Kutya(\"Morzsi\");",
            "new Kutya[10];",
            "new int;",
            "malloc(10);"
        ],
        "key" : [
            true,
            true,
            true,
            true,
            true,
            true
        ]
    },
    {
        "question" : "Mi igaz a this pointerre?",
        "answers" : [
            "Automatikusan beállítódik.",
            "Az adott objektum memóriacímét tartalmazza.",
            "A this az adott objektumot jelenti.",
            "Statikus metódus nem használhatja.",
            "Saját metódusa \"definiálhatja\" const-ként."
        ],
        "key" : [
            true,
            true,
            true,
            true,
            true
        ]
    },
    {
        "question" : "Az alábbiak közül melyik nem specifikált viselkedés?",
        "answers" : [
            "Nem inicializált változó használata.",
            "Függvényhívás esetén a paraméterlista kiértékelési sorrendje.",
            "Hnullptr dereferencia.",
            "Tömb túlindexelés.",
            "return 0; elhagyása a main függvényból."
        ],
        "key" : [
            true,
            false,
            true,
            true,
            false
        ]
    },
    {
        "question" : "Melyik állitás igaz az operator overloading ra?",
        "answers" : [
            "HOA saját osztálykhoz definiálhatunk saját new operátort.",
            "Az általunk definiált operátornak tetszőleges visszatérési tipust megadhatunk.",
            "A vold operator (const Macska& m); helyes globális operátor deklaráció, ha a Macska egy osztály.",
            "Bármelyik operátort felül lehet definiálni.",
            "Az általunk definiált operátornak tetszőleges paramétereket megadhatunk."
        ],
        "key" : [
            true,
            false,
            false,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Melyik állitás igaz a public tagokra?",
        "answers" : [
            "A getter és setter metódusok láthatósága mindig public.",
            "A leszármazott osztályban is mindig public lesz.",
            "Csak az adott osztály fér hozzá.",
            "A konstruktor a Singleton minta esetén public láthatóságú.",
            "A destruktor mindig public láthatóságú."
        ],
        "key" : [
            false,
            false,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Melyik állitás igaz abban az esetben, ha az Orvos osztály friend je a Macska osztálynak? (class Macska (/.... /friend class Orvos; ))",
        "answers" : [
            "A Makcsa osztály hozzáfér az Orvos osztály protected tagjaihoz.",
            "CO Definiálnunk kell az Orvos osztályt.",
            "Az Orvos osztály hozzáfér a Makcsa osztály protected tagjaihoz.",
            "Csak akkor adhatjuk meg, ha korábban definiáltuk az orvos osztályt.",
            "Nem lehet friend osztályt megadni, csak függvényt."
        ],
        "key" : [
            true,
            false,
            true,
            false,
            false
        ]
    },
    {
        "question" : "Melyik állitás igaz az értékadó operátorra?",
        "answers" : [
            "Többet is megvalósíthatunk.",
            "A másolandó objektumot sosem változtatja meg.",
            "Lehet const.",
            "Az osztály const adattagjait is módosíthatja.",
            "Mindig a *this-szel kell visszatérnie."
        ],
        "key" : [
            false,
            true,
            false,
            false,
            true
        ]
    },
    {
        "question" : "Melyik állítás igaz többszörös öröklődés esetén?",
        "answers" : [
            "Minden ős esetén definiálhatjuk a láthatóságot.",
            "Lehet két azonos nevű közvetlen öse az osztálynak.",
            "Származtathatunk az std::vector osztályból.",
            "Csak egy valódi őse lehet az osztálynak, a többi ősnek absztrakt osztálynak kell lennie.",
            "Ha van virtuális metódus az ósosztályban, akkor az öröklődésnek virtuálisnak kell lennie."
        ],
        "key" : [
            true,
            false,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Melyik nem egy C++ tároló az STL-ben?",
        "answers" : [
            "vector",
            "HashMap",
            "List",
            "map",
            "set"
        ],
        "key" : [
            false,
            true,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Melyik Allitas igaz a protected tagokra?",
        "answers" : [
            "A destruktor lehet protected láthatóságú.",
            "A leszármazott osztályban is mindig protected lesz.",
            "Csak az adott osztály fér hozzá.",
            "A konstruktor lehet protected láthatóságú.",
            "A getter és setter metódusok láthatósága lehet protected."
        ],
        "key" : [
            true,
            false,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Melyikből lehet egynél több is egy osztályban?",
        "answers" : [
            "Ertékadó operator",
            "i nevű adattag",
            "Másoló konstruktor",
            "Konverziós operator",
            "! operator"
        ],
        "key" : [
            false,
            true,
            false,
            true,
            false
        ]
    },
    {
        "question" : "Melyik állitás igaz a konstruktorra?",
        "answers" : [
            "Mindig az új objektummal kell visszatérni.",
            "Ha static, akkor az új objektummal kell visszatérnie.",
            "Módosíthatjuk a láthatóságát.",
            "Tobb másoló konstruktort is definiálhatunk.",
            "Lehet const"
        ],
        "key" : [
            false,
            false,
            true,
            false,
            false
        ]
    },
    {
        "question" : "Mit jelent az, hogy egy metódus statikus?",
        "answers" : [
            "Statikus meódusban nem lehet statikus lokális változó.",
            "Lehet const.",
            "Csak az adott osztály statikus metódisait hívhatja közvetlenül.",
            "Az osztály példányosítása nélkül is hívható.",
            "Használhatja a this pointert."
        ],
        "key" : [
            false,
            false,
            false,
            true,
            false
        ]
    },
    {
        "question" : "Mi igaz az osztály adattagjainak inicializálására?",
        "answers" : [
            "Az osztályban történő deklaráció sorrendjében kapnak értéket.",
            "Nem lehet referencia adattagja egy osztálynak, mert nem tudnánk inicializálni.",
            "Megadhatunk alapértelmezett értéket.",
            "A const adattagnak kötelező alapértelmezett értéket megadni.",
            "Ha nem adunk meg értéket, akkor alapértelmezett értéket akpnak."
        ],
        "key" : [
            false,
            false,
            true,
            true,
            false
        ]
    },
    {
        "question" : "Melyik állitás igaz a const metódusra?",
        "answers" : [
            "Nem változtathatja meg az objektum állapotát.",
            "Csak publikusak lehet a láthatóságuk.",
            "Az osztály volatile adattagjait megváltoztathatja.",
            "Az értékadó operátor lehet const.",
            "Mindig const referenciával kell visszatérnie."
        ],
        "key" : [
            true,
            false,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Melyik állítás įgaz a destruktorra?",
        "answers" : [
            "Csak egy lehet belőle az osztályban",
            "Mindig kötelező megvalósítani",
            "Lehet virtuális",
            "Ha van ősosztály, akkor meg kell hívni az ősosztály destruktorát",
            "Nem lehet paramétere",
            "Ha az osztályban foglalunk dinamikusan memóriát, akkor az mindig itt kell felszabadítani"
        ],
        "key" : [
            true,
            false,
            true,
            false,
            true,
            false
        ]
    },
    {
        "question" : "Melyik nem definiált (undefined behaviour) viselkedés C++-ban?",
        "answers" : [
            "Olyan tagfüggvény meghívása, amelyik nincs implementálva",
            "Változó definiálása kezdőérték nélkül",
            "A size_t méretének explicit felhasználása (például, hogy az adott architektúrán 32 bit)",
            "Függvényhívásnál a paraméterlista kiértékelési sorrendje",
            "Előjeles egész szám túlcsordulása",
            "Tömb túlidexelése"
        ],
        "key" : [
            false,
            false,
            false,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Melyik állítás igaz a dinamikusan foglalt memóriára C++-ban?",
        "answers" : [
            "Nekünk kell gondoskodni a memória felszabadításáról",
            "A new operátor segítségével foglalhatunk",
            "Minden esetben a delete operátorral kell felszabadítani a memóriát",
            "A new operátor egy pointerrel tér vissza, ami a lefoglalt memóriaterületre mutat",
            "A foglaláskor minden esetben autómatikusan meghívódik a konstruktor",
            "A heap-en (kupac) foglalódik le a memória"
        ],
        "key" : [
            true,
            true,
            false,
            true,
            false,
            true
        ]
    },
    {
        "question" : "Melyik állítás igaz egy statikus metódusra?",
        "answers" : [
            "Az osztály példányosítása nélkül is meghívható",
            "Lehet virtuális",
            "Lehet const",
            "Használhatjuk az osztály thismetódusban"
        ],
        "key" : [
            true,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Miért hasznos az explicit típuskonverzió?",
        "answers" : [
            "Lehetővé teszi, hogy a programozó specifikálja a típusváltás módját.",
            "Használhatjuk az explicit kulcsszót az osztályokon belüli konverziók korlátozására.",
            "Csak alap típusok között használható.",
            "Automatikusan végrehajtódik futásidőben.",
            "Használható bármilyen kompatibilis vagy nem kompatibilis típus között.",
            "Mindig biztonságosabb, mint az implicit konverzió.",
            "Megelőzi az automatikus típuskonverzió által okozott hibákat."
        ],
        "key" : [
            true,
            true,
            false,
            false,
            true,
            false,
            true
        ]
    },
    {
        "question" : "Milyen esetekben használhatjuk a const_cast operátort?",
        "answers" : [
            "Használható érték típusok, például int esetén.",
            "Ősosztályt leszármazott osztállyá akarunk konvertálni.",
            "Hasznos lehet függvényekben, ha const típusú paramétert kell módosítani.",
            "Ha el akarjuk távolítani a const módosítót egy változóból.",
            "Például egy const char* típusú mutatót char* típusra konvertálhatunk."
        ],
        "key" : [
            false,
            false,
            true,
            true,
            true
        ]
    },
    {
        "question" : "Milyen esetekben használhatjuk a const_cast operátort?",
        "answers" : [
            "Használható érték típusok, például int esetén.",
            "A const_cast minden esetben biztonságos, bármikor eltávolíthatjuk a const-ot bármiről.",
            "Nem konstans változón alkalmazhatjuk, nem okoz problémát.",
            "Hasznos lehet függvényekben, ha const típusú paramétert kell módosítani."
        ],
        "key" : [
            false,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Mi igaz az implicit típuskonverzióra?",
        "answers" : [
            "Elvégezheti az alapértelmezett típus-promóciót, mint például short típusról int-re.",
            "Például egy int változót double típusra konvertál.",
            "Nem igényel explicit utasítást a programozótól.",
            "Automatikusan vegrehajtódik kompatibilis típusok között.",
            "Csak osztályok esetében használható.",
            "Kockázatot jelenthet, ha értékvesztéssel jár (pl. double-ról int-re konvertálunk).",
            "Mindig garantalja, hogy az ertekek pontosan megmaradnak."
        ],
        "key" : [
            true,
            true,
            true,
            true,
            false,
            true,
            false
        ]
    },
    {
        "question" : "Mi a különbség a static_cast és a dynamic_cast között?",
        "answers" : [
            "A nem használható alap típusok között.",
            "A static_cast gyorsabb, mivel nem végez futásidejű ellenőrzést.",
            "A static_cast használatához RTTI-re van szükségünk.",
            "A dynamic_cast csak polimorf osztályok között használható.",
            "A static_cast fordítási időben tortenik, míg a dynamic_cast futásidőben.",
            "A static_cast csak oröklődési hierarchián belül használható.",
            "A dynamic_cast ellenőrzi, hogy a konverzió helyes-e, és null pointerrel tér vissza sikertelenség esetén."
        ],
        "key" : [
            false,
            true,
            false,
            true,
            false,
            false,
            true
        ]
    },
    {
        "question" : "Mi az előnye a C++-os konverziónak a C-típusú konverzióval szemben?",
        "answers" : [
            "Tudjuk, hogy miert alkalmazzuk.",
            "Csak egy célra alkalmazzuk, így „mást\" nem rontunk el.",
            "Osztályok esetén kevesebb konverziót tudunk megvalósítani.",
            "Mindenféle konverziós hibát kivéd."
        ],
        "key" : [
            true,
            true,
            false,
            false
        ]
    },
    {
        "question" : "Mi az előnye a C++-os konverziónak a C-típusú konverzióval szemben?",
        "answers" : [
            "A C tíuspú konverzió nem alkalmazható C++-ban.",
            "Gyorsabb a C++-os konverzió.",
            "Mar fordítási idoben is megtatlalhatjuk a hibat rossz konverzió esetén.",
            "Ugyanaz a kettő."
        ],
        "key" : [
            false,
            false,
            true,
            false
        ]
    },
    {
        "question" : "Milyen problémák megtalálására alkalmas a Valgrind?",
        "answers" : [
            "A nem megfelelő free, delete és delete[] használat.",
            "Segítséget nyújt a memóriaszivárgások azonosításában.",
            "Ellenőrzi, hogy a program íráskor nem lépi-e túl az általa foglalt memóriaterületet.",
            "Illegális memóriacímek írása vagy olvasása.",
            "A memóriahasználati problémák feltárására."
        ],
        "key" : [
            true,
            true,
            true,
            true,
            true
        ]
    },
    {
        "question" : "Milyen problémák megtalálására alkalmas a Valgrind?",
        "answers" : [
            "Fordítási hibák azonosítása.",
            "Felszabadított memóriaterületek használata.",
            "Automatikusan optimalizálja a program memóriahasználatát",
            "Beazonositja, ha a veremről akarunk memoriét felszabadítani.",
            "Diagnosztizalja hogy minden dinamikusan lefoglalt memoria fel lett szabadítva."
        ],
        "key" : [
            false,
            true,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Ha van az osztálynak egy pointer adattagja, akkor kinek a feladata a pointer által mutatott memóriaterület felszabadítása?",
        "answers" : [
            "Mindig az adott osztálynak kell felszabadítania.",
            "A program tervezésekor el kell dönteni, hogy ki felel a memória felszabadításáért.",
            "Lehet olyan eset, hogy automatikusan felszabadul.",
            "Előfordulhat, hogy az osztály megszűnése előtt felszabadul."
        ],
        "key" : [
            false,
            true,
            true,
            true
        ]
    },
    {
        "question" : "Melyik állítás igaz a másoló konstruktorra?",
        "answers" : [
            "Ha implementáljuk, akkor az objektum másolása előtt fel kell szabadítani a már lefoglalt memóriát.",
            "Ha a másoló konstruktort megvalósítjuk, akkor ajánlott az értékadó operátort is megvalósítani.",
            "A fordító generál egy másoló konstruktort, ha nem implementáljuk.",
            "Egy osztálynak csak egy másoló konstruktora lehet."
        ],
        "key" : [
            false,
            true,
            true,
            false
        ]
    },
    {
        "question" : "Mi igaz a destruktorra?",
        "answers" : [
            "Ha nem valósítjuk meg, akkor a fordító legenerálja.",
            "Csak egy lehet belőle.",
            "Lehet virtuális vagy konstans is.",
            "Csak itt szabadíthatjuk fel az osztály által lefoglalt memóriát."
        ],
        "key" : [
            true,
            true,
            false,
            false
        ]
    },
    {
        "question" : "Mikor ajánlott virtuálissá tenni a destruktort?",
        "answers" : [
            "Akkor, ha van virtuális metódusa.",
            "Akkor, ha az osztályból származtatunk további osztályokat.",
            "Minden esetben.",
            "Akkor, ha polimorfikusan akarjuk törölni."
        ],
        "key" : [
            true,
            false,
            false,
            true
        ]
    },
    {
        "question" : "Hogyan adhatom meg egy pointereket tároló set-nek, hogy mit használjonösszehasonlításkor?",
        "answers" : [
            "Definiálunk egy globális < operátort két pointer típussal.",
            "Nem lehet megadni",
            "Megadhatunk egy függvényt, ami bool típussal tér vissza, és két paramétere van (olyan típusúak, amit a set tárol)",
            "Egy olyan osztály megadásával, amelyik definiálja a < operátort"
        ],
        "key" : [
            false,
            false,
            false,
            true
        ]
    },
    {
        "question" : "Mi történik, ha egy olyan osztálynak nem valósítjuk meg a másolását, amelyiknek van egy vector adattagja, ami pointereket tárol?",
        "answers" : [
            "Jól fog működni, a vector tudja, hogyan kell a pointer által mutatott objektumokat lemásolni.",
            "Lehetnek olyan esetek, amikor nem szükséges a másolás megvalósítása.",
            "Legkésőbb a memória felszabadításánál megszakad a program futása és hibával kilép.",
            "Minden esetben rosszul fog működni a program."
        ],
        "key" : [
            false,
            true,
            false,
            false
        ]
    },
    {
        "question" : "Mi a különbség a struct és a class között C++-ban?",
        "answers" : [
            "A struct csak egyszerű adatszerkezetekre hasznalatos.",
            "A class nem használható egyszerű adatok tárolására.",
            "Mindkettő használható öröklődéshez.",
            "A struct tagjainak alapertelmezett lathatósága public.",
            "A class objektumorientalt programozásban használható, a struct nem."
        ],
        "key" : [
            false,
            false,
            true,
            true,
            false
        ]
    },
    {
        "question" : "Melyik állítás igaz egy osztály deklarációra vagy definícióra?",
        "answers" : [
            "Az osztály deklarációja nem hoz létre példányosítható objektumot.",
            "Az osztály deklarációja csak azt mondja meg, hogy az osztály létezik.",
            "Ha mar definialtunk egy osztaly, akkor kesobb mar nem lehet deklarálni.",
            "Egy osztályhoz több definíció is létezhet.",
            "Az osztály deklarációja lehetővé teszi pointerek és referenciák használatát.",
            "Egy osztályhoz több deklaráció is létezhet",
            "Egy definiált osztályt mindig lehet példányosítani."
        ],
        "key" : [
            true,
            true,
            false,
            false,
            true,
            true,
            false
        ]
    },
    {
        "question" : "Mikor célszerű struct helyett class-t használni?",
        "answers" : [
            "Ha objektumorientált tervezést alkalmazunk.",
            "Ha kizárólag olvasási/írási műveleteket végzünk az adatokkal.",
            "Ha az adatok mellett logikai műveleteket is végrehajtunk",
            "Ha nincs szükség láthatósági szintek használatára.",
            "Ha szükség van láthatósági szintek kezelésére"
        ],
        "key" : [
            false,
            false,
            true,
            false,
            true
        ]
    },
    {
        "question" : "Mikor használjunk névtereket C++-ban?",
        "answers" : [
            "Ha különböző projektekben azonos nevű entitásokat használunk.",
            "Ha a statikus globális változókat szeretnénk kiváltani C++-os megoldással.",
            "Ha a globális névtér zsúfolttá válna.",
            "Ha van azonos nevű osztályunk",
            "Ha nem használunk külső könyvtárakat.",
            "Ha szeretnénk fordítási egységre megszorítani a láthatóságot",
            "Ha logikailag összetartozó osztályokat, függvényeket szeretnénk csoportosítani.",
            "Ha szeretnenk strukturáltabbá tenni a kódot"
        ],
        "key" : [
            true,
            true,
            true,
            true,
            false,
            true,
            true,
            true
        ]
    },
    {
        "question" : "Mi igaz C++-ban a template-ekre?",
        "answers" : [
            "Az std-ben lévő template-eket is lehet specializálni.",
            "Ugyanúgy működnek, mint Javaban a generikusok",
            "Fordításkór generálódik az adott template példány kódja",
            "Lehet specializalni a template-eket.",
            "Lehet template függvényeket is készíteni."
        ],
        "key" : [
            true,
            false,
            true,
            true,
            true
        ]
    },
    {
        "question" : "Mi a C++ union lényege?",
        "answers" : [
            "Használható olyan adatok tárolására, amelyek sosem lesznek egyidejűleg használatban.",
            "Az union egyszerre több adattagot is képes tárolni.",
            "Az union kizárólag primitív típusokat tárolhat.",
            "Minden adattag ugyanazon a memóriaterületen osztozik",
            "Az union egyszerre csak egy adattagot tárol."
        ],
        "key" : [
            true,
            false,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Mi a C++ union lényege?",
        "answers" : [
            "Az union adattagjai nem rendelkezhetnek különböző típusokkal.",
            "Az union egyszerre csak egy adattagot tárol.",
            "Az union kizárólag primitív típusokat tárolhat.",
            "Az union adattagjai külön memóriaterületen tárolódnak.",
            "Az union egyszerre több adattagot is képes tárolni."
        ],
        "key" : [
            false,
            true,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Mi a különbség a struct és a class között C++-ban?",
        "answers" : [
            "A class objektumorientalt programozásban használható, a struct nem",
            "Mindkettő használható öröklődéshez.",
            "A struct nem támogatja az öröklődést.",
            "A class nem használhato egyszerű adatok tárolására.",
            "A struct csak alapertelmezett konstruktorokat tartalmazhat."
        ],
        "key" : [
            false,
            true,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Melyik állítás igaz egy osztály deklarációra vagy definícióra?",
        "answers" : [
            "Az osztály deklarációja csak azt mondja meg, hogy az osztály létezik.",
            "Egy osztályhoz több definíció is létezhet.",
            "Az osztály deklarációja lehetővé teszi pointerek és referenciák használatát.",
            "Egy osztalyhoz tobb deklaracio is letezhet.",
            "Egy definiált osztályt mindig lehet példányosítani."
        ],
        "key" : [
            true,
            false,
            true,
            true,
            false
        ]
    },
    {
        "question" : "Mikor célszerű struct helyett class-t használni?",
        "answers" : [
            "Ha objektumorientált tervezést alkalmazunk.",
            "Ha szükség van láthatósági szintek kezelésére.",
            "Ha nincs szükség láthatósági szintek használatára.",
            "Ha az adatainkhoz metódusokat is definiálunk.",
            "Ha az adatok mellett logikai műveleteket is végrehajtunk."
        ],
        "key" : [
            false,
            true,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Mi igaz C++-ban a template-ekre?",
        "answers" : [
            "Ugyanúgy működnek, mint Javaban a generikusok",
            "Csak tipust (pl. int) adhatunk meg parameternek",
            "Típusfüggetlen algoritmusokat írhatunk a használatukkal.",
            "Az std-ben levő template-eket is lehet specializálni.",
            "Fordításkór generálódik az adott template példány kódja."
        ],
        "key" : [
            false,
            false,
            true,
            true,
            true
        ]
    },
    {
        "question" : "Melyik tagfügvényből nem lehet több egy osztályban?",
        "answers" : [
            "Másoló konstruktor",
            "Destruktor",
            "Konstruktor",
            "Értékadó operátor",
            "Konverziós operátor",
            "Indexer operator"
        ],
        "key" : [
            false,
            true,
            false,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Melyik állítás igaz?",
        "answers" : [
            "A nem const metódus nem hívhat const metódust.",
            "Egy nem const objektum csak nem const metódusokat hívhat.",
            "A const metódus hivhat nem const metódusokat.",
            "A const metódusok csak const metódusokat hívhatnak.",
            "A nem const metódus hívhat const metódusokat."
        ],
        "key" : [
            false,
            false,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Az alábbi allítasok kozul melyik igaz a referenciara ES a pointerre is?",
        "answers" : [
            "Függvény paraméterek esetében használjuk, ha nem érték szerint akarjuk átadni a paramétert",
            "Meg tudjuk változtatni vele egy másik változó értékét",
            "Deklarációnál meg kell adni, hogy kire hivatkozik",
            "Alkalmazhatjuk rá a pointer-aritmetikát",
        ],
        "key" : [
            true,
            true,
            false,
            false
        ]
    },
    {
        "question" : "Melyik allitas igaz az adattagokra abban az esetben, ha egy osztalyban nem adtunk meg semmilyen láthatóságot sem?",
        "answers" : [
            "Az alapertelemezett lathatóság private, azonban az oröklődés láthatósága módosítja a gyerek osztályban található adattagok láthatóságát is.",
            "Fordítási hibát kapunk.",
            "C++-ban a tagok alapertelmezett lathatosaga osztalyok eseteben public.",
            "A szabvany nem definialja ezen tagok lathatosagat, így a fordíto barmilyen lathatóságot adhat nekik.",
        ],
        "key" : [
            false,
            false,
            false,
            false
        ]
    },
    {
        "question" : "C++-ban a throw utasitas segítségével ...",
        "answers" : [
            "csak std :: exception osztályt vagy abból származó osztályt lehet kivételként dobni.",
            "egyszerre tobb kivtelt is eldobhatunk, vesszővel kell felsorolni.",
            "eldobott kivetelt minden esetben referenciakent kell elkapni.",
            "bármilyen típust lehet kivételként dobni.",
        ],
        "key" : [
            false,
            false,
            false,
            true
        ]
    },
    {
        "question" : "Egy Pelda osztalyban definialunk egy void foo() friend függvényt. Mi igaz a foo()-ra?",
        "answers" : [
            "Egy osztályhoz több friend függvényt is megadhatunk.",
            "A foo() hozzáfér a Pelda osztály adattagjaihoz.",
            "A foo() láthatóságát nem tudjuk szabályozni az osztályon belül.",
            "A foo() nem lesz a Pelda osztály tagfüggvénye."
        ],
        "key" : [
            true,
            true,
            true,
            true
        ]
    },
    {
        "question" : "Mikor kell a másoloó konstruktort és az értekadó operátort megvalósítani?",
        "answers" : [
            "Nem szükséges, a forditó mindkettőt legenerálja, és azok minden esetben megfelelően működnek",
            "Csak akkor kell megvalósítani, ha a láthatóságukat akarjuk csökkenteni vagy meg akarjuk tiltani a másolást",
            "Akkor, ha az objektum olyan erőforrast használ (pl. dinamikusan foglalt memoriát), aminek a másolásáról nekünk kell gondoskodni",
            "Akkor kell, ha tudjuk előre, hogy az objektumokat majd másolni fogjuk"
        ],
        "key" : [
            false,
            false,
            true,
            false
        ]
    },
    {
        "question" : "Mire jó az override a metódus esetében?",
        "answers" : [
            "Csak Javaban van Override, es ott nagy kezdőbetűvel kell írni",
            "Ha egy metódus az ősosztalyban nem virtuális, akkor az override segítségevel mégis felül tudjuk definiálni",
            "Ha az a metódus, amelyikre alkalmazzunk nem definiál felül másik metódust, akkor fordítási hibát kapunk",
            "A fordító nem hasznalja, csak a fejlesztőknek könnyebb megerteni a forráskódot"
        ],
        "key" : [
            false,
            false,
            true,
            false
        ]
    },
    {
        "question" : "Mit jelent az C++ szerint, hogy egy viselkedes nem definialt (unspecified behavior)?",
        "answers" : [
            "A program viselkedese nem definialt, barmilyen output vagy viselkedes szabvany szerint elfogadott kiemente a programnak.",
            "A szabvany nem specifikalja pontosan, de a C++ fordíto dokumentálja az adott viselkedést.",
            "Azt jelenti, hogy a függvényhívásnál a paraméterek sorrendjének kiértékelése nem definiált.",
            "Azt jelenti, hogy a size_t merete nem definiált, ez architektúra függő."
        ],
        "key" : [
            false,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Mikor kapunk fordítási hibát, ha a final módosítót alkalmazzuk egy metódusra?",
        "answers" : [
            "Ha a metódus nem virtuális",
            "A final-t csak osztályra lehet alkalmazni",
            "Ha a metódus static",
            "Ha a metodus nem definial felül egy örökölt metódust"
        ],
        "key" : [
            true,
            false,
            true,
            false
        ]
    },
    {
        "question" : "Mit jelent az C++-ban, hogy egy metodust const?",
        "answers" : [
            "Azt jelenti, hogy csak const metodusokat hivhat.",
            "Azt jelenti, hogy minden parametere const.",
            "Azt jelenti, hogy az objektum allapotat nem valtoztathatja meg.",
            "Azt jelenti, hogy az osztály adattagjait nem változtathatja meg."
        ],
        "key" : [
            false,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Az alábbiak közül melyik számít bele a metódus szignatúrájába? (Azaz mi alapján tudunk megkülönböztetni két metódust?)",
        "answers" : [
            "Az, hogy a metodus const vagy sem",
            "A parameterek neve",
            "A parameterekre vonatkozó const kulcsszó",
            "A visszatérési érték"
        ],
        "key" : [
            true,
            false,
            true,
            false
        ]
    },
    {
        "question" : "Mi igaz a class Example (; osztály konstruktorára?",
        "answers" : [
            "Mindig kötelező megvalósítani egy konstruktort, különben nem tudjuk példányosítani az osztályt",
            "A fordito minden esetben general egy konstruktort",
            "Ha van egy Example(int i = 5) { / *...* / } konstruktor, akkor nem lehet default konstruktort megadni",
            "A konstruktor inicializáló listában csak az ősosztály konstruktorát lehet meghívni"
        ],
        "key" : [
            false,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Mely esetekben nem lehet peldányosítani egy osztályt?",
        "answers" : [
            "Nincs egyetlen publikus konstruktora sem",
            "Nincs egyetlen adattagja sem",
            "C++-ban mindig lehet peldányosítani egy osztályt",
            "Ha a default konstruktora \"törölve van\" ( Example() = delete; )",
        ],
        "key" : [
            false,
            false,
            false,
            false
        ]
    },
    {
        "question" : "Mi a dinamikus memória foglalás előnye C++-ban?",
        "answers" : [
            "Nagyobb memóriateruleten történik a foglalás, mint a stack esetén.",
            "A programozó manualisan vezerélheti a foglalást es felszabadítast.",
            "A dinamikusan foglalt objektumok címe mutatóval elérhető.",
            "Az objektumok élettartama túlléphet a letrehozó blokk élettartamán."
        ],
        "key" : [
            true,
            true,
            true,
            true
        ]
    },
    {
        "question" : "Mi a polimorfizmus lényege?",
        "answers" : [
            "Csak referencia szerinti paraméterátadás esetén működik.",
            "Az öröklődésre épülő dinamikus viselkedés",
            "Érték szerinti paraméterátadásnál nem működik",
            "Azonos interfészen keresztül különböző implementációk használata.",
            "A polimorfizmus mindig implicit módon törtenik"
        ],
        "key" : [
            true,
            true,
            true,
            true,
            true
        ]
    },
    {
        "question" : "Mikor használjunk dinamikus memóriát osztályokban?",
        "answers" : [
            "Ha van virtualis destruktorunk.",
            "Ha a memória automatikusan felszabadulhat.",
            "Ha az adatok élettartama túllépi az osztály példányának élettartamát.",
            "Ha az adattagok mérete futásidőben változik."
        ],
        "key" : [
            true,
            true,
            true,
            true
        ]
    },
    {
        "question" : "Miért lehet szökség konverziós operátorokra C++-ban?",
        "answers" : [
            "Lehetővé teszik az osztály objektumainak implicit átalakítását",
            "Segítenek az osztályok kompatibilitásának növelésében más típusokkal.",
            "Egyértelmű szabályokat biztosítanak a típuskonverzióhoz.",
            "Csak numerikus konverziókra használhatók.",
            "Javítják a kód rugalmasságát és használhatóságát."
        ],
        "key" : [
            true,
            true,
            true,
            false,
            true,
        ]
    },
    {
        "question" : "Mi az operátor kiterjesztés célja C++-ban?",
        "answers" : [
            "Támogatja az objektumorientált programozás elveit",
            "Segiti a kód olvashatosagat es természetesebb használatát.",
            "A Javahoz hasonló működést biztosítson.",
            "Lehetővé teszi, hogy osztályok saját működést definiáljanak az operátorok számára."
        ],
        "key" : [
            true,
            true,
            false,
            true
        ]
    },
    {
        "question" : "Miért hasznos a destruktor használata az osztályokban?",
        "answers" : [
            "Lehetővé teszi a dinamikusan foglalt memória biztonságos felszabadítását",
            "Biztosítják az objektum helyes polimorfikus törlését.",
            "Elkerülhetők vele a memóriaszivárgások.",
            "A programozó garantálhatja az objektum szabályos megszűnését."
        ],
        "key" : [
            true,
            true,
            true,
            true
        ]
    },
    {
        "question" : "Hogyan befolyásolja az orökldes lathatósaga a tagok elerését?",
        "answers" : [
            "Publikus öröklődés esetén az ősosztály privát tagjai privátok maradnak.",
            "A privát tagok protecteddé válnak protected öröklődés esetén.",
            "A privát tagok soha nem oröklődnek közvetlenül.",
            "Protected oroklodes eseten az ősosztaly publikus tagjai protectedde valnak."
        ],
        "key" : [
            false,
            false,
            true,
            true
        ]
    },
    {
        "question" : "Hogyan befolyásolja az orökldes lathatósaga a tagok elerését?",
        "answers" : [
            "Publikus oröklődés esetén az ősosztály publikus tagjai publikusak maradnak.",
            "A láthatóság csak az ősosztályból származtatott hozzáférést érinti.",
            "Private oröklődés esetén az ősosztály publikus és protected tagjai priváttá válnak."
        ],
        "key" : [
            true,
            false,
            false
        ]
    },
    {
        "question" : "Mi az öröklődés célja C++-ban?",
        "answers" : [
            "Minden öröklődési kapcsolat kétiránvú",
            "Egy osztály újrahasznosítása és kibővitése",
            "A kód újrafelhasználhatóságának növelése",
            "Az öröklődés csak publikus adattagokat támogat"
        ],
        "key" : [
            false,
            true,
            true,
            false,
        ]
    },
    {
        "question" : "Hogyan kezelhető a dinamikus memória foglalás hibája C++-ban?",
        "answers" : [
            "Használhatjuk a new (nothrow) változatot, hogy elkerüljük a kivétel dobását.",
            "Biztosíthatjuk, hogy elég memóriát szabadítunk fel előtte.",
            "Ellenőrizhetjük a visszatérési értéket, hogy nullptr-e.",
            "Használhatunk try-catch blokkot a bad_alloc kivetel kezelesere."
        ],
        "key" : [
            true,
            false,
            true,
            true,
        ]
    },
    {
        "question" : "Milyen feltételek szükségesek a polimorfizmushoz C++-ban?",
        "answers" : [
            "A virtual kulcsszó nelkül is minden metódus polimorfikus",
            "A referencia vagy pointer alapú paraméterátadás.",
            "Az érték szerinti paraméterátadás támogatja a polimorfizmust.",
            "A virtual kulcsszóval ellátott metódus"
        ],
        "key" : [
            false,
            true,
            false,
            true
        ]
    },
    {
        "question" : "Miért érdemes pointereket tárolni a polimorfikus objektumokhoz?",
        "answers" : [
            "Az ősosztály pointere elérheti a leszármazott osztály metódusait",
            "Így memóriát spórolhatunk",
            "Megőrzik az objektum valódi típusát.",
            "A pointerek mindig automatikusan kezelik az objektum élettartamát"
        ],
        "key" : [
            true,
            false,
            true,
            false
        ]
    }
]
