const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post('/', function(req, res) {
    let burgerName = req.body.burger_name;

    burger.create(burgerName, function() {
            res.redirect('/');
        });
});

router.put('/:id', function(req, res) {
    let burgerID = req.params.id;
    let eatenBool = req.body.devour;

    burger.update(eatenBool, burgerID, function() {
            res.redirect('/');
        });
});

module.exports = router;