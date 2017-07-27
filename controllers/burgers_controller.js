const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post('/', function(req, res) {
    burger.create([], [],
        function() {
            res.redirect('/');
        });
});

router.put('/:id', function(req, res) {
    let condition = "id = " + req.params.id;

    console.log(req.body);
    console.log('condition', condition);

    burger.update({devoured:req.body.devour},
        condition,
        function() {
            res.redirect('/');
        });
});

module.exports = router;