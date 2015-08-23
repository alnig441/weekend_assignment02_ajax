function getNutrients(ndbno){
	console.log('getNutrients for ' + ndbno + ' of type ' + typeof ndbno);

		var jqxhr = $.ajax ({
		type: 'GET',
		dataType: 'json',
		crossDomain: true,
		jsonp: 'json_callback',
		// url: 'http://api.nal.usda.gov/ndb/reports/?nutrients=204&nutrients=208&nutrients=205&nutrients=269&ndbno='+ encodeURI(ndbno) + '&max=50&offset=25&format=xml&api_key=' + apikey,
		// url: 'http://api.nal.usda.gov/ndb/nutrients/?format=json&max=350&api_key=' + apikey + '&nutrients=205&nutrients=204&nutrients=208&nutrients=269&fg=0300',  //All babay foods, main list
		url: 'http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key='+apikey+'&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno='+ndbno, // + apikey,
		}).always(function() {
			console.log('Ajax attempt complete.');
		}).done(function(data, textStatus, jqXHR) {
			console.log(data);
			// stringMatch(data);
		}).fail(function(jqXHR, textStatus, errorThrown) {
			console.log('Ajax failed: ', textStatus);
		});


	jqxhr.always(function(){
		console.log('Still complete!');
	});
}