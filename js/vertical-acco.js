$(document).ready(function() {
    $('.team-acco__item').click(function(e) {
        $(this).toggleClass('active');
        $('.team-acco__content').fadeIn(200);
    });      
});