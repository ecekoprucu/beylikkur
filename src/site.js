const komsuIl = [
	{
		il: 'van',
		komsu: ["agri","bitlis","sirnak","siirt","hakkari","igdir"]
	},
	{
		il: 'sanliurfa',
		komsu: ["mardin","diyarbakir","adiyaman","gaziantep"]
	},
	{
		il: 'sirnak',
		komsu: ["hakkari","van","siirt","mardin"]
	},
	{
		il: 'antalya',
		komsu: ["mugla","burdur","isparta","konya","karaman","mersin"]
	},
	{
		il: 'mersin',
		komsu: ["adana","nigde","karaman","antalya","konya"]
	},
	{
		il: 'adana',
		komsu: ["osmaniye","nigde","kahramanmaras","osmaniye","mersin"]
	},
	{
		il: 'kastamonu',
		komsu: ["sinop","corum","karabuk","bartin","cankiri"]
	},
	{
		il: 'mugla',
		komsu: ["aydin","denizli","antalya","burdur"]
	},
	{
		il: 'izmir',
		komsu: ["balikesir","manisa","aydin"]
	},
	{
		il: 'balikesir',
		komsu: ["izmir","bursa","kutahya","manisa","canakkale"]
	},
	{
		il: 'agri',
		komsu: ["igdir","kars","erzurum","mus","bitlis","van"]
	},
	{
		il: 'bursa',
		komsu: ["kocaeli","yalova","kutahya","balikesir","bilecik","sakarya"]
	},
	{
		il: 'mardin',
		komsu: ["batman","siirt","sanliurfa","sirnak","diyarbakir"]
	},
	{
		il: 'canakkale',
		komsu: ["balikesir","edirne","tekirdag"]
	},
	{
		il: 'artvin',
		komsu: ["rize","erzurum","ardahan"]
	},
	{
		il: 'edirne',
		komsu: ["kirklareli","tekirdag","canakkale"]
	},
	{
		il: 'samsun',
		komsu: ["sivas","corum","amasya","tokat","ordu"]
	},
	{
		il: 'ardahan',
		komsu: ["artvin","erzurum","kars"]
	},
	{
		il: 'kars',
		komsu: ["ardahan","erzurum","agri","igdir"]
	},
	{
		il: 'aydin',
		komsu: ["denizli","manisa","izmir","mugla"]
	},
	{
		il: 'sirnak',
		komsu: ["hakkari","van","siirt","mardin"]
	},
	{
		il: 'kirklareli',
		komsu: ["tekirdag","edirne"]
	},
	{
		il: 'gaziantep',
		komsu: ["kilis","hatay","osmaniye","kahramanmaras","adiyaman","sanliurfa"]
	},
	{
		il: 'ordu',
		komsu: ["samsun","tokat","sivas","giresun"]
	},
	{
		il: 'hatay',
		komsu: ["osmaniye","adana","kilis","gaziantep"]
	},
	{
		il: 'sinop',
		komsu: ["kastamonu","corum","samsun"]
	},
	{
		il: 'tekirdag',
		komsu: ["istanbul-avrupa","kirklareli","edirne","canakkale"]
	},
	{
		il: 'sakarya',
		komsu: ["kocaeli","bursa","bilecik","bolu","duzce"]
	},
	{
		il: 'trabzon',
		komsu: ["giresun","gumushane","bayburt","rize"]
	},
	{
		il: 'bartin',
		komsu: ["zonguldak","karabuk","kastamonu"]
	},
	{
		il: 'rize',
		komsu: ["artvin","erzurum","bayburt","trabzon"]
	},
	{
		il: 'igdir',
		komsu: ["agri","kars"]
	},
	{
		il: 'kocaeli',
		komsu: ["istanbul-asya","yalova","bursa","sakarya"]
	},
	{
		il: 'istanbul-avrupa',
		komsu: ["istanbul-asya","tekirdag"]
	},
	{
		il: 'duzce',
		komsu: ["zonguldak","bolu","sakarya"]
	},
	{
		il: 'kilis',
		komsu: ["gaziantep"]
	},
	{
		il: 'istanbul-asya',
		komsu: ["kocaeli","istanbul-avrupa"]
	},
	{
		il: 'yalova',
		komsu: ["kocaeli","bursa"]
	},
	{
		il: 'diyarbakir',
		komsu: ["elazig","bingol","mus","batman","mardin","sanliurfa","adiyaman"]
	},
	{
		il: 'adiyaman',
		komsu: ["kahramanmaras","malatya","diyarbakir","sanliurfa","gaziantep"]
	},
	{
		il: 'isparta',
		komsu: ["konya","burdur","antalya","afyonkarahisar"]
	},
	{
		il: 'karaman',
		komsu: ["mersin","konya","antalya"]
	},
	{
		il: 'burdur',
		komsu: ["antalya","isparta","denizli","mugla"]
	},
	{
		il: 'siirt',
		komsu: ["van","bitlis","batman","mardin","sirnak"]
	},
	{
		il: 'sivas',
		komsu: ["erzincan","giresun","ordu","tokat","yozgat","kayseri","kahramanmaras","malatya"]
	},
	{
		il: 'malatya',
		komsu: ["erzincan","elazig","sivas","kahramanmaras","adiyaman","diyarbakir","kahramanmaras"]
	},
	{
		il: 'tunceli',
		komsu: ["elazig","bingol","erzincan"]
	},
	{
		il: 'nigde',
		komsu: ["adana","mersin","konya","aksaray","nevsehir","kayseri"]
	},
	{
		il: 'kahramanmaras',
		komsu: ["sivas","kayseri","adana","osmaniye","gaziantep","adiyaman","malatya"]
	},
	{
		il: 'kayseri',
		komsu: ["nevsehir","yozgat","sivas","kahramanmaras","adana","nigde"]
	},
	{
		il: 'osmaniye',
		komsu: ["adana","gaziantep","hatay","kahramanmaras"]
	},
	{
		il: 'corum',
		komsu: ["cankiri","kastamonu","ordu","sinop","yozgat","amasya","samsun","kirikkale"]
	},
	{
		il: 'cankiri',
		komsu: ["corum","kastamonu","karabuk","bolu","ankara","yozgat"]
	},
	{
		il: 'karabuk',
		komsu: ["bolu","zonguldak","bartin","kastamonu","cankiri"]
	},
	{
		il: 'denizli',
		komsu: ["aydin","manisa","usak","afyonkarahisar","burdur","mugla"]
	},
	{
		il: 'manisa',
		komsu: ["izmir","aydin","usak","kutahya","balikesir","denizli"]
	},
	{
		il: 'kutahya',
		komsu: ["balikesir","manisa","usak","afyonkarahisar","bursa","bilecik","eskisehir"]
	},
	{
		il: 'mus',
		komsu: ["agri","erzurum","bingol","diyarbakir","batman","bitlis"]
	},
	{
		il: 'bilecik',
		komsu: ["bolu","eskisehir","sakarya","bursa","kutahya"]
	},
	{
		il: 'batman',
		komsu: ["mus",'diyarbakir','siirt','bitlis','mardin']
	},
	{
		il: 'tokat',
		komsu: ['samsun','ordu','sivas','amasya','yozgat']
	},
	{
		il: 'amasya',
		komsu: ['tokat','yozgat','corum','samsun']
	},
	{
		il: 'bolu',
		komsu: ['duzce','sakarya','eskisehir','bilecik','ankara','cankiri','zonguldak','karabuk']
	},
	{
		il: 'elazig',
		komsu: ['bingol','tunceli','malatya','diyarbakir']
	},
	{
		il: 'eskisehir',
		komsu: ["ankara","kutahya",'bilecik','afyonkarahisar','konya','bolu']
	},
	{
		il: 'afyonkarahisar',
		komsu: ['eskisehir','kutahya','konya','usak','burdur','isparta','denizli']
	},
	{
		il: 'yozgat',
		komsu: ['sivas','kayseri','nevsehir','kirsehir','kirikkale','amasya','corum','tokat']
	},
	{
		il: 'nevsehir',
		komsu: ['kayseri','yozgat','kirsehir','nigde','aksaray']
	},
	{
		il: 'usak',
		komsu: ['kutahya','afyonkarahisar','denizli','manisa']
	},
	{
		il: 'hakkari',
		komsu: ['van','sirnak']
	},
	{
		il: 'bingol',
		komsu: ['mus','erzincan','erzurum','tunceli','elazig','diyarbakir']
	},
	{
		il: 'kirikkale',
		komsu: ['cankiri','yozgat','kirsehir','corum','ankara']
	},
	{
		il: 'erzurum',
		komsu: ['rize','artvin','bayburt','erzincan','bingol','mus','kars','ardahan','agri']
	},
	{
		il: 'bitlis',
		komsu: ['siirt','mus','batman','agri','van']
	},
	{
		il: 'kirsehir',
		komsu: ['yozgat','aksaray','nevsehir','yozgat','kirikkale','ankara']
	},
	{
		il: 'ankara',
		komsu: ['kirsehir','kirikkale','eskisehir','cankiri','bolu','konya','aksaray']
	},
	{
		il: 'konya',
		komsu: ['isparta','ankara','afyonkarahisar','eskisehir','mersin','karaman','nigde','aksaray']
	},
	{
		il: 'aksaray',
		komsu: ['kirsehir','ankara','nigde','nevsehir','konya']
	},
	{
		il: 'giresun',
		komsu: ['trabzon','gumushane','ordu','erzincan','sivas']
	},
	{
		il: 'erzincan',
		komsu: ['erzurum','sivas','tunceli','bingol','elazig','malatya','bayburt','giresun', 'gumushane']
	},
	{
		il: 'bayburt',
		komsu: ['erzurum','gumushane','trabzon','rize','erzincan']
	},
	{
		il: 'gumushane',
		komsu: ['bayburt','trabzon','erzincan','giresun']
	}
]




