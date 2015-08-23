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
	for(var i =0; i<data.length; i++){
		var option = $('<option>');
		option.attr({'id':i, 'class':'ndbno'});

		option.html((i+1) + ' ' + data[i]['name']);
		// console.log(option);
		$('#dropdown').append(option);
		// console.log(data[i]['name']);

	}
}

function stringMatch(data){
	var string = $('#search').val();
	console.log('in stringMatch looking for items containing ' + string);
	
	var x = [];
	data = data['report']['foods'];
	$('#dropdown').children().remove();

	for(var i = 0; i < data.length; i ++){
		x.push(data[i]['name']);
	}
	var incr = 0;

	x.forEach(function(element, index){

		if(element.match(string)!=null){
		incr++;
		var option = $('<option>');

		option.attr({'id': data[index]['ndbno'], 'class':'ndbno'});
		option.html((index+1) + ' ' + data[index]['name']);
		// console.log(option);
		$('#dropdown').append(option);
		}

	}) //End forEach loop

	if(incr==0){
		console.log(incr);
		alert('no match');
		}
}

function getNutrients(){
	console.log('in getNutrients');
}

$(document).ready(function() {

	$('#go').on('click', function(e){
		search();  
	})

	$('#dropdown').on('click', '.ndbno', function(){
		var x = $(this).attr('id');
		console.log(x);
	})

});


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
