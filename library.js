var pokemonRequest = new XMLHttpRequest(); 
var pokemonData;
pokemonRequest.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		pokemonData = JSON.parse(this.response);
		console.log(pokemonData);
	}
}