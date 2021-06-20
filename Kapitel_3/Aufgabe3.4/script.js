"use strict";
var K3_A4;
(function (K3_A4) {
    let userSendbttn = document.getElementById("sendData");
    userSendbttn.addEventListener("click", absendenHtml);
    let userGetbttn = document.getElementById("getData");
    userGetbttn.addEventListener("click", absendenJson);
    /*interface Data {
        username: string;
        password: string;
        uselessCheckbox: boolean;
    }*/
    async function absendenHtml() {
        console.log("Daten senden");
        let formData = new FormData(document.forms[0]);
        let url = "https://dennytestapp.herokuapp.com"; //http://localhost:8100
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "/savedata?" + query.toString());
        let text = await response.text();
        let anzeige = document.getElementById("response");
        console.log(text);
        anzeige.innerHTML = "Daten abgesendet!";
    }
    async function absendenJson() {
        console.log("Daten empfangen");
        let formData = new FormData(document.forms[0]);
        let url = "https://dennytestapp.herokuapp.com"; //https://dennytestapp.herokuapp.com
        let query = new URLSearchParams(formData);
        let anzeige = document.getElementById("response");
        let response = await fetch(url + "/getdata?" + query.toString());
        //let jsonObject: Data = await response.json();
        let text = await response.text();
        anzeige.innerHTML = text;
        //console.log("Serverantwort: " + jsonObject);
        //console.log(jsonObject);
    }
})(K3_A4 || (K3_A4 = {}));
//# sourceMappingURL=script.js.map