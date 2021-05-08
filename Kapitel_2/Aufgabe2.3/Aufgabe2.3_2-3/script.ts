namespace Aufg2u3 {
export interface Flaschenteil {
    oben: Bilder;
    mitte: Bilder;
    unten: Bilder;
}
export interface Bilder {
    quelle: string;
    art: number;           //für oben/mitte/unten
//    gravour: string;       //Ist die Flasche graviert
//    farbe: string;         //Welche farbe hat die Flasche
}
let current: number = 1;
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
    let flaeche: HTMLDivElement = <HTMLDivElement>document.getElementById("flaeche");
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
    }
}

function movePagebackward (): void {
    let flaeche: HTMLDivElement = <HTMLDivElement>document.getElementById("flaeche");
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
    }
}

function windowLoaded (): void {
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

function selectImage(img: HTMLImageElement, bilder: Bilder): void {
    if (bilder.art == 0) {
        ausgewaehlt.oben = bilder;
        loaded[0] = bilder.quelle;
    } else if (bilder.art == 1) {
        ausgewaehlt.mitte = bilder;
        loaded[1] = bilder.quelle;
    } else if (bilder.art == 2) {
        ausgewaehlt.unten = bilder;
        loaded[2] = bilder.quelle;
    }
    img.className += "selected";
    htmlImgs.forEach(pic => {
        if (pic != img) {
            pic.classList.remove("selected");
        }
    });
    console.log(loaded);
}
}