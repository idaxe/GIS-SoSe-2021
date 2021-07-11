namespace pAbgabe {
    interface Nutzer {
        [type: string]: string | string[];
    }
    interface Rezepte {
        [type: string]: string | string[];
    }
    window.addEventListener("load", loadRecipes);
    async function loadRecipes(): Promise<void> {
        let anzeige: HTMLDivElement = <HTMLDivElement>document.getElementById("favoriten");
        let url: string = "https://dennytestapp.herokuapp.com";
        let zwischenNutzer: Nutzer = JSON.parse(sessionStorage.getItem("nutzer"));
        let response: Response = await fetch(url + "/getFavoriteRecipes?" + "nutzername=" + zwischenNutzer.nutzername + "&password=" + zwischenNutzer.password); 
        let text: string = await response.text();
        console.log(text);
        let alleRezepte: Rezepte[] = JSON.parse(text);
        alleRezepte.forEach(element => {
            if (element != null) {
            let rezeptcreator: HTMLDivElement = document.createElement("div");
            anzeige.appendChild(rezeptcreator);
            let titel: HTMLElement = document.createElement("h3");
            titel.appendChild(document.createTextNode("Rezept: " + element.recipeName.toString() + "\n"));
            rezeptcreator.appendChild(titel);
            let zutat1: HTMLElement = document.createElement("p");
            zutat1.appendChild(document.createTextNode("Zutat 1: " + element.zutat1.toString() + "\n"));
            rezeptcreator.appendChild(zutat1);
            let zutat2: HTMLElement = document.createElement("p");
            zutat2.appendChild(document.createTextNode("Zutat 2: " + element.zutat2.toString() + "\n"));
            rezeptcreator.appendChild(zutat2);
            let zutat3: HTMLElement = document.createElement("p");
            zutat3.appendChild(document.createTextNode("Zutat 3: " + element.zutat3.toString() + "\n"));
            rezeptcreator.appendChild(zutat3);
            let zutat4: HTMLElement = document.createElement("p");
            zutat4.appendChild(document.createTextNode("Zutat 4: " + element.zutat4.toString() + "\n"));
            rezeptcreator.appendChild(zutat4);
            let zutat5: HTMLElement = document.createElement("p");
            zutat5.appendChild(document.createTextNode("Zutat 5: " + element.zutat5.toString() + "\n"));
            rezeptcreator.appendChild(zutat5);
            let zutat6: HTMLElement = document.createElement("p");
            zutat6.appendChild(document.createTextNode("Zutat 6: " + element.zutat6.toString() + "\n"));
            rezeptcreator.appendChild(zutat6);
            let zutat7: HTMLElement = document.createElement("p");
            zutat7.appendChild(document.createTextNode("Zutat 7: " + element.zutat7.toString() + "\n"));
            rezeptcreator.appendChild(zutat7);
            let zutat8: HTMLElement = document.createElement("p");
            zutat8.appendChild(document.createTextNode("Zutat 8: " + element.zutat8.toString() + "\n"));
            rezeptcreator.appendChild(zutat8);
            let gebrauchsanweisung: HTMLElement = document.createElement("p");
            gebrauchsanweisung.appendChild(document.createTextNode("Gebrauchsanweisung: " + element.gebrauchsanweisung.toString() + "\n"));
            rezeptcreator.appendChild(gebrauchsanweisung);
            let creator: HTMLElement = document.createElement("p");
            creator.appendChild(document.createTextNode("Ersteller: " + element.creator.toString() + "\n"));
            rezeptcreator.appendChild(creator);
            let delbttn: HTMLButtonElement = document.createElement("button");
            delbttn.appendChild(document.createTextNode("Favorit Löschen"));
            delbttn.setAttribute("type", "button");
            delbttn.addEventListener("click", deleteFavorites);
            rezeptcreator.appendChild(delbttn);
            console.log(element);
            }
            async function deleteFavorites(): Promise<void> {
                console.log("lol" + element._id.toString());
                let url: string = "https://dennytestapp.herokuapp.com"; //http://localhost:8100
                let zwischenNutzer: Nutzer = JSON.parse(sessionStorage.getItem("nutzer"));
                let fav: string[] = [element._id.toString()];
                console.log(zwischenNutzer);
                let response: Response = await fetch(url + "/deleteFavRecipe?" + "nutzername=" + zwischenNutzer.nutzername + "&password=" + zwischenNutzer.password + "&favorites=" + fav);
                console.log(response);
            }
        });  
    }
}