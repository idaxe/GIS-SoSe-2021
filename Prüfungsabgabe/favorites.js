"use strict";
var pAbgabe;
(function (pAbgabe) {
    window.addEventListener("load", loadRecipes);
    async function loadRecipes() {
        let anzeige = document.getElementById("rezeptAnzeige");
        let url = "https://dennytestapp.herokuapp.com";
        let response = await fetch(url + "/getRecipes?");
        let text = await response.text();
        console.log(text);
        let alleRezepte = JSON.parse(text);
        alleRezepte.forEach(element => {
            let rezeptcreator = document.createElement("div");
            anzeige.appendChild(rezeptcreator);
            let titel = document.createElement("h3");
            titel.appendChild(document.createTextNode("Rezept: " + element.recipeName.toString() + "\n"));
            rezeptcreator.appendChild(titel);
            let zutat1 = document.createElement("p");
            zutat1.appendChild(document.createTextNode("Zutat 1: " + element.zutat1.toString() + "\n"));
            rezeptcreator.appendChild(zutat1);
            let zutat2 = document.createElement("p");
            zutat2.appendChild(document.createTextNode("Zutat 2: " + element.zutat2.toString() + "\n"));
            rezeptcreator.appendChild(zutat2);
            let zutat3 = document.createElement("p");
            zutat3.appendChild(document.createTextNode("Zutat 3: " + element.zutat3.toString() + "\n"));
            rezeptcreator.appendChild(zutat3);
            let zutat4 = document.createElement("p");
            zutat4.appendChild(document.createTextNode("Zutat 4: " + element.zutat4.toString() + "\n"));
            rezeptcreator.appendChild(zutat4);
            let zutat5 = document.createElement("p");
            zutat5.appendChild(document.createTextNode("Zutat 5: " + element.zutat5.toString() + "\n"));
            rezeptcreator.appendChild(zutat5);
            let zutat6 = document.createElement("p");
            zutat6.appendChild(document.createTextNode("Zutat 6: " + element.zutat6.toString() + "\n"));
            rezeptcreator.appendChild(zutat6);
            let zutat7 = document.createElement("p");
            zutat7.appendChild(document.createTextNode("Zutat 7: " + element.zutat7.toString() + "\n"));
            rezeptcreator.appendChild(zutat7);
            let zutat8 = document.createElement("p");
            zutat8.appendChild(document.createTextNode("Zutat 8: " + element.zutat8.toString() + "\n"));
            rezeptcreator.appendChild(zutat8);
            let gebrauchsanweisung = document.createElement("p");
            gebrauchsanweisung.appendChild(document.createTextNode("Gebrauchsanweisung: " + element.gebrauchsanweisung.toString() + "\n"));
            rezeptcreator.appendChild(gebrauchsanweisung);
            let creator = document.createElement("p");
            creator.appendChild(document.createTextNode("Ersteller: " + element.creator.toString() + "\n"));
            rezeptcreator.appendChild(creator);
            let favbttn = document.createElement("button");
            favbttn.appendChild(document.createTextNode("Favorisieren"));
            favbttn.setAttribute("type", "button");
            favbttn.addEventListener("click", addFavorites);
            rezeptcreator.appendChild(favbttn);
            console.log(element);
            async function addFavorites() {
                console.log("lol" + element._id.toString());
                let url = "https://dennytestapp.herokuapp.com"; //http://localhost:8100
                let zwischenNutzer = JSON.parse(sessionStorage.getItem("nutzer"));
                let fav = [element._id.toString()];
                let response = await fetch(url + "/favoriteRecipe?" + "nutzername=" + zwischenNutzer.nutzername + "&password=" + zwischenNutzer.password + "&favorites=" + fav);
                console.log(response);
            }
        });
    }
})(pAbgabe || (pAbgabe = {}));
//# sourceMappingURL=favorites.js.map