function getNutrients(ndbno){
	console.log('getNutrients for ' + ndbno + ' of type ' + typeof ndbno);

	var source1   = $("#some-template1").html();
  	var template1 = Handlebars.compile(source1);
  	var source2   = $("#some-template2").html();
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
			console.log(data['report']['foods']);
			$(".modal-body").html(template1(data['report']['foods']));
		}).fail(function(jqXHR, textStatus, errorThrown) {
			console.log('Ajax failed: ', textStatus);
		});


	jqxhr.always(function(){
		console.log('Still complete!');
	});


}