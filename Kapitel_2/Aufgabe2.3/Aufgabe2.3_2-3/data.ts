namespace Aufg2u3 {
    export let obereTeile: Bilder[] = [];
    export let mittlereTeile: Bilder[] = [];
    export let untereTeile: Bilder[] = [];
    //erzeugung der Flaschenhaelse
    let flaschenkopf1: Bilder = { quelle: "assets/top1.PNG", art: 0};
    let flaschenkopf2: Bilder = { quelle: "assets/top2.PNG", art: 0};
    let flaschenkopf3: Bilder = { quelle: "assets/top3.PNG", art: 0};
    obereTeile.push(flaschenkopf1);
    obereTeile.push(flaschenkopf2);
    obereTeile.push(flaschenkopf3);

    //erzeugung der Flaschenkoerper
    let flaschenkorpus1: Bilder = { quelle: "assets/mid1.PNG", art: 1};
    let flaschenkorpus2: Bilder = { quelle: "assets/mid2.PNG", art: 1};
    let flaschenkorpus3: Bilder = { quelle: "assets/mid3.PNG", art: 1};
    mittlereTeile.push(flaschenkorpus1);
    mittlereTeile.push(flaschenkorpus2);
    mittlereTeile.push(flaschenkorpus3);

    //erzeugung der Flaschenboeden
    let flaschenboden1: Bilder = { quelle: "assets/bot1.PNG", art: 2};
    let flaschenboden2: Bilder = { quelle: "assets/bot2.PNG", art: 2};
    let flaschenboden3: Bilder = { quelle: "assets/bot3.PNG", art: 2};
    untereTeile.push(flaschenboden1);
    untereTeile.push(flaschenboden2);
    untereTeile.push(flaschenboden3);
}