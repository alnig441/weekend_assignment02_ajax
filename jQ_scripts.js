var apikey = '83PiwLeoNfC5DxbV9vWplkbHEclCOlpWB7Ak79xK'; // My api.data.gov API key

var fat = "Total lipid (fat)";
var sugar = "Sugars, total";
var carb = "Carbohydrate, by difference";
var kcal = "Energy";
var food;
// Use this function to do stuff with your results. 
// It is called after 'search' is executed.


$(document).ready(function() {

	$('#go').on('click', function(e){
		search();  
	})

	$('#dropdown').on('click', '.ndbno', function(){
		var x = $(this).attr('id');
		console.log(x);
	})

});


