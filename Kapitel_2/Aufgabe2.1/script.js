"use strict";
console.log("Aufgabe_1-----------------------------------------------------------------------------------");
//Aufgabe_1
function a1() {
    let x = "Alles";
    console.log(x);
    func();
    console.log("Logo!");
}
//let h_as: number = 0;
a1();
function func() {
    console.log("Klar?");
}
/*Aufgabe_1a
 Zahlen am anfang, sonderzeichen und leerzeichen bei Variablen und Funktionsnamen sind nicht zulässig
 Aufgabe_1c
 a1 wird aufgerufen und gibt zuerst "Alles" aus. Danach wird in a1 die funktion func aufgerufen und die konsole gibt "Klar?" aus.
 zuletzt wird in a1 "Logo!" ausgegeben. Die komplette ausgabe in Reihenfole ist also "Alles Klar? Logo!" */
console.log("Aufgabe_2-----------------------------------------------------------------------------------");
//Aufgabe_2
function a2() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a2();
/*Der Code gibt folgendes in dieser Reihenfolge aus: 9 8 7 6 5 4 3 2 1
Die nummer i wird initialisiert mit 9.
Es verändert sich innerhalb der do schleife die variable i und zieht pro schleifendurchlauf immer 1 von der aktuellen menge von i ab
Sobald auf der konsole "1" ausgegeben wird, wird i zu 0 und die do schleife endet da die while bedingung mit i > 0 nicht mehr erfüllt wird.*/
console.log("Aufgabe_4-----------------------------------------------------------------------------------");
//Aufgabe_4
let x = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);
function func1(y) {
    y = "Bla";
    console.log(y);
}
function func2() {
    let x = "Blubb";
    console.log(x);
}
function func3() {
    x = "Test";
}
/*Mehrere Funktionen können auf die selben globalen variablen zugreifen, können aber nicht auf die lokalen variablen anderer Funktionen zugreifen
*/
console.log("Aufgabe_5-----------------------------------------------------------------------------------");
//Aufgabe_5_a
function multiply(y, z) {
    let answer = 0;
    answer = y * z;
    return answer;
}
console.log(multiply(5, 6));
//Aufgabe_5_b
function max(y, z) {
    let answer = 0;
    if (y <= z) {
        answer = z;
    }
    else {
        answer = y;
    }
    return answer;
}
console.log(max(17, 15));
//Aufgabe_5_c
let summe = 0;
let zwischen = 1;
do {
    summe = summe + zwischen;
    zwischen++;
} while (zwischen <= 100);
console.log(summe);
//Aufgabe_5_d
for (let i = 0; i < 10; i++) {
    let zufall = Math.floor(Math.random() * 100);
    console.log(zufall);
}
//Aufgabe_5_e
function factorial(n) {
    let sum = 1;
    zwischen = n;
    if (n < 1) {
        return 1;
    }
    else {
        for (let i = 1; i <= n; i++) {
            sum = sum * zwischen;
            zwischen--;
        }
        return sum;
    }
}
console.log(factorial(5));
//Aufgabe_5_f
function leapyears() {
    let years = 1900;
    for (let i = 0; years + i <= 2020; i++) {
        zwischen = years + i;
        if (zwischen % 4 == 0 && zwischen % 100 != 0) {
            console.log(zwischen);
            /*if (zwischen % 4 == 0 && zwischen % 100 == 0 && zwischen % 400 == 0) {
                console.log(zwischen);
            }*/
        }
        if (zwischen % 4 == 0 && zwischen % 100 == 0 && zwischen % 400 == 0) {
            console.log(zwischen);
        }
    }
}
leapyears();
console.log("Aufgabe_6-----------------------------------------------------------------------------------");
//Aufgabe_6_a
let line = "";
for (let i = 0; i < 7; i++) {
    line = line + "#";
    console.log(line);
}
//Aufgabe_6_b
for (let i = 1; i < 100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    else {
        if (i % 5 == 0 && i % 3 != 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
//Aufgabe_6_c   clevere folgt
for (let i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz"); //offentsichtlich
    }
    else {
        if (i % 3 == 0) {
            console.log("Fizz");
        }
        else {
            if (i % 5 == 0 && i % 3 != 0) {
                console.log("Buzz");
            }
            else {
                console.log(i);
            }
        }
    }
}
//Aufgabe_6_d
let brett = "";
zwischen = 0;
function Chess() {
    for (let i = 0; i < 8; i++) {
        for (let k = 0; k < 8; k++) {
            if (zwischen == 0) {
                brett = brett + " ";
                zwischen = 1;
            }
            else {
                if (zwischen == 1) {
                    brett = brett + "#";
                    zwischen = 0;
                }
            }
        }
        //console.log(brett);
        let test = brett.substr(brett.length - 1);
        switch (test) {
            case "#":
                zwischen = 1;
                break;
            case " ":
                zwischen = 0;
                break;
            default:
                zwischen = 0;
        }
        brett = brett + "\n";
    }
    return brett;
}
console.log(Chess());
//Aufgabe_6_e
zwischen = 0;
brett = "";
let n = 6;
function Chess2(n) {
    for (let i = 0; i < n; i++) {
        for (let k = 0; k < n; k++) {
            if (zwischen == 0) {
                brett = brett + " ";
                zwischen = 1;
            }
            else {
                if (zwischen == 1) {
                    brett = brett + "#";
                    zwischen = 0;
                }
            }
        }
        let test = brett.substr(brett.length - 1);
        switch (test) {
            case "#":
                zwischen = 1;
                break;
            case " ":
                zwischen = 0;
                break;
            default:
                zwischen = 0;
        }
        brett = brett + "\n";
    }
    return brett;
}
console.log(Chess2(n));
/*let brett: string = "";                   //Alternative Version von A_6_d ohne Funktion
zwischen = 0;
function Schach(): void {}
for (let i: number = 0; i < 8; i++) {
    for (let k: number = 0; k < 8; k++) {
        if (zwischen == 0) {
            brett = brett + " ";
            zwischen = 1;
        }
        else {
            if (zwischen == 1) {
                brett = brett + "#";
                zwischen = 0;
            }
        }
    }
    console.log(brett);
    switch (brett) {
        case " # # # #":
            zwischen = 1;
            break;
        case "# # # # ":
            zwischen = 0;
            break;
        default:
            zwischen = 0;
    }
    brett = "";
}*/ 
//# sourceMappingURL=script.js.map