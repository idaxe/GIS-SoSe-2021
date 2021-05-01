"use strict";
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
showInfo(studierende[3]); //diesen Wert mit 0,1,2,3 für die verschiedenen Studierenden ändern
function showInfo(studi) {
    console.log("---");
    console.log("Name des Studenten: " + studi.name);
    console.log("Matrikelnummer des Studenten: " + studi.matrikelnummer);
    console.log("Semester des Studierenden: " + studi.semester + ".Semester");
    console.log("Geschlecht des Studierenden: " + studi.geschlecht);
}
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
//Aufgabe3
let canvas = document.getElementById("FirstCanvas");
console.log(canvas);
let context = canvas.getContext("2d");
context.lineWidth = 10;
context.strokeRect(75, 140, 150, 110);
context.fillRect(130, 190, 40, 60);
context.strokeRect(0, 400, 1500, 400);
context.beginPath();
context.lineWidth = 20;
context.moveTo(100, 120);
context.lineTo(450, 50);
context.closePath();
context.strokeStyle = "#ff0000";
context.stroke();
let xCor = canvas.width / 2 + 100;
let yCor = canvas.height / 2;
let radius = 75;
let startAngle = 1.1 * Math.PI;
let endAngle = 1.9 * Math.PI;
let counterclockwise = false;
context.beginPath();
context.arc(xCor, yCor, radius, startAngle, endAngle, counterclockwise);
context.lineWidth = 13;
context.lineCap = "round";
context.strokeStyle = "blue";
context.stroke();
context.closePath();
let rec1 = { length: 50, width: 50 };
//# sourceMappingURL=script.js.map