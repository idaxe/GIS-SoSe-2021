namespace pAbgabe {

    window.addEventListener("load", loadRecipes);
    async function loadRecipes(): Promise<void> {
        //let zwischen: Nutzer = JSON.parse(sessionStorage.getItem("nutzer"));
        let rezeptanzeige: HTMLDivElement = <HTMLDivElement>document.getElementById("rezeptAnzeige");
        let url: string = "https://dennytestapp.herokuapp.com";
        //console.log(zwischen.nutzername);
        let response: Response = await fetch(url + "/getRecipes?"); 
        let text: string = await response.text();
        rezeptanzeige.innerHTML = text;
    }
}