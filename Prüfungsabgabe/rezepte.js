"use strict";
var pAbgabe;
(function (pAbgabe) {
    let loginbttn = document.getElementById("save");
    loginbttn.addEventListener("click", saveRecipie);
    async function saveRecipie() {
        //var creator: HTMLElement = document.getElementById("creator");
        sessionStorage.setItem("nutzer", "sbbeve");
        let user = sessionStorage.getItem("nutzer");
        console.log(user);
        //creator = <input type="hidden" id="creator" name="creator" value = sessionStorage.getItem("nutzer")>;
        //console.log(creator);
        let formData = new FormData(document.forms[0]);
        console.log(formData);
        let url = "https://dennytestapp.herokuapp.com"; //http://localhost:8100
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "/loginUser?" + query.toString() + "&creator=" + sessionStorage.getItem("nutzer"));
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
//# sourceMappingURL=rezepte.js.map