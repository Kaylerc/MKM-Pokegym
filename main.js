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
	if (name == "Kayler") {

		console.log(trainers.Kayler.pokemon);
		image.src = "images/kctrainern.png";
		trainerName.innerHTML = name;

		pokeOne = document.getElementById('pokeOne');
		pokeOne.src = "images/bulb.png";
		pokeTwo = document.getElementById('pokeTwo');
		pokeTwo.src = "images/char.png";
		pokeThree = document.getElementById('pokeThree');
		pokeThree.src = "images/jig.png";

		return trainers.Kayler.all();

	} else if (name == "Minji") {

		console.log(trainers.Minji.pokemon);
		image.src = "images/minji.png";
		trainerName.innerHTML = name;

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

		pokeOne = document.getElementById('pokeOne');
		pokeOne.src = "images/vap2.png";
		pokeTwo = document.getElementById('pokeTwo');
		pokeTwo.src = "images/jolt.png";
		pokeThree = document.getElementById('pokeThree');
		pokeThree.src = "images/flare.png";


		return trainers.Strewbs.all();
	}
}

// // Display Pokemon Stats

// function displayStat(pokeName) {
// 	chooseTrainer(name);
// 	console.log(pokemonArr)
// 	array = pokemonArr;
// }

