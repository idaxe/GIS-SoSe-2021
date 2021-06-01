namespace K3_A2 {

    let formDatenButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("senden");
    formDatenButton.addEventListener("click", absenden);

    async function absenden(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData) {
                console.log(entry);
                console.log("name:" + entry[0]);
                console.log("value:" + entry[1]);
            } 
        let url: string = "https://dennytestapp.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        console.log(url);
        let response: Response = await fetch(url);
        let text: string = await response.text();
        console.log("Antwort des Servers:" + text);
        let anzeige: HTMLDivElement = <HTMLDivElement>document.getElementById("response");
        anzeige.innerText = text;
    }
}