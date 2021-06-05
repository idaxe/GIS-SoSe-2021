"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_2Server = void 0;
const Http = require("http");
const Url = require("url");
var P_3_2Server;
(function (P_3_2Server) {
    console.log("Starting server"); //Konsolenausgabe
    let port = Number(process.env.PORT); //Holt den Port
    if (!port)
        port = 8100; //wenn kein Port vorhanden dann wird Port = 8100
    let server = Http.createServer(); //erstellt (http) Server
    server.addListener("request", handleRequest); //Fügt Listener hinzu
    server.addListener("listening", handleListen); //Fügt Listener hinzu
    server.listen(port); //erstellt einen listener für diesen spezifischen Port  
    function handleListen() {
        console.log("Listening"); //Konsolenausgabe
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Konsolenausgabe
        _response.setHeader("content-type", "text/html; charset=utf-8"); //setzt/ersetzt werte des headers
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/html") {
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br/>");
                }
            }
            else if (url.pathname == "/json") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                console.log(url.query);
            }
        }
        //_response.write(_request.url);  //gibt die URL aus
        console.log(_request.url);
        _response.end(); //beendet die Antwort
    }
})(P_3_2Server = exports.P_3_2Server || (exports.P_3_2Server = {}));
//# sourceMappingURL=beispielServer.js.map