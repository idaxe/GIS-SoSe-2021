console.log("Aufgabe_1-----------------------------------------------------------------------------------");
//Aufgabe_1
function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func();
    func0();
    console.log("Logo!");
}
//let h_as: number = 0;
a1();

function func(): void {         //umbenannt wegen doppelter variablendeklaration
    console.log("Klar?");
}
function func0(): void {    	//für 1_c
    console.log("Jupp, bei dir?");
}
/*Aufgabe_1_a
 Zahlen am anfang, sonderzeichen und leerzeichen bei Variablen und Funktionsnamen sind nicht zulässig
 Aufgabe_1_b
 a1 wird aufgerufen und gibt zuerst "Alles" aus der Variable x aus. 
 Danach wird in a1 die funktion func aufgerufen und die konsole gibt "Klar?" aus.
 zuletzt wird in a1 "Logo!" ausgegeben. Die komplette ausgabe in Reihenfole ist also "Alles Klar? Logo!" */

console.log("Aufgabe_2-----------------------------------------------------------------------------------");
//Aufgabe_2
function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0);
}

a2();
/*Der Code gibt folgendes in dieser Reihenfolge aus: 9 8 7 6 5 4 3 2 1 
a2() wird aufgerufen und die funktion initialisiert die variable i mit der nummer 9.
Die do schleife geht los und gibt zuerst den aktuellen wert von i aus.
Es verändert sich innerhalb der do schleife die variable i und zieht pro schleifendurchlauf immer 1 von der aktuellen menge von i ab.
Sobald auf der konsole "1" ausgegeben wird, wird i zu 0 und die do schleife endet da die while bedingung mit i > 0 nicht mehr erfüllt wird.*/
console.log("Aufgabe_4-----------------------------------------------------------------------------------");
//Aufgabe_4
let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void {
    y = "Bla";
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test";
}
/* Aufgabe_4_a
 Ausgegen wird in dieser Animation folgendes: "Hallo" "Bla" "Hallo" "Blubb" "Test".
zuerst wird x initialisiert ("Hallo") und wird danach auf der konsole ausgegeben. x wird in func1 übergeben, welches darin als y lokal bezeichnet wird.
Dieses y wird mit "Bla" überschrieben und innerhalb der funktion dann auf der konsole ausgegeben. func1 endet und x wird erneut auf der konsole ausgegeben.
Da x global jedoch nicht verändert wurde gibt es ein weiteres mal "Hallo" auf der Konsole aus. Daraufhin startet func2 welche eine lokale variable x erzeugt,
welche eine höhere priorität hat als die globale variable x.
Diese mit "Blubb" füllt und daraufhin in func2 auf der konsole ausgegeben. Danach wird func3 aufgerufen. In func3,
wird die globale variable x überschrieben und mit "Test" gefüllt. Anschließend wird dies auf der letzten konsolenausgabe nach func3 angezeigt,
welche x und somit "test" ausgibt.
Annahme als richtig bestätigt.
Aufgabe_4_b
Globale variablen können überall im Code benutzt und geändert werden. lokale variablen können  nur in der funktion in welcher sie 
erstellt wurden verwendet und verarbeitet werden, da sie außerhalb dieser lokalen funktion nicht existieren bzw. nicht verstanden werden können.
Übergabeparameter werden benutzt um einer Funktion einen bestimmten Wert mitzugeben oder auszulesen. 
Alles in allem können variablen nur kleine informationsstücke in sich speichern, während funktionen diese informationen komplex in sich verarbeiten können.
*/
console.log("Aufgabe_5-----------------------------------------------------------------------------------");
//Aufgabe_5_a
function multiply(y: number, z: number): number {
    let answer: number = 0;
    answer = y * z;
    return answer;
}
console.log(multiply(5, 6));
//Aufgabe_5_b
function max(y: number, z: number): number {
    let answer: number = 0;
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
let summe: number = 0;
let zwischen: number = 1;
do {
    summe = summe + zwischen;
    zwischen++;
} while (zwischen <= 100);
console.log(summe);
//Aufgabe_5_d
for (let i: number = 0; i < 10; i++) {
    let zufall: number = Math.floor(Math.random() * 100);
    console.log(zufall);
}
//Aufgabe_5_e
function factorial(n: number): number {
    let sum: number = 1;
    zwischen = n;
    if ( n < 1 ) {
        return 1;
    }
    else {
        for (let i: number = 1; i <= n; i++) {
            sum = sum * zwischen;
            zwischen--;
        }
        return sum;
    }
}
console.log(factorial(5));
//Aufgabe_5_f
function leapyears(): void {
    let years: number = 1900;
    for (let i: number = 0; years + i <= 2021; i++) {
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
let line: string = "";
for (let i: number = 0; i < 7; i++) {
    line = line + "#";
    console.log(line);
}
//Aufgabe_6_b
console.log("Aufgabe6b Fizz or Buzz");
for (let i: number = 1; i <= 100; i++) {
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
//Aufgabe_6_c   
console.log("Aufgabe6c FizzBuzz");
for (let i: number = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
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
let brett: string = "";
zwischen = 0;
function Chess(): string {
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
        //console.log(brett);
        let test: string = brett.substr(brett.length - 1);
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
let n: number = 10;
function Chess2(n: number): string {
    for (let i: number = 0; i < n; i++) {
        for (let k: number = 0; k < n; k++) {
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
        let test: string = brett.substr(brett.length - 1);
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