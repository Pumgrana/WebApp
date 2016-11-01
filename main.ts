/// <reference path="./typings/index.d.ts" />

import * as express_graphql from "express-graphql";
import * as express from "express";
import {PumgranaAPI} from './historical';

let app : express.Application = express();

let API : PumgranaAPI = new PumgranaAPI("");

app.use(express.static('public')); 

app.use('/public', express.static(__dirname + '/public'));

app.listen(4000, () => console.log("Listening on localhost:4000/public"));