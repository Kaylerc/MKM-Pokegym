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
	level = document.getElementById('level');
	battle = document.getElementById('battle');
	caught = document.getElementById('caught');

	if (name == "Kayler") {

		// console.log(trainers.Kayler.pokemon);
		image.src = "images/kctrainern.png";
		trainerName.innerHTML = name;
		level.innerHTML = `<i class="fas fa-signal"></i> Level: 128`;
		battle.innerHTML = `<i class="fas fa-trophy"></i> Battles:  815`;
		caught.innerHTML = `<i class="far fa-dot-circle"></i> Pokemon: 3`;
		dot.innerHTML = ". . .";


		pokeOne = document.getElementById('pokeOne');
		pokeOne.src = "images/bulb.png";
		pokeTwo = document.getElementById('pokeTwo');
		pokeTwo.src = "images/char.png";
		pokeThree = document.getElementById('pokeThree');
		pokeThree.src = "images/jig.png";

		// console.log(trainers.Kayler.all());
		return trainers.Kayler.all();

	} else if (name == "Minji") {

		// console.log(trainers.Minji.pokemon);
		image.src = "images/minji.png";
		trainerName.innerHTML = name;
		level.innerHTML = `<i class="fas fa-signal"></i> Level: 88`;
		battle.innerHTML = `<i class="fas fa-trophy"></i> Battles:  818`;
		caught.innerHTML = `<i class="far fa-dot-circle"></i> Pokemon: 3`;
		dot.innerHTML = ". . .";

		pokeOne = document.getElementById('pokeOne');
		pokeOne.src = "images/bulb.png";
		pokeTwo = document.getElementById('pokeTwo');
		pokeTwo.src = "images/squirtle.png";
		pokeThree = document.getElementById('pokeThree');
		pokeThree.src = "images/butterfree.png";

		return trainers.Minji.all();

	} else if (name == "Strewbs") {

		// console.log(trainers.Strewbs.pokemon);		
		image.src = "images/strewbs.png";
		trainerName.innerHTML = name;
		level.innerHTML = `<i class="fas fa-signal"></i> Level: 5`;
		battle.innerHTML = `<i class="fas fa-trophy"></i> Battles:  55`;
		caught.innerHTML = `<i class="far fa-dot-circle"></i> Pokemon: 3`;
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
	hp.innerHTML = `<span>HP:</span>   ${array[i][1]['hp']}`;

	let attack = document.getElementById('attack');
	attack.innerHTML = `<span>ATTACK:</span>   ${array[i][1]['attack']}`;

	let defense = document.getElementById('defense');
	defense.innerHTML = `<span>DEFENSE:</span>   ${array[i][1]['defense']}`;

	let abilities = document.getElementById('abilities');
	abilities.innerHTML = `<span>ABILITIES:</span>   ${array[i][1]['abilities'][0]} ${array[i][1]['abilities'][1]}`;
}

