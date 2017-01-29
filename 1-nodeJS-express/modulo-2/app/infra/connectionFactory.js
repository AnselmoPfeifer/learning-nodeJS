/**
 * Created by anselmo on 21/01/17.
 */

var mysql = require('mysql');

var connectMYSQL = function(){
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123',
        database:'loja_livros'
    });
};

module.exports = function(){
    console.log("express load me chamando");
    return connectMYSQL;
}