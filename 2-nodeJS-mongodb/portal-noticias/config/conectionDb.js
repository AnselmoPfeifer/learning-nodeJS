/**
 * Created by anselmo on 29/01/17.
 */
var mysql = require('mysql');

var conMysql = function() {
    console.log('Conectado com o banco!')
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123',
        database: 'curso_nodejs'
    });
}
module.exports = function() {
    return conMysql;
};
