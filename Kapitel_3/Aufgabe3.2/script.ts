namespace K3_A2 {

    let htmlSendbttn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("htmlSend");
    htmlSendbttn.addEventListener("click", absendenHtml);

    let jsonSendbttn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("jsonSend");
    jsonSendbttn.addEventListener("click", absendenJson);

    interface Data {
        username: string;
        password: string;
        uselessCheckbox: boolean;
    }

    async function absendenHtml(): Promise<void> {
        console.log("Html Variante");
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://dennytestapp.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "/html?" + query.toString());
        let text: string = await response.text();
        let anzeige: HTMLDivElement = <HTMLDivElement>document.getElementById("response");
        anzeige.innerHTML = "Serverantwort: <br/>" + text;
    }
    async function absendenJson(): Promise<void> {
        console.log("Json Variante");
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://dennytestapp.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "/json?" + query.toString());
        let jsonObject: Data = await response.json();
        console.log("Serverantwort: ");
        console.log(jsonObject);
    }
}