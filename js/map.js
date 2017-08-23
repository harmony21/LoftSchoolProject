ymaps.ready(init);
var myMap,
    myPlacemark,
    myPlacemarks = [{ 
        latitude: 59.97496989, 
        longitude: 30.31149391,
        hintContent: 'Бургеры',
        balloonContent: '<div class="map__marker">Text</div>'
    },
    { 
        latitude: 59.95125142,
        longitude: 30.38728882,
        hintContent: 'Бургеры',
        balloonContent: '<div class="map__marker">Text</div>'
    },
    { 
        latitude: 59.91644773,
        longitude: 30.49371887,
        hintContent: 'Бургеры',
        balloonContent: '<div class="map__marker">Text</div>'
    },
    { 
        latitude: 59.88850937,
        longitude: 30.31725097,
        hintContent: 'Бургеры',
        balloonContent: '<div class="map__marker">Text</div>'
    }];

function init(){
    myMap = new ymaps.Map("map", {
        center: [59.94604759, 30.31836037],
        zoom: 12
    });

        myPlacemarks.forEach(function(obj) { 
            myPlacemark = new ymaps.Placemark([obj.latitude, obj.longitude], { 
            hintContent: obj.hintContent,  
            hintContent: obj.balloonContent
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/i-map_marker.png',
            iconImageSize: [46, 57]
            });

            myMap.geoObjects.add(myPlacemark);
        });

    myMap.behaviors.disable('scrollZoom');
}