$(document).ready(function() {
    $('.hamburger-menu__link').click(function(e) {
        e.preventDefault();
        $(".full-screen").fadeIn(300);
    });
    $('.full-screen__menu-close').click(function(e) {
        e.preventDefault();
        $(".full-screen").fadeOut(300);
    });
});