"use strict";
var K3_A1;
(function (K3_A1) {
    let formDatenButton = document.getElementById("senden");
    formDatenButton.addEventListener("click", absenden);
    async function absenden() {
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            console.log(entry);
            console.log("name:" + entry[0]);
            console.log("value:" + entry[1]);
        }
        let url = "https://dennytestapp.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        console.log(url);
        let response = await fetch(url);
        let text = await response.text();
        console.log("Antwort des Servers:" + text);
        let anzeige = document.getElementById("response");
        anzeige.innerText = text;
    }
})(K3_A1 || (K3_A1 = {}));
//# sourceMappingURL=script.js.map