const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/api', function (req, res, next) {
    let allAttractions = {};

    let hotels = models.Hotel.findAll({include:[models.Place]});
    let activities = models.Activity.findAll();
    let restaurants = models.Restaurant.findAll();

    Promise.all([hotels, activities, restaurants]).then(function (values) {
        allAttractions.hotels = values[0];
        allAttractions.activities = values[1];
        allAttractions.restaurants = values[2];
        res.send(allAttractions);
    })
})

module.exports = router;