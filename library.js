pokemonArr = [];
trainers = {
	Kayler: {
		all: function() {
			pokemonArr = Object.entries(this.pokemon);
			return pokemonArr;
		},
	},
	Minji: {
		all: function() {
			pokemonArr = Object.entries(this.pokemon);
			return pokemonArr;
		},
	},
	Strewbs: {
		all: function() {
			pokemonArr = Object.entries(this.pokemon);
			return pokemonArr;
		},
	},
}

/////////////////////////////////

var bulbRequest = new XMLHttpRequest(); 
		
	bulbRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		var bulbData = JSON.parse(this.response);
			// console.log(bulbData);
			trainers.Kayler.pokemon = {
				"Bulbasaur": {
					hp: bulbData['stats'][5]['base_stat'],
			        attack: bulbData['stats'][4]['base_stat'],
			        defense: bulbData['stats'][3]['base_stat'],
			        abilities: [bulbData['abilities'][0]['ability']['name'], bulbData['abilities'][1]['ability']['name']],
			        sprites: bulbData['sprites']['front_default'],
				}
			}
	   }	
	}
	bulbRequest.open("GET", `https://raw.githubusercontent.com/Strewbs/pokemonapi/master/bulb.json`, true);
	bulbRequest.send();

///////////////////////////////////////////

var charRequest = new XMLHttpRequest(); 
		
	charRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			charData = JSON.parse(this.response);
			// console.log(charData);
			trainers.Kayler.pokemon["Charmander"] = {
			
					hp: charData['stats'][5]['base_stat'],
			        attack: charData['stats'][4]['base_stat'],
			        defense: charData['stats'][3]['base_stat'],
			        abilities: [charData['abilities'][0]['ability']['name'], charData['abilities'][1]['ability']['name']],
			        sprites: charData['sprites']['front_default'],
				
			}
	   }	
	}
	charRequest.open("GET", `https://raw.githubusercontent.com/Strewbs/pokemonapi/master/char.json`, true);
	charRequest.send();

/////////////////////////////////////

var jigRequest = new XMLHttpRequest(); 
		
	jigRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			jigData = JSON.parse(this.response);
			// console.log(jigData);
			trainers.Kayler.pokemon["Jiggly Puff"] = {
				
					hp: jigData['stats'][5]['base_stat'],
			        attack: jigData['stats'][4]['base_stat'],
			        defense: jigData['stats'][3]['base_stat'],
			        abilities: [jigData['abilities'][0]['ability']['name'], jigData['abilities'][1]['ability']['name']],
			        sprites: jigData['sprites']['front_default'],
				
			}
	   }	
	}
	jigRequest.open("GET", `https://raw.githubusercontent.com/Strewbs/pokemonapi/master/jig.json`, true);
	jigRequest.send();

//////////////////////////////////////

var bulbaRequest = new XMLHttpRequest(); 
		
	bulbaRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			bulbaData = JSON.parse(this.response);
			// console.log(bulbaData);
			trainers.Minji.pokemon = {
				"Bulbasaur": {
					hp: bulbaData['stats'][5]['base_stat'],
			        attack: bulbaData['stats'][4]['base_stat'],
			        defense: bulbaData['stats'][3]['base_stat'],
			        abilities: [bulbaData['abilities'][0]['ability']['name'], bulbaData['abilities'][1]['ability']['name']],
			        sprites: bulbaData['sprites']['front_default'],
				}
			}
	   }	
	}
	bulbaRequest.open("GET", `https://raw.githubusercontent.com/Strewbs/pokemonapi/master/bulba.json`, true);
	bulbaRequest.send();

/////////////////////////////////////////

