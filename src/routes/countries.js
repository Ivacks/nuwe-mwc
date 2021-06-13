import Country from "../models/country";
import * as bodyparser from "express";
const app = require('express').application;

app.use( bodyparser.json());


app.get('/countries', function (req, res){
    Country.find({}, function (err, countries){
        if(err) {
            res.send('Error, no se encuentran países');
        }
        res.json(countries);
    });
});
