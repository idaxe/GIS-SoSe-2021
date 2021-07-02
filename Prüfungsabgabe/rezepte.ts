namespace pAbgabe {
    
    let loginbttn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("save");
    loginbttn.addEventListener("click", saveRecipie);

    async function saveRecipie(): Promise<void> {
        interface Nutzer {
            [type: string]: string | string[];
        }
        //var creator: HTMLElement = document.getElementById("creator");
        sessionStorage.setItem("nutzer", "sbbeve");
        let user: string = sessionStorage.getItem("nutzer");
        console.log(user);
        //creator = <input type="hidden" id="creator" name="creator" value = sessionStorage.getItem("nutzer")>;
        //console.log(creator);
        let formData: FormData = new FormData(document.forms[0]);
        console.log(formData);
        let url: string = "https://dennytestapp.herokuapp.com"; //http://localhost:8100
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "/loginUser?" + query.toString() + "&creator=" + sessionStorage.getItem("nutzer"));
        console.log(response);

        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Login.html") {
            window.open("index.html", "_self");

        } else {console.log("Error"); }
        //window.open("index.html", "_self");
    }
}