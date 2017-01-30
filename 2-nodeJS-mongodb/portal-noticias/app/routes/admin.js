/**
 * Created by anselmo on 28/01/17.
 */
module.exports = function (aplication) {
    aplication.get('/formulario_inclusao_noticias', function (request, response) {
        response.render('admin/form_add_noticia', {validacao: {}, noticia: {}});
    });

    aplication.post('/noticia/salvar', function (request, response) {
        var noticia = request.body;

        request.assert('titulo', 'O titulo é obrigatorio!').notEmpty();
        request.assert('resumo', 'O titulo é obrigatorio!').notEmpty();
        request.assert('resumo', 'O resumo deve ter entre 10 e 100 caracteres!').len(10,100);
        request.assert('autor', 'O autor é obrigatorio!').notEmpty();
        request.assert('data_noticia', 'A data é obrigatorio!').notEmpty().isDate({format: 'YYYY/MM/DD'});
        request.assert('noticia', 'A noticia é obrigatorio!').notEmpty();

        var errors = request.validationErrors();
        if (errors) {
            response.render('admin/form_add_noticia', {validacao: errors, noticia: noticia});
            return;
        }

        var connection = aplication.config.conectionDb();
        var noticiasModel = new aplication.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result) {
            //response.render('noticias/noticias', { noticias: result });
            response.redirect('/noticias')
        });

    });

}
