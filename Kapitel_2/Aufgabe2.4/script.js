"use strict";
var Aufg1u2;
(function (Aufg1u2) {
    //let current: number = 1;
    let loaded = ["", "", ""];
    Aufg1u2.current = getJSONcontent();
    Aufg1u2.flaschenhaelse = Aufg1u2.current.oben;
    Aufg1u2.flaschenwaende = Aufg1u2.current.mitte;
    Aufg1u2.flaschenboeden = Aufg1u2.current.unten;
    Aufg1u2.ausgewaehlt = { oben: undefined, mitte: undefined, unten: undefined };
    let nextbutton = document.getElementById("naechsterTeil");
    nextbutton.addEventListener("click", movePageforeward);
    let pervbutton = document.getElementById("vorherigerTeil");
    pervbutton.addEventListener("click", movePagebackward);
    let htmlImgs = [];
    window.addEventListener("load", windowLoaded);
    function movePageforeward() {
        switch (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)) {
            case " ":
                window.open("Hals.html", "_self");
                break;
            case "index.html":
                window.open("Hals.html", "_self");
                break;
            case "Hals.html":
                window.open("Rumpf.html", "_self");
                break;
            case "Rumpf.html":
                window.open("Boden.html", "_self");
                break;
            case "Boden.html":
                window.open("end.html", "_self");
                break;
            default:
                console.log("bereits auf der Finalseite");
        }
    }
    function movePagebackward() {
        switch (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)) {
            case "end.html":
                window.open("Boden.html", "_self");
                break;
            case "Boden.html":
                window.open("Rumpf.html", "_self");
                break;
            case "Rumpf.html":
                window.open("Hals.html", "_self");
                break;
            case "Hals.html":
                window.open("index.html", "_self");
                break;
            default:
                console.log("bereits auf der Startseite");
        }
    }
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "index.html" || window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "") {
        let halsbutton = document.getElementById("hals");
        halsbutton.addEventListener("click", openhals);
        let rumpfbutton = document.getElementById("rumpf");
        rumpfbutton.addEventListener("click", openrumpf);
        let bodenbutton = document.getElementById("boden");
        bodenbutton.addEventListener("click", openboden);
        function openhals() {
            window.open("Hals.html", "_self");
        }
        function openrumpf() {
            window.open("Rumpf.html", "_self");
        }
        function openboden() {
            window.open("Boden.html", "_self");
        }
    }
    function windowLoaded() {
        console.log(Aufg1u2.ausgewaehlt);
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Hals.html") {
            let flaeche = document.getElementById("flaeche");
            Aufg1u2.flaschenhaelse.forEach(bilder => {
                let img = document.createElement("img");
                img.src = bilder.quelle;
                htmlImgs.push(img);
                flaeche.appendChild(img);
                img.addEventListener("click", function () {
                    selectImage(img, bilder);
                });
            });
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Rumpf.html") {
            let flaeche = document.getElementById("flaeche");
            Aufg1u2.flaschenwaende.forEach(bilder => {
                let img = document.createElement("img");
                img.src = bilder.quelle;
                htmlImgs.push(img);
                flaeche.appendChild(img);
                img.addEventListener("click", function () {
                    selectImage(img, bilder);
                });
            });
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Boden.html") {
            let flaeche = document.getElementById("flaeche");
            Aufg1u2.flaschenboeden.forEach(bilder => {
                let img = document.createElement("img");
                img.src = bilder.quelle;
                htmlImgs.push(img);
                flaeche.appendChild(img);
                img.addEventListener("click", function () {
                    selectImage(img, bilder);
                });
            });
        }
    }
    //console.log(getJSONcontent());
    function getJSONcontent() {
        let zwischen = Aufg1u2.createJSON2;
        let content = JSON.parse(zwischen);
        return content;
    }
    Aufg1u2.getJSONcontent = getJSONcontent;
    /*export function getSelectedFromJSON(jsonStr: string): Flaschenteil {
        console.log(jsonStr);
        if (jsonStr != null) {
            let json: Flaschenteil = JSON.parse(jsonStr);
            Object.keys(json).forEach(key => {
                if (key == "oben") {
                    let pic: Bilder = json[key];
                    ausgewaehlt.oben = pic;
                } else if (key == "mitte") {
                    let pic: Bilder = json[key];
                    ausgewaehlt.mitte = pic;
                } else if (key == "unten") {
                    let pic: Bilder = json[key];
                    ausgewaehlt.unten = pic;
                }
            });
        }
        return ausgewaehlt;
    }*/
    function selectImage(img, bilder) {
        if (bilder.art == 0) {
            Aufg1u2.ausgewaehlt.oben = bilder;
            let speicher1 = { oben: undefined, mitte: undefined, unten: undefined };
            speicher1.oben = bilder;
            loaded[0] = bilder.quelle;
            //sessionStorage.setItem(bilder);
        }
        else if (bilder.art == 1) {
            Aufg1u2.ausgewaehlt.mitte = bilder;
            let speicher3 = { oben: undefined, mitte: undefined, unten: undefined };
            speicher3.oben = bilder;
            loaded[1] = bilder.quelle;
        }
        else if (bilder.art == 2) {
            Aufg1u2.ausgewaehlt.unten = bilder;
            let speicher3 = { oben: undefined, mitte: undefined, unten: undefined };
            speicher3.oben = bilder;
            loaded[2] = bilder.quelle;
        }
        img.className += "selected";
        htmlImgs.forEach(pic => {
            if (pic != img) {
                pic.classList.remove("selected");
            }
        });
        console.log(loaded);
        console.log(Aufg1u2.ausgewaehlt);
    }
})(Aufg1u2 || (Aufg1u2 = {}));
//# sourceMappingURL=script.js.map