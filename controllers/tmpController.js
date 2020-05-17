const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';

exports.get_all_temperatures = function(){
    return 'All Temperatures';
}

exports.post_temperature_reading = function(deviceId, value){
    let success = false;

    redis.set(deviceId, value);

    return(success)
}
