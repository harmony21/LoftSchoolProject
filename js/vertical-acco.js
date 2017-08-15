$(document).ready(function() {
    $('.team-acco__item').click(function(e) {
        $(this).toggleClass('active');
        $(this).next('div').slideToggle();
    });      
});