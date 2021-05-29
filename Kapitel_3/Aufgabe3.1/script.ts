namespace K3_A1 {
    let formData: FormData = new FormData(document.forms[0]);
    let formDatenButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("senden");
    formDatenButton.addEventListener("click", absenden);

    async function absenden(): Promise<void> {

        let url: string = "https://dennytestapp.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        //await fetch(url);
        let response: Response = await fetch(url);
        let text: string = await response.text();
        console.log("Answer:");
        console.log(text);
    }
}