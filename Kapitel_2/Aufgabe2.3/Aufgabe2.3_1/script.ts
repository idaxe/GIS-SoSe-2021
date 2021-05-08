namespace Aufgabe1 {
    let div1: HTMLDivElement = <HTMLDivElement>document.createElement("div");
    div1.style.backgroundColor = "cyan";
    div1.style.borderStyle = "dashed";
    div1.style.width = "800px";
    div1.style.height = "800px";
    div1.style.position = "relative";
    document.body.appendChild(div1);
    //div1.innerHTML = "testing";
    //div1.innerText = "Ein neuer Paragraph an dieser Stelle.";
    div1.appendChild(document.createTextNode("Ein neuer Paragraph an dieser Stelle."));
    //element.appendChild(div1);
    let rectStorage2: HTMLDivElement[] = [];

    /*function createRect(): void {
        let xPosition: number = 0;
        let yPosition: number = 0;
        let width: number = 50;
        let length: number = 50;
        context.fillRect(0,0,0,0);
    }*/
    for (let i: number = 0; i < 4; i++) {
        console.log(i);
        let rect2: HTMLParagraphElement = document.createElement("div");
        rect2.style.backgroundColor = "green";
        rect2.style.position = "absolute";
        let xPosition: number = Math.floor(Math.random() * 600);
        let yPosition: number = Math.floor(Math.random() * 600);
        let width: number = Math.floor(Math.random() * 200);
        let length: number = Math.floor(Math.random() * 200);
        rect2.style.left = xPosition  + "px";
        rect2.style.top = yPosition  + "px";
        rect2.style.width = width + "px";
        rect2.style.height = length + "px";
        div1.appendChild(rect2);
        rectStorage2.push(rect2);
    }
    

    let resetbttn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("reset");
    resetbttn.addEventListener("click", reset);

    let newRectbttn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("newRect");
    newRectbttn.addEventListener("click", addRect);

    let rectStorage: HTMLDivElement[] = [];

    function reset(): void {
        rectStorage.forEach(element => {
            div1.removeChild(element);
        });
        /*for (let i: number = 0; i < rectStorage.length; i++) {
            rectStorage[i] = div1.removeChild(element);
        }*/
        if ( rectStorage2 != []) {
        rectStorage2.forEach(element => {
            div1.removeChild(element);
        }); }
        rectStorage = [];
        rectStorage2 = [];
    }

    function addRect(): void {
        console.log("test");
        let rect: HTMLParagraphElement = document.createElement("div");
        rect.style.backgroundColor = "black";
        rect.style.position = "absolute";
        let xPosition: number = Math.floor(Math.random() * 600);
        let yPosition: number = Math.floor(Math.random() * 600);
        let width: number = Math.floor(Math.random() * 200);
        let length: number = Math.floor(Math.random() * 200);
        rect.style.left = xPosition  + "px";
        rect.style.top = yPosition  + "px";
        rect.style.width = width + "px";
        rect.style.height = length + "px";
        div1.appendChild(rect);
        rectStorage.push(rect);
    }
}