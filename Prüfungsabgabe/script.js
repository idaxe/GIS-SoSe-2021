"use strict";
var pAbgabe;
(function (pAbgabe) {
    let loginbttn = document.getElementById("login");
    loginbttn.addEventListener("click", userLogin);
    let registerbttn = document.getElementById("register");
    registerbttn.addEventListener("click", userRegister);
    async function userLogin() {
        console.log("Login Daten testen");
        let formData = new FormData(document.forms[0]);
        let url = "https://dennytestapp.herokuapp.com"; //http://localhost:8100 "https://dennytestapp.herokuapp.com"
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "/loginUser?" + query.toString());
        let text = await response.text();
        console.log("test");
        console.log(text);
        let anzeige = document.getElementById("errorMessage");
        sessionStorage.clear();
        if (text != "Nutzer existiert nicht!") {
            sessionStorage.setItem("nutzer", text);
            let text2 = "Nutzer existiert" + text;
            console.log(text2);
            console.log(JSON.stringify(text2));
            console.log(sessionStorage.getItem("nutzer"));
            anzeige.innerHTML = "Nutzer existiert";
        }
        else {
            anzeige.innerHTML = text;
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Login.html") {
            window.open("index.html", "_self");
        }
        else if (text != "Nutzer existiert nicht!") {
            window.open("Alle Rezepte.html", "_self");
        }
        else {
            console.log("Error");
        }
    }
    async function userRegister() {
        let formData = new FormData(document.forms[0]);
        let url = "https://dennytestapp.herokuapp.com"; //http://localhost:8100
        let query = new URLSearchParams(formData);
        let fav = [""];
        let response = await fetch(url + "/registerUser?" + query.toString() + "&favorites=" + fav);
        console.log(response);
        let anzeige = document.getElementById("errorMessage");
        anzeige.innerHTML = "Bitte nun mit diesem Nutzer Anmelden!";
    }
})(pAbgabe || (pAbgabe = {}));
//# sourceMappingURL=script.js.map