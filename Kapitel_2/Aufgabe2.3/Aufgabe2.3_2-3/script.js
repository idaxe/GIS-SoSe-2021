"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nextbutton = document.getElementById("naechsterTeil");
nextbutton.addEventListener("click", movePageforeward);
let pervbutton = document.getElementById("vorherigerTeil");
pervbutton.addEventListener("click", movePagebackward);
function movePageforeward() {
    console.log(window.location.pathname);
    switch (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)) {
        case "index.html":
            window.open("Rumpf.html", "_self");
            break;
        case "Rumpf.html":
            window.open("Boden.html", "_self");
    }
}
function movePagebackward() {
    console.log(window.location.pathname);
}
//# sourceMappingURL=script.js.map