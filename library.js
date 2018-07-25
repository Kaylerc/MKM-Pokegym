trainer = {
	Kayler: {
		pokemon: {},
		url: ["bulb", "char", "jig"],
	},
	Minji: {
		pokemon: {},
		url: ["bulba", "bulbas", "metapod"],
	},
	Strewbs: {
		pokemon: {},
		url: ["vaporeon", "jolteon", "flareon"],
	},
	// all: () => {
	// 	console.log(Strewbs.pokemon);
	// }
}

// var x = "Kayler";
// var y = "Minji";
// var z = "Strewbs";
var pokemonData;
var pokemonArr;
var choice;
var i; // url array count
var name;


function getTrainer(name) {

	if (name == "Kayler") {
		pokemonArr = trainer.Kayler.url;
		for (i = 0; i < pokemonArr.length; i++) {
			choice = pokemonArr[i];
		}
	} else if (name == "Minji") {
		pokemonArr = trainer.Minji.url;
		for (i = 0; i < pokemonArr.length; i++) {
			if (i == 0) {
				choice = pokemonArr[i];
			}
		}
	} else if (name == "Strewbs") {
		pokemonArr = trainer.Strewbs.url;
		for (i = 0; i < pokemonArr.length; i++) {
			if (i == 0) {
				choice = pokemonArr[i];
			}
		}
	} else {
		alert("Not a gym member!");
	} 

	console.log(pokemonArr);
	getPokemon(choice);
}

function getPokemon(choice) {
		var pokemonRequest = new XMLHttpRequest(); 
		
		pokemonRequest.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				pokemonData = JSON.parse(this.response);
				console.log(pokemonData);

			// 	trainer.name.pokemon[pokemonData.name] = {
			// 		hp: pokemonData['stats'][5]['base_stat'],
			// 	attack: pokemonData['stats'][4]['base_stat'],
			// 	defense: pokemonData['stats'][3]['base_stat'],
			// 	abilities: [pokemonData['abilities'][0]['ability']['name'], pokemonData['abilities'][1]['ability']['name']],
			// 	sprites: pokemonData['sprites']['front_default'],
			// }	
		   }	
		}
		pokemonRequest.open("GET", `https://raw.githubusercontent.com/Strewbs/pokemonapi/master/${choice}.json`, true);
		pokemonRequest.send();
}







