/**
 * Created by anselmo on 22/01/17.
 */

module.exports = function (){
    this.lista = function (connection, callback) {
        connection.query('select * from livros',callback);
    }
    return this;
}