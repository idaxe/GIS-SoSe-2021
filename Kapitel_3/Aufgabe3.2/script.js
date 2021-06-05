"use strict";
var K3_A2;
(function (K3_A2) {
    let formDatenButton = document.getElementById("senden");
    formDatenButton.addEventListener("click", absenden);
    let htmlSendbttn = document.getElementById("htmlSend");
    htmlSendbttn.addEventListener("click", absendenHtml);
    let jsonSendbttn = document.getElementById("jsonSend");
    jsonSendbttn.addEventListener("click", absendenJson);
    async function absenden() {
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            console.log(entry);
            console.log("name:" + entry[0]);
            console.log("value:" + entry[1]);
        }
        let url = "http://localhost:8100/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        console.log(url);
        let response = await fetch(url);
        let text = await response.text();
        console.log("Antwort des Servers:" + text);
        let anzeige = document.getElementById("response");
        anzeige.innerText = text;
    }
    async function absendenHtml() {
        console.log("Html Variante");
        let formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100";
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "/html?" + query.toString());
        let text = await response.text();
        let anzeige = document.getElementById("response");
        anzeige.innerHTML = "Serverantwort: <br/>" + text;
    }
    async function absendenJson() {
        console.log("Json Variante");
        let formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100";
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "/json?" + query.toString());
        let jsonObject = await response.json();
        console.log(jsonObject);
    }
})(K3_A2 || (K3_A2 = {}));
//# sourceMappingURL=script.js.map