var bulbasRequest = new XMLHttpRequest(); 
		
	bulbasRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			bulbasData = JSON.parse(this.response);
			// console.log(bulbasData);
			trainers.Minji.pokemon["Bulbasaurus"] = {
				
					hp: bulbasData['stats'][5]['base_stat'],
			        attack: bulbasData['stats'][4]['base_stat'],
			        defense: bulbasData['stats'][3]['base_stat'],
			        abilities: [bulbasData['abilities'][0]['ability']['name'], bulbasData['abilities'][1]['ability']['name']],
			        sprites: bulbasData['sprites']['front_default'],
				
			}
	   }	
	}
	bulbasRequest.open("GET", `https://raw.githubusercontent.com/Strewbs/pokemonapi/master/bulbas.json`, true);
	bulbasRequest.send();

/////////////////////////////////////////

var metapodRequest = new XMLHttpRequest(); 
		
	metapodRequest.onreadystatechange = function() { /// NEED TO FIX THIS
		if (this.readyState == 4 && this.status == 200) {
			metapodData = JSON.parse(this.response);
			console.log(metapodData);
			// trainers.Minji.pokemon["Metapod"] = {
			// 	hp: metapodData['stats'][5]['base_stat'],
			// 	attack: metapodData['stats'][4]['base_stat'],
			// 	defense: metapodData['stats'][3]['base_stat'],
			// 	abilities: metapodData['abilities'][0]['ability']['name'],
			// 	sprites: metapodData['sprites']['front_default'],
			// }

	   }	
	}
	metapodRequest.open("GET", `https://raw.githubusercontent.com/Strewbs/pokemonapi/master/metapod.json`, true);
	metapodRequest.send();

////////////////////////////////////////

var vaporRequest = new XMLHttpRequest(); 
		
	vaporRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			vaporData = JSON.parse(this.response);
			// console.log(vaporData);
			trainers.Strewbs.pokemon = {
				"Vaporeon": {
					hp: vaporData['stats'][5]['base_stat'],
			        attack: vaporData['stats'][4]['base_stat'],
			        defense: vaporData['stats'][3]['base_stat'],
			        abilities: [vaporData['abilities'][0]['ability']['name'], vaporData['abilities'][1]['ability']['name']],
			        sprites: vaporData['sprites']['front_default'],
				}
			}
	   }	
	}
	vaporRequest.open("GET", `https://raw.githubusercontent.com/Strewbs/pokemonapi/master/vaporeon.json`, true);
	vaporRequest.send();

///////////////////////////////////////////

var jolteonRequest = new XMLHttpRequest(); 
		
	jolteonRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			jolteonData = JSON.parse(this.response);
			// console.log(jolteonData);
			trainers.Strewbs.pokemon["Jolteon"] = {
				
					hp: jolteonData['stats'][5]['base_stat'],
			        attack: jolteonData['stats'][4]['base_stat'],
			        defense: jolteonData['stats'][3]['base_stat'],
			        abilities: [jolteonData['abilities'][0]['ability']['name'], jolteonData['abilities'][1]['ability']['name']],
			        sprites: jolteonData['sprites']['front_default'],
				
			}
	   }	
	}
	jolteonRequest.open("GET", `https://raw.githubusercontent.com/Strewbs/pokemonapi/master/jolteon.json`, true);
	jolteonRequest.send();

///////////////////////////////////////////

var flareonRequest = new XMLHttpRequest(); 
		
	flareonRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			flareonData = JSON.parse(this.response);
			// console.log(flareonData);
			trainers.Strewbs.pokemon["Flareon"] = {
				
					hp: flareonData['stats'][5]['base_stat'],
			        attack: flareonData['stats'][4]['base_stat'],
			        defense: flareonData['stats'][3]['base_stat'],
			        abilities: [flareonData['abilities'][0]['ability']['name'], flareonData['abilities'][1]['ability']['name']],
			        sprites: flareonData['sprites']['front_default'],
				
			}
	   }	
	}
	flareonRequest.open("GET", `https://raw.githubusercontent.com/Strewbs/pokemonapi/master/flareon.json`, true);
	flareonRequest.send();