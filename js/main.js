

var altura = $('.formWrapper').innerHeight();
console.log(altura);

$(document).ready(function(){


    var h = $('.formWrapper').innerHeight();
	$('.column').css('height', h);

	var altoWrapfooter = $('footer .navWrapper').innerHeight();
	$("footer").css('padding-bottom',altoWrapfooter);

});

$(window).resize( function(){

   var h = $('.formWrapper').innerHeight();
     $('.column').css('height', h);


	var altoWrapfooter = $('footer .navWrapper').innerHeight();
	$("footer").css('padding-bottom',altoWrapfooter);


});

