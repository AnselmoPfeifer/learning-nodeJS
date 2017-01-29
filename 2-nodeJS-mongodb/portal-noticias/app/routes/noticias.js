/**
 * Created by anselmo on 28/01/17.
 */

module.exports = function(app) {
    app.get('/noticias', function(req, res) {
        var conection = app.config.conectionDb();
        conection.query('select * from noticias', function(error, result) {
            res.render('noticias/noticias', { noticias: result });
        });
    });

};
