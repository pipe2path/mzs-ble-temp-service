var express = require('express');
var router = express.Router();
var temperature = require('../controllers/tmpController.js')

router.get('/', function(req, res){
    res.setHeader('Access-Control-Allow-Origin','*');
    let temperatures = temperature.get_all_temperatures();
    temperatures.then(function(result){
        res.send(result);
    })
})

router.post('/', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    let id = req.query.id;
    let reading = req.query.reading;
    let success = temperature.post_temperature_reading(id, reading)
    if (success)
        res.send("updated successfully");
});

module.exports = router;
