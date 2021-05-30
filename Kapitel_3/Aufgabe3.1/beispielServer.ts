import * as Http from "http";

export namespace P_3_1Server {
    console.log("Starting server"); //Konsolenausgabe
    let port: number = Number(process.env.PORT);    //Holt den Port
    if (!port)
        port = 8100;    //wenn kein Port vorhanden dann wird Port = 8100

    let server: Http.Server = Http.createServer();  //erstellt (http) Server
    server.addListener("request", handleRequest);   //Fügt Listener hinzu
    server.addListener("listening", handleListen);  //Fügt Listener hinzu
    server.listen(port);    //erstellt einen listener für diesen spezifischen Port  

    function handleListen(): void {
        console.log("Listening");   //Konsolenausgabe
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");   //Konsolenausgabe
        _response.setHeader("content-type", "text/html; charset=utf-8");    //setzt/ersetzt werte des headers
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);  //gibt die URL aus
        //console.log(_request.url);
        _response.end();    //beendet die Antwort
    }
}