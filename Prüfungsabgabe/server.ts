import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace pAbgabe {

    
    let nutzerCollection: Mongo.Collection;
    let userCollection: Mongo.Collection;
    //let rezepteCollection: Mongo.Collection;
    interface Nutzer {
        [type: string]: string | string[];
    }
    interface User {
        [type: string]: string | string[];
    }
    let port: number = Number(process.env.PORT);
    if (!port) 
        port = 8100;
    let databaseURL: string = "mongodb+srv://idaxe:now_its_reyn_time@denny-lang-gis.mfnfb.mongodb.net/GIS_3-4_Lindows_Registration?retryWrites=true&w=majority";
    /*interface Benutzer {
        nutzer: string;
        passwort: string;
    }*/

    startServer(port);
    connectToDatabase(databaseURL);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();
        console.log("Starting on Port:" + _port);
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        nutzerCollection = mongoClient.db("GIS_3-4_Lindows_Registration").collection("R_Users");
        //rezepteCollection = mongoClient.db("GIS_Prüfungsabgabe").collection("Rezepte");
        console.log("Database Connection:" + userCollection != undefined);
    }

    function handleListen(): void {
        console.log("Listening");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("ready");
        _response.setHeader("content-type", "text/html; charset=utf-8");    //setzt/ersetzt werte des headers
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            //let registered: Promise<boolean>;
            if (url.pathname == "/loginUser") {
                console.log("test");
                /*registered = checkUser(url.query);
                if (await registered == true || await registered == false) {
                    _response.write(registered);
                } else {
                    _response.write("Error!");
                }*/
                let registeredUsers: User[] = await getUsers();
                let jsonString: string = JSON.stringify(registeredUsers);
                _response.write(jsonString);
            }
            else if (url.pathname == "/registerUser") {
                checkUser(url.query);
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
                console.log(url.query);

                storeUser();
            }
        }
        console.log(_request.url);
        _response.end();
    }

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

    function storeUser(): boolean {
        nutzerCollection.find();
        return false;
    }

    async function getUsers(): Promise<User[]> {
        let databaseUsers: User[];
        databaseUsers = await userCollection.find().toArray();
        return databaseUsers;
    }
}