"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_4Server = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
//import { type } from "os";
var P_3_4Server;
(function (P_3_4Server) {
    console.log("Starting server"); //Konsolenausgabe
    let userCollection;
    let port = Number(process.env.PORT); //Holt den Port
    if (!port)
        port = 8100; //wenn kein Port vorhanden dann wird Port = 8100
    let databaseURL = "mongodb+srv://idaxe:now_its_reyn_time@denny-lang-gis.mfnfb.mongodb.net/GIS_3-4_Lindows_Registration?retryWrites=true&w=majority"; //mongodb://localhost:27017
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
        userCollection = mongoClient.db("GIS_3-4_Lindows_Registration").collection("R_Users");
        console.log("Database Connection:" + userCollection != undefined);
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
                let jsonString = JSON.stringify(registeredUsers);
                _response.write(jsonString);
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
        userCollection.insert(_user);
    }
    async function getUsers() {
        let databaseUsers;
        databaseUsers = await userCollection.find().toArray();
        return databaseUsers;
    }
})(P_3_4Server = exports.P_3_4Server || (exports.P_3_4Server = {}));
//# sourceMappingURL=beispielServer.js.map