var express = require('express');
var router = express.Router();
var soil_reading = require('../controllers/soilController.js')

router.get('/', function(req, res){
    res.setHeader('Access-Control-Allow-Origin','*');
    let soil_readings = soil_reading.get_all_soil_readings();
    soil_readings.then(function(result){
        res.send(result);
    })
})

router.post('/', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    let id = req.query.id;
    let moisture = req.query.moisture;
    let success = soil_reading.post_soil_readings(id, moisture)
    if (success)
        res.send("updated successfully");
});

module.exports = router;
