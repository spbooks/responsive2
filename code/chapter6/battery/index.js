window.addEventListener("load",function(event) {
    var thumbnails = document.querySelectorAll("picture img");

    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', toggle_visibility, false);
    }

    navigator.getBattery().then(function (battery) {
        var level = battery.level;
        if (level < 0.2) {
            document.getElementsByTagName('body')[0].classList.add('battery-save');
            var images = document.getElementsByTagName('picture');
            console.log(images.length);
            var i;
            for (i = 0; i < images.length; i++) {
                images[i].remove();
            }
        }
    });
},false);

function toggle_visibility(id) {
    var e = this;
    var v = e.parentNode.nextSibling.nextSibling;
    v.style.display = 'block';
    v.play();
    e.style.display = 'none';
}