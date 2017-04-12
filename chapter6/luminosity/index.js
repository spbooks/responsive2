window.addEventListener("devicelight", function (event) {
    var luminosity = event.value;

    if (luminosity <= 5) {
        document.body.className = "darkness";
    } else if (luminosity <= 50) {
        document.body.className = "dim";
    } else if (luminosity <= 1000) {
        document.body.className = "bright";
    }
});