let selectedColor = null;
let started = false;

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length === 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
	const hex = x.toString(16)
	return hex.length === 1 ? '0' + hex : hex
}).join('')

const changeColor = (colorElem) => {
	Array.from(document.getElementsByClassName("komsu")).forEach((el)=>{
		el.classList.remove("komsu");
		el.setAttribute("data-select","unselectable");
	});

	selectedColor = colorElem.style.backgroundColor;


	Array.from(document.getElementsByClassName("bayrak")).forEach((b) => {
		b.style.boxShadow="0px 0px 11px rgba(0,0,0,0.9)";
	});

	colorElem.style.boxShadow = "0 0 5px #00FF00";


	const colorArray = (selectedColor.substr(4,selectedColor.length).substring(0, selectedColor.substr(4,selectedColor.length).length-1)).split(", ");

	selectedColor = rgbToHex(parseInt(colorArray[0]),parseInt(colorArray[1]),parseInt(colorArray[2]));
	selectedColor = selectedColor.substr(1, selectedColor.length);

	const previousCities = document.querySelectorAll('g[data-color="#'+ selectedColor.toUpperCase() +'"]');
	previousCities.forEach((elem) => {
		for(let f=0; f<komsuIl.length; f++){

			if(komsuIl[f].il === elem.id){
				console.log(komsuIl[f].il);
				console.log(elem.id);
				for(let e=0; e<komsuIl[f].komsu.length; e++){
					let komsular= komsuIl[f].komsu[e];
					document.getElementById(komsular).classList.add('komsu');
				}
			}
		}
	});

	Array.from(document.getElementsByClassName("komsu")).forEach((il) => {
		il.setAttribute("data-select","unselected");
	});

}

