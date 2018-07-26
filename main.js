document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.carousel');
   var instances = M.Carousel.init(elems);
 });


// Choosing the Trainer 

var choice;
var i;

function chooseTrainer(name) {
	image = document.getElementById('trainer');
	trainerName = document.getElementById('trainerName');
	dot = document.getElementById('name'); 

	if (name == "Kayler") {

		console.log(trainers.Kayler.pokemon);
		image.src = "images/kctrainern.png";
		trainerName.innerHTML = name;
		dot.innerHTML = ". . .";

		pokeOne = document.getElementById('pokeOne');
		pokeOne.src = "images/bulb.png";
		pokeTwo = document.getElementById('pokeTwo');
		pokeTwo.src = "images/char.png";
		pokeThree = document.getElementById('pokeThree');
		pokeThree.src = "images/jig.png";

		console.log(trainers.Kayler.all());
		return trainers.Kayler.all();

	} else if (name == "Minji") {

		console.log(trainers.Minji.pokemon);
		image.src = "images/minji.png";
		trainerName.innerHTML = name;
		dot.innerHTML = ". . .";

		pokeOne = document.getElementById('pokeOne');
		pokeOne.src = "images/bulb.png";
		pokeTwo = document.getElementById('pokeTwo');
		pokeTwo.src = "images/bulb.png";
		pokeThree = document.getElementById('pokeThree');
		pokeThree.src = "images/meta.png";

		return trainers.Minji.all();

	} else if (name == "Strewbs") {

		console.log(trainers.Strewbs.pokemon);		
		image.src = "images/strewbs.png";
		trainerName.innerHTML = name;
		dot.innerHTML = ". . .";

		pokeOne = document.getElementById('pokeOne');
		pokeOne.src = "images/vap2.png";
		pokeTwo = document.getElementById('pokeTwo');
		pokeTwo.src = "images/jolt.png";
		pokeThree = document.getElementById('pokeThree');
		pokeThree.src = "images/flare.png";


		return trainers.Strewbs.all();
	}
}

// Display Pokemon Stats

function displayStat(pokeOrder) {
	array = pokemonArr;

	if (pokeOrder == 'pokeOne') {
		i = 0;
	} else if (pokeOrder == 'pokeTwo') {
		i = 1;
	} else if (pokeOrder == 'pokeThree') {
		i = 2;
	}

	let pokeName = document.getElementById('name');
	pokeName.innerHTML = array[i][0];

	let hp = document.getElementById('hp');
	hp.innerHTML = `<strong>hp:</strong>   ${array[i][1]['hp']}`;

	let attack = document.getElementById('attack');
	attack.innerHTML = `<strong>attack:</strong>   ${array[i][1]['attack']}`;

	let defense = document.getElementById('defense');
	defense.innerHTML = `<strong>defense:</strong>   ${array[i][1]['defense']}`;

	let abilities = document.getElementById('abilities');
	abilities.innerHTML = `<strong>abilities:</strong>   ${array[i][1]['abilities'][0]} ${array[i][1]['abilities'][1]}`;
}

