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

let nextbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("naechsterTeil");
nextbutton.addEventListener("click", movePageforeward);

let pervbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("vorherigerTeil");
pervbutton.addEventListener("click", movePagebackward);

function movePageforeward (): void {
    console.log(window.location.pathname);
    switch (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)) {
        case "index.html":
            window.open("Rumpf.html", "_self");
            break;
        case "Rumpf.html":
            window.open("Boden.html", "_self");
    }
}

function movePagebackward (): void {
    console.log(window.location.pathname);
}