const mySubmit= () => {

	if(document.getElementById(document.getElementById("name_of_beylik").value)){
		alert ('Hayır, lütfen...');
		return false;
	}

	event.preventDefault()
	if(started){
		document.querySelectorAll('g[data-color="uncolored"]').forEach((el) => el.setAttribute("data-select","unselected"));
		const els= document.getElementsByClassName("komsu");

		Array.from(els).forEach((e) => e.classList.remove("komsu"));

		let colorVal= document.getElementById("color_value").value;
		let nameVal= document.getElementById("name_of_beylik").value;

		if(nameVal==='' || nameVal===null){
			nameVal= 'İsimsiz Beylik'
		}

		const selector = document.getElementById("choose");
		let g = document.createElement('div');
		let h = document.createElement('span');
		let t = document.createTextNode(nameVal);



		g.setAttribute("id", nameVal);
		g.style.width = "150px";
		g.style.height = "50px";
		g.style.display= "inline-block";
		g.style.backgroundColor = "#"+ colorVal;

		g.addEventListener("click",function(){
			changeColor(this);
		});
		g.classList.add("bayrak");
		h.appendChild(t);
		selector.appendChild(g);
		g.appendChild(h);
		selectedColor= colorVal;

		return false;
	} else {
		let colorVal= document.getElementById("color_value").value;
		let nameVal= document.getElementById("name_of_beylik").value;

		if(nameVal==='' || nameVal===null){
			nameVal= 'İsimsiz Beylik'
		}

		const selector = document.getElementById("choose");
		let g = document.createElement('div');
		let h = document.createElement('span');
		let t = document.createTextNode(nameVal);


		g.setAttribute("id", nameVal);
		g.classList.add("bayrak");
		g.style.width = "150px";
		g.style.height = "50px";
		g.style.display= "inline-block";
		g.style.backgroundColor = "#"+ colorVal;

		g.addEventListener("click",function(){
			changeColor(this);
		});

		h.appendChild(t);
		selector.appendChild(g);
		g.appendChild(h);
		selectedColor= colorVal;

		started = true;
		return false;
	}



}

