window.addEventListener("load", function (event) {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(getPosition);
    } else {
        alert("RWDFlix uses geolocation to recommend shows that may be relevant to you.")
    }

    function getPosition(position) {
        var url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&sensor=false";
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
        xmlhttp.addEventListener("readystatechange", processRequest, false);
    }

    function processRequest() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            var i;
            for (i = 0; i < myArr.results.length; i++) {
                if (myArr.results[i].types[0] == "country") {
                    country = myArr.results[i].formatted_address;
                    tvShows = document.getElementsByClassName('tvshow');
                    var j;
                    for (j = 0; j < tvShows.length; j++) {
                        tvShow = tvShows[j];
                        if (tvShow.classList[1] == country || tvShow.classList[2] == country) {
                            tvShows[j].classList.add('highlight')
                        }
                    }
                }
            }
        }
    }
}, false);

