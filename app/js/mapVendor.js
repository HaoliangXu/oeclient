var mapVendor= angular.module("mapVendor", ['dataVendor'], function(){
    //todo map options can be get from dataVendor of local storage
    var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);
    var mapOptions = {
        center: pyrmont,
        zoom: 15,
        disableDefaultUI: true
    };
    this.map = new google.maps.Map(document.getElementById('earthmap'), mapOptions);
    this.place = new google.maps.places.PlacesService(this.map);
});