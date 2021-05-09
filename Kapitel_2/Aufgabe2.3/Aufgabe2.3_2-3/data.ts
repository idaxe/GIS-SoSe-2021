namespace Aufg2u3 {
    export let obereTeile: Bilder[] = [];
    export let mittlereTeile: Bilder[] = [];
    export let untereTeile: Bilder[] = [];
    //erzeugung der Flaschenhaelse
    let flaschenkopf1: Bilder = { quelle: "assets/top1_alt.png", art: 0, gravour: "exquisit", farbe: "silber"};
    let flaschenkopf2: Bilder = { quelle: "assets/top2_alt.png", art: 0, gravour: "keine", farbe: "farblos"};
    let flaschenkopf3: Bilder = { quelle: "assets/top3_alt.png", art: 0, gravour: "keine", farbe: "grün"};
    obereTeile.push(flaschenkopf1);
    obereTeile.push(flaschenkopf2);
    obereTeile.push(flaschenkopf3);

    //erzeugung der Flaschenkoerper
    let flaschenkorpus1: Bilder = { quelle: "assets/mid1.png", art: 1, gravour: "exquisit", farbe: "silber"};
    let flaschenkorpus2: Bilder = { quelle: "assets/mid2.png", art: 1, gravour: "keine", farbe: "farblos"};
    let flaschenkorpus3: Bilder = { quelle: "assets/mid3.png", art: 1, gravour: "keine", farbe: "grün"};
    mittlereTeile.push(flaschenkorpus1);
    mittlereTeile.push(flaschenkorpus2);
    mittlereTeile.push(flaschenkorpus3);

    //erzeugung der Flaschenboeden
    let flaschenboden1: Bilder = { quelle: "assets/bot1.png", art: 2, gravour: "exquisit", farbe: "silber"};
    let flaschenboden2: Bilder = { quelle: "assets/bot2.png", art: 2, gravour: "keine", farbe: "farblos"};
    let flaschenboden3: Bilder = { quelle: "assets/bot3.png", art: 2, gravour: "keine", farbe: "grün"};
    untereTeile.push(flaschenboden1);
    untereTeile.push(flaschenboden2);
    untereTeile.push(flaschenboden3);
}