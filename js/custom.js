$('main').load('home.html');

// Main Menu
$('#mainMenu li').on('click', function(e){
    $('main').load(e.target.id + '.html');
    $('#mainMenu li').addClass('selected');
});

// Instagram Fetch data

// Couseresel
 

 var token = '7562922180.1677ed0.fc4e273eea1049be86e4a335cb642dbc',
    num_photos = 10;
 
$.ajax({
	url: 'https://api.instagram.com/v1/users/self/media/recent',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
 		console.log(data);
		for( x in data.data ){
			$('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>');
		}
	},
	error: function(data){
		console.log(data);
	}
});
