// JavaScript Document
var tempLatt, tempLong;
tempLong = 0;
tempLatt = 0;
// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
    getLocation();
    initializeMaps();
    navigator.splashscreen.hide();
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(onGeolocationSuccess, onGeolocationError);
}


function initializeMaps(){
    alert('1');
    nokia.Settings.set("appId", "_peU-uCkp-j8ovkzFGNU"); 
    nokia.Settings.set("authenticationToken", "gBoUkAMoxoqIWfxWA5DuMQ");
    // Get the DOM node to which we will append the map
    var mapContainer = document.getElementById("mapContainer");
    // Create a map inside the map container DOM node
    var map = new nokia.maps.map.Display(mapContainer, {
        // initial center and zoom level of the map
        center: [52.51, 13.4],
        zoomLevel: 10
    });
}


//=======================Geolocation Operations=======================//
// onGeolocationSuccess Geolocation

function onGeolocationSuccess(position) {
  tempLatt = position.coords.latitude;
  tempLong = position.coords.longitude;
  //alert(tempLatt+','+tempLong);
}
/*
function onGeolocationSuccess(position) {
    // Use Google API to get the location data for the current coordinates
    var geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    geocoder.geocode({ "latLng": latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if ((results.length > 1) && results[1]) {
                $("#myLocation").html(results[1].formatted_address);
            }
        }
    });

    // Use Google API to get a map of the current location
    // http://maps.googleapis.com/maps/api/staticmap?size=280x300&maptype=hybrid&zoom=16&markers=size:mid%7Ccolor:red%7C42.375022,-71.273729&sensor=true
    var googleApis_map_Url = 'http://maps.googleapis.com/maps/api/staticmap?size=300x300&maptype=hybrid&zoom=16&sensor=true&markers=size:mid%7Ccolor:red%7C' + latlng;
    var mapImg = '<img src="' + googleApis_map_Url + '" />';
    $("#map_canvas").html(mapImg);
}*/

// onGeolocationError Callback receives a PositionError object
function onGeolocationError(error) {
    alert('no location');
    //$("#myLocation").html("<span class='err'>" + error.message + "</span>");
}

function alertLocation()
{
    //alert ("My Location is "+tempLong+","+tempLatt+'.');
    navigator.notification.confirm("My Location is "+tempLong+","+tempLatt+".",null,"Current Location","OK");
}