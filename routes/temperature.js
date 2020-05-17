var express = require('express');
var router = express.Router();
var temperature = require('../controllers/tmpController.js')

router.get('/', function(req, res){
    let response = temperature.get_all_temperatures();
    res.send(response);
})

router.post('/', function(req, res, next) {
    let deviceId = req.query.deviceId;
    let value = req.query.temperature;
    let success = temperature.post_temperature_reading(deviceId, value)
    if (success)
        res.send("updated successfully");
});

module.exports = router;
