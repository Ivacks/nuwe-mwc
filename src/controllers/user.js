import User from "../models/user";
import * as bodyparser from "express";
const app = require('express').application;

app.use( bodyparser.json());


app.get('/user', function (req, res){
    User.find({}, function (err, users){
        if(err) {
            res.send('Error, no se encuentran usuarios');
        }
        res.json(users);
    });
});

export const createUser = app.post('/user', function (req, res){
    const user = new User(req.body);
    user.save(function (err, user){
        res.json(user);
    });
});

export const updateUser = app.put('/user/:id', function (req, res){
    const conditions = { _id: req.params.id};

    user.update(conditions, req.body)
        .then(doc => {
            if (!doc) { return res.status(404).end();}
            return res.status(200).json(doc);
        })
        .catch(err => next(err));
});

export const deleteUser = app.delete('/user/:id', function (req,res){
    User
        .findByIdAndRemove(req.params.id)
        .exec()
        .then(doc =>{
            if (!doc) { return res.status(404).end}
        })
        .catch(err => next(err));
});