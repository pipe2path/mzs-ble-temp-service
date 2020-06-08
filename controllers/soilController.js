const con = require('../common/database.js');
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';

exports.get_all_soil_readings = function(){
    let sql = "select * from soil order by date_time_stamp desc";
    return new Promise(function(resolve, reject){
        con.query(sql, function(err, result) {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
}

exports.post_soil_readings = function(id, soil){
    let datelocal = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() -
        ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');
    let sql = "insert soil (soil_moisture, date_time_stamp) values ('" + soil + "', '"  + datelocal + "')";
    con.query(sql, function(err, result){
        if (err) throw err;
    })
    return true;
}
