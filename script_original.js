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


	// for(prop in data[0]['nutrients']){
	// 	console.log(prop + ' ' + data[0]['nutrients'][0][prop]);
	// }

	// for(var i = 0; i < data[0]['nutrients'].length; i ++){
	// console.log('in searchCallBack function: '+ data[0]['nutrients'][i]);
	// }	

	

	var content = $('#results');
	data.results.forEach(function(element, index){
		var $newDiv = $('<div>');		
		var $newP = $('<p>');
		$newP.text(element.name);
		$newDiv.append($newP);
		content.append($newDiv);
	});
}

$(document).ready(function() {



	$('#go').on('click', function(e){
		var $selector = $('#selector');
		var newSelect = $('<select>');
		$selector.append(newSelect);
		
		var query = $('#search').val();
		console.log('Searching: ', query);
		search(query);
	})
});

function search(query){
	console.log('In search: ', query);
	// Start the search here!
// Example 1 - Cross Site Error
	/*$.ajax ({
	    type: 'GET',
	    dataType: 'json',
	    crossDomain: true,
	    url: 'http://www.giantbomb.com/api/search/?format=json&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
	    complete: function() {
	        console.log('ajax complete');
	    },
	    success: function(data) {
	        searchCallback(data.results);
	    },
	    error: function(){
	    	console.log('error!');
	    }
	});*/

// Example 2: Using JSONP
/*$.ajax ({
	type: 'GET',
	dataType: 'jsonp',
	crossDomain: true,
	jsonp: 'json_callback',
	url: 'http://www.giantbomb.com/api/search/?format=jsonp&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
	complete: function() {
		console.log('ajax complete');
	},
	success: function(data) {
		searchCallback(data);
	}
});*/

// Example 3, using CORS
	/*$.ajax({
		type: 'GET',
        url: 'http://updates.html5rocks.com',
        crossDomain: true,
        dataType: 'html',
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status) {
            alert('Error: ' + status);
        }
    });*/

// Example 4: Using JSONP, combined with new callback functions
	var jqxhr = $.ajax ({
		type: 'GET',
		dataType: 'json',
		crossDomain: true,
		// jsonp: 'json_callback',
		// url: 'http://api.nal.usda.gov/ndb/list?format=json&lt=g&max=50&sort=n&api_key=' + apikey,
		url: 'http://api.nal.usda.gov/ndb/nutrients/?format=json&max=350&api_key=' + apikey + '&nutrients=205&nutrients=204&nutrients=208&nutrients=269&fg=0300' + '&query=' + encodeURI(query),
		}).always(function() {
			console.log('Ajax attempt complete.');
		}).done(function(data, textStatus, jqXHR) {
			console.log(data);
			searchCallback(data);
		}).fail(function(jqXHR, textStatus, errorThrown) {
			console.log('Ajax failed: ', textStatus);
		});

		// Set another completion function for the request above
		// You can set multiple always, done and fail functions like this
	jqxhr.always(function(){
		console.log('Still complete!');
	});
	
}