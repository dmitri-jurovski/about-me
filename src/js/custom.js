"use strict";

function instLoad(token){

	$( "#perRow div" ).remove();

 	$.ajax({
		url: 'https://api.instagram.com/v1/users/self/media/recent',
		dataType: 'jsonp',
		type: 'GET',
		data: {access_token: token, count: 9},
		success: function(data){
	 		console.log(data.data);
			for( x in data.data ){
				$('#perRow').append('<div class"col-md-4"><a href="'+data.data[x].link+'" target="_blanck"><img class"img-fluid" src="'+data.data[x].images.standard_resolution.url+'"></a></div>').fadeIn(4000);
			}
		},
		error: function(data){
			console.log(data);
		}
	});
}

// Tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('main').load('home.html');

// Main Menu
$('#mainMenu a').on('click', function(e){
	
	$('#mainMenu a').removeClass("active");
    $('main').load(e.currentTarget.id + '.html');
	$(this).addClass('active');
	console.log('Load part webpage');
	$("html, body").animate({ scrollTop: 0 }, "slow");

});
$(document).ready(function(){
	
	$('#resumeButton').on('click', function(e){
		
		$('main').load('resume.html');
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});


	$('#scrollTop').on('click', function(e){
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});

});



// $(document).ready(function(){
//     $('#personal').on('click', function(){
//     	console.log(this);
//     	$(".instagram button").removeClass("active");
//     	$(this).addClass("active");
//     	const personal = '3970588176.1677ed0.7477ad46f0224a60b9ab308f4b209d90';
//         instLoad(personal);
//         console.log("Personal Instagram Photos Load");
//     });


//     $('#creation').on('click', function(e){
//     	console.log(e.innerHTML);
//     	$(".instagram button").removeClass("active");
//     	$(this).addClass("active");
//     	const creation = '7562922180.1677ed0.fc4e273eea1049be86e4a335cb642dbc';   
//         instLoad(creation);
//         console.log("Creation Instagram Photos Load");
//     });

// });









              
                 
        
           
                    
                  
                
              











