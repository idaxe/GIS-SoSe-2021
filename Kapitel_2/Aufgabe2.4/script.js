"use strict";
var Aufg1u2;
(function (Aufg1u2) {
    //let current: number = 1;
    let loaded = ["", "", ""];
    Aufg1u2.flaschelhaelse = [];
    Aufg1u2.flaschenwaende = [];
    Aufg1u2.flaschenboeden = [];
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
                window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/Hals.html", "_self");
                break;
            case "index.html":
                window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/Hals.html", "_self");
                break;
            case "Hals.html":
                window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/Rumpf.html", "_self");
                break;
            case "Rumpf.html":
                window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/Boden.html", "_self");
                break;
            case "Boden.html":
                window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/end.html", "_self");
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
                window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/Boden.html", "_self");
                break;
            case "Boden.html":
                window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/Rumpf.html", "_self");
                break;
            case "Rumpf.html":
                window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/Hals.html", "_self");
                break;
            case "Hals.html":
                window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/index.html", "_self");
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
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "index.html" || window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "") {
        let halsbutton = document.getElementById("hals");
        halsbutton.addEventListener("click", openhals);
        let rumpfbutton = document.getElementById("rumpf");
        rumpfbutton.addEventListener("click", openrumpf);
        let bodenbutton = document.getElementById("boden");
        bodenbutton.addEventListener("click", openboden);
        function openhals() {
            window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/Hals.html", "_self");
        }
        function openrumpf() {
            window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/Rumpf.html", "_self");
        }
        function openboden() {
            window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/Boden.html", "_self");
        }
    }
    function windowLoaded() {
        console.log(Aufg1u2.ausgewaehlt);
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Hals.html") {
            let flaeche = document.getElementById("flaeche");
            Aufg1u2.obereTeile.forEach(bilder => {
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
            Aufg1u2.mittlereTeile.forEach(bilder => {
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
            Aufg1u2.untereTeile.forEach(bilder => {
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
            Aufg1u2.ausgewaehlt.oben = bilder;
            let speicher1 = { oben: undefined, mitte: undefined, unten: undefined };
            speicher1.oben = bilder;
            loaded[0] = bilder.quelle;
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