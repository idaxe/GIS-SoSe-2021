namespace pAbgabe {
    
    let loginbttn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("login");
    loginbttn.addEventListener("click", userLogin);

    let registerbttn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("register");
    registerbttn.addEventListener("click", userRegister);

    async function userLogin(): Promise<void> {
        console.log("Login Daten testen");
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://dennytestapp.herokuapp.com"; //http://localhost:8100 "https://dennytestapp.herokuapp.com"
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "/loginUser?" + query.toString());
        let text: string = await response.text();
        console.log("test");
        console.log(text);
        let anzeige: HTMLDivElement = <HTMLDivElement>document.getElementById("errorMessage");
        sessionStorage.clear();
        if (text != "Nutzer existiert nicht!") {
            sessionStorage.setItem("nutzer", text);
            let text2: string = "Nutzer existiert" + text;
            console.log(text2);
            console.log(JSON.stringify(text2));
            console.log(sessionStorage.getItem("nutzer"));
            anzeige.innerHTML = "Nutzer existiert";
        } else {
            anzeige.innerHTML = text;
        }

        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Login.html") {
            window.open("index.html", "_self");

        } else if (text != "Nutzer existiert nicht!") {
            window.open("Meine Rezepte.html", "_self");
        } else {console.log("Error");  }
        //window.open("index.html", "_self");
    }

    async function userRegister(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://dennytestapp.herokuapp.com"; //http://localhost:8100
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "/registerUser?" + query.toString());
        console.log(response);

        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Login.html") {
            window.open("index.html", "_self");

        } else {console.log("Error"); }
        //window.open("index.html", "_self");
    }
}