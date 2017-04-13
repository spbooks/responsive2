window.addEventListener("load",function(event) {
    var thumbnails = document.querySelectorAll("picture img");

    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', toggle_visibility, false);
    }

    var localNow = new Date();
    var localTime = localNow.getHours();

    tvShows = document.getElementsByClassName('tvshow');
    var j;
    for (j = 0; j < tvShows.length; j++) {
        if ((localTime <= 19) && (tvShows[j].classList.contains('evening'))) {
            tvShows[j].classList.add('highlight')
        }
    }
},false);

function toggle_visibility(id) {
    var e = this;
    var v = e.parentNode.nextSibling.nextSibling;
    v.style.display = 'block';
    v.play();
    e.style.display = 'none';
}