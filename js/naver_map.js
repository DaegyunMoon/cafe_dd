
var mapOptions = {
    center : new naver.maps.LatLng(37.827686, 127.137600),
    zoom : 10,
    minZoom : 1,
    zoomControl : true,
    zoomControlOptions : {
        position : naver.maps.Position.LEFT_BOTTOM
    }
}
var map, marker;
function initMap() {
    map = new naver.maps.Map('map-view', mapOptions);
    marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.827686, 127.137600),
        map: map,
        icon: {
            content: '<img src="image/marker.png"/>',
            size: new naver.maps.Size(70, 74),
            anchor: new naver.maps.Point(25, 86)
        }
    });
}