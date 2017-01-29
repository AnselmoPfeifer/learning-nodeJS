/**
 * Created by anselmo on 28/01/17.
 */
module.exports = function (aplication) {
    aplication.get('/formulario_inclusao_noticias', function (request, response) {
        response.render('admin/form_add_noticia');
    });

    aplication.post('/noticia/salvar', function (request, response) {
        var noticia = request.body;

        var connection = aplication.config.conectionDb();
        var noticiasModel = aplication.app.models.noticias;

        noticiasModel.salvarNoticia(noticia, connection, function(error, result) {
            //response.render('noticias/noticias', { noticias: result });
            response.redirect('/noticias')
        });

    });

}
