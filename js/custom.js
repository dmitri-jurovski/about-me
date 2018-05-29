$('main').load('home.html');

// Main Menu
$('#mainMenu a').on('click', function(e){
	
	$('#mainMenu a').removeClass("active");
    $('main').load(e.target.id + '.html');
	$(this).addClass('active');

});


// Instagram Fetch data

// Couseresel
 

 var token = '3970588176.1677ed0.7477ad46f0224a60b9ab308f4b209d90',
    num_photos = 9;
 
$.ajax({
	url: 'https://api.instagram.com/v1/users/self/media/recent',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
 		console.log(data);
		for( x in data.data ){
			$('#perRow').append('<div class"col-md-4"><img class"img-fluid" src="'+data.data[x].images.standard_resolution.url+'"></div>');
		}
	},
	error: function(data){
		console.log(data);
	}
});

 var token = '7562922180.1677ed0.fc4e273eea1049be86e4a335cb642dbc',
    num_photos = 9;
 
$.ajax({
	url: 'https://api.instagram.com/v1/users/self/media/recent',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
 		console.log(data);
		for( x in data.data ){
			$('#artRow').append('<div class"col-md-4"><img class"img-fluid" src="'+data.data[x].images.standard_resolution.url+'"></div>');
		}
	},
	error: function(data){
		console.log(data);
	}
});


              
                 
        
           
                    
                  
                
              











