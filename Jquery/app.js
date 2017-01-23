$(document).ready(function() {
	 $(".sub_menu").hide();
	 $('ul li').mouseover(function() {
        $('ul',this).stop().slideDown(200, 'linear');
    });
    $('li, li ul').mouseout(function() {
        $('li ul').stop().slideUp(400, 'linear');
    });


 $("#Details").click(function(event){
				
             $.getJSON('biography.json', function(data) {
                  $('#biography').html('<p> Name: ' + data.name + '</p>');
                  $('#biography').append('<p> Gender: ' + data.gender+ '</p>');
                   $('#biography').append('<p> title: ' + data.title+ '</p>');
                    $('#biography').append('<p> previouscompany: ' + data.previouscompany+ '</p>');
                     $('#biography').append('<p> location: ' + data.location+ '</p>');
               }) ;
					
            });

  $( function() {
    $( "#a" ).accordion({
  active: 1
}).toolTip({content: "This is an accordion which includes my profile"});


  } );







});