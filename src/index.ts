import express from "express";
import {URL} from "url";
import { engine } from 'express-handlebars';

const listenPort = process.env.PORT || 5000;
const validAbsURI = /^(?:(?:(?:https?):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;


express()
    .get("/", (request, response) => {
        let address = Object.keys(request.query)[0];
        if( address && address.match(validAbsURI) !== null ) {
            response.render('redirect', {redirectUrl: address});
        } else {
            response.render('home');
        }
    })
    .use(express.static('public'))
    .engine('handlebars', engine())
    .set('view engine', 'handlebars')
    .set('views', './views')
    .listen(listenPort, () => {
        console.log(`listening on ${listenPort}`);
    });