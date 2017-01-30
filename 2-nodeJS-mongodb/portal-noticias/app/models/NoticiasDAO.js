/**
 * Created by anselmo on 29/01/17.
 */
function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this._connection.query('select id_noticia, titulo, data_criacao from noticias order by data_criacao desc', callback);
};

NoticiasDAO.prototype.getNoticia = function (callback) {
    this._connection.query('select * from noticias where id_noticia = 1', callback);
}

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    this._connection.query('insert into noticias set ?', noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function (callback) {
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback)
}

module.exports = function() {
    return NoticiasDAO;
};
