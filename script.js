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
  // при нажатии на кнопку scrollup
  $('.scrollup').click(function() {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
})
// при прокрутке окна (window)
$(window).scroll(function() {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop()>200) {
    // то сделать кнопку scrollup видимой
    $('.scrollup').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scrollup').fadeOut();
  }
});
	