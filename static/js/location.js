let latitude = 0, longitude = 0;
let btnShowLoc = document.querySelector("#btn-showLocation"),
btnLoc = document.querySelector("#btn-location");

btnLoc.style.display = "inline";
btnLoc.onclick = locate;
btnShowLoc.style.display = "none";
btnShowLoc.onclick = showLocation;

// Opens the URL when the "show location" button is clicked
function showLocation()
{
    let url = "https://www.google.com/maps/search/" + latitude + ", " + longitude;
    window.open(url);
}

// Gets the user's positional coordinates
function locate()
{
    navigator.geolocation.getCurrentPosition(function(position)
    {
        latitude = position.coords.latitude.toString();
        longitude = position.coords.longitude.toString();
        btnShowLoc.style.display = "inline";
        btnLoc.style.display = "none";
    });
}