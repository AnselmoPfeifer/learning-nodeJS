/**
 * Created by anselmo on 28/01/17.
 */

module.exports = function(aplication) {

    aplication.get('/noticias', function(req, res) {

        var connection = aplication.config.conectionDb();
        var noticiasModel = new aplication.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function(error, result) {
            res.render('noticias/noticias', { noticias: result });
        });
    });

    aplication.get('/noticia', function(req, res) {

        var connection = aplication.config.conectionDb();
        var noticiasModel = new aplication.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia(function (error, result) {
            res.render('noticias/noticia', { noticia: result });
        });
    });
};
