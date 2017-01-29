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
        var noticiasModel = new aplication.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result) {
            //response.render('noticias/noticias', { noticias: result });
            response.redirect('/noticias')
        });

    });

}
