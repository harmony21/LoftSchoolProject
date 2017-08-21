ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [59.94604759, 30.31836037],
        zoom: 12
    });

    myPlacemark = new ymaps.Placemark([59.97496989, 30.31149391], {
        hintContent: 'Бургеры',
        balloonContent: '<div class="mapmap">Text</div>'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/i-map_marker.png',
        iconImageSize: [46, 57]
    });

    myPlacemark2 = new ymaps.Placemark([59.95125142, 30.38728882], {
        hintContent: 'Бургеры'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/i-map_marker.png',
        iconImageSize: [46, 57]
    });

    myPlacemark3 = new ymaps.Placemark([59.91644773, 30.49371887], {
        hintContent: 'Бургеры'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/i-map_marker.png',
        iconImageSize: [46, 57]
    });

    myPlacemark4 = new ymaps.Placemark([59.88850937, 30.31725097], {
        hintContent: 'Бургеры'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/i-map_marker.png',
        iconImageSize: [46, 57]
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
}