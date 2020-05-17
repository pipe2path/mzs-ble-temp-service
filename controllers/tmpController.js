const Redis = require("ioredis");
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';

const redis = new Redis({
    port: '27539',
    host: 'ec2-3-212-154-35.compute-1.amazonaws.com',
    username: 'h',
    password: 'pcf8f2a256aae98414c8137057922ca2a0c81b5547c712a6f86d097b092567551',
});

exports.get_all_temperatures = function(){
    return 'All Temperatures';
}

exports.post_temperature_reading = function(deviceId, value){
    let success = false;

    redis.set(deviceId, value);

    return(success)
}
