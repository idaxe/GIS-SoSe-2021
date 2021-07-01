"use strict";
var pAbgabe;
(function (pAbgabe) {
    let loginbttn = document.getElementById("login");
    loginbttn.addEventListener("click", userLogin);
    let registerbttn = document.getElementById("register");
    registerbttn.addEventListener("click", userRegister);
    async function userLogin() {
        console.log("Daten testen");
        let formData = new FormData(document.forms[0]);
        let url = "https://dennytestapp.herokuapp.com"; //http://localhost:8100 "https://dennytestapp.herokuapp.com"
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "/loginUser?" + query.toString());
        let text = await response.text();
        /*let registered: boolean = await response.ok;
        if (registered == true) {
            window.open("index.html", "_self");
        } else {
            console.log("error");
        }*/
        console.log("test");
        console.log(text);
        let anzeige = document.getElementById("errorMessage");
        //console.log(text);
        anzeige.innerHTML = "Daten abgesendet!";
        //document.getElementById("email").innerHTML = "";
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Login.html") {
            window.open("index.html", "_self");
        }
        else {
            console.log("Error");
        }
        //window.open("index.html", "_self");
    }
    async function userRegister() {
        let formData = new FormData(document.forms[0]);
        let url = "https://dennytestapp.herokuapp.com"; //http://localhost:8100
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "/registerUser?" + query.toString());
        console.log(response);
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Login.html") {
            window.open("index.html", "_self");
        }
        else {
            console.log("Error");
        }
        //window.open("index.html", "_self");
    }
})(pAbgabe || (pAbgabe = {}));
//# sourceMappingURL=script.js.map