

function getNutrients(ndbno){
	console.log('getNutrients for ' + ndbno );


  	var template2 = Handlebars.compile(source2);

		var jqxhr = $.ajax ({
		type: 'GET',
		dataType: 'json',
		crossDomain: true,
		jsonp: 'json_callback',
		url: 'http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key='+apikey+'&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno='+ndbno, // + apikey,
		}).always(function() {
			console.log('Ajax attempt complete.');
		}).done(function(data, textStatus, jqXHR) {
			console.log(template2);
			console.log(data['report']['foods']['0']['nutrients']['0']);
			$(".modal-body").html(template2(data['report']['foods']['0']));
		}).fail(function(jqXHR, textStatus, errorThrown) {
			console.log('Ajax failed: ', textStatus);
		});


	jqxhr.always(function(){
		console.log('Still complete!');
	});


}