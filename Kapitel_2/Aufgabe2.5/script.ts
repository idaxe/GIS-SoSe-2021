namespace A2_5 {     
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
export interface Bildspeicher {
    oben: Bilder[];
    mitte: Bilder[];
    unten: Bilder[];
}
//let current: number = 1;
let loaded: string[] = ["", "", ""];

export let current: Bildspeicher = getJSONcontent();

function getJSONcontent(): Bildspeicher {
    let getcontent: Promise<Response> = fetch("data.json");
    getcontent.then(success, faliure);
    console.log(content);
    return content;
}

function success(): void {}

function faliure(): void {}

export let flaschenhaelse: Bilder[] = current.oben;
export let flaschenwaende: Bilder[] = current.mitte;
export let flaschenboeden: Bilder[] = current.unten;
export let ausgewaehlt: Flaschenteil = { oben: undefined, mitte: undefined, unten: undefined };
let nextbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("naechsterTeil");
nextbutton.addEventListener("click", movePageforeward);

let pervbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("vorherigerTeil");
pervbutton.addEventListener("click", movePagebackward);

if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) != "index.html") {
    let backbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("back");
    backbutton.addEventListener("click", openmain);
}

if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) != "end.html") {
    let endbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("result");
    endbutton.addEventListener("click", openresult);
}

function openresult(): void {
    window.open("end.html", "_self");
}

function openmain(): void {
    window.open("index.html", "_self");
}

let htmlImgs: HTMLImageElement[] = [];
window.addEventListener("load", windowLoaded);

function movePageforeward (): void {
    switch (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)) {
        case " ":
            window.open("Hals.html" , "_self");
            break;
        case "index.html":
            window.open("Hals.html" , "_self");
            break;
        case "Hals.html":
            window.open("Rumpf.html", "_self");
            break;
        case "Rumpf.html":
            window.open("Boden.html" , "_self");
            break;
        case "Boden.html":
            window.open("end.html" , "_self");
            break;
        default:
            console.log("bereits auf der Finalseite");
    }
}

function movePagebackward (): void {
    switch (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)) {
        case "end.html":
            window.open("Boden.html" , "_self");
            break;
        case "Boden.html":
            window.open("Rumpf.html" , "_self");
            break;
        case "Rumpf.html":
            window.open("Hals.html" , "_self");
            break;
        case "Hals.html":
            window.open("index.html", "_self");
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
        window.open("Hals.html", "_self");
    }
    function openrumpf(): void {
        window.open("Rumpf.html", "_self");
    }
    function openboden(): void {
        window.open("Boden.html", "_self");
    }
    showPreview();
}

function windowLoaded(): void {
    console.log(ausgewaehlt);
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Hals.html") {
    let flaeche: HTMLDivElement = <HTMLDivElement>document.getElementById("flaeche");
    flaschenhaelse.forEach (bilder => {
        let img: HTMLImageElement = document.createElement("img");
        img.src = bilder.quelle;
        htmlImgs.push(img);
        flaeche.appendChild(img);
        img.addEventListener("click", function (): void {
            selectImage(img, bilder);
        });
    });
    showPreview();
}
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Rumpf.html") {
        let flaeche: HTMLDivElement = <HTMLDivElement>document.getElementById("flaeche");
        flaschenwaende.forEach (bilder => {
            let img: HTMLImageElement = document.createElement("img");
            img.src = bilder.quelle;
            htmlImgs.push(img);
            flaeche.appendChild(img);
            img.addEventListener("click", function (): void {
                selectImage(img, bilder);
            });
        });
        showPreview();
    }

    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Boden.html") {
            let flaeche: HTMLDivElement = <HTMLDivElement>document.getElementById("flaeche");
            flaschenboeden.forEach (bilder => {
                let img: HTMLImageElement = document.createElement("img");
                img.src = bilder.quelle;
                htmlImgs.push(img);
                flaeche.appendChild(img);
                img.addEventListener("click", function (): void {
                    selectImage(img, bilder);
                });
            });
            showPreview();
        }
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "end.html") {
    let flaeche: HTMLDivElement = <HTMLDivElement>document.getElementById("flaeche_end");
    if (sessionStorage.getItem("bild1") != null) {
        let imgtop: HTMLImageElement = document.createElement("img");
        let teil1: Bilder = JSON.parse(sessionStorage.getItem("bild1"));
        imgtop.src = teil1.quelle;
        flaeche.appendChild(imgtop);
    }
    if (sessionStorage.getItem("bild2") != null) {
        let imgmid: HTMLImageElement = document.createElement("img");
        let teil2: Bilder = JSON.parse(sessionStorage.getItem("bild2"));
        imgmid.src = teil2.quelle;
        flaeche.appendChild(imgmid);
    }
    if (sessionStorage.getItem("bild3") != null) {
        let imgbot: HTMLImageElement = document.createElement("img");
        let teil3: Bilder = JSON.parse(sessionStorage.getItem("bild3"));
        imgbot.src = teil3.quelle;
        flaeche.appendChild(imgbot);
    }
    }
}

function selectImage(img: HTMLImageElement, bilder: Bilder): void {
    if (bilder.art == 0) {
        ausgewaehlt.oben = bilder;
        let speicher1: Flaschenteil = {oben: undefined, mitte: undefined, unten: undefined};
        speicher1.oben = bilder;
        loaded[0] = bilder.quelle;
        //let save: string = 
        sessionStorage.setItem("bild1" , JSON.stringify(bilder));
    } else if (bilder.art == 1) {
        ausgewaehlt.mitte = bilder;
        let speicher3: Flaschenteil = {oben: undefined, mitte: undefined, unten: undefined};
        speicher3.oben = bilder;
        loaded[1] = bilder.quelle;
        sessionStorage.setItem("bild2" , JSON.stringify(bilder));
    } else if (bilder.art == 2) {
        ausgewaehlt.unten = bilder;
        let speicher3: Flaschenteil = {oben: undefined, mitte: undefined, unten: undefined};
        speicher3.oben = bilder;
        loaded[2] = bilder.quelle;
        sessionStorage.setItem("bild3" , JSON.stringify(bilder));
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

function showPreview(): void {
    let prev: HTMLDivElement = <HTMLDivElement>document.getElementById("preview");
    if (sessionStorage.getItem("bild1") != null) {
        let imgtop: HTMLImageElement = document.createElement("img");
        let teil1: Bilder = JSON.parse(sessionStorage.getItem("bild1"));
        imgtop.src = teil1.quelle;
        prev.appendChild(imgtop);
    }
    if (sessionStorage.getItem("bild2") != null) {
        let imgmid: HTMLImageElement = document.createElement("img");
        let teil2: Bilder = JSON.parse(sessionStorage.getItem("bild2"));
        imgmid.src = teil2.quelle;
        prev.appendChild(imgmid);
    }
    if (sessionStorage.getItem("bild3") != null) {
        let imgbot: HTMLImageElement = document.createElement("img");
        let teil3: Bilder = JSON.parse(sessionStorage.getItem("bild3"));
        imgbot.src = teil3.quelle;
        prev.appendChild(imgbot);
    }
}
}