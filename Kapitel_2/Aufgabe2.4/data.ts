namespace Aufg1u2 {

    //erzeugung der Flaschenhaelse
    let flaschenkopf1: Bilder = { quelle: "assets/top1_alt.jpg", art: 0, gravour: "exquisit", farbe: "silber"};
    let flaschenkopf2: Bilder = { quelle: "assets/top2_alt.jpg", art: 0, gravour: "keine", farbe: "farblos"};
    let flaschenkopf3: Bilder = { quelle: "assets/top3_alt.jpg", art: 0, gravour: "keine", farbe: "grün"};
    flaschenhaelse.push(flaschenkopf1);
    flaschenhaelse.push(flaschenkopf2);
    flaschenhaelse.push(flaschenkopf3);

    //erzeugung der Flaschenkoerper
    let flaschenkorpus1: Bilder = { quelle: "assets/mid1.png", art: 1, gravour: "exquisit", farbe: "silber"};
    let flaschenkorpus2: Bilder = { quelle: "assets/mid2.png", art: 1, gravour: "keine", farbe: "farblos"};
    let flaschenkorpus3: Bilder = { quelle: "assets/mid3.png", art: 1, gravour: "keine", farbe: "grün"};
    flaschenwaende.push(flaschenkorpus1);
    flaschenwaende.push(flaschenkorpus2);
    flaschenwaende.push(flaschenkorpus3);

    //erzeugung der Flaschenboeden
    let flaschenboden1: Bilder = { quelle: "assets/bot1.png", art: 2, gravour: "exquisit", farbe: "silber"};
    let flaschenboden2: Bilder = { quelle: "assets/bot2.png", art: 2, gravour: "keine", farbe: "farblos"};
    let flaschenboden3: Bilder = { quelle: "assets/bot3.png", art: 2, gravour: "keine", farbe: "grün"};
    flaschenboeden.push(flaschenboden1);
    flaschenboeden.push(flaschenboden2);
    flaschenboeden.push(flaschenboden3);

//    export let ausgewaehlt: Flaschenteil = { oben: undefined, mitte: undefined, unten: undefined }; 
    //console.log(createJSON());

    createJSON3(createJSON());

    function createJSON(): string {
        let zwischen: Bildsp = { oben: flaschenhaelse, mitte: flaschenwaende, unten: flaschenboeden};
        let zwischen2: string = JSON.stringify(zwischen);
        return zwischen2;
    }

    function createJSON3(jsonStr: string): void {
        flaschenhaelse = [];
        flaschenwaende = [];
        flaschenboeden = [];
        let json: Bildsp = JSON.parse(jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "oben") {
                flaschenhaelse = json[key];
            } else if (key == "mitte") {
                flaschenwaende = json[key];
            } else if (key == "unten") {
                flaschenboeden = json[key];
            }
        });
    } 

    export let createJSON2: string = 
        `        {
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
}