"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pAbgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var pAbgabe;
(function (pAbgabe) {
    let nutzerCollection;
    let userCollection;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let databaseURL = "mongodb+srv://idaxe:now_its_reyn_time@denny-lang-gis.mfnfb.mongodb.net/GIS_3-4_Lindows_Registration?retryWrites=true&w=majority";
    /*interface Benutzer {
        nutzer: string;
        passwort: string;
    }*/
    startServer(port);
    connectToDatabase(databaseURL);
    function startServer(_port) {
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.listen(_port);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        nutzerCollection = mongoClient.db("GIS_3-4_Lindows_Registration").collection("R_Users");
        //rezepteCollection = mongoClient.db("GIS_Prüfungsabgabe").collection("Rezepte");
    }
    async function handleRequest(_request, _response) {
        console.log("ready");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //setzt/ersetzt werte des headers
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            //let registered: Promise<boolean>;
            if (url.pathname == "/loginUser") {
                console.log("test");
                /*registered = checkUser(url.query);
                if (await registered == true || await registered == false) {
                    _response.write(registered);
                } else {
                    _response.write("Error!");
                }*/
                let registeredUsers = await getUsers();
                let jsonString = JSON.stringify(registeredUsers);
                _response.write(jsonString);
            }
            else if (url.pathname == "/registerUser") {
                checkUser(url.query);
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                console.log(url.query);
                storeUser();
            }
        }
    }
    async function checkUser(_nutzer) {
        //let exists: boolean;
        //let test: Benutzer = nutzerCollection.findOne(_nutzer);
        let exist = await nutzerCollection.findOne({ nutzername: _nutzer.nutzername });
        if (exist != undefined) {
            return true;
        }
        else {
            return false;
        }
        //return false;
    }
    function storeUser() {
        nutzerCollection.find();
        return false;
    }
    async function getUsers() {
        let databaseUsers;
        databaseUsers = await userCollection.find().toArray();
        return databaseUsers;
    }
})(pAbgabe = exports.pAbgabe || (exports.pAbgabe = {}));
//# sourceMappingURL=server.js.map