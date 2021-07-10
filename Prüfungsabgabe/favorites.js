"use strict";
var pAbgabe;
(function (pAbgabe) {
    window.addEventListener("load", loadRecipes);
    async function loadRecipes() {
        //let zwischen: Nutzer = JSON.parse(sessionStorage.getItem("nutzer"));
        let rezeptanzeige = document.getElementById("rezeptAnzeige");
        let url = "https://dennytestapp.herokuapp.com";
        //console.log(zwischen.nutzername);
        let response = await fetch(url + "/getRecipes?");
        let text = await response.text();
        rezeptanzeige.innerHTML = text;
    }
})(pAbgabe || (pAbgabe = {}));
//# sourceMappingURL=favorites.js.map