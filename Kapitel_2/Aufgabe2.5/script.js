"use strict";
var A2_5;
(function (A2_5) {
    let loaded = ["", "", ""];
    /*let currenttest: Bildspeicher = loadJSONcontent("data.json").then((oben) => { console.log(oben); });      //ein versuch die json daten aus dem promise zu extrahieren
    async function loadJSONcontent(_url: RequestInfo): Promise<Bildspeicher> {
        let getcontent: Response = await fetch(_url);
        console.log("Response", getcontent);
        let contentwandel: string = JSON.stringify(await getcontent.json());
        let content: Bildspeicher = JSON.parse(contentwandel);
        console.log("test");
        console.log(_url);
        console.log(getcontent);
        console.log(contentwandel);
        console.log(content);
        return content;
    }*/
    A2_5.ausgewaehlt = { oben: undefined, mitte: undefined, unten: undefined };
    let nextbutton = document.getElementById("naechsterTeil");
    nextbutton.addEventListener("click", movePageforeward);
    let pervbutton = document.getElementById("vorherigerTeil");
    pervbutton.addEventListener("click", movePagebackward);
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) != "index.html") {
        let backbutton = document.getElementById("back");
        backbutton.addEventListener("click", openmain);
    }
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) != "end.html") {
        let endbutton = document.getElementById("result");
        endbutton.addEventListener("click", openresult);
    }
    function openresult() {
        window.open("end.html", "_self");
    }
    function openmain() {
        window.open("index.html", "_self");
    }
    let htmlImgs = [];
    //window.addEventListener("load", windowLoaded("data.json"));
    windowLoaded("data.json");
    //code für das voranschreiten der seiten
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
    //code für das zurückgehen der seiten
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
    //einzelaufrufe der seiten für die index seite
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
        showPreview();
    }
    //laden des seiteninhalts
    async function windowLoaded(_url) {
        console.log(A2_5.ausgewaehlt);
        let getcontent = await fetch(_url);
        console.log("Response", getcontent);
        let contentwandel = JSON.stringify(await getcontent.json());
        let current = JSON.parse(contentwandel);
        let flaschenhaelse = current.oben;
        let flaschenwaende = current.mitte;
        let flaschenboeden = current.unten;
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Hals.html") {
            let flaeche = document.getElementById("flaeche");
            flaschenhaelse.forEach(bilder => {
                let img = document.createElement("img");
                img.src = bilder.quelle;
                htmlImgs.push(img);
                flaeche.appendChild(img);
                img.addEventListener("click", function () {
                    selectImage(img, bilder);
                });
            });
            showPreview();
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Rumpf.html") {
            let flaeche = document.getElementById("flaeche");
            flaschenwaende.forEach(bilder => {
                let img = document.createElement("img");
                img.src = bilder.quelle;
                htmlImgs.push(img);
                flaeche.appendChild(img);
                img.addEventListener("click", function () {
                    selectImage(img, bilder);
                });
            });
            showPreview();
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Boden.html") {
            let flaeche = document.getElementById("flaeche");
            flaschenboeden.forEach(bilder => {
                let img = document.createElement("img");
                img.src = bilder.quelle;
                htmlImgs.push(img);
                flaeche.appendChild(img);
                img.addEventListener("click", function () {
                    selectImage(img, bilder);
                });
            });
            showPreview();
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "end.html") {
            let flaeche = document.getElementById("flaeche_end");
            if (sessionStorage.getItem("bild1") != null) {
                let imgtop = document.createElement("img");
                let teil1 = JSON.parse(sessionStorage.getItem("bild1"));
                imgtop.src = teil1.quelle;
                flaeche.appendChild(imgtop);
            }
            if (sessionStorage.getItem("bild2") != null) {
                let imgmid = document.createElement("img");
                let teil2 = JSON.parse(sessionStorage.getItem("bild2"));
                imgmid.src = teil2.quelle;
                flaeche.appendChild(imgmid);
            }
            if (sessionStorage.getItem("bild3") != null) {
                let imgbot = document.createElement("img");
                let teil3 = JSON.parse(sessionStorage.getItem("bild3"));
                imgbot.src = teil3.quelle;
                flaeche.appendChild(imgbot);
            }
            sendResult("https://gis-communication.herokuapp.com");
        }
    }
    //auswahl und speicherung der bilderteile
    function selectImage(_img, _bilder) {
        if (_bilder.art == 0) {
            A2_5.ausgewaehlt.oben = _bilder;
            let speicher1 = { oben: undefined, mitte: undefined, unten: undefined };
            speicher1.oben = _bilder;
            loaded[0] = _bilder.quelle;
            sessionStorage.setItem("bild1", JSON.stringify(_bilder));
        }
        else if (_bilder.art == 1) {
            A2_5.ausgewaehlt.mitte = _bilder;
            let speicher3 = { oben: undefined, mitte: undefined, unten: undefined };
            speicher3.oben = _bilder;
            loaded[1] = _bilder.quelle;
            sessionStorage.setItem("bild2", JSON.stringify(_bilder));
        }
        else if (_bilder.art == 2) {
            A2_5.ausgewaehlt.unten = _bilder;
            let speicher3 = { oben: undefined, mitte: undefined, unten: undefined };
            speicher3.oben = _bilder;
            loaded[2] = _bilder.quelle;
            sessionStorage.setItem("bild3", JSON.stringify(_bilder));
        }
        _img.className += "selected";
        htmlImgs.forEach(_pic => {
            if (_pic != _img) {
                _pic.classList.remove("selected");
            }
        });
        console.log(loaded);
        console.log(A2_5.ausgewaehlt);
    }
    //anzeigen des bereits ausgewählten inhalts
    function showPreview() {
        let prev = document.getElementById("preview");
        if (sessionStorage.getItem("bild1") != null) {
            let imgtop = document.createElement("img");
            let teil1 = JSON.parse(sessionStorage.getItem("bild1"));
            imgtop.src = teil1.quelle;
            prev.appendChild(imgtop);
        }
        if (sessionStorage.getItem("bild2") != null) {
            let imgmid = document.createElement("img");
            let teil2 = JSON.parse(sessionStorage.getItem("bild2"));
            imgmid.src = teil2.quelle;
            prev.appendChild(imgmid);
        }
        if (sessionStorage.getItem("bild3") != null) {
            let imgbot = document.createElement("img");
            let teil3 = JSON.parse(sessionStorage.getItem("bild3"));
            imgbot.src = teil3.quelle;
            prev.appendChild(imgbot);
        }
    }
    async function sendResult(_url) {
        let query = new URLSearchParams(sessionStorage);
        _url = _url + "?" + query.toString();
        let dataReply = await fetch(_url);
        let dataResult = await dataReply.text();
        let dataReturn = document.getElementById("response");
        if (dataResult.match("message")) {
            dataReturn.style.color = "green";
            dataReturn.innerText = "Daten erhalten.";
        }
        else {
            dataReturn.style.color = "red";
            dataReturn.innerText = "Fehler: Fehlende Daten!";
        }
    }
})(A2_5 || (A2_5 = {}));
//# sourceMappingURL=script.js.map