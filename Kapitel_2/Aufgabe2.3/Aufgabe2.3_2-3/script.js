"use strict";
var Aufg2u3;
(function (Aufg2u3) {
    //let current: number = 1;
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
        switch (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)) {
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
        /*let flaeche: HTMLDivElement = <HTMLDivElement>document.getElementById("flaeche");
        switch (current) {
            case 1:
                document.getElementById("flaeche").innerHTML = "";
                htmlImgs = [];
    
                mittlereTeile.forEach (bilder => {
                let img: HTMLImageElement = document.createElement("img");
                img.src = bilder.quelle;
                
                htmlImgs.push(img);
                flaeche.appendChild(img);
                img.addEventListener("click", function (): void {
                    selectImage(img, bilder);
                });
            });
                current ++;
                break;
            case 2:
                document.getElementById("flaeche").innerHTML = "";
                htmlImgs = [];
    
                untereTeile.forEach (bilder => {
                let img: HTMLImageElement = document.createElement("img");
                img.src = bilder.quelle;
                
                htmlImgs.push(img);
                flaeche.appendChild(img);
                img.addEventListener("click", function (): void {
                    selectImage(img, bilder);
                });
            });
                current ++;
                break;
            default:
                console.log("Reached end");
        }*/
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
        /*let flaeche: HTMLDivElement = <HTMLDivElement>document.getElementById("flaeche");
        switch (current) {
            case 2:
                document.getElementById("flaeche").innerHTML = "";
                htmlImgs = [];
    
                obereTeile.forEach (bilder => {
                let img: HTMLImageElement = document.createElement("img");
                img.src = bilder.quelle;
                
                htmlImgs.push(img);
                flaeche.appendChild(img);
                img.addEventListener("click", function (): void {
                    selectImage(img, bilder);
                });
            });
                current --;
                break;
            case 3:
                document.getElementById("flaeche").innerHTML = "";
                htmlImgs = [];
    
                mittlereTeile.forEach (bilder => {
                let img: HTMLImageElement = document.createElement("img");
                img.src = bilder.quelle;
                
                htmlImgs.push(img);
                flaeche.appendChild(img);
                img.addEventListener("click", function (): void {
                    selectImage(img, bilder);
                });
            });
                current --;
                break;
            default:
                console.log("Reached end");
        }*/
    }
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "index.html") {
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
        console.log(Aufg2u3.ausgewaehlt);
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Hals.html") {
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
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Rumpf.html") {
            let flaeche = document.getElementById("flaeche");
            Aufg2u3.mittlereTeile.forEach(bilder => {
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
            Aufg2u3.untereTeile.forEach(bilder => {
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
    /*function windowLoaded (): void {
        let flaeche: HTMLDivElement = <HTMLDivElement>document.getElementById("flaeche");
        obereTeile.forEach (bilder => {
                    let img: HTMLImageElement = document.createElement("img");
                    img.src = bilder.quelle;
                    htmlImgs.push(img);
                    flaeche.appendChild(img);
                    img.addEventListener("click", function (): void {
                        selectImage(img, bilder);
                    });
                });
    }*/
    function selectImage(img, bilder) {
        if (bilder.art == 0) {
            Aufg2u3.ausgewaehlt.oben = bilder;
            let speicher1 = { oben: undefined, mitte: undefined, unten: undefined };
            speicher1.oben = bilder;
            loaded[0] = bilder.quelle;
        }
        else if (bilder.art == 1) {
            Aufg2u3.ausgewaehlt.mitte = bilder;
            let speicher3 = { oben: undefined, mitte: undefined, unten: undefined };
            speicher3.oben = bilder;
            loaded[1] = bilder.quelle;
        }
        else if (bilder.art == 2) {
            Aufg2u3.ausgewaehlt.unten = bilder;
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
        console.log(Aufg2u3.ausgewaehlt);
    }
})(Aufg2u3 || (Aufg2u3 = {}));
//# sourceMappingURL=script.js.map