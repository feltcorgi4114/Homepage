document.querySelector("#btn-time").onclick = clock;

// Creates a new real time clock, according to the user's timezone
function clock()
{
    let date = new Date();
    document.querySelector("#time-displayer").innerHTML = date.toLocaleTimeString();
    window.setInterval(clock, 1000);
}