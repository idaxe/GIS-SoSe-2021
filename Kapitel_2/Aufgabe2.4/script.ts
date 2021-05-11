namespace Aufg1u2 {     
export interface Flaschenteil {
    oben: Bilder;
    mitte: Bilder;
    unten: Bilder;
}
export interface Bilder {
    quelle: string;
    art: number;           //für oben/mitte/unten
    gravour: string;       //Ist die Flasche graviert
    farbe: string;         //Welche farbe hat die Flasche
}
//let current: number = 1;
let loaded: string[] = ["", "", ""];

export let flaschelhaelse: Bilder[] = [];
export let flaschenwaende: Bilder[] = [];
export let flaschenboeden: Bilder[] = [];
export let ausgewaehlt: Flaschenteil = { oben: undefined, mitte: undefined, unten: undefined };
let nextbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("naechsterTeil");
nextbutton.addEventListener("click", movePageforeward);

let pervbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("vorherigerTeil");
pervbutton.addEventListener("click", movePagebackward);



let htmlImgs: HTMLImageElement[] = [];
window.addEventListener("load", windowLoaded);

function movePageforeward (): void {
    switch (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)) {
        case " ":
            window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/Hals.html" , "_self");
            break;
        case "index.html":
            window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/Hals.html" , "_self");
            break;
        case "Hals.html":
            window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/Rumpf.html", "_self");
            break;
        case "Rumpf.html":
            window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/Boden.html" , "_self");
            break;
        case "Boden.html":
            window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/end.html" , "_self");
            break;
        default:
            console.log("bereits auf der Finalseite");
    }
}

function movePagebackward (): void {
    switch (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)) {
        case "end.html":
            window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/Boden.html" , "_self");
            break;
        case "Boden.html":
            window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/Rumpf.html" , "_self");
            break;
        case "Rumpf.html":
            window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/Hals.html" , "_self");
            break;
        case "Hals.html":
            window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/index.html", "_self");
            break;
        default:
            console.log("bereits auf der Startseite");
    }
}
if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "index.html" || window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "") {
    let halsbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("hals");
    halsbutton.addEventListener("click", openhals);
    
    let rumpfbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rumpf");
    rumpfbutton.addEventListener("click", openrumpf);
    
    let bodenbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("boden");
    bodenbutton.addEventListener("click", openboden);

    function openhals(): void {
        window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/Hals.html", "_self");
    }
    function openrumpf(): void {
        window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/Rumpf.html", "_self");
    }
    function openboden(): void {
        window.open("https://idaxe.github.io/GIS-SoSe-2021/Kapitel_2/Aufgabe2.3/Aufgabe2.3_2-3/Boden.html", "_self");
    }
}

function windowLoaded(): void {
    console.log(ausgewaehlt);
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Hals.html") {
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
}
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Rumpf.html") {
        let flaeche: HTMLDivElement = <HTMLDivElement>document.getElementById("flaeche");
        mittlereTeile.forEach (bilder => {
            let img: HTMLImageElement = document.createElement("img");
            img.src = bilder.quelle;
            htmlImgs.push(img);
            flaeche.appendChild(img);
            img.addEventListener("click", function (): void {
                selectImage(img, bilder);
            });
        });
    }

    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Boden.html") {
            let flaeche: HTMLDivElement = <HTMLDivElement>document.getElementById("flaeche");
            untereTeile.forEach (bilder => {
                let img: HTMLImageElement = document.createElement("img");
                img.src = bilder.quelle;
                htmlImgs.push(img);
                flaeche.appendChild(img);
                img.addEventListener("click", function (): void {
                    selectImage(img, bilder);
                });
            });
        }
}

function selectImage(img: HTMLImageElement, bilder: Bilder): void {
    if (bilder.art == 0) {
        ausgewaehlt.oben = bilder;
        let speicher1: Flaschenteil = {oben: undefined, mitte: undefined, unten: undefined};
        speicher1.oben = bilder;
        loaded[0] = bilder.quelle;
    } else if (bilder.art == 1) {
        ausgewaehlt.mitte = bilder;
        let speicher3: Flaschenteil = {oben: undefined, mitte: undefined, unten: undefined};
        speicher3.oben = bilder;
        loaded[1] = bilder.quelle;
    } else if (bilder.art == 2) {
        ausgewaehlt.unten = bilder;
        let speicher3: Flaschenteil = {oben: undefined, mitte: undefined, unten: undefined};
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
    console.log(ausgewaehlt);
}
}