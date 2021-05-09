"use strict";
var Aufg2u3;
(function (Aufg2u3) {
    let current = 1;
    let loaded = ["", "", ""];
    Aufg2u3.flaschelhaelse = [];
    Aufg2u3.flaschenwaende = [];
    Aufg2u3.flaschenboeden = [];
    Aufg2u3.ausgewaehlt = { oben: undefined, mitte: undefined, unten: undefined };
    let nextbutton = document.getElementById("naechsterTeil");
    nextbutton.addEventListener("click", movePageforeward);
    let pervbutton = document.getElementById("vorherigerTeil");
    pervbutton.addEventListener("click", movePagebackward);
    let htmlImgs = [];
    window.addEventListener("load", windowLoaded);
    function movePageforeward() {
        let flaeche = document.getElementById("flaeche");
        switch (current) {
            case 1:
                document.getElementById("flaeche").innerHTML = "";
                htmlImgs = [];
                Aufg2u3.mittlereTeile.forEach(bilder => {
                    let img = document.createElement("img");
                    img.src = bilder.quelle;
                    htmlImgs.push(img);
                    flaeche.appendChild(img);
                    img.addEventListener("click", function () {
                        selectImage(img, bilder);
                    });
                });
                current++;
                break;
            case 2:
                document.getElementById("flaeche").innerHTML = "";
                htmlImgs = [];
                Aufg2u3.untereTeile.forEach(bilder => {
                    let img = document.createElement("img");
                    img.src = bilder.quelle;
                    htmlImgs.push(img);
                    flaeche.appendChild(img);
                    img.addEventListener("click", function () {
                        selectImage(img, bilder);
                    });
                });
                current++;
                break;
            default:
                console.log("Reached end");
        }
    }
    function movePagebackward() {
        let flaeche = document.getElementById("flaeche");
        switch (current) {
            case 2:
                document.getElementById("flaeche").innerHTML = "";
                htmlImgs = [];
                Aufg2u3.obereTeile.forEach(bilder => {
                    let img = document.createElement("img");
                    img.src = bilder.quelle;
                    htmlImgs.push(img);
                    flaeche.appendChild(img);
                    img.addEventListener("click", function () {
                        selectImage(img, bilder);
                    });
                });
                current--;
                break;
            case 3:
                document.getElementById("flaeche").innerHTML = "";
                htmlImgs = [];
                Aufg2u3.mittlereTeile.forEach(bilder => {
                    let img = document.createElement("img");
                    img.src = bilder.quelle;
                    htmlImgs.push(img);
                    flaeche.appendChild(img);
                    img.addEventListener("click", function () {
                        selectImage(img, bilder);
                    });
                });
                current--;
                break;
            default:
                console.log("Reached end");
        }
    }
    function windowLoaded() {
        let flaeche = document.getElementById("flaeche");
        Aufg2u3.obereTeile.forEach(bilder => {
            let img = document.createElement("img");
            img.src = bilder.quelle;
            htmlImgs.push(img);
            flaeche.appendChild(img);
            img.addEventListener("click", function () {
                selectImage(img, bilder);
            });
        });
    }
    function selectImage(img, bilder) {
        if (bilder.art == 0) {
            Aufg2u3.ausgewaehlt.oben = bilder;
            loaded[0] = bilder.quelle;
        }
        else if (bilder.art == 1) {
            Aufg2u3.ausgewaehlt.mitte = bilder;
            loaded[1] = bilder.quelle;
        }
        else if (bilder.art == 2) {
            Aufg2u3.ausgewaehlt.unten = bilder;
            loaded[2] = bilder.quelle;
        }
        img.className += "selected";
        htmlImgs.forEach(pic => {
            if (pic != img) {
                pic.classList.remove("selected");
            }
        });
        console.log(loaded);
        console.log(Aufg2u3.ausgewaehlt);
    }
})(Aufg2u3 || (Aufg2u3 = {}));
//# sourceMappingURL=script.js.map