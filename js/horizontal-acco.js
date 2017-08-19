// $(document).ready(function() {
//     $('.menu-acco__item').click(function(e) {
//         $(this).toggleClass('active');
//         $(this).next('.menu-acco__desc').slideUp(600);

//         $('.menu-acco__close').click(function(e) {
//         e.preventDefault();
//         $('.menu-acco__desc').fadeOut();
//         $('.menu-acco__desc').closest('.menu-acco__item').removeClass('active');
//     });  
//     });  
    
// });

$(document).ready(function() {
    $('.menu-acco__item').on('click', function (e) {
        e.preventDefault()

        var elem = $(e.target);
        item = elem.closest('.menu-acco__item'),
        content = item.find('.menu-acco__context'),
        reqWidth = item.find('.menu-acco__desc').outerWidth(),
        items = item.siblings(),
        otherContent = items.find('.content-menu');

        if (!item.hasClass('active')) {
            items.removeClass('active');
            item.addClass('active');

            otherContent.css ({
                'width' : 0
            });

            content.css ({
                'width' : reqWidth
            })
        } else {
            item.removeClass('active')
            content.css ({
                'width' : 0
            })
        }
    })
});

        

