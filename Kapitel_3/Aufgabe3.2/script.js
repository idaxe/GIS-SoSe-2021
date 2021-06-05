"use strict";
var K3_A2;
(function (K3_A2) {
    let htmlSendbttn = document.getElementById("htmlSend");
    htmlSendbttn.addEventListener("click", absendenHtml);
    let jsonSendbttn = document.getElementById("jsonSend");
    jsonSendbttn.addEventListener("click", absendenJson);
    async function absendenHtml() {
        console.log("Html Variante");
        let formData = new FormData(document.forms[0]);
        let url = "https://dennytestapp.herokuapp.com";
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "/html?" + query.toString());
        let text = await response.text();
        let anzeige = document.getElementById("response");
        anzeige.innerHTML = "Serverantwort: <br/>" + text;
    }
    async function absendenJson() {
        console.log("Json Variante");
        let formData = new FormData(document.forms[0]);
        let url = "https://dennytestapp.herokuapp.com";
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "/json?" + query.toString());
        let jsonObject = await response.json();
        console.log("Serverantwort: ");
        console.log(jsonObject);
    }
})(K3_A2 || (K3_A2 = {}));
//# sourceMappingURL=script.js.map