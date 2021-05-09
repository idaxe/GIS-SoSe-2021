"use strict";
var Aufg2u3;
(function (Aufg2u3) {
    Aufg2u3.obereTeile = [];
    Aufg2u3.mittlereTeile = [];
    Aufg2u3.untereTeile = [];
    //erzeugung der Flaschenhaelse
    let flaschenkopf1 = { quelle: "assets/top1_alt.png", art: 0, gravour: "exquisit", farbe: "silber" };
    let flaschenkopf2 = { quelle: "assets/top2_alt.png", art: 0, gravour: "keine", farbe: "farblos" };
    let flaschenkopf3 = { quelle: "assets/top3_alt.png", art: 0, gravour: "keine", farbe: "grün" };
    Aufg2u3.obereTeile.push(flaschenkopf1);
    Aufg2u3.obereTeile.push(flaschenkopf2);
    Aufg2u3.obereTeile.push(flaschenkopf3);
    //erzeugung der Flaschenkoerper
    let flaschenkorpus1 = { quelle: "assets/mid1.png", art: 1, gravour: "exquisit", farbe: "silber" };
    let flaschenkorpus2 = { quelle: "assets/mid2.png", art: 1, gravour: "keine", farbe: "farblos" };
    let flaschenkorpus3 = { quelle: "assets/mid3.png", art: 1, gravour: "keine", farbe: "grün" };
    Aufg2u3.mittlereTeile.push(flaschenkorpus1);
    Aufg2u3.mittlereTeile.push(flaschenkorpus2);
    Aufg2u3.mittlereTeile.push(flaschenkorpus3);
    //erzeugung der Flaschenboeden
    let flaschenboden1 = { quelle: "assets/bot1.png", art: 2, gravour: "exquisit", farbe: "silber" };
    let flaschenboden2 = { quelle: "assets/bot2.png", art: 2, gravour: "keine", farbe: "farblos" };
    let flaschenboden3 = { quelle: "assets/bot3.png", art: 2, gravour: "keine", farbe: "grün" };
    Aufg2u3.untereTeile.push(flaschenboden1);
    Aufg2u3.untereTeile.push(flaschenboden2);
    Aufg2u3.untereTeile.push(flaschenboden3);
})(Aufg2u3 || (Aufg2u3 = {}));
//# sourceMappingURL=data.js.map