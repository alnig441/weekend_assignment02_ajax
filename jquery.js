var apikey = '83PiwLeoNfC5DxbV9vWplkbHEclCOlpWB7Ak79xK'; // My api.data.gov API key

var fat = "Total lipid (fat)";
var sugar = "Sugars, total";
var carb = "Carbohydrate, by difference";
var kcal = "Energy";
var food;
// Use this function to do stuff with your results. 
// It is called after 'search' is executed.
function searchCallback(data) {
	data = data['report']['foods'];

	console.log(data[0]['nutrients'][2]);

	

	var content = $('#results');
	data.results.forEach(function(element, index){
		var $newDiv = $('<div>');		
		var $newP = $('<p>');
		$newP.text(element.name);
		$newDiv.append($newP);
		content.append($newDiv);
	});
}

function populateDropdown(data){
	data = data['report']['foods'];
	console.log('in populateDropdown' + data.length);
	var position = $('#populateDropdown');
	for(var i =0; i=data.length; i++){
		position.append($('<option>'));
		console.log(i);
	}
}

$(document).ready(function() {

var jqxhr = $.ajax ({
		type: 'GET',
		dataType: 'json',
		crossDomain: true,
		// jsonp: 'json_callback',
		// url: 'http://api.nal.usda.gov/ndb/list?format=json&lt=g&max=50&sort=n&api_key=' + apikey,
		url: 'http://api.nal.usda.gov/ndb/nutrients/?format=json&max=350&api_key=' + apikey + '&nutrients=205&nutrients=204&nutrients=208&nutrients=269&fg=0300',
		}).always(function() {
			console.log('Ajax attempt complete.');
		}).done(function(data, textStatus, jqXHR) {
			console.log(data);
			populateDropdown(data);
			// searchCallback(data);
		}).fail(function(jqXHR, textStatus, errorThrown) {
			console.log('Ajax failed: ', textStatus);
		});


	$('#go').on('click', function(e){
		var selector = $('#selector');
		var newSelect = $('<select>');
		var newOption = $('<option>');
		newOption.attr('value','test');
		newOption.html('test');
		newSelect.append(newOption);
		selector.append(newSelect);
		
		var query = $('#search').val();
		console.log('Searching: ', query);
		// search(query);
	})
});

// function search(query){
// 	console.log('In search: ', query);

// 	jqxhr.always(function(){
// 		console.log('Still complete!');
// 	});
	
// }