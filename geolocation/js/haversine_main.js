function findNearest(lat,lon){
    let d1 = haversine(lat,lon,2.922561,101.650965); // De Pulze
    let d2 = haversine(lat,lon,3.073065,101.607787); // Sunway Pyramid
    let d3 = haversine(lat,lon,3.158761,101.714524);

    return[d1,d2,d3];
}

let elLocate = document.getElementById("locate");
elLocate.addEventListener("click", function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            let elLat = document.getElementById("lat");
            let elLong = document.getElementById("long");
            let elDePulze = document.getElementById("depulze");
            let elSunway = document.getElementById("sunway");
            let elKlcc = document.getElementById("klcc");

            let userLat = position.coords.latitude;
            let userLong = position.coords.longitude;

            let distences = findNearest(userLat, userLong);

            elLat.innerHTML = "Your latitude :" + userLat;
            elLong.innerHTML ="Your Longitude :" + userLong;
            elDePulze.innerHTML = "Distence to DePulze, Cyberjaya is " + distences[0] + "km";
            elSunway.innerHTML = "Distence to Sunway Pyramid, Subangjaya is " + distences[1] + "km";
            elKlcc.innerHTML = "Distence to KLCC, Ampang is " + distences[2] + "km";
        });
    } else {
        alert("Geolocation not supported with this browser!");
    }
});