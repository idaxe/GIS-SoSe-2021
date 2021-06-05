namespace K3_A2 {

    let formDatenButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("senden");
    formDatenButton.addEventListener("click", absenden);

    let htmlSendbttn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("htmlSend");
    htmlSendbttn.addEventListener("click", absendenHtml);

    let jsonSendbttn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("jsonSend");
    jsonSendbttn.addEventListener("click", absendenJson);

    async function absenden(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData) {
                console.log(entry);
                console.log("name:" + entry[0]);
                console.log("value:" + entry[1]);
            } 
        let url: string = "http://localhost:8100/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        console.log(url);
        let response: Response = await fetch(url);
        let text: string = await response.text();
        console.log("Antwort des Servers:" + text);
        let anzeige: HTMLDivElement = <HTMLDivElement>document.getElementById("response");
        anzeige.innerText = text;
    }

    async function absendenHtml(): Promise<void> {
        console.log("Html Variante");
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "http://localhost:8100";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "/html?" + query.toString());
        let text: string = await response.text();
        let anzeige: HTMLDivElement = <HTMLDivElement>document.getElementById("response");
        anzeige.innerHTML = "Serverantwort: <br/>" + text;
    }
    async function absendenJson(): Promise<void> {
        console.log("Json Variante");
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "http://localhost:8100";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "/json?" + query.toString());
        let jsonObject: JSON = await response.json();
        console.log(jsonObject);
    }
}