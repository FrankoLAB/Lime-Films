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

$(document).ready(function(){
	$('.introduce').hover(
			function(){
				$(".lime-line").addClass('hover-width');},
			function(){
				$(".lime-line").removeClass('hover-width');}
				)
});

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(function() {
  $('.scrollup').click(function() {
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
})
$(window).scroll(function() {
  if ($(this).scrollTop()>200) {
    $('.scrollup').fadeIn();
  }
  else {
    $('.scrollup').fadeOut();
  }
});
	