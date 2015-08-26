var apikey = '83PiwLeoNfC5DxbV9vWplkbHEclCOlpWB7Ak79xK'; // My api.data.gov API key

var source2;

$(document).ready(function() {

	source2  = $("#nutrient-template").html();

    $('[data-toggle="tooltip"]').tooltip;   


	$('#go').on('click', function(e){
		search();  
	})



	$('#results').on('click', '.ndbno', function(){
		var ndbno = $(this).attr('id');
		console.log($('#nutrient-template').html());

		getNutrients(ndbno);


		
		
	})


});


