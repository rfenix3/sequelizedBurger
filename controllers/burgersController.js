var express = require('express');
var db = require('../models');
var moment = require('moment');
var router = express.Router();
var path = require('path');

router.get('/', function (req,res) {

    db.Burger.findAll({}).then (function(data){
       console.log(data);
        res.render('index', {burgers: data});
    });
});

router.post('/burger/eat/:id', function(req, res) {
    var idVal = parseInt(req.params.id);
    console.log(idVal);

    db.Burger.update({
        devoured: true,
    }, {
        where: {
            id: {
                $eq: idVal
            }
        }
    }).then(function(data){
        console.log('update')
        res.redirect('/')
    });
});

router.post('/burger/add', function (req, res) {
    var myObj = {
        name: req.body.burger_name,
        date: moment().format("YYYY-MM-DD HH:mm:ss")
    };
    console.log(myObj);

    db.Burger.create({
        burger_name: myObj.name,
        myDate: myObj.date
    }).then(function(){
        res.redirect('/');
    });
});

module.exports = router;

