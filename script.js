$(document).ready(function(){
	$('.header-title').hover(	
			function(){
				$('.header-title-bottom').addClass('gripright');},
			function(){
				$('.header-title-bottom').removeClass('gripright');}
				)
	});
	
	
$(document).ready(function(){
	$('.header-title').hover(
			function(){
					$('.header-title-top').addClass('gripleft');},
				function(){
				$('.header-title-top').removeClass('gripleft');}
				)
});
	
	
$(document).ready(function(){
	$('.header-title').hover(
			function(){
				$(".header-bottom").addClass('blured');},
			function(){
				$(".header-bottom").removeClass('blured');}
				)
});
	