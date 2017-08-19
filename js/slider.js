$(document).ready(function(){
  $('.bxslider').bxSlider();
});

var slider = $('.bxslider').bxSlider({
  mode: 'horizontal'
});

$('.arrow-right').click(function(){
  slider.goToNextSlide();
});

$('.arrow-left').click(function(){
  slider.goToPrevSlide();
});



