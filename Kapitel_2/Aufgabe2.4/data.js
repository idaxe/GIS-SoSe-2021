"use strict";
var Aufg1u2;
(function (Aufg1u2) {
    Aufg1u2.obereTeile = [];
    Aufg1u2.mittlereTeile = [];
    Aufg1u2.untereTeile = [];
    //erzeugung der Flaschenhaelse
    let flaschenkopf1 = { quelle: "assets/top1_alt.jpg", art: 0, gravour: "exquisit", farbe: "silber" };
    let flaschenkopf2 = { quelle: "assets/top2_alt.jpg", art: 0, gravour: "keine", farbe: "farblos" };
    let flaschenkopf3 = { quelle: "assets/top3_alt.jpg", art: 0, gravour: "keine", farbe: "grün" };
    Aufg1u2.obereTeile.push(flaschenkopf1);
    Aufg1u2.obereTeile.push(flaschenkopf2);
    Aufg1u2.obereTeile.push(flaschenkopf3);
    //erzeugung der Flaschenkoerper
    let flaschenkorpus1 = { quelle: "assets/mid1.png", art: 1, gravour: "exquisit", farbe: "silber" };
    let flaschenkorpus2 = { quelle: "assets/mid2.png", art: 1, gravour: "keine", farbe: "farblos" };
    let flaschenkorpus3 = { quelle: "assets/mid3.png", art: 1, gravour: "keine", farbe: "grün" };
    Aufg1u2.mittlereTeile.push(flaschenkorpus1);
    Aufg1u2.mittlereTeile.push(flaschenkorpus2);
    Aufg1u2.mittlereTeile.push(flaschenkorpus3);
    //erzeugung der Flaschenboeden
    let flaschenboden1 = { quelle: "assets/bot1.png", art: 2, gravour: "exquisit", farbe: "silber" };
    let flaschenboden2 = { quelle: "assets/bot2.png", art: 2, gravour: "keine", farbe: "farblos" };
    let flaschenboden3 = { quelle: "assets/bot3.png", art: 2, gravour: "keine", farbe: "grün" };
    Aufg1u2.untereTeile.push(flaschenboden1);
    Aufg1u2.untereTeile.push(flaschenboden2);
    Aufg1u2.untereTeile.push(flaschenboden3);
    //    export let ausgewaehlt: Flaschenteil = { oben: undefined, mitte: undefined, unten: undefined }; 
})(Aufg1u2 || (Aufg1u2 = {}));
//# sourceMappingURL=data.js.map