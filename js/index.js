var window, document;

function parallax(imageId) {
    var vw = window.innerWidth;
    var image = document.getElementById(imageId);

    if (vw < 768) {
        image.setAttribute("class", "noParallax");
    }
    else {
        image.setAttribute("class", "parallax");
    }
}