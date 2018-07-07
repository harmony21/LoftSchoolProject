ymaps.ready(init);
var myMap,
    myPlacemark,
    myPlacemarks = [{ 
        latitude: 48.486214, 
        longitude: 135.092173,
        hintContent: 'Бургеры',
        balloonContent: '<div class="map__marker">Mr. Burger</div>'
    }];

function init(){
    myMap = new ymaps.Map("map", {
        center: [48.480223, 135.071917],
        zoom: 14
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