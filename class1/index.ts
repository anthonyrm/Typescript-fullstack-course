import * as express from "express";
import {message} from "./otroModulo";

var app = express();

app.get('/', function(req: express.Request, res: express.Response){
    res.send(message);
});

app.listen(8000, function() {
    console.log("Running...");
});