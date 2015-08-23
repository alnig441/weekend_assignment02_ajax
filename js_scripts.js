function search(query){
	// console.log('In search: ', query);

	var jqxhr = $.ajax ({
		type: 'GET',
		dataType: 'json',
		crossDomain: true,
		// jsonp: 'json_callback',
		url: 'http://api.nal.usda.gov/ndb/nutrients/?format=json&max=350&api_key=' + apikey + '&nutrients=205&nutrients=204&nutrients=208&nutrients=269&fg=0300',  //All babay foods, main list
		}).always(function() {
			console.log('Ajax attempt complete.');
		}).done(function(data, textStatus, jqXHR) {
			console.log(data);
			stringMatch(data);
			// populateDropdown(data);
			// searchCallback(data);
		}).fail(function(jqXHR, textStatus, errorThrown) {
			console.log('Ajax failed: ', textStatus);
		});


	jqxhr.always(function(){
		console.log('Still complete!');
	});
	
}


function stringMatch(data){
	var string = $('#search').val();
	console.log('in stringMatch looking for items containing ' + string);
	
	var food = [];
	var dataObject = {};
	var dataArray = [];
	

	data = data['report']['foods'];
	$('.ndbno').remove();

	for(var i = 0; i < data.length; i ++){
		// food.push(data[i]['name']);
		food.push({'ndbno':data[i]['ndbno'], 'name':data[i]['name']});


	}

	var incr = 0;

	food.forEach(function(element, index){

		if(element['name'].match(string.toLowerCase())!=null){
		incr++;


		var option = $('<option>');
		var newP = $('<p>');
		var link = $('<a>'); //Anchor tag to trigger modal

		option.attr({'id': data[index]['ndbno'], 'class':'ndbno', 'value':index});

		link.text(data[index]['name']);
		link.attr({'data-toggle': "modal", 'href': "#myModal"});

		link.html((index+1) + ' ' + data[index]['name']); //Add food item text to anchor tag

		newP.append(link);

		$('#results').append(newP);
		}


	}) //End forEach loop

	dataObject['item'] = dataArray;
	console.log(dataObject['0']);


	if(incr==0){
		// console.log(incr);
		alert('no match');
		}


}	//END STRINGMATCH 

