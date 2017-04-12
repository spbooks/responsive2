window.addEventListener("load",function(event) {
    navigator.getBattery().then(function (battery) {
        // Get the battery level, and if it's greater than 50%, load the images
        var level = battery.level;
        if (level > 0.2) {
            // Find all 'tvshow' divs and loop through them all
            tvShows = document.getElementsByClassName('tvshow');
            var i;
            for (i = 0; i < tvShows.length; i++) {
                tvShow = tvShows[i];
                // Get the show name
                showName = tvShow.classList[1];
                // Create a picture element
                var newPictureNode = document.createElement("picture");
                // Set the source and classes for the picture, the code is identical to earlier examples, but the show name is passed to generate for each show
                var pictureInnerHTML = '<source srcset="../images/' + showName + '-small.jpg" media="(max-width: 320px)" class="thumbnail"><source srcset="../images/' + showName + '-medium.jpg" media="((min-width: 320px) and (max-width: 480px))" class="thumbnail"><source srcset="../images/' + showName + '-large.jpg" media="(min-width: 480px)" class="thumbnail"><img src="../images/' + showName + '-medium.jpg" class="thumbnail">';
                newPictureNode.innerHTML = pictureInnerHTML;
                // Add an event listener to the picture
                newPictureNode.addEventListener('click', toggle_visibility, false);

                // Also generate the video html in the same way
                var newVideoNode = document.createElement("video");
                var videoInnerHTML = '<source src="../videos/' + showName + '.mp4" type="video/mp4"><source src="../videos/' + showName + '.ogv" type="video/ogg">Your browser doesn\'t support HTML5 video tag.';
                newVideoNode.setAttribute("controls", "controls");
                newVideoNode.setAttribute("poster", '../images/' + showName + '-medium.jpg');
                newVideoNode.setAttribute("preload", "none");
                newVideoNode.innerHTML = videoInnerHTML;

                // Insert the new image and video in the correct place in the DOM
                var nextNode = tvShow.getElementsByClassName('showdescription');
                tvShow.insertBefore(newVideoNode, nextNode[0]);
                tvShow.insertBefore(newPictureNode, newVideoNode);
            }
        }
    });
},false);

function toggle_visibility(id) {
    var e = this;
    var v = e.nextSibling;
    v.style.display = 'block';
    v.play();
    e.style.display = 'none';
}