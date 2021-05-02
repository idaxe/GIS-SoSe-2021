"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    //Aufgabe1a
    function min(n) {
        let min = n[0];
        for (let i = 0; i < n.length - 1; i++) {
            if (n[i] > n[i + 1] && min > n[i + 1]) {
                min = n[i + 1];
            }
        }
        return min;
    }
    let zahlen = [25, 6, 30, 200, 11, 1];
    console.log(min(zahlen));
    //Aufgabe1b
    function isEven(n) {
        if (n < 0) { //zeilen 15-17 sind eine lösung damit negative zahlen als gerade oder ungerade ausgegeben werden können. 
            return isEven(n - (n * 2));
        }
        if (n == 0) {
            console.log("Die Zahl ist Gerade.");
            return true;
        }
        if (n == 1) {
            console.log("Die Zahl ist Ungerade.");
            return false;
        }
        return isEven(n - 2);
    }
    console.log(isEven(-10)); //getestet mit 50, 75, -1 
    let s1 = { name: "Hugh Mongus", matrikelnummer: 356845, semester: 1, geschlecht: "Männlich" };
    let s2 = { name: "Henry Stickmin", matrikelnummer: 242690, semester: 3, geschlecht: "Männlich" };
    let s3 = { name: "Klaus Kleber", matrikelnummer: 190420, semester: 5, geschlecht: "Männlich" };
    let studierende = [s1, s2, s3];
    console.log(studierende);
    studierende.push({ name: "Daniel Damm", matrikelnummer: 152628, semester: 6, geschlecht: "Männlich" });
    console.log(s3.name + " ist im " + s3.semester + " Semester.");
    console.log("Die Matrikelnummer von " + s1.name + " ist " + s1.matrikelnummer + ".");
    //showInfo(studierende[3]);   //diesen Wert mit 0,1,2,3 für die verschiedenen Studierenden ändern
    for (let i = 0; i < studierende.length; i++) {
        showInfo(studierende[i]);
    }
    function showInfo(studi) {
        console.log("---");
        console.log("Name des Studenten: " + studi.name);
        console.log("Matrikelnummer des Studenten: " + studi.matrikelnummer);
        console.log("Semester des Studierenden: " + studi.semester + ".Semester");
        console.log("Geschlecht des Studierenden: " + studi.geschlecht);
    }
    /*class Student {
        name: string;
        matrikelnummer: number;
        semester: number;
        geschlecht: string;
    
        constructor (_name: string, _matrikelnummer: number, _semester: number, _geschlecht: string) {
            this.name = _name;
            this.matrikelnummer = _matrikelnummer;
            this.geschlecht = _geschlecht;
            this.semester = _semester;
        }
    
        showInfo(): void {
            console.log("---");
            console.log("Name des Studenten: " + this.name);
            console.log("Matrikelnummer des Studenten: " + this.matrikelnummer);
            console.log("Semester des Studierenden: " + this.semester + ".Semester");
            console.log("Geschlecht des Studierenden: " + this.geschlecht);
        }
    }
    let s1: Student = new Student(name: "Hugh Mongus", matrikelnummer: 356845, semester: 1, geschlecht: "Männlich");
    let s2: Student = new Student(name: "Henry Stickmin", matrikelnummer: 242690, semester: 3, geschlecht: "Männlich");
    let s3: Student = new Student(name: "Klaus Kleber", matrikelnummer: 190420, semester: 5, geschlecht: "Männlich");
    
    let studierende: Student[] = [s1, s2, s3];
    console.log(studierende);
    studierende.push(new Student(name: "Daniel Damm", matrikelnummer: 152628, semester: 6, geschlecht: "Männlich"));
    console.log(s3.name + " ist im " + s3.semester + " Semester.");
    console.log("Die Matrikelnummer von " + s1.name + " ist " + s1.matrikelnummer + ".");
    
    for (let i: number = 0; i < studierende.length; i++) {
        showInfo(studierende[i]);
    }*/
})(Aufgabe1 || (Aufgabe1 = {}));
var Aufgabe2;
(function (Aufgabe2) {
    //Aufgabe2
    //a
    function backwards(normal) {
        let reversed = [];
        for (let i = 0; i < normal.length; i++) {
            reversed[i] = normal[normal.length - 1 - i];
        }
        return reversed;
    }
    console.log(backwards([80, 15, 42, 1001]));
    //b
    function join(part1, part2) {
        let combined = [];
        for (let i = 0; i < part1.length; i++) {
            combined[i] = part1[i];
        }
        for (let i = 0; i < part2.length; i++) {
            combined[part1.length + i] = part2[i];
        }
        return combined;
    }
    console.log(join([750, 650], [3, 6, 96]));
    //c
    function split(normal, index1, index2) {
        if (index1 < 0 || index2 < 0) {
            return undefined;
        }
        else if (index1 > index2) {
            let zwischen = index1;
            index1 = index2;
            index2 = zwischen;
        }
        else if (index2 > normal.length) {
            return undefined;
        }
        let splitted = [];
        for (let i = 0; i + index1 <= index2; i++) {
            splitted[i] = normal[index1 + i];
        }
        return splitted;
    }
    console.log(split([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 7));
    let arr = [5, 42, 17, 2018, -10, 60, -10010];
    let arrBack = backwards(arr);
    console.log(arr);
    console.log(arrBack);
    console.log(join(arr, [15, 9001, -440]));
    //console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024] )); // Bonus b)
    arr = split(arr, 0, 4);
    console.log(arr);
    console.log(split(arr, 1, 2));
    console.log(split(arr, 2, 0)); // Bonus c)
    console.log(split(arr, -1, 2)); // Bonus c)
    console.log(split(arr, 0, 7)); // Bonus c)
})(Aufgabe2 || (Aufgabe2 = {}));
var Aufgabe3;
(function (Aufgabe3) {
    //Aufgabe3
    let canvas = document.getElementById("FirstCanvas");
    console.log(canvas);
    let context = canvas.getContext("2d");
    context.lineWidth = 1;
    context.fillStyle = "green"; //ground
    context.fillRect(0, 600, 1500, 400);
    context.fillStyle = "lightblue"; //sky
    context.fillRect(0, 0, 1500, 600);
    context.fillStyle = "brown"; //house base
    context.fillRect(875, 540, 150, 110);
    context.strokeRect(875, 540, 150, 110);
    context.fillStyle = "black";
    context.fillRect(930, 590, 40, 60);
    //house roof
    context.beginPath();
    context.lineWidth = 20;
    context.moveTo(830, 550);
    context.lineTo(1070, 550);
    context.lineTo(950, 450);
    context.closePath();
    context.fillStyle = "#ff0000";
    context.fill();
    context.beginPath();
    context.lineWidth = 1;
    context.moveTo(830, 550);
    context.lineTo(1070, 550);
    context.lineTo(950, 450);
    context.closePath();
    context.strokeStyle = "black";
    context.stroke();
    //tree
    context.fillStyle = "brown";
    context.fillRect(200, 440, 50, 250);
    context.fillStyle = "darkgreen";
    context.beginPath();
    context.arc(225, 440, 75, 0, 2 * Math.PI, false);
    context.fill();
    context.closePath();
    //sun
    context.beginPath();
    context.fillStyle = "yellow";
    context.moveTo(50, 0);
    context.arc(0, 0, 100, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
    //clouds
    context.beginPath();
    context.fillStyle = "white";
    //context.moveTo(200, 300);
    /*context.bezierCurveTo(130, 150, 130, 150, 230, 150);
    context.bezierCurveTo(130, 150, 130, 150, 230, 250);
    context.bezierCurveTo(130, 150, 130, 150, 330, 150);*/
    context.arc(300, 200, 50, 0, 2 * Math.PI);
    context.arc(400, 180, 80, 0, 2 * Math.PI);
    context.arc(500, 200, 50, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(650, 300, 30, 0, 2 * Math.PI);
    context.arc(700, 290, 45, 0, 2 * Math.PI);
    context.arc(750, 300, 30, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
    /*let xCor: number = canvas.width / 2 + 100;
    let yCor: number = canvas.height / 2;
    let radius: number = 75;
    let startAngle: number = 1.1 * Math.PI;
    let endAngle: number = 1.9 * Math.PI;
    let counterclockwise: boolean = false;
    context.beginPath();
    context.arc(xCor, yCor, radius, startAngle, endAngle, counterclockwise);
    context.lineWidth = 13;
    context.lineCap = "round";
    context.strokeStyle = "blue";
    context.stroke();
    context.closePath();*/
    //b-e
    class Rectangles {
        constructor() {
            this.xPosition = Math.floor(Math.random() * 1490);
            this.yPosition = Math.floor(Math.random() * 990);
            this.width = Math.floor(Math.random() * 300);
            this.length = Math.floor(Math.random() * 300);
            this.color = Math.floor(Math.random() * 6);
        }
        drawRect() {
            //this.color = Math.floor(Math.random() * 6);
            switch (this.color) { //some color variation
                case 0: {
                    context.fillStyle = "purple";
                    break;
                }
                case 1: {
                    context.fillStyle = "cyan";
                    break;
                }
                case 2: {
                    context.fillStyle = "orange";
                    break;
                }
                case 3: {
                    context.fillStyle = "gray";
                    break;
                }
                case 4: {
                    context.fillStyle = "blue";
                    break;
                }
                case 5: {
                    context.fillStyle = "pink";
                    break;
                }
                default: {
                    context.fillStyle = "black";
                    break;
                }
            }
            context.fillRect(this.xPosition, this.yPosition, this.width, this.length);
        }
    }
    let rectangle1 = new Rectangles();
    rectangle1.drawRect();
    let rectangle2 = new Rectangles();
    let rectangle3 = new Rectangles();
    let rectangle4 = new Rectangles();
    let rectangle5 = new Rectangles();
    let rectangleArray = [rectangle2, rectangle3, rectangle4, rectangle5];
    for (let i = 0; i < rectangleArray.length; i++) {
        rectangleArray[i].drawRect();
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=script.js.map