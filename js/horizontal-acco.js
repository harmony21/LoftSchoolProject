$(document).ready(function() {
    $('.menu-acco__item').click(function(e) {
        $(this).toggleClass('.menu-acco__item_active');
        $(this).next('div').slideToggle(200);
    });      
});