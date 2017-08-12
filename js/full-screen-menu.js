$(document).ready(function() {
    $('.hamburger-menu__link').click(function(e) {
        e.preventDefault();
        $(".full-screen").fadeIn();
    });
    $('.full-screen__menu-close').click(function(e) {
        e.preventDefault();
        $(".full-screen").fadeOut();
    });
});