/**
 * Created by anselmo on 28/01/17.
 */

module.exports = function(aplication) {

    aplication.get('/noticias', function(req, res) {

        var connection = aplication.config.conectionDb();
        var noticiasModel = aplication.app.models.noticias;

        noticiasModel.getNoticias(connection, function(error, result) {
            res.render('noticias/noticias', { noticias: result });
        });
    });
};
