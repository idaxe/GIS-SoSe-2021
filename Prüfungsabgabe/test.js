"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pAbgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
//import { type } from "os";
var pAbgabe;
(function (pAbgabe) {
    console.log("Starting server"); //Konsolenausgabe
    let nutzerCollection;
    let port = Number(process.env.PORT); //Holt den Port
    if (!port)
        port = 8100; //wenn kein Port vorhanden dann wird Port = 8100
    let databaseURL = "mongodb+srv://idaxe:now_its_reyn_time@denny-lang-gis.mfnfb.mongodb.net/GIS_Prüfungsabgabe?retryWrites=true&w=majority"; //mongodb://localhost:27017
    startServer(port);
    connectToDatabase(databaseURL);
    function startServer(_port) {
        let server = Http.createServer(); //erstellt (http) Server
        console.log("Starting on Port:" + _port);
        server.addListener("request", handleRequest); //Fügt Listener hinzu
        server.addListener("listening", handleListen); //Fügt Listener hinzu
        server.listen(_port); //erstellt einen listener für diesen spezifischen Port  
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        nutzerCollection = mongoClient.db("GIS_Prüfungsabgabe").collection("Nutzer");
        console.log("Database Connection:" + nutzerCollection != undefined);
    }
    function handleListen() {
        console.log("Listening"); //Konsolenausgabe
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Konsolenausgabe
        _response.setHeader("content-type", "text/html; charset=utf-8"); //setzt/ersetzt werte des headers
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/loginUser") {
                let registeredUsers = await getUsers();
                await checkUser(url.query);
                let jsonString = JSON.stringify(registeredUsers);
                console.log(jsonString);
                _response.write("jsonString");
            }
            else if (url.pathname == "/registerUser") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                console.log(url.query);
                storeUser(url.query);
            }
        }
        //_response.write(_request.url);  //gibt die URL aus
        console.log(_request.url);
        _response.end(); //beendet die Antwort
    }
    function storeUser(_user) {
        nutzerCollection.insert(_user);
    }
    async function getUsers() {
        let databaseUsers;
        databaseUsers = await nutzerCollection.find().toArray();
        return databaseUsers;
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
})(pAbgabe = exports.pAbgabe || (exports.pAbgabe = {}));
//# sourceMappingURL=test.js.map