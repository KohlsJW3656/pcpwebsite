var window, document;

function navResize() {
    var navItems = document.getElementsByClassName("navResize");
    var vw = window.innerWidth;

    for (var i = 0; i < navItems.length; i++) {
        if (vw < 768) {
            navItems[i].setAttribute("class", "col-xs-12 navResize");
        }
        else {
            navItems[i].setAttribute("class", "navResize");
        }
    }
}