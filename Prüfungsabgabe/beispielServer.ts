import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
//import { type } from "os";

export namespace pAbgabe {
    interface User {
        [type: string]: string | string[];
    }
    console.log("Starting server"); //Konsolenausgabe
    let userCollection: Mongo.Collection;
    let port: number = Number(process.env.PORT);    //Holt den Port
    if (!port)
        port = 8100;    //wenn kein Port vorhanden dann wird Port = 8100
    let databaseURL: string = "mongodb+srv://idaxe:now_its_reyn_time@denny-lang-gis.mfnfb.mongodb.net/GIS_3-4_Lindows_Registration?retryWrites=true&w=majority"; //mongodb://localhost:27017

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
        userCollection = mongoClient.db("GIS_3-4_Lindows_Registration").collection("R_Users");
        console.log("Database Connection:" + userCollection != undefined);
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
            if (url.pathname == "/loginUser") {
                let registeredUsers: User[] = await getUsers();
                let jsonString: string = JSON.stringify(registeredUsers);
                _response.write(jsonString);
            }
            else if (url.pathname == "/registerUser") {
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
                console.log(url.query);

                storeUser(url.query);
            }
        }

        //_response.write(_request.url);  //gibt die URL aus
        console.log(_request.url);
        _response.end();    //beendet die Antwort
    }

    function storeUser(_user: User): void {
        userCollection.insert(_user);
    }

    async function getUsers(): Promise<User[]> {
        let databaseUsers: User[];
        databaseUsers = await userCollection.find().toArray();
        return databaseUsers;
    }
}