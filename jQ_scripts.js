var apikey = '83PiwLeoNfC5DxbV9vWplkbHEclCOlpWB7Ak79xK'; // My api.data.gov API key

var fat = "Total lipid (fat)";
var sugar = "Sugars, total";
var carb = "Carbohydrate, by difference";
var kcal = "Energy";
var food;

// Handlebars variables


// Handlebars variables END


// Use this function to do stuff with your results. 
// It is called after 'search' is executed.


$(document).ready(function() {

	$('#go').on('click', function(e){
		search();  
	})

	$( ".dropdown" ).change(function() {
 	 alert( "Handler for .change() called." );
	});



	$("#dropdown").change(function () {
    	var str = "";

    	$( "#dropdown option:selected" ).each(function() {
    		// console.log($(this).attr('id'));	
      		var ndbno = $(this).attr('id');
      		getNutrients(ndbno);
    	});

  	}); //End .change function


// console.log(anchor);

	  // $("#results").html(template(data));

});


