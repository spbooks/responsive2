window.addEventListener("load",function(event) {
    document.cookie = "mature=no";
    tvShows = document.getElementsByClassName('tvshow');
    var i;
    for (i = 0; i < tvShows.length; i++) {
        tvShow = tvShows[i];
        var mature = getCookie('mature');
        console.log(mature + tvShow.classList[2]);
        if (mature == 'no' && tvShow.classList[2] != 'mature') {
            showName = tvShow.classList[1];
            var newPictureNode = document.createElement("picture");
            var pictureInnerHTML = '<source srcset="../images/' + showName + '-small.jpg" media="(max-width: 320px)" class="thumbnail"><source srcset="../images/' + showName + '-medium.jpg" media="((min-width: 320px) and (max-width: 480px))" class="thumbnail"><source srcset="../images/' + showName + '-large.jpg" media="(min-width: 480px)" class="thumbnail"><img src="../images/' + showName + '-medium.jpg" class="thumbnail">';
            newPictureNode.innerHTML = pictureInnerHTML;
            newPictureNode.addEventListener('click', toggle_visibility, false);

            var newVideoNode = document.createElement("video");
            var videoInnerHTML = '<source src="../videos/' + showName + '.mp4" type="video/mp4"><source src="../videos/' + showName + '.ogv" type="video/ogg">Your browser doesn\'t support HTML5 video tag.';
            newVideoNode.setAttribute("controls", "controls");
            newVideoNode.setAttribute("poster", '../images/' + showName + '-medium.jpg');
            newVideoNode.setAttribute("preload", "none");
            newVideoNode.innerHTML = videoInnerHTML;

            var nextNode = tvShow.getElementsByClassName('showdescription');
            tvShow.insertBefore(newVideoNode, nextNode[0]);
            tvShow.insertBefore(newPictureNode, newVideoNode);
        }
    }
},false);

function getCookie(name) {
    var regexp = new RegExp("(?:^" + name + "|;\s*" + name + ")=(.*?)(?:;|$)", "g");
    var result = regexp.exec(document.cookie);
    return (result === null) ? null : result[1];
}

function toggle_visibility(id) {
    var e = this;
    var v = e.nextSibling;
    v.style.display = 'block';
    v.play();
    e.style.display = 'none';
}