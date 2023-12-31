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
	}
]