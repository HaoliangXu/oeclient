var earthmap = {};
function initialize(){
    var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);
    var mapOptions = {
        center: pyrmont,
        zoom: 15,
        disableDefaultUI: true
    };
    earthmap.map = new google.maps.Map(document.getElementById('earthmap'), mapOptions);
    earthmap.place = new google.maps.places.PlacesService(earthmap.map);
}
google.maps.event.addDomListener(window, 'load', initialize);