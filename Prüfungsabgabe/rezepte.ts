namespace pAbgabe {
    
    let loginbttn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("save");
    loginbttn.addEventListener("click", saveRecipie);

    let deletebttn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("delete");
    deletebttn.addEventListener("click", deleteRecipe);

    let updatebttn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("update");
    updatebttn.addEventListener("click", updateRecipe);

    interface Nutzer {
        [type: string]: string | string[];
    }

    interface Rezepte {
        [type: string]: string | string[];
    }

    async function saveRecipie(): Promise<void> {
        //var creator: HTMLElement = document.getElementById("creator");
        //sessionStorage.setItem("nutzer", "{\"nutzername\":\"was\",\"password\":\"das\"}");
        let user: string = sessionStorage.getItem("nutzer");
        console.log(user);
        //creator = <input type="hidden" id="creator" name="creator" value = sessionStorage.getItem("nutzer")>;
        //console.log(creator);
        let formData: FormData = new FormData(document.forms[0]);
        console.log(formData);
        let url: string = "https://dennytestapp.herokuapp.com"; //http://localhost:8100
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let zwischen: Nutzer = JSON.parse(sessionStorage.getItem("nutzer"));
        console.log(zwischen.nutzername);
        let response: Response = await fetch(url + "/saveRecipe?" + query.toString() + "&creator=" + zwischen.nutzername);
        console.log(response);

        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Login.html") {
            window.open("index.html", "_self");

        } else {console.log("Error"); }
        //window.open("index.html", "_self");
    }

    async function deleteRecipe(): Promise<void> {
        let rezeptName: HTMLInputElement = <HTMLInputElement>document.getElementById("deleteRezept");
        let zwischen: Nutzer = JSON.parse(sessionStorage.getItem("nutzer"));
        let url: string = "https://dennytestapp.herokuapp.com";
        console.log(rezeptName.value);
        let response: Response = await fetch(url + "/deleteRecipe?" + "recipeName=" + rezeptName.value + "&creator=" + zwischen.nutzername);
        let text: string = await response.text();
        let bestatigung: HTMLDivElement = <HTMLDivElement>document.getElementById("response");
        bestatigung.innerHTML = text;
    }

    async function updateRecipe(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://dennytestapp.herokuapp.com"; //http://localhost:8100
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let zwischen: Nutzer = JSON.parse(sessionStorage.getItem("nutzer"));
        let response: Response = await fetch(url + "/updateRecipe?" + query.toString() + "&creator=" + zwischen.nutzername);
        let antwort: string = await response.text();
        console.log(antwort);
        let serverAntwort: HTMLDivElement = <HTMLDivElement>document.getElementById("response_alt");
        serverAntwort.innerHTML = antwort;
    }

    window.addEventListener("load", loadUserRecipes);

    async function loadUserRecipes(): Promise<void> {
        let zwischen: Nutzer = JSON.parse(sessionStorage.getItem("nutzer"));
        let rezeptanzeige: HTMLDivElement = <HTMLDivElement>document.getElementById("userRezepte");
        let url: string = "https://dennytestapp.herokuapp.com";
        console.log(zwischen.nutzername);
        let response: Response = await fetch(url + "/getUserRecipes?" + "creator=" + zwischen.nutzername); 
        let text: string = await response.text();
        let alleNutzerRezepte: Rezepte[] = JSON.parse(text);
        alleNutzerRezepte.forEach(element => {
            let nutzerRezepte: HTMLDivElement = document.createElement("div");
            rezeptanzeige.appendChild(nutzerRezepte);
            let titel: HTMLElement = document.createElement("h3");
            titel.appendChild(document.createTextNode("Rezept: " + element.recipeName.toString() + "\n"));
            nutzerRezepte.appendChild(titel);
            let zutat1: HTMLElement = document.createElement("p");
            zutat1.appendChild(document.createTextNode("Zutat 1: " + element.zutat1.toString() + "\n"));
            nutzerRezepte.appendChild(zutat1);
            let zutat2: HTMLElement = document.createElement("p");
            zutat2.appendChild(document.createTextNode("Zutat 2: " + element.zutat2.toString() + "\n"));
            nutzerRezepte.appendChild(zutat2);
            let zutat3: HTMLElement = document.createElement("p");
            zutat3.appendChild(document.createTextNode("Zutat 3: " + element.zutat3.toString() + "\n"));
            nutzerRezepte.appendChild(zutat3);
            let zutat4: HTMLElement = document.createElement("p");
            zutat4.appendChild(document.createTextNode("Zutat 4: " + element.zutat4.toString() + "\n"));
            nutzerRezepte.appendChild(zutat4);
            let zutat5: HTMLElement = document.createElement("p");
            zutat5.appendChild(document.createTextNode("Zutat 5: " + element.zutat5.toString() + "\n"));
            nutzerRezepte.appendChild(zutat5);
            let zutat6: HTMLElement = document.createElement("p");
            zutat6.appendChild(document.createTextNode("Zutat 6: " + element.zutat6.toString() + "\n"));
            nutzerRezepte.appendChild(zutat6);
            let zutat7: HTMLElement = document.createElement("p");
            zutat7.appendChild(document.createTextNode("Zutat 7: " + element.zutat7.toString() + "\n"));
            nutzerRezepte.appendChild(zutat7);
            let zutat8: HTMLElement = document.createElement("p");
            zutat8.appendChild(document.createTextNode("Zutat 8: " + element.zutat8.toString() + "\n"));
            nutzerRezepte.appendChild(zutat8);
            let gebrauchsanweisung: HTMLElement = document.createElement("p");
            gebrauchsanweisung.appendChild(document.createTextNode("Gebrauchsanweisung: " + element.gebrauchsanweisung.toString() + "\n"));
            nutzerRezepte.appendChild(gebrauchsanweisung);
            let creator: HTMLElement = document.createElement("p");
            creator.appendChild(document.createTextNode("Ersteller: " + element.creator.toString() + "\n"));
            nutzerRezepte.appendChild(creator);
        });
        //rezeptanzeige.innerHTML = text;
    }
}