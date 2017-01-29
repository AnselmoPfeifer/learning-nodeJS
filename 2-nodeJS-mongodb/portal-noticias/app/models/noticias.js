/**
 * Created by anselmo on 29/01/17.
 */

module.exports = function () {
    // Busca moticias
    this.getNoticias = function(connection, callback) {
        connection.query('select id_noticia, titulo, data_criacao from noticias', callback);
    };

    // Busca moticia especifica
    this.getNoticia = function (connection, callback) {
        connection.query('select * from noticias where id_noticia = 1', callback);
    }
    
    this.salvarNoticia = function (noticia, connection, callback) {
        connection.query('insert into noticias set ?', noticia, callback);
    }
    return this;
};