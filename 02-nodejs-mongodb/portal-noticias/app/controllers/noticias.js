/**
 * Created by anselmo on 29/01/17.
 */

module.exports.noticias = function (aplication, request, response) {
    var connection = aplication.config.connectionDb();
    var noticiasModel = new aplication.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function(error, result) {
        response.render('noticias/noticias', { noticias: result });
    });
}

module.exports.noticia = function (aplication, request, response) {
    var connection = aplication.config.connectionDb();
    var noticiasModel = new aplication.app.models.NoticiasDAO(connection);
    var id_noticia = request.query;

    noticiasModel.getNoticia(id_noticia, function (error, result) {
        response.render('noticias/noticia', { noticia: result });
    });
}