$(document).ready(function() {
    $('.team-acco__item').on('click', function (ev){
        ev.preventDefault();

        var element = $(ev.target),
        verItem = element.closest('.team-acco__item'),
        verItems = verItem.siblings(),
        verContent = verItem.find('.team-acco__content'), 
        verContents = verItems.find('.team-acco__content');

        if (!verItem.hasClass('active')) {
            verItems.removeClass('active');
            verItem.addClass('active');

            verContents.css ({
                'height' : 0
            });

            verContent.css ({
                'height' : 'auto'
            });

        } else {
            verItem.removeClass('active');

            verContent.css ({
                'height' : 0
            });
        }

    })
})