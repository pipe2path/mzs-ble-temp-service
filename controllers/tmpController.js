const con = require('../common/database.js');
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';

exports.get_all_temperatures = function(){
    let sql = "select * from reading";
    return new Promise(function(resolve, reject){
        con.query(sql, function(err, result) {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
}

exports.post_temperature_reading = function(id, reading){
    let datelocal = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() -
        ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');
    let sql = "insert reading (fahrenheit, datetimestamp) values ('" + reading + "', '"  + datelocal + "')";
    con.query(sql, function(err, result){
        if (err) throw err;
    })
    return true;
}
