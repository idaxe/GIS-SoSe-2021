//Aufgabe1
function $(): void {
    let x: string = "Alles";
    console.log(x);
    funcsa();
    console.log("Logo!");
}

$();

function funcsa(): void {
    console.log("Klar?");
}
//Aufgabe1a
/* Zahlen am anfang der Funktion sind nicht zulässig
*/
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
    for (let i: number = 0; years + i <= 2020; i++) {
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
//Aufgabe_6_a
let line: string = "";
for (let i: number = 0; i < 7; i++) {
    line = line + "#";
    console.log(line);
}
//Aufgabe_6_b
for (let i: number = 1; i < 100; i++) {
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
for (let i: number = 1; i < 100; i++) {
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
let n: number = 6;
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