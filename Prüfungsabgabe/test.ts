import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
//import { type } from "os";

export namespace pAbgabe {
    /*interface User {
        [type: string]: string | string[];
    }*/
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
            } else { _response.write("Fehler"); }
        }

        //_response.write(_request.url);  //gibt die URL aus
        console.log(_request.url);
        _response.end();    //beendet die Antwort
    }

    function storeUser(_nutzer: Nutzer): void {
        nutzerCollection.insert(_nutzer);
    }

    function storeRecipe(_rezept: Rezept): void {
        rezeptCollection.insert(_rezept);
    }

    /*async function getUsers(): Promise<Nutzer[]> {
        let databaseUsers: Nutzer[];
        databaseUsers = await nutzerCollection.find().toArray();
        return databaseUsers;
    }*/

    async function checkUser(_nutzer: Nutzer): Promise<boolean> {
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
}