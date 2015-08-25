var apikey = '83PiwLeoNfC5DxbV9vWplkbHEclCOlpWB7Ak79xK'; // My api.data.gov API key

var fat = "Total lipid (fat)";
var sugar = "Sugars, total";
var carb = "Carbohydrate, by difference";
var kcal = "Energy";
var food;
var source1;

$(document).ready(function() {



    $('[data-toggle="tooltip"]').tooltip;   


	$('#go').on('click', function(e){
		search();  
	})



	$('#results').on('click', '.ndbno', function(){
		var ndbno = $(this).attr('id');
		$('.modal-body').append($('<script id="some-template1" type="text/x-handlebars-template">'));
		console.log($('#some-template1'));
		source1 = $("#some-template1").html();
		// console.log(source1);

			getNutrients(ndbno);


		
		
	})


});


