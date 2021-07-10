"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pAbgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
//import { type } from "os";
var pAbgabe;
(function (pAbgabe) {
    console.log("Starting server");
    let nutzerCollection;
    let rezeptCollection;
    let port = Number(process.env.PORT); //Holt den Port
    if (!port)
        port = 8100; //wenn kein Port vorhanden dann wird Port = 8100
    let databaseURL = "mongodb+srv://idaxe:now_its_reyn_time@denny-lang-gis.mfnfb.mongodb.net/GIS_Prüfungsabgabe?retryWrites=true&w=majority"; //mongodb://localhost:27017
    //mongodb+srv://idaxe:now_its_reyn_time@denny-lang-gis.mfnfb.mongodb.net/GIS_Prüfungsabgabe?retryWrites=true&w=majority
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
        rezeptCollection = mongoClient.db("GIS_Prüfungsabgabe").collection("Rezepte");
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
            if (url.pathname == "/loginUser") { ////user checken
                //let registeredUsers: Nutzer[] = await getUsers();
                let exists = await checkUser(url.query);
                console.log(await checkUser(url.query));
                if (exists == true) {
                    let jsonString = JSON.stringify(url.query);
                    console.log(jsonString);
                    _response.write(jsonString);
                }
                else {
                    _response.write("Nutzer existiert nicht!");
                }
            }
            else if (url.pathname == "/registerUser") { //user speichern
                //let registeredUsers: Nutzer[] = await getUsers();
                let exists = await checkUser(url.query);
                if (exists == false) {
                    let jsonString = JSON.stringify(url.query);
                    _response.write(jsonString);
                    console.log(url.query);
                    storeUser(url.query);
                }
                else {
                    _response.write("Nutzer existiert bereits!");
                }
            }
            else if (url.pathname == "/saveRecipe") {
                storeRecipe(url.query);
            }
            else if (url.pathname == "/getUserRecipes") {
                let userRecipes = await getUserRecipes(url.query);
                let jsonStringRezept = JSON.stringify(userRecipes);
                _response.write(jsonStringRezept);
            }
            else if (url.pathname == "/deleteRecipe") {
                deleteRecipe(url.query);
            }
            else if (url.pathname == "/updateRecipe") {
                let erfolg = await updateRecipe(url.query);
                if (erfolg == true) {
                    _response.write("Erfolgreiches Updaten");
                }
                else {
                    _response.write("Rezept existiert nicht!");
                }
            }
        }
        //_response.write(_request.url);  //gibt die URL aus
        console.log(_request.url);
        _response.end(); //beendet die Antwort
    }
    function storeUser(_nutzer) {
        nutzerCollection.insert(_nutzer);
    }
    function storeRecipe(_rezept) {
        rezeptCollection.insert(_rezept);
    }
    async function getUserRecipes(_nutzer) {
        console.log(_nutzer);
        console.log(_nutzer.creator);
        let recipes;
        recipes = await rezeptCollection.find({ creator: _nutzer.creator }).toArray();
        console.log(recipes);
        return recipes;
    }
    /*async function getUsers(): Promise<Nutzer[]> {
        let databaseUsers: Nutzer[];
        databaseUsers = await nutzerCollection.find().toArray();
        return databaseUsers;
    }*/
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
    function deleteRecipe(_nutzer) {
        rezeptCollection.findOneAndDelete({ recipeName: _nutzer.recipeName, creator: _nutzer.creator });
    }
    async function updateRecipe(_nutzer) {
        let exist;
        console.log(rezeptCollection.findOne({ recipeName: _nutzer.recipeName, creator: _nutzer.creator }));
        if (await rezeptCollection.findOne({ recipeName: _nutzer.recipeName, creator: _nutzer.creator }) == true) {
            rezeptCollection.replaceOne({ recipeName: _nutzer.recipeName, creator: _nutzer.creator }, _nutzer);
            exist = true;
        }
        else {
            exist = false;
        }
        return exist;
    }
})(pAbgabe = exports.pAbgabe || (exports.pAbgabe = {}));
//# sourceMappingURL=test.js.map