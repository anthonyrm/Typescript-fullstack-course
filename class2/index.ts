import * as express from "express";
import { Friend } from "./friend";

var matias = new Friend();
matias.name = 'matias';
matias.lastName = 'apellidos';
matias.isBestFriend = true;

var app = express();

app.get('/friend', function(req: express.Request, res: express.Response){
    res.send(matias);
});

app.listen(8000, function() {
    console.log("Running...");
});