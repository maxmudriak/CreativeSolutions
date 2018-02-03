function initMap() {
    var mapCenter = {lat: -7.962774, lng: 112.618478};
    var mapDiv = document.getElementById('ba-map');
    if(mapDiv === null) return;

    var map = new google.maps.Map(document.getElementById('ba-map'), {
        zoom: 14,
        center: mapCenter,
        disableDefaultUI: true
    });
}

window.onload = initMap;