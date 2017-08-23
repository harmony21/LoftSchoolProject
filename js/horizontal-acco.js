$(document).ready(function() {
    $('.menu-acco__item').on('click', function (e) {
        e.preventDefault()

        var elem = $(e.target);
        item = elem.closest('.menu-acco__item'),
        content = item.find('.menu-acco__wrap'),
        items = item.siblings(),
        otherContent = items.find('.menu-acco__wrap'),
        maxWidth = $('.menu-acco__item').length * $('.menu-acco__title').width(),

        mobWidth = $(window).width() - maxWidth,
        desWidth = $(window).width()*0.53 - maxWidth;

        if (!item.hasClass('active')) {
            items.removeClass('active'),
            item.addClass('active'),
            otherContent.css ('width', 0);

            if ($(window).width() < 769) {
                content.css ('width', mobWidth)
            }
            else {
                content.css ('width', desWidth)
            } 
            
        } else {
            item.removeClass('active');
            content.css ('width', 0)
        };

        if ($(window).width() < 481) {
            $('.menu-acco__close').on('click', function(ev) {
                var mobileItem = $(ev.target);
                elem.removeClass('active');
                mobileItem.closest('.menu-acco__wrap').css ('width', 0);
            })
        }
    });
});

        