const selectCity = (elem) => {

	if(started) {
		let color = elem.getAttribute("data-color");
		let selected = elem.getAttribute("data-select");

		if((color==="uncolored" && selected==="unselected")){
			Array.from(elem.getElementsByTagName("path")).forEach((el)=>{
				el.style.fill= "#"+ selectedColor;
			});


			elem.setAttribute("data-color","#"+selectedColor);

			let city = elem.getAttribute("id");

			for(let n=0; n<komsuIl.length; n++){
				if(komsuIl[n].il === city){
					for(let m=0; m<komsuIl[n].komsu.length; m++){
						let komsuName= komsuIl[n].komsu[m];
						document.getElementById(komsuName).classList.add('komsu');
					}
				}
			}

			for(let i = 0; i<document.querySelectorAll('g:not(.komsu)').length; i++){
				document.querySelectorAll('g:not(.komsu)')[i].setAttribute("data-select","unselectable");
			}
			for(let i=0; i<document.querySelectorAll('.komsu').length; i++){
				document.querySelectorAll('.komsu')[i].setAttribute("data-select","unselected");
			}
		}
	} else {
		alert ("Oyuna başlamak için beyliğin ismi ve bayrak rengini seçmelisin!");
	}


}


const komsuIl = [
	{
		il: 'van',
		komsu: ["agri","bitlis","sirnak","siirt","hakkari","igdir"]
	},
	{
		il: 'sanliurfa',
		komsu: ["mardin","diyarbakir","adiyaman","gaziantep"]
	},
	{
		il: 'sirnak',
		komsu: ["hakkari","van","siirt","mardin"]
	},
	{
		il: 'antalya',
		komsu: ["mugla","burdur","isparta","konya","karaman","mersin"]
	},
	{
		il: 'mersin',
		komsu: ["adana","nigde","karaman","antalya","konya"]
	},
	{
		il: 'adana',
		komsu: ["osmaniye","nigde","kahramanmaras","osmaniye","mersin"]
	},
	{
		il: 'kastamonu',
		komsu: ["sinop","corum","karabuk","bartin","cankiri"]
	},
	{
		il: 'mugla',
		komsu: ["aydin","denizli","antalya","burdur"]
	},
	{
		il: 'izmir',
		komsu: ["balikesir","manisa","aydin"]
	},
	{
		il: 'balikesir',
		komsu: ["izmir","bursa","kutahya","manisa","canakkale"]
	},
	{
		il: 'agri',
		komsu: ["igdir","kars","erzurum","mus","bitlis","van"]
	},
	{
		il: 'bursa',
		komsu: ["kocaeli","yalova","kutahya","balikesir","bilecik","sakarya"]
	},
	{
		il: 'mardin',
		komsu: ["batman","siirt","sanliurfa","sirnak","diyarbakir"]
	},
	{
		il: 'canakkale',
		komsu: ["balikesir","edirne","tekirdag"]
	},
	{
		il: 'artvin',
		komsu: ["rize","erzurum","ardahan"]
	},
	{
		il: 'edirne',
		komsu: ["kirklareli","tekirdag","canakkale"]
	},
	{
		il: 'samsun',
		komsu: ["sivas","corum","amasya","tokat","ordu"]
	},
	{
		il: 'ardahan',
		komsu: ["artvin","erzurum","kars"]
	},
	{
		il: 'kars',
		komsu: ["ardahan","erzurum","agri","igdir"]
	},
	{
		il: 'aydin',
		komsu: ["denizli","manisa","izmir","mugla"]
	},
	{
		il: 'sirnak',
		komsu: ["hakkari","van","siirt","mardin"]
	},
	{
		il: 'kirklareli',
		komsu: ["tekirdag","edirne"]
	},
	{
		il: 'gaziantep',
		komsu: ["kilis","hatay","osmaniye","kahramanmaras","adiyaman","sanliurfa"]
	},
	{
		il: 'ordu',
		komsu: ["samsun","tokat","sivas","giresun"]
	},
	{
		il: 'hatay',
		komsu: ["osmaniye","adana","kilis","gaziantep"]
	},
	{
		il: 'sinop',
		komsu: ["kastamonu","corum","samsun"]
	},
	{
		il: 'tekirdag',
		komsu: ["istanbul-avrupa","kirklareli","edirne","canakkale"]
	},
	{
		il: 'sakarya',
		komsu: ["kocaeli","bursa","bilecik","bolu","duzce"]
	},
	{
		il: 'trabzon',
		komsu: ["giresun","gumushane","bayburt","rize"]
	},
	{
		il: 'bartin',
		komsu: ["zonguldak","karabuk","kastamonu"]
	},
	{
		il: 'rize',
		komsu: ["artvin","erzurum","bayburt","trabzon"]
	},
	{
		il: 'igdir',
		komsu: ["agri","kars"]
	},
	{
		il: 'kocaeli',
		komsu: ["istanbul-asya","yalova","bursa","sakarya"]
	},
	{
		il: 'istanbul-avrupa',
		komsu: ["istanbul-asya","tekirdag"]
	},
	{
		il: 'duzce',
		komsu: ["zonguldak","bolu","sakarya"]
	},
	{
		il: 'kilis',
		komsu: ["gaziantep"]
	},
	{
		il: 'istanbul-asya',
		komsu: ["kocaeli","istanbul-avrupa"]
	},
	{
		il: 'yalova',
		komsu: ["kocaeli","bursa"]
	},
	{
		il: 'diyarbakir',
		komsu: ["elazig","bingol","mus","batman","mardin","sanliurfa","adiyaman"]
	},
	{
		il: 'adiyaman',
		komsu: ["kahramanmaras","malatya","diyarbakir","sanliurfa","gaziantep"]
	},
	{
		il: 'isparta',
		komsu: ["konya","burdur","antalya","afyonkarahisar"]
	},
	{
		il: 'karaman',
		komsu: ["mersin","konya","antalya"]
	},
	{
		il: 'burdur',
		komsu: ["antalya","isparta","denizli","mugla"]
	},
	{
		il: 'siirt',
		komsu: ["van","bitlis","batman","mardin","sirnak"]
	},
	{
		il: 'sivas',
		komsu: ["erzincan","giresun","ordu","tokat","yozgat","kayseri","kahramanmaras","malatya"]
	},
	{
		il: 'malatya',
		komsu: ["erzincan","elazig","sivas","kahramanmaras","adiyaman","diyarbakir","kahramanmaras"]
	},
	{
		il: 'tunceli',
		komsu: ["elazig","bingol","erzincan"]
	},
	{
		il: 'nigde',
		komsu: ["adana","mersin","konya","aksaray","nevsehir","kayseri"]
	},
	{
		il: 'kahramanmaras',
		komsu: ["sivas","kayseri","adana","osmaniye","gaziantep","adiyaman","malatya"]
	},
	{
		il: 'kayseri',
		komsu: ["nevsehir","yozgat","sivas","kahramanmaras","adana","nigde"]
	},
	{
		il: 'osmaniye',
		komsu: ["adana","gaziantep","hatay","kahramanmaras"]
	},
	{
		il: 'corum',
		komsu: ["cankiri","kastamonu","ordu","sinop","yozgat","amasya","samsun","kirikkale"]
	},
	{
		il: 'cankiri',
		komsu: ["corum","kastamonu","karabuk","bolu","ankara","yozgat"]
	},
	{
		il: 'karabuk',
		komsu: ["bolu","zonguldak","bartin","kastamonu","cankiri"]
	},
	{
		il: 'denizli',
		komsu: ["aydin","manisa","usak","afyonkarahisar","burdur","mugla"]
	},
	{
		il: 'manisa',
		komsu: ["izmir","aydin","usak","kutahya","balikesir","denizli"]
	},
	{
		il: 'kutahya',
		komsu: ["balikesir","manisa","usak","afyonkarahisar","bursa","bilecik","eskisehir"]
	},
	{
		il: 'mus',
		komsu: ["agri","erzurum","bingol","diyarbakir","batman","bitlis"]
	},
	{
		il: 'bilecik',
		komsu: ["bolu","eskisehir","sakarya","bursa","kutahya"]
	},
	{
		il: 'batman',
		komsu: ["mus",'diyarbakir','siirt','bitlis','mardin']
	},
	{
		il: 'tokat',
		komsu: ['samsun','ordu','sivas','amasya','yozgat']
	},
	{
		il: 'amasya',
		komsu: ['tokat','yozgat','corum','samsun']
	},
	{
		il: 'bolu',
		komsu: ['duzce','sakarya','eskisehir','bilecik','ankara','cankiri','zonguldak','karabuk']
	},
	{
		il: 'elazig',
		komsu: ['bingol','tunceli','malatya','diyarbakir']
	},
	{
		il: 'eskisehir',
		komsu: ["ankara","kutahya",'bilecik','afyonkarahisar','konya','bolu']
	},
	{
		il: 'afyonkarahisar',
		komsu: ['eskisehir','kutahya','konya','usak','burdur','isparta','denizli']
	},
	{
		il: 'yozgat',
		komsu: ['sivas','kayseri','nevsehir','kirsehir','kirikkale','amasya','corum','tokat']
	},
	{
		il: 'nevsehir',
		komsu: ['kayseri','yozgat','kirsehir','nigde','aksaray']
	},
	{
		il: 'usak',
		komsu: ['kutahya','afyonkarahisar','denizli','manisa']
	},
	{
		il: 'hakkari',
		komsu: ['van','sirnak']
	},
	{
		il: 'bingol',
		komsu: ['mus','erzincan','erzurum','tunceli','elazig','diyarbakir']
	},
	{
		il: 'kirikkale',
		komsu: ['cankiri','yozgat','kirsehir','corum','ankara']
	},
	{
		il: 'erzurum',
		komsu: ['rize','artvin','bayburt','erzincan','bingol','mus','kars','ardahan','agri']
	},
	{
		il: 'bitlis',
		komsu: ['siirt','mus','batman','agri','van']
	},
	{
		il: 'kirsehir',
		komsu: ['yozgat','aksaray','nevsehir','yozgat','kirikkale','ankara']
	},
	{
		il: 'ankara',
		komsu: ['kirsehir','kirikkale','eskisehir','cankiri','bolu','konya','aksaray']
	},
	{
		il: 'konya',
		komsu: ['isparta','ankara','afyonkarahisar','eskisehir','mersin','karaman','nigde','aksaray']
	},
	{
		il: 'aksaray',
		komsu: ['kirsehir','ankara','nigde','nevsehir','konya']
	},
	{
		il: 'giresun',
		komsu: ['trabzon','gumushane','ordu','erzincan','sivas']
	},
	{
		il: 'erzincan',
		komsu: ['erzurum','sivas','tunceli','bingol','elazig','malatya','bayburt','giresun', 'gumushane']
	},
	{
		il: 'bayburt',
		komsu: ['erzurum','gumushane','trabzon','rize','erzincan']
	},
	{
		il: 'gumushane',
		komsu: ['bayburt','trabzon','erzincan','giresun']
	}
]




