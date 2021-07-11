import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
//import { type } from "os";

export namespace pAbgabe {
    interface Nutzer {
        [type: string]: string | string[];
    }
    interface Rezept {
        [type: string]: string | string[];
    }
    console.log("Starting server");
    let nutzerCollection: Mongo.Collection;
    let rezeptCollection: Mongo.Collection;
    let port: number = Number(process.env.PORT);    //Holt den Port
    if (!port)
        port = 8100;    //wenn kein Port vorhanden dann wird Port = 8100
    let databaseURL: string = "mongodb+srv://idaxe:now_its_reyn_time@denny-lang-gis.mfnfb.mongodb.net/GIS_Prüfungsabgabe?retryWrites=true&w=majority"; //mongodb://localhost:27017
                             //mongodb+srv://idaxe:now_its_reyn_time@denny-lang-gis.mfnfb.mongodb.net/GIS_Prüfungsabgabe?retryWrites=true&w=majority
    startServer(port);
    connectToDatabase(databaseURL);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();  //erstellt (http) Server
        console.log("Starting on Port:" + _port);
        server.addListener("request", handleRequest);   //Fügt Listener hinzu
        server.addListener("listening", handleListen);  //Fügt Listener hinzu
        server.listen(_port);    //erstellt einen listener für diesen spezifischen Port  
    }
    
    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        nutzerCollection = mongoClient.db("GIS_Prüfungsabgabe").collection("Nutzer");
        rezeptCollection = mongoClient.db("GIS_Prüfungsabgabe").collection("Rezepte");
        console.log("Database Connection:" + nutzerCollection != undefined);
    }

    function handleListen(): void {
        console.log("Listening");   //Konsolenausgabe
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");   //Konsolenausgabe

        _response.setHeader("content-type", "text/html; charset=utf-8");    //setzt/ersetzt werte des headers
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            if (url.pathname == "/loginUser") { ////user checken
                //let registeredUsers: Nutzer[] = await getUsers();
                let exists: boolean = await checkUser(url.query);
                console.log(await checkUser(url.query));
                if (exists == true) {
                    let jsonString: string = JSON.stringify(url.query);
                    console.log(jsonString);
                    _response.write(jsonString);
                } else {
                    _response.write("Nutzer existiert nicht!");
                }        
            }
            else if (url.pathname == "/registerUser") { //user speichern
                //let registeredUsers: Nutzer[] = await getUsers();
                let exists: boolean = await checkUser(url.query);
                if (exists == false) {
                    let jsonString: string = JSON.stringify(url.query);
                    _response.write(jsonString);
                    console.log(url.query);
    
                    storeUser(url.query);
                } else {
                    _response.write("Nutzer existiert bereits!");
                }
            }
            else if (url.pathname == "/saveRecipe") {
                storeRecipe(url.query);
            } else if (url.pathname == "/getUserRecipes") {
                let userRecipes: Rezept[] = await getUserRecipes(url.query);
                let jsonStringRezept: string = JSON.stringify(userRecipes);
                _response.write(jsonStringRezept);
            } else if (url.pathname == "/deleteRecipe") {
                deleteRecipe(url.query);
            } else if (url.pathname == "/updateRecipe") {
                let erfolg: boolean = await updateRecipe(url.query);
                if (erfolg == true) {
                    _response.write("Erfolgreiches Updaten"); 
                } else { _response.write("Rezept existiert nicht!"); }
            } else if (url.pathname == "/getRecipes") {
                let recipes: Rezept[] = await getRecipes();
                let jsonStringRezept: string = JSON.stringify(recipes);
                console.log(jsonStringRezept);
                _response.write(jsonStringRezept);
            } else if (url.pathname == "/favoriteRecipe") {
                addFavorite(url.query);
            } else if (url.pathname == "/getFavoriteRecipes") {
                let favoriterecipes: Rezept[] = await getFavoriteRecipes(url.query);
                let jsonStringFavRezept: string = JSON.stringify(favoriterecipes);
                console.log(jsonStringFavRezept);
                _response.write(jsonStringFavRezept);
            } else if (url.pathname == "/deleteFavRecipe") {
                deleteFavoriteRecipe(url.query);
            }
        }

        //_response.write(_request.url);  //gibt die URL aus
        console.log(_request.url);
        _response.end();    //beendet die Antwort
    }

    function storeUser(_nutzer: Nutzer): void { //speichert Nutzer ab
        nutzerCollection.insert(_nutzer);
    }

    function storeRecipe(_rezept: Rezept): void {   //speichert Rezept ab
        rezeptCollection.insert(_rezept);
    }

    async function addFavorite(_nutzer: Nutzer): Promise<void> {    //fügt einem Nutzer ein favorisierte Rezept hinzu
        let zwischen: Nutzer = await nutzerCollection.findOne({nutzername: _nutzer.nutzername});
        let zwischen2: string[] = new Array();
        let zwischen3: string[] = new Array();
        for (let i: number = 0; i < zwischen.favorites.length; i++) {
            zwischen3[i] = zwischen.favorites[i];
        }
        console.log("test");
        console.log(zwischen3);
        console.log(_nutzer);
        console.log(_nutzer.favorites);
        if (zwischen.favorites != undefined) {
            //nutzerCollection.findOneAndUpdate({nutzername: _nutzer.nutzername, password: _nutzer.password}, {$set : {"favorites" : zwischen.favorites }});
            console.log("is not undefined");
        } else {
            console.log("undefined");
            //nutzerCollection.findOneAndUpdate({nutzername: _nutzer.nutzername, password: _nutzer.password}, {$set : {"favorites" : zwischen.favorites }});
            }
        let k: number = zwischen2.length;
        let f: number = 0;
        for (let i: number = -1; i < k; i++) {
            if (zwischen2[f] == undefined) {
                zwischen2[f] = _nutzer.favorites.toString();
                f++;  
            }
        }
        //let zw: string[] = [zwischen.favorites];
        console.log(zwischen2);
        let c: number = zwischen3.length + 1;
        for (let z: number = 0; z < c; z++) {
            if (zwischen3[z] == undefined || zwischen3[z] == "") {
                zwischen3[z] = zwischen2[0];
            }
        }
        //zwischen3.push(zwischen2);
        //zwischen2 = zwischen2 + zwischen3;
        //let alt: string|string[] = zwischen.favorites;
        console.log(zwischen3);
        nutzerCollection.findOneAndUpdate({nutzername: _nutzer.nutzername, password: _nutzer.password}, {$set : {"favorites" : zwischen3 }});
        zwischen = await nutzerCollection.findOne({nutzername: _nutzer.nutzername});
        console.log(zwischen);
        
        //zwischen2.push(zwischen.favorites.toString());
    }

    async function deleteFavoriteRecipe(_nutzer: Nutzer): Promise<void> {
        let zwischenNutzer: Nutzer = await nutzerCollection.findOne({nutzername: _nutzer.nutzername});
        let favoriteRecipes: string[] = new Array();
        let newfavorites: string[] = new Array();
        for (let j: number = 0; j < zwischenNutzer.favorites.length; j++) {
            favoriteRecipes[j] = zwischenNutzer.favorites[j].toString();
        }
        console.log(zwischenNutzer.favorites[0]);
        console.log(_nutzer.favorites);

        for (let v: number = 0; v < favoriteRecipes.length; v++) {
            if (favoriteRecipes[v] == _nutzer.favorites) {
                console.log("weiter");
            } else {
                newfavorites[v] = favoriteRecipes[v];
            }
        }
        console.log(favoriteRecipes);
        console.log(newfavorites);
        nutzerCollection.findOneAndUpdate({nutzername: _nutzer.nutzername, password: _nutzer.password}, {$set : {"favorites" : newfavorites }});
    }

    async function getUserRecipes(_nutzer: Nutzer): Promise<Rezept[]> { //holt alle rezepte die ein bestimmter nutzer erstellt hat 
        console.log(_nutzer);
        console.log(_nutzer.creator);
        let recipes: Rezept[];
        recipes = await rezeptCollection.find({creator: _nutzer.creator}).toArray();
        console.log(recipes);
        return recipes;
    }

    async function getFavoriteRecipes(_nutzer: Nutzer): Promise<Rezept[]> { //holt favorisierte rezepte eines nutzers
        console.log(_nutzer);
        let zwischennutzer: Nutzer = await nutzerCollection.findOne({nutzername: _nutzer.nutzername});
        console.log(zwischennutzer);
        let recipes: Rezept[] = new Array();
        let anzehl: string[] = new Array();
        for (let j: number = 0; j < zwischennutzer.favorites.length; j++) {
            if (zwischennutzer.favorites[j] == null) {
                anzehl[j] = "leer";
            } else {
            anzehl[j] = zwischennutzer.favorites[j].toString();
            }
        }
        console.log("check break");
        console.log(anzehl);
        console.log("check break");

        for (let u: number = 0; u < anzehl.length; u++) {
            console.log(new Mongo.ObjectId(anzehl[u].toString()));
            console.log(await rezeptCollection.findOne({_id: new Mongo.ObjectId(anzehl[u].toString())}));
            console.log(await rezeptCollection.findOne({_id: new Mongo.ObjectId(anzehl[u])}));
            recipes[u] = await rezeptCollection.findOne({_id: new Mongo.ObjectID(anzehl[u])});
            console.log(recipes[u]);
            console.log("test break");
        }
        console.log(recipes);
        console.log("check break");
        //recipes = await rezeptCollection.find().toArray();
        return recipes;
    }

    async function getRecipes(): Promise<Rezept[]> {    //holt alle Rezepte
        let alleRezepte: Rezept[];
        alleRezepte = await rezeptCollection.find().toArray();
        console.log(alleRezepte);
        return alleRezepte;
    }

    /*async function getUsers(): Promise<Nutzer[]> {
        let databaseUsers: Nutzer[];
        databaseUsers = await nutzerCollection.find().toArray();
        return databaseUsers;
    }*/

    async function checkUser(_nutzer: Nutzer): Promise<boolean> {   //prüft ob ein Nutzer existiert
        //let exists: boolean;
        //let test: Benutzer = nutzerCollection.findOne(_nutzer);
        let exist: Nutzer = await nutzerCollection.findOne({nutzername: _nutzer.nutzername});
        if (exist != undefined) {
            return true;
        } else { 
            return false;
        }
        //return false;
    }

    function deleteRecipe(_nutzer: Nutzer): void {  //löscht ein bestimmtes Rezept eines Nutzers
        rezeptCollection.findOneAndDelete({recipeName: _nutzer.recipeName, creator: _nutzer.creator});
    }

    async function updateRecipe(_nutzer: Nutzer): Promise<boolean> {    //updated ein bestimmtes vom Nutzer ausgewähltes Rezept
        let exist: boolean;
        console.log(rezeptCollection.findOne({recipeName: _nutzer.recipeName, creator: _nutzer.creator}));
        let test: Rezept = await rezeptCollection.findOne({recipeName: _nutzer.recipeName, creator: _nutzer.creator});
        if (test != undefined) {
            rezeptCollection.replaceOne({recipeName: _nutzer.recipeName, creator: _nutzer.creator}, _nutzer);
            exist = true;
        } else {
            exist = false;
        }
        return exist;
    }
}