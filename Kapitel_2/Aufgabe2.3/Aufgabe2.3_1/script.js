"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    let div1 = document.createElement("div");
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
    let rectStorage2 = [];
    for (let i = 0; i < 4; i++) {
        console.log(i);
        let rect2 = document.createElement("div");
        rect2.style.backgroundColor = "green";
        rect2.style.position = "absolute";
        let xPosition = Math.floor(Math.random() * 600);
        let yPosition = Math.floor(Math.random() * 600);
        let width = Math.floor(Math.random() * 200);
        let length = Math.floor(Math.random() * 200);
        rect2.style.left = xPosition + "px";
        rect2.style.top = yPosition + "px";
        rect2.style.width = width + "px";
        rect2.style.height = length + "px";
        div1.appendChild(rect2);
        rectStorage2.push(rect2);
    }
    let resetbttn = document.getElementById("reset");
    resetbttn.addEventListener("click", reset);
    let newRectbttn = document.getElementById("newRect");
    newRectbttn.addEventListener("click", addRect);
    let rectStorage = [];
    function reset() {
        rectStorage.forEach(element => {
            div1.removeChild(element);
        });
        if (rectStorage2 != []) {
            rectStorage2.forEach(element => {
                div1.removeChild(element);
            });
        }
        rectStorage = [];
        rectStorage2 = [];
    }
    function addRect() {
        console.log("test");
        let rect = document.createElement("div");
        rect.style.backgroundColor = "black";
        rect.style.position = "absolute";
        let xPosition = Math.floor(Math.random() * 600);
        let yPosition = Math.floor(Math.random() * 600);
        let width = Math.floor(Math.random() * 200);
        let length = Math.floor(Math.random() * 200);
        rect.style.left = xPosition + "px";
        rect.style.top = yPosition + "px";
        rect.style.width = width + "px";
        rect.style.height = length + "px";
        div1.appendChild(rect);
        rectStorage.push(rect);
    }
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=script.js.map