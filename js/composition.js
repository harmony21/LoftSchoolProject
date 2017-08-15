$(document).ready(function() {
    $('.burger-left__composition').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.burger-left__composition-wrap').slideToggle();
    });      
});

$(document).ready(function() {
    $('.burger-left__composition-close').click(function(e) {
        e.preventDefault();
        $('.burger-left__composition').removeClass('active');
        $('.burger-left__composition-wrap').fadeOut();
    });      
});