let selectedColor = null;
let started = false;

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length === 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
	const hex = x.toString(16)
	return hex.length === 1 ? '0' + hex : hex
}).join('')

const changeColor = (colorElem) => {
	Array.from(document.getElementsByClassName("komsu")).forEach((el)=>{
		el.classList.remove("komsu");
		el.setAttribute("data-select","unselectable");
	});

	selectedColor = colorElem.style.backgroundColor;


	Array.from(document.getElementsByClassName("bayrak")).forEach((b) => {
		b.style.boxShadow="0px 0px 11px rgba(0,0,0,0.9)";
	});

	colorElem.style.boxShadow = "0 0 5px #00FF00";


	const colorArray = (selectedColor.substr(4,selectedColor.length).substring(0, selectedColor.substr(4,selectedColor.length).length-1)).split(", ");

	selectedColor = rgbToHex(parseInt(colorArray[0]),parseInt(colorArray[1]),parseInt(colorArray[2]));
	selectedColor = selectedColor.substr(1, selectedColor.length);

	const previousCities = document.querySelectorAll('g[data-color="#'+ selectedColor.toUpperCase() +'"]');
	previousCities.forEach((elem) => {
		for(let f=0; f<komsuIl.length; f++){

			if(komsuIl[f].il === elem.id){
				console.log(komsuIl[f].il);
				console.log(elem.id);
				for(let e=0; e<komsuIl[f].komsu.length; e++){
					let komsular= komsuIl[f].komsu[e];
					document.getElementById(komsular).classList.add('komsu');
				}
			}
		}
	});

	Array.from(document.getElementsByClassName("komsu")).forEach((il) => {
		il.setAttribute("data-select","unselected");
	});

}

