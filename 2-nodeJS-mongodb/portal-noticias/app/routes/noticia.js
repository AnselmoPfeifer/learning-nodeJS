/**
 * Created by anselmo on 29/01/17.
 */

module.exports = function(aplication) {
    aplication.get('/noticia', function(req, res) {

        var connection = aplication.config.conectionDb();
        var noticiasModel = aplication.app.models.noticias;

        noticiasModel.getNoticia(connection, function (error, result) {
            res.render('noticias/noticia', { noticia: result });
        });
    });
};
