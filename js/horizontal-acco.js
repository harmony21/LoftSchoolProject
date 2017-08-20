$(document).ready(function() {
    $('.menu-acco__item').on('click', function (e) {
        e.preventDefault()

        var elem = $(e.target);
        item = elem.closest('.menu-acco__item'),
        content = item.find('.menu-acco__context'),
        desWidth = item.find('.menu-acco__desc').outerWidth(),
        items = item.siblings(),
        otherContent = items.find('.content-menu');

        $(window).width();
        $('.menu-acco__item').width();
        var itemsLength = $('.menu-acco__item').width() * $('.menu-acco__item').length;
        var mobWidth = $(window).width() - itemsLength;

        if (!item.hasClass('active')) {
            items.removeClass('active');
            item.addClass('active');

            otherContent.css ({
                'width' : 0
            });

            if ($(window).width() < 769) {
                content.css ({
                    'width' : mobWidth
                });
                content.show(300);

            } else {
                content.css ({
                    'width' : desWidth
                });
                content.show(300);
            };
            
        } else {
            item.removeClass('active');
            content.hide(400);
            content.css ({
                'width' : 0
            });
        };

        if ($(window).width() < 481) {
            $('.menu-acco__close').on('click', function(ev) {
                var mobileItem = $(ev.target);
                elem.removeClass('active');
                mobileItem.closest('.menu-acco__context').hide(400);
            })
        }
    });
});

        