const mySubmit= () => {

	if(document.getElementById(document.getElementById("name_of_beylik").value)){
		alert ('Hayır, lütfen...');
		return false;
	}

	event.preventDefault()
	if(started){
		document.querySelectorAll('g[data-color="uncolored"]').forEach((el) => el.setAttribute("data-select","unselected"));
		const els= document.getElementsByClassName("komsu");

		Array.from(els).forEach((e) => e.classList.remove("komsu"));

		let colorVal= document.getElementById("color_value").value;
		let nameVal= document.getElementById("name_of_beylik").value;

		if(nameVal==='' || nameVal===null){
			nameVal= 'İsimsiz Beylik'
		}

		const selector = document.getElementById("choose");
		let g = document.createElement('div');
		let h = document.createElement('span');
		let t = document.createTextNode(nameVal);



		g.setAttribute("id", nameVal);
		g.style.width = "150px";
		g.style.height = "50px";
		g.style.display= "inline-block";
		g.style.backgroundColor = "#"+ colorVal;

		g.addEventListener("click",function(){
			changeColor(this);
		});
		g.classList.add("bayrak");
		h.appendChild(t);
		selector.appendChild(g);
		g.appendChild(h);
		selectedColor= colorVal;

		return false;
	} else {
		let colorVal= document.getElementById("color_value").value;
		let nameVal= document.getElementById("name_of_beylik").value;

		if(nameVal==='' || nameVal===null){
			nameVal= 'İsimsiz Beylik'
		}

		const selector = document.getElementById("choose");
		let g = document.createElement('div');
		let h = document.createElement('span');
		let t = document.createTextNode(nameVal);


		g.setAttribute("id", nameVal);
		g.classList.add("bayrak");
		g.style.width = "150px";
		g.style.height = "50px";
		g.style.display= "inline-block";
		g.style.backgroundColor = "#"+ colorVal;

		g.addEventListener("click",function(){
			changeColor(this);
		});

		h.appendChild(t);
		selector.appendChild(g);
		g.appendChild(h);
		selectedColor= colorVal;

		started = true;
		return false;
	}



}

const selectCity = (elem) => {

	if(started) {
		let color = elem.getAttribute("data-color");
		let selected = elem.getAttribute("data-select");

		if((color==="uncolored" && selected==="unselected")){
			Array.from(elem.getElementsByTagName("path")).forEach((el)=>{
				el.style.fill= "#"+ selectedColor;
			});


			elem.setAttribute("data-color","#"+selectedColor);

			let city = elem.getAttribute("id");

			for(let n=0; n<komsuIl.length; n++){
				if(komsuIl[n].il === city){
					for(let m=0; m<komsuIl[n].komsu.length; m++){
						let komsuName= komsuIl[n].komsu[m];
						document.getElementById(komsuName).classList.add('komsu');
					}
				}
			}

			for(let i = 0; i<document.querySelectorAll('g:not(.komsu)').length; i++){
				document.querySelectorAll('g:not(.komsu)')[i].setAttribute("data-select","unselectable");
			}
			for(let i=0; i<document.querySelectorAll('.komsu').length; i++){
				document.querySelectorAll('.komsu')[i].setAttribute("data-select","unselected");
			}
		}
	} else {
		alert ("Oyuna başlamak için beyliğin ismi ve bayrak rengini seçmelisin!");
	}


}


