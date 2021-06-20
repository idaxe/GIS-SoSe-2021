namespace K3_A4 {

    let userSendbttn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendData");
    userSendbttn.addEventListener("click", absendenHtml);

    let userGetbttn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getData");
    userGetbttn.addEventListener("click", absendenJson);

    /*interface Data {
        username: string;
        password: string;
        uselessCheckbox: boolean;
    }*/

    async function absendenHtml(): Promise<void> {
        console.log("Daten senden");
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://dennytestapp.herokuapp.com"; //http://localhost:8100
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "/savedata?" + query.toString());
        let text: string = await response.text();
        let anzeige: HTMLDivElement = <HTMLDivElement>document.getElementById("response");
        console.log(text);
        anzeige.innerHTML = "Daten abgesendet!";
    }
    async function absendenJson(): Promise<void> {
        console.log("Daten empfangen");
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://dennytestapp.herokuapp.com"; //https://dennytestapp.herokuapp.com
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let anzeige: HTMLDivElement = <HTMLDivElement>document.getElementById("response");
        let response: Response = await fetch(url + "/getdata?" + query.toString());
        //let jsonObject: Data = await response.json();
        let text: string = await response.text();
        anzeige.innerHTML = text;
        //console.log("Serverantwort: " + jsonObject);
        //console.log(jsonObject);
    }
}