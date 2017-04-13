if ("vibrate" in navigator) {
    links = document.getElementsByTagName('a');
    var i;
    for (i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (event) {
            navigator.vibrate(1000);
        }, false);
    }
}