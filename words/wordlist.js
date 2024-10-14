let wordList = [
	{
		theme: "fizik",
		words: ["atom", "dalga", "enerji","parçacık"],
	},
	{
		theme: "adalet",
		words: ["ceza", "savcı", "avukat", "müşteki"],
	},
	{
		theme: "dans",
		words: ["vals", "ritim", "kostüm", "flamenko"],
	},
	{
		theme: "duygular",
		words: ["öfke", "hüzün", "minnet", "heyecan"],
	},
	{
		theme: "havacılık",
		words: ["kule", "apron", "kokpit", "türbülans"],
	},
	{
		theme: "tiyatro",
		words: ["perde", "kulis", "replik", "dramaturg"],
	},
	{
		theme: "moda",
		words: ["stil", "trend", "defile", "aksesuar"],
	},
	{
		theme: "bankacılık",
		words: ["faiz", "kredi", "mevduat", "transfer"],
	},
	{
		theme: "sinema",
		words: ["kurgu", "bilet", "efekt", "fragman"],
	},
	{
		theme: "futbol",
		words: ["kale", "ofsayt", "forvet", "antrenör"],
	},
	{
		theme: "alışveriş",
		words: ["kasa", "mağaza", "fatura", "indirim"],
	},
	{
		theme: "kebaplar",
		words: ["beyti", "tandır", "büryan", "iskender"],
	},
	{
		theme: "seyahat",
		words: ["rota", "rehber", "turist", "pasaport"],
	},
	{
		theme: "cumhuriyet🇹🇷",
		words: ["halk", "devrim", "anayasa", "egemenlik"],
	},
	{
		theme: "uzay",
		words: ["uydu", "yıldız", "yörünge", "galaksi"],
	},
	{
		theme: "tıp",
		words: ["ilaç","tedavi", "anestezi", "ameliyat"]
	},
	{
		theme: "finans",
		words: ["döviz", "borsa", "yatırım", "portföy"],
	},
	{
		theme: "matematik",
		words: ["sayı","matris", "denklem","değişken" ],
	},
	{
		theme: "siyaset",
		words: ["parti", "seçim", "muhalif", "hükümet"],
	},
	{
		theme: "deniz",
		words: ["gemi", "dalgıç", "yengeç", "denizaltı"],
	},
	{
		theme: "edebiyat",
		words: ["öykü", "kurgu", "metafor", "karakter"],
	},
	{
		theme: "fotoğrafçılık",
		words: ["odak", "tripod", "portre", "objektif"],
	},
	{
		theme: "coğrafya",
		words: ["kıta", "nehir", "alüvyon", "yarımada"],
	},
	{
		theme: "internet",
		words: ["site", "email", "sunucu", "tarayıcı"],
	},
	{
		theme: "din",
		words: ["mabet", "inanç", "ritüel", "peygamber"],
	},
	{
		theme: "Atatürk ♾️",
		words: ["gazi", "nutuk", "selanik", "anıtkabir"],
	},
	{
		theme: "müzik",
		words: ["pena", "beste", "melodi", "orkestra"],
	},
	{
		theme: "sosyal medya",
		words: ["takip", "beğeni", "hikaye", "etkileşim"],
	},
	{
		theme: "meteoroloji",
		words: ["dolu", "lodos", "basınç", "keşişleme"],
	},
	{
		theme: "antik",
		words: ["efes", "fresk", "mozaik", "arkeoloji"],
	},
	{
		theme: "gastronomi",
		words: ["gurme", "marine", "alakart", "kornişon"],
	},
	{
		theme: "şehirlerimiz",
		words: ["mersin","artvin","bayburt","tekirdağ"],
	},
	{
		theme: "avrupa başkentleri",
		words: ["bern","dublin","kopenhag","budapeşte"],
	},
	{
		theme: "bulaşıcı hastalıklar",
		words: ["uyuz","ebola","şarbon","tetanoz"],
	},
	{
		theme: "olimpiyat sporları",
		words: ["golf","güreş","hentbol","badminton"],
	},
	{
		theme: "afrika ülkeleri",
		words: ["mali","sudan","uganda","etiyopya"],
	},
	{
		theme: "çiçekler",
		words: ["çuha","açelya","yasemin","kasımpatı"],
	},
	{
		theme: "tatlılar",
		words: ["aşure","revani","şöbiyet","supangle"],
	},
	{
		theme: "balıklar",
		words: ["yayın","çipura","minekop","istavrit"],
	},
	{
		theme: "köy",
		words: ["ahır","kümes","muhtar","traktör"],
	},
	{
		theme: "mutfak",
		words: ["rende","oklava","blender","spatula"],
	},
	{
		theme: "bebek",
		words: ["telsiz","yürüteç","lazımlık","bıngıldak"],
	},
	{
		theme: "tarım",
		words: ["anız","tohum","organik","traktör"],
	},
	{
		theme: "mimari",
		words: ["avlu","sütun","gotik","payanda"],
	},
	{
		theme: "meslekler",
		words: ["aktar","analist","öğretmen","diyetisyen"],
	},
	{
		theme: "hırdavat",
		words: ["çivi","balyoz","testere","köşebent"],
	},
	{
		theme: "elektrik",
		words: ["akım","voltaj","fatura","mühendis"],
	},
	{
		theme: "psikoloji",
		words: ["algı","bilinç","davranış","katarsis"],
	},
	{
		theme: "denizcilik",
		words: ["rota","yelken","kabotaj","şamandıra"],
	},
	{
		theme: "kimya",
		words: ["asit","füzyon","molekül","reaksiyon"],
	},
	{
		theme: "güney amerika",
		words: ["peru","amazon","karnaval","arjantin"],
	},
	{
		theme: "japonya",
		words: ["suşi","geyşa","samuray","hiroşima"],
	},
	{
		theme: "istanbul semtleri",
		words: ["vefa","balat","kanlıca","nişantaşı"],
	},
	{
		theme: "meyve",
		words: ["erik","mango","greyfurt","böğürtlen"],
	},
	{
		theme: "halk oyunları",
		words:["teke","horon","kafkas","karşılama"]
	},
	{
		theme: "karadeniz",
		words: ["uşak", "tulum", "yayla", "trabzon"],
	},
	{
		theme: "sebze",
		words: ["pazı", "brokoli", "bezelye", "semizotu"],
	},
	{
		theme: "oyun",
		words: ["tabu", "kural", "satranç", "iskambil"],
	},
	{
		theme: "içecek",
		words: ["şıra", "salep", "limonata", "hardaliye"],
	},
	{
		theme: "protein",
		words: ["soya", "balık", "bezelye", "mercimek"],
	},
	{
		theme: "baharat",
		words: ["sumak","tarçın", "anason", "zerdeçal"],
	},
	{
		theme: "ankara",
		words: ["odtü","memur", "meclis", "çankaya"],
	},
	{
		theme: "güvenlik",
		words: ["kasa", "kilit", "koruma", "jandarma"],
	},
	{
		theme: "ekonomi",
		words: ["talep", "ithalat", "kambiyo", "likidite"],
	},
	{
		theme: "akrabalar",
		words: ["dünür", "baldız", "enişte", "büyükbaba"],
	},
	{
		theme: "asya ülkeleri",
		words: ["singapur", "kamboçya", "maldivler", "gürcistan"],
	},
	{
		theme: "tekstil",
		words: ["astar", "likra", "gabardin", "polyester"],
	},
	{
		theme: "otomotiv",
		words: ["turbo", "vites", "pedal", "enjektör"],
	},
	{
		theme: "alkollü",
		words: ["votka", "likör", "brendi", "şampanya"],
	},
	{
		theme: "osmanlı",
		words: ["fatih", "kanuni", "sadrazam", "devşirme"],
	},
	{
		theme: "hukuk",
		words: ["yasa", "istinaf", "müdafaa", "mülkiyet"],
	},
	{
		theme: "kamu",
		words: ["idare", "kamuoyu", "güvenlik", "müsteşar"],
	},
	{
		theme: "müzik",
		words: ["albüm", "dinleti", "soprano", "akustik"],
	},
	{
		theme: "meyve",
		words: ["elma","karpuz","ananas","portakal"],
	},
	{
		theme: "astronomi",
		words: ["mars","meteor","teleskop","samanyolu"],
	},
	{
		theme: "peynir",
		words: ["çerkez","hellim","gravyer","parmesan"],
	},
	{
		theme: "meze",
		words: ["acuka","kısır","tarator","muhammara"],
	},
	{
		theme: "turizm",
		words: ["müze","keşif","festival","güzergah"],
	},
	{
		theme: "tiyatro",
		words: ["skeç","dekor","tuluat","mizansen"],
	},
	{
		theme: "moda",
		words: ["retro", "kombin", "kaşmir","podyum"],
	},
	{
		theme: "tatil",
		words: ["resmi", "deniz", "bayram","yurtdışı"],
	},
	{
		theme: "bahçe",
		words: ["çapa", "fidan", "peyzaj","kompost"],
	},
	{
		theme: "sebze",
		words: ["bamya", "pırasa", "enginar","kuşkonmaz"],
	},
	{
		theme: "eski uygarlıklar",
		words: ["maya", "aztek", "fenike","hattuşa"],
	},
	{
		theme: "inşaat",
		words: ["kolon", "kiriş", "şantiye","izolasyon"],
	},
	{
		theme: "elektronik",
		words: ["devre", "sensör", "batarya","regülatör"],
	},
	{
		theme: "sinema",
		words: ["efekt", "montaj", "aksiyon","yönetmen"],
	},
	{
		theme: "dans",
		words: ["bale", "tango", "rumba","sirtaki"],
	},
	{
		theme: "tarım",
		words: ["gübre", "hasat", "sulama","domates"],
	},
	{
		theme: "hayvan",
		words: ["panda", "yarasa", "kanguru","gergedan"],
	},
	{
		theme: "çiçek",
		words: ["lale", "mimoza", "nilüfer","krizantem"],
	},
	{
		theme: "renk",
		words: ["mavi", "fuşya", "yavruağzı","camgöbeği"],
	},
	{
		theme: "taş",
		words: ["akik", "zümrüt", "kehribar","ametist"],
	},
	{
		theme: "fitness",
		words: ["yoga", "kardiyo", "pilates","egzersiz"],
	},
	{
		theme: "kahvaltı",
		words: ["reçel", "salam", "menemen","yumurta"],
	},
	{
		theme: "spor",
		words: ["kano", "eskrim", "kriket","tekvando"],
	},
	{
		theme: "şehirler",
		words: ["uşak", "bingöl", "ardahan","çankırı"],
	},
	{
		theme: "ankara",
		words: ["ulus", "tunalı", "elmadağ","keçiören"],
	},
	{
		theme: "banyo",
		words: ["fırça", "jakuzi", "şampuan","sabunluk"],
	},
	{
		theme: "ev yemeği",
		words: ["türlü", "sarma", "mücver", "musakka"],
	},
	{
		theme: "çocuk",
		words: ["park", "karne", "kumbara", "oyuncak"],
	},
	{
		theme: "geometri",
		words: ["küre", "yamuk", "yarıçap", "hipotenüs"],
	},
	{
		theme: "kahvehane",
		words: ["okey", "yancı", "batak", "oralet"],
	},
	{
		theme: "italya",
		words: ["pizza", "venedik", "ferrari", "floransa"],
	},
	{
		theme: "avrupa",
		words: ["çekya", "norveç", "letonya", "danimarka"],
	},
	{
		theme: "uzay",
		words: ["mars", "neptün", "bulutsu", "süpernova"],
	},
	{
		theme: "askeriye",
		words: ["kışla", "rütbe", "komando", "garnizon"],
	},
	{
		theme: "deniz",
		words: ["korsan", "mercan", "ahtapot", "istiridye"],
	},
	{
		theme: "tarih",
		words: ["belge", "hanedan", "muharebe", "antlaşma"],
	},
	{
		theme: "sıcak",
		words: ["ateş", "güneş", "yemek", "çikolata"],
	},
	{
		theme: "fantastik",
		words: ["büyü", "vampir", "ejderha", "canavar"],
	},
	{
		theme: "müze",
		words: ["eser", "heykel", "küratör", "arkeoloji"],
	},
	{
		theme: "izmir",
		words: ["boyoz", "çeşme", "kordon", "karşıyaka"],
	},
	{
		theme: "gece",
		words: ["uyku", "yıldız", "baykuş", "karanlık"]
	},
	{
		theme: "büyük",
		words: ["harf", "altın", "taarruz", "iskender"]
	},
	{
		theme: "soğuk",
		words: ["ayaz", "savaş", "espri", "baklava"]
	},
	{
		theme: "ışık",
		words: ["gölge", "optik", "kırılma", "floresan"]
	},
	{
		theme: "hayvan",
		words: ["sincap", "timsah", "zürafa", "hamster"]
	},
	{
		theme: "çöl",
		words: ["vaha", "yılan", "serap", "kaktüs"]
	},
	{
		theme: "ticaret",
		words: ["kart", "pazar", "ithalat", "perakende"]
	},
	{
		theme: "demiryolu",
		words: ["makas", "peron", "istasyon", "kondüktör"]
	},
	{
		theme: "ilişki",
		words: ["yakın", "sosyal", "toksik", "evlilik"]
	},
	{
		theme: "mücevher",
		words: ["küpe", "broş", "karat", "gerdanlık"]
	},
	{
		theme: "bilgisayar",
		words: ["fare", "dizüstü", "işlemci", "donanım"]
	},
	{
		theme: "iletişim",
		words: ["jest", "mesaj", "telefon", "pazarlama"]
	},
	{
		theme: "biyoloji",
		words: ["cins", "hücre", "anatomi", "mutasyon"]
	},
	{
		theme: "gastronomi",
		words: ["meze","tadım", "sunum", "baharat"]
	},
	{
		theme: "eğitim",
		words: ["burs","seminer", "pedagoji", "müfredat"]
	},
	{
		theme: "dağ",
		words: ["zirve","alpler", "everest", "alpinizm"]
	},
	{
		theme: "borsa",
		words: ["risk","kağıt", "menkul", "portföy"]
	},
	{
		theme: "rumeli",
		words: ["tuna","hisar", "selanik", "balkanlar"]
	},
	{theme: "balık",words:["hamsi","somon","mezgit","palamut"]},
	{theme: "meyve",words:["kivi","hurma","karpuz","ahududu"]},
	{
		theme: "türk müziği",
		words: ["semai","makam", "taksim", "bağlama"]
	},
		{theme: "kuruyemiş",words:["kaju","çerez","leblebi","çekirdek"]},
		{theme: "ağaç",words:["meşe","ladin","gürgen","palmiye"]},
		{theme: "tarım",words:["hasat","buğday","ilaçlama","seracılık"]},
	{theme: "müzik",words:["flüt","çello","konser","enstrüman"]},
	{theme: "edebiyat",words:["şiir","hiciv","trajedi","biyografi"]},
	{theme: "matematik",words:["küme","cebir","mantık","logaritma"]},
	{theme: "tarih",words:["roma","inkılap","kronoloji","medeniyet"]},
	{theme: "inşaat",words:["kaba","beton","altyapı","çimento"]},
	{theme: "renk",words:["haki","fildişi","turkuaz","eflatun"]},
	{theme: "kuş",words:["saka","turna","atmaca","kırlangıç"]},
	{theme: "dil",words:["lehçe","svahili","bulgarca","vietnamca"]},
	{theme: "hayvan",words:["yılan","atmaca","ahtapot","bukalemun"]},
	{theme: "botanik",words:["sera","tohum","yaprak","klorofil"]},
	{theme: "gelenek",words:["töre","adet", "kültür","görenek"]},
	{theme: "sulu",words:["boya","yemek", "sepken", "çözelti"]},
	{theme: "ortadoğu",words:["iran","basra", "süveyş", "piramit"]},
	{theme: "tiyatro",words:["gişe","sahne", "müzikal", "festival"]},
	{theme: "hormon",words:["insülin","dopamin", "endorfin", "adrenalin"]},
	{theme: "pandemi",words:["vaka","maske", "temas", "izolasyon"]},
	{theme: "akrabalar",words:["elti", "torun", "kuzen", "kayınço"]},
	{theme: "fizik",words:["ivme", "kütle", "frekans", "görelilik"]},
	{theme: "çorba",words:["paça", "balık", "şehriye", "lebeniye"]},
	{theme: "yeşillik",words:["tere", "pazı", "kişniş", "fesleğen"]},
	{theme: "metal",words:["cıva", "kurşun", "lityum", "magnezyum"]},
	{theme: "futbol",words:["asist", "verkaç", "penaltı", "bonservis"]},
	{theme: "basketbol",words:["smaç", "pota", "ribaund", "turnike"]},
	{theme: "doğa",words:["vadi", "orman", "şelale", "yürüyüş"]},
	{theme: "ilkbahar",words:["filiz", "nevruz", "kelebek", "tomurcuk"]},
	{theme: "sebze",words:["havuç", "bakla", "ıspanak", "karnabahar"]},
	{theme: "kimya",words:["enzim", "izotop", "bileşik", "elektron"]},
	{theme: "baharat",words:["köri", "safran", "kimyon", "biberiye"]},
	{
		theme: "fizik",
		words: ["atom", "dalga", "enerji","parçacık"],
	},
	{theme: "felsefe", words:["etik", "bilgi", "varoluş", "sokrates"]},
	{theme: "güneydoğu", words:["fırat", "halay", "mardin", "hasankeyf"]},
	{theme: "seçim", words:["anket", "pusula", "mazbata", "kampanya"]},
	{theme: "sanat", words:["opera", "galeri", "estetik", "edebiyat"]},
	{theme: "temizlik", words:["bahar", "hijyen", "paspas", "deterjan"]},
	{theme: "hamur işi", words:["pişi", "mantı", "poğaça", "kruvasan"]},
	{theme: "sokak lezzetleri", words:["simit", "midye", "kestane", "kokoreç"]},
	{theme: "kitap", words:["özet", "sahaf", "çevirmen", "kütüphane"]},
	{theme: "tatlı", words:["lokum", "güllaç", "kadayıf", "kazandibi"]},
	{theme: "dünya mutfağı", words:["suşi", "pizza", "falafel", "lazanya"]},
	{theme: "osmanlı", words:["murat", "söğüt", "rumeli", "karlofça"]},
	{theme: "yapay", words:["zeka", "çiçek", "toprak", "seçilim"]},
	{theme: "... etmek", words:["ikna", "devam", "teklif", "tavsiye"]},
	{theme: "divan edebiyatı", words:["aruz", "beyit", "nesir", "kaside"]},
	{theme: "coğrafya", words:["vadi", "delta", "yükselti", "okyanus"]},
	{theme: "... günü", words:["altın", "arife", "takvim", "kadınlar"]},
	{theme: "lojistik", words:["palet", "gabari", "dağıtım", "konteyner"]},
	{theme: "viral", words:["uçuk", "kuduz", "kızamık", "kabakulak"]},
	{theme: "havacılık", words:["apron", "kokpit", "karakutu", "altimetre"]},
	{theme: "okul", words:["kayıt", "öğrenci", "derslik", "mezuniyet"]},
	{theme: "emlak", words:["tapu", "kontrat", "taşınmaz", "depozito"]},
	{theme: "organ", words:["deri", "beyin", "pankreas", "karaciğer"]},
	{theme: "tekstil", words:["ipek", "kumaş", "terzi", "nakış"]},
	{theme: "medya", words:["dergi", "radyo", "viral", "editör"]},
	{theme: "yatırım", words:["risk", "tahvil", "getiri", "temettü"]},
	{theme: "çiçek", words:["orkide", "sümbül", "karanfil", "aslanağzı"]},
	{theme: "otomatik", words:["kapı", "vites", "makine", "portakal"]},
	{
		theme: "alışveriş",
		words: ["kasa", "mağaza", "fatura", "indirim"],
	},
	{
		theme: "meyve",
		words: ["erik","mango","greyfurt","böğürtlen"],
	},
	{theme: "mimari", words:["proje", "peyzaj", "tasarım", "neoklasik"]},
	{theme: "tıp", words:["hekim", "cerrahi", "muayene", "hipokrat"]},
	{theme: "duygu", words:["güven", "hayret", "sevinç", "bıkkınlık"]},
	{theme: "istanbul", words:["fatih", "galata", "ayasofya", "yerebatan"]},
	{theme: "ankara", words:["odtü", "çankaya", "hacettepe", "anıtkabir"]},
	{
		theme: "peynir",
		words: ["çerkez","hellim","gravyer","parmesan"],
	},
	{
		theme: "dans",
		words: ["vals", "ritim", "kostüm", "flamenko"],
	},
	{
		theme: "sinema",
		words: ["kurgu", "bilet", "efekt", "fragman"]
	},
	{
		theme: "adalet",
		words: ["ceza", "savcı", "avukat", "müşteki"]
	},
	{
		theme: "uzay",
		words: ["uydu", "yıldız", "yörünge", "galaksi"],
	},
	{
		theme: "olimpiyat",
		words: ["golf","güreş","hentbol","badminton"],
	},
	{
		theme: "deniz",
		words: ["gemi", "dalgıç", "yengeç", "denizaltı"],
	},
	{
		theme: "iletişim",
		words: ["jest", "mesaj", "telefon", "pazarlama"]
	},
	{
		theme: "tatlılar",
		words: ["aşure","revani","şöbiyet","supangle"],
	},
	{
		theme: "kebaplar",
		words: ["beyti", "tandır", "büryan", "iskender"],
	},
	{
		theme: "elektrik",
		words: ["akım","voltaj","fatura","mühendis"],
	},
	{
		theme: "köy",
		words: ["ahır","kümes","muhtar","traktör"],
	},
	{
		theme: "baharat",
		words: ["sumak","tarçın", "anason", "zerdeçal"],
	},
	{
		theme: "tarım",
		words: ["anız","tohum","organik","traktör"],
	},
	{
		theme: "kamu",
		words: ["idare", "kamuoyu", "güvenlik", "müsteşar"],
	},
		{
		theme: "mutfak",
		words: ["rende","oklava","blender","spatula"],
	},
	{
		theme: "kahvaltı",
		words: ["reçel", "salam", "menemen","yumurta"],
	},
	{
		theme: "bulaşıcı hastalıklar",
		words: ["uyuz","ebola","şarbon","tetanoz"],
	},
	{
		theme: "banyo",
		words: ["fırça", "jakuzi", "şampuan","sabunluk"],
	},
	{
		theme: "inşaat",
		words: ["kolon", "kiriş", "şantiye","izolasyon"],
	},
	{
		theme: "fotoğrafçılık",
		words: ["odak", "tripod", "portre", "objektif"],
	},
	{
		theme: "geometri",
		words: ["küre", "yamuk", "yarıçap", "hipotenüs"],
	},
	{
		theme: "askeriye",
		words: ["kışla", "rütbe", "komando", "garnizon"],
	},
	{
		theme: "çöl",
		words: ["vaha", "yılan", "serap", "kaktüs"]
	},
        {
		theme: "ticaret",
		words: ["kart", "pazar", "ithalat", "perakende"]
	},
	{
		theme: "hırdavat",
		words: ["çivi","balyoz","testere","köşebent"],
	},
	{
		theme: "çocuk",
		words: ["park", "karne", "kumbara", "oyuncak"],
	},
	{
		theme: "türk müziği",
		words: ["semai","makam", "taksim", "bağlama"]
	},
	{
		theme: "demiryolu",
		words: ["makas", "peron", "istasyon", "kondüktör"]
	},
	{
		theme: "antik",
		words: ["efes", "fresk", "mozaik", "arkeoloji"],
	},
	{
		theme: "protein",
		words: ["soya", "balık", "bezelye", "mercimek"],
	},
	{
		theme: "ışık",
	 	words: ["gölge", "optik", "kırılma", "floresan"]
	},
	{
		theme: "tarih",
		words: ["belge", "hanedan", "muharebe", "antlaşma"],
	},
	{
		theme: "güvenlik",
		words: ["kasa", "kilit", "koruma", "jandarma"],
	},
	{theme: "pandemi",words:["vaka","maske", "temas", "izolasyon"]},
	{
		theme: "hukuk",
		words: ["yasa", "istinaf", "müdafaa", "mülkiyet"],
	},
	{
		theme: "eski uygarlıklar",
		words: ["maya", "aztek", "fenike","hattuşa"],
	},
	{
		theme: "içecek",
		words: ["şıra", "salep", "limonata", "hardaliye"],
	},
	{
		theme: "sıcak",
		words: ["ateş", "güneş", "yemek", "çikolata"],
	},
	{theme: "okul", words:["kayıt", "öğrenci", "derslik", "mezuniyet"]},
	{
		theme: "meze",
		words: ["acuka","kısır","tarator","muhammara"],
	},
	{
		theme: "istanbul semtleri",
		words: ["vefa","balat","kanlıca","nişantaşı"],
	},
	{theme: "hamur işi", words:["pişi", "mantı", "poğaça", "kruvasan"]},
		{
		theme: "mücevher",
		words: ["küpe", "broş", "karat", "gerdanlık"]
	},
	{theme: "viral", words:["uçuk", "kuduz", "kızamık", "kabakulak"]},
	{theme: "botanik",words:["sera","tohum","yaprak","klorofil"]},
	{
		theme: "bilgisayar",
		words: ["fare", "dizüstü", "işlemci", "donanım"]
	},
	{theme: "gelenek",words:["töre","adet", "kültür","görenek"]},
		{
		theme: "otomotiv",
		words: ["turbo", "vites", "pedal", "enjektör"],
	},
		{
		theme: "avrupa başkentleri",
		words: ["bern","dublin","kopenhag","budapeşte"],
	},
	{
		theme: "internet",
		words: ["site", "email", "sunucu", "tarayıcı"],
	},
	{
		theme: "afrika ülkeleri",
		words: ["mali","sudan","uganda","etiyopya"],
	},
	{
		theme: "bebek",
		words: ["telsiz","yürüteç","lazımlık","bıngıldak"],
	},
	{
		theme: "japonya",
		words: ["suşi","geyşa","samuray","hiroşima"],
	},
	{
		theme: "taş",
		words: ["akik", "zümrüt", "kehribar","ametist"],
	},
	{
		theme: "meslekler",
		words: ["aktar","analist","öğretmen","diyetisyen"],
	},
	{
		theme: "halk oyunları",
		words:["teke","horon","kafkas","karşılama"]
	},
	{
		theme: "tatil",
		words: ["resmi", "deniz", "bayram","yurtdışı"],
	},
	{
		theme: "oyun",
		words: ["tabu", "kural", "satranç", "iskambil"],
	},
	{
		theme: "olimpiyat",
		words: ["golf","güreş","hentbol","badminton"],
	},
	{theme: "felsefe", words:["etik", "bilgi", "varoluş", "sokrates"]},
	{
		theme: "fizik",
		words: ["atom", "dalga", "enerji","parçacık"],
	},
	{theme: "divan edebiyatı", words:["aruz", "beyit", "nesir", "kaside"]},
	{
		theme: "alışveriş",
		words: ["kasa", "mağaza", "fatura", "indirim"],
	},
	{
		theme: "elektrik",
		words: ["akım","voltaj","fatura","mühendis"],
	},
	{
		theme: "din",
		words: ["mabet", "inanç", "ritüel", "peygamber"],
	},
	{
		theme: "denizcilik",
		words: ["rota","yelken","kabotaj","şamandıra"],
	},
	{
		theme: "kimya",
		words: ["asit","füzyon","molekül","reaksiyon"],
	},
	{
		theme: "güney amerika",
		words: ["peru","amazon","karnaval","arjantin"],
	},
	{
		theme: "tekstil",
		words: ["astar", "likra", "gabardin", "polyester"],
	},
	{theme: "sulu",words:["boya","yemek", "sepken", "çözelti"]},
	{theme: "ortadoğu",words:["iran","basra", "süveyş", "piramit"]},
	{theme: "hormon",words:["insülin","dopamin", "endorfin", "adrenalin"]},
	{theme: "geniş ...",words:["aile","omuz","ekran", "zaman"]},
	{
		theme: "hayvan",
		words: ["panda", "yarasa", "kanguru","gergedan"],
	},
	{
		theme: "büyük ...",
		words: ["harf", "altın", "taarruz", "iskender"]
	},
	{
		theme: "biyoloji",
		words: ["cins", "hücre", "anatomi", "mutasyon"]
	},
	{
		theme: "dağ",
		words: ["zirve","alpler", "everest", "alpinizm"]
	},
	{
		theme: "turizm",
		words: ["müze","keşif","festival","güzergah"],
	},
	{
		theme: "psikoloji",
		words: ["algı","bilinç","davranış","katarsis"],
	},
	{
		theme: "havacılık",
		words: ["kule", "apron", "kokpit", "türbülans"],
	},
	{
		theme: "bankacılık",
		words: ["faiz", "kredi", "mevduat", "transfer"],
	},
	{
		theme: "sosyal medya",
		words: ["takip", "beğeni", "hikaye", "etkileşim"],
	},
	{
		theme: "meteoroloji",
		words: ["dolu", "lodos", "basınç", "keşişleme"],
	},
	{
		theme: "balıklar",
		words: ["yayın","çipura","minekop","istavrit"],
	},
	{
		theme: "alkollü",
		words: ["votka", "likör", "brendi", "şampanya"],
	},
	{
		theme: "bahçe",
		words: ["çapa", "fidan", "peyzaj","kompost"],
	},
	{
		theme: "fitness",
		words: ["yoga", "kardiyo", "pilates","egzersiz"],
	},
	{theme: "... etmek", words:["ikna", "devam", "teklif", "tavsiye"]},
	{theme: "temizlik", words:["bahar", "hijyen", "paspas", "deterjan"]},
	{theme: "yapay", words:["zeka", "çiçek", "toprak", "seçilim"]},
	{theme: "lojistik", words:["palet", "gabari", "dağıtım", "konteyner"]},
	{
		theme: "gastronomi",
		words: ["meze","tadım", "sunum", "baharat"]
	},
	{
		theme: "ilişki",
		words: ["yakın", "sosyal", "toksik", "evlilik"]
	},
	{theme: "seçim", words:["anket", "pusula", "mazbata", "kampanya"]},
	{theme: "otomatik", words:["kapı", "vites", "makine", "portakal"]},
	{theme: "güneydoğu", words:["fırat", "halay", "mardin", "hasankeyf"]},
	{theme: "emlak", words:["tapu", "kontrat", "taşınmaz", "depozito"]},
	{
		theme: "fantastik",
		words: ["büyü", "vampir", "ejderha", "canavar"],
	},
	{
		theme: "elektronik",
		words: ["devre", "sensör", "batarya","regülatör"],
	},
	{
		theme: "olimpiyat sporları",
		words: ["boks", "tenis", "okçuluk","voleybol"],
	},
	{
		theme: "kahvehane",
		words: ["okey", "yancı", "batak", "oralet"],
	},
	{theme: "ilkbahar",words:["filiz", "nevruz", "kelebek", "tomurcuk"]},
	{
		theme: "futbol",
		words: ["kale", "ofsayt", "forvet", "antrenör"],
	},
	{theme: "tıp", words:["hekim", "cerrahi", "muayene", "hipokrat"]},
		{
		theme: "edebiyat",
		words: ["öykü", "kurgu", "metafor", "karakter"],
	},
		{
		theme: "coğrafya",
		words: ["kıta", "nehir", "alüvyon", "yarımada"],
	},
	{
		theme: "tiyatro",
		words: ["perde", "kulis", "replik", "dramaturg"],
	},
	{
		theme: "müzik",
		words: ["pena", "beste", "melodi", "orkestra"],
	},
	{
		theme: "moda",
		words: ["stil", "trend", "defile", "aksesuar"],
	},
	{
		theme: "sebze",
		words: ["pazı", "brokoli", "bezelye", "semizotu"],
	},
	{
		theme: "meyve",
		words: ["elma","karpuz","ananas","portakal"],
	},
	{
		theme: "dans",
		words: ["bale", "tango", "rumba","sirtaki"],
	},
	{
		theme: "gece",
		words: ["uyku", "yıldız", "baykuş", "karanlık"]
	},
	{
		theme: "müze",
		words: ["eser", "heykel", "küratör", "arkeoloji"],
	},
	{
		theme: "tiyatro",
		words: ["skeç","dekor","tuluat","mizansen"],
	},
	{
		theme: "seyahat",
		words: ["rota", "rehber", "turist", "pasaport"],
	},
	{
		theme: "ev yemeği",
		words: ["türlü", "sarma", "mücver", "musakka"],
	},
	{
		theme: "italya",
		words: ["pizza", "venedik", "ferrari", "floransa"],
	},
	{
		theme: "uzay",
		words: ["mars", "neptün", "bulutsu", "süpernova"],
	},
	{theme: "kuruyemiş",words:["kaju","çerez","leblebi","çekirdek"]},
	{theme: "ağaç",words:["meşe","ladin","gürgen","palmiye"]},
		{
		theme: "akrabalar",
		words: ["dünür", "baldız", "enişte", "büyükbaba"],
	},
		{
		theme: "izmir",
		words: ["boyoz", "çeşme", "kordon", "karşıyaka"],
	},
		{
		theme: "renk",
		words: ["mavi", "fuşya", "yavruağzı","camgöbeği"],
	},
	{
		theme: "borsa",
		words: ["risk","kağıt", "menkul", "portföy"]
	},
	{
		theme: "duygular",
		words: ["öfke", "hüzün", "minnet", "heyecan"],
	},
	{
		theme: "siyaset",
		words: ["parti", "seçim", "muhalif", "hükümet"],
	},
	{
		theme: "rumeli",
		words: ["tuna","hisar", "selanik", "balkanlar"]
	},
	{
		theme: "finans",
		words: ["döviz", "borsa", "yatırım", "portföy"],
	},
	{theme: "tarih",words:["roma","inkılap","kronoloji","medeniyet"]},
		{
		theme: "şehirlerimiz",
		words: ["mersin","artvin","bayburt","tekirdağ"],
	},
		{
		theme: "sebze",
		words: ["bamya", "pırasa", "enginar","kuşkonmaz"],
	},
		{
		theme: "müzik",
		words: ["albüm", "dinleti", "soprano", "akustik"],
	},
	{theme: "inşaat",words:["kaba","beton","altyapı","çimento"]},
	{theme: "coğrafya", words:["vadi", "delta", "yükselti", "okyanus"]},
		{
		theme: "sinema",
		words: ["efekt", "montaj", "aksiyon","yönetmen"],
	},
	{theme: "tatlı", words:["lokum", "güllaç", "kadayıf", "kazandibi"]},
	{theme: "metal",words:["cıva", "kurşun", "lityum", "magnezyum"]},
	{theme: "baharat",words:["köri", "safran", "kimyon", "biberiye"]},
		{
		theme: "ankara",
		words: ["ulus", "tunalı", "elmadağ","keçiören"],
	},
		{
		theme: "ekonomi",
		words: ["talep", "ithalat", "kambiyo", "likidite"],
	},
	{
		theme: "deniz",
		words: ["korsan", "mercan", "ahtapot", "istiridye"],
	},
	{theme: "... günü", words:["altın", "arife", "takvim", "kadınlar"]},
	{
		theme: "soğuk",
		words: ["ayaz", "savaş", "espri", "baklava"]
	},
	{theme: "edebiyat",words:["şiir","hiciv","trajedi","biyografi"]},
	{theme: "müzik",words:["flüt","çello","konser","enstrüman"]},
	{theme: "kuş",words:["saka","turna","atmaca","kırlangıç"]},
	{
		theme: "matematik",
		words: ["sayı","matris", "denklem","değişken" ],
	},
	{theme: "meyve",words:["kivi","hurma","karpuz","ahududu"]},
		{
		theme: "hayvan",
		words: ["sincap", "timsah", "zürafa", "hamster"]
	},
	{theme: "hamur işi", words:["pişi", "mantı", "poğaça", "kruvasan"]},
	{theme: "sokak lezzetleri", words:["simit", "midye", "kestane", "kokoreç"]},
	{theme: "geniş ...",words:["aile","omuz","ekran", "zaman"]},
	{
		theme: "adalet",
		words: ["ceza", "savcı", "avukat", "müşteki"],
	},
	{theme: "duygu", words:["güven", "hayret", "sevinç", "bıkkınlık"]},
	{theme: "astroloji", words:["burç", "yıldız", "zodyak", "yükselen"]},
	{
		theme: "ışık",
	 	words: ["gölge", "optik", "kırılma", "floresan"]
	},
	{
		theme: "meslekler",
		words: ["doktor","diplomat","çilingir","yazılımcı"],
	},
	{
		theme: "otomotiv",
		words: ["fren","motor","debriyaj","şanzıman"],
	},
	{
		theme: "gastronomi",
		words: ["gurme", "marine", "alakart", "kornişon"],
	},
	{
		theme: "bilgisayar",
		words: ["ekran", "sistem", "yazılım", "program"],
	},
	{
		theme: "bebek",
		words: ["mama","beşik","kundak","biberon"],
	},
	{
		theme: "asya",
		words: ["kore","nepal","vietnam","kamboçya"],
	},
	{
		theme: "mutfak",
		words: ["rende","oklava","blender","spatula"],
	},
	{
		theme: "askeri",
		words: ["ordu","nöbet","piyade","binbaşı"],
	}
	
	
]
