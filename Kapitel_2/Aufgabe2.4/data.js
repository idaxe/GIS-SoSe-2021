"use strict";
var Aufg1u2;
(function (Aufg1u2) {
    //erzeugung der Flaschenhaelse
    let flaschenkopf1 = { quelle: "assets/top1_alt.jpg", art: 0, gravour: "exquisit", farbe: "silber" };
    let flaschenkopf2 = { quelle: "assets/top2_alt.jpg", art: 0, gravour: "keine", farbe: "farblos" };
    let flaschenkopf3 = { quelle: "assets/top3_alt.jpg", art: 0, gravour: "keine", farbe: "grün" };
    Aufg1u2.flaschenhaelse.push(flaschenkopf1);
    Aufg1u2.flaschenhaelse.push(flaschenkopf2);
    Aufg1u2.flaschenhaelse.push(flaschenkopf3);
    //erzeugung der Flaschenkoerper
    let flaschenkorpus1 = { quelle: "assets/mid1.png", art: 1, gravour: "exquisit", farbe: "silber" };
    let flaschenkorpus2 = { quelle: "assets/mid2.png", art: 1, gravour: "keine", farbe: "farblos" };
    let flaschenkorpus3 = { quelle: "assets/mid3.png", art: 1, gravour: "keine", farbe: "grün" };
    Aufg1u2.flaschenwaende.push(flaschenkorpus1);
    Aufg1u2.flaschenwaende.push(flaschenkorpus2);
    Aufg1u2.flaschenwaende.push(flaschenkorpus3);
    //erzeugung der Flaschenboeden
    let flaschenboden1 = { quelle: "assets/bot1.png", art: 2, gravour: "exquisit", farbe: "silber" };
    let flaschenboden2 = { quelle: "assets/bot2.png", art: 2, gravour: "keine", farbe: "farblos" };
    let flaschenboden3 = { quelle: "assets/bot3.png", art: 2, gravour: "keine", farbe: "grün" };
    Aufg1u2.flaschenboeden.push(flaschenboden1);
    Aufg1u2.flaschenboeden.push(flaschenboden2);
    Aufg1u2.flaschenboeden.push(flaschenboden3);
    //    export let ausgewaehlt: Flaschenteil = { oben: undefined, mitte: undefined, unten: undefined }; 
    //console.log(createJSON());
    createJSON3(createJSON());
    function createJSON() {
        let zwischen = { oben: Aufg1u2.flaschenhaelse, mitte: Aufg1u2.flaschenwaende, unten: Aufg1u2.flaschenboeden };
        let zwischen2 = JSON.stringify(zwischen);
        return zwischen2;
    }
    function createJSON3(jsonStr) {
        Aufg1u2.flaschenhaelse = [];
        Aufg1u2.flaschenwaende = [];
        Aufg1u2.flaschenboeden = [];
        let json = JSON.parse(jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "oben") {
                Aufg1u2.flaschenhaelse = json[key];
            }
            else if (key == "mitte") {
                Aufg1u2.flaschenwaende = json[key];
            }
            else if (key == "unten") {
                Aufg1u2.flaschenboeden = json[key];
            }
        });
    }
    Aufg1u2.createJSON2 = `        {
            "oben": [
                {
                "quelle": "assets/top1_alt.jpg",
                "art": 0,
                "gravour": "exquisit",
                "farbe": "silber"
                },
            {
                "quelle": "assets/top2_alt.jpg",
                "art": 0,
                "gravour": "keine",
                "farbe": "farblos"
            },
            {
                "quelle": "assets/top3_alt.jpg",
                "art": 0,
                "gravour": "keine",
                "farbe": "grün"
            }
        ],
            "mitte": [{
                "quelle": "assets/mid1.png",
                "art": 1,
                "gravour": "exquisit",
                "farbe": "silber"
            },
            {
                "quelle": "assets/mid2.png",
                "art": 1,
                "gravour": "keine",
                "farbe": "farblos"
            },
            {
                "quelle": "assets/mid3.png",
                "art": 1,
                "gravour": "keine",
                "farbe": "grün"
            }
        ],
            "unten": [{
                "quelle": "assets/bot1.png",
                "art": 2,
                "gravour": "exquisit",
                "farbe": "silber"
            },
            {
                "quelle": "assets/bot2.png",
                "art": 2,
                "gravour": "keine",
                "farbe": "farblos"
            },
            {
                "quelle": "assets/bot3.png",
                "art": 2,
                "gravour": "keine",
                "farbe": "grün"
            }
        ]
    }
`;
})(Aufg1u2 || (Aufg1u2 = {}));
//# sourceMappingURL=data.js.map