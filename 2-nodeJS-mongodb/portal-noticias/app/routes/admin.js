/**
 * Created by anselmo on 28/01/17.
 */
module.exports = function (aplication) {
    aplication.get('/formulario_inclusao_noticias', function (request, response) {
        aplication.app.controllers.admin.formulario_inclusao_noticia(aplication, request, response);
    });

    aplication.post('/noticia/salvar', function (request, response) {
        aplication.app.controllers.admin.salvar_noticia(aplication, request, response);
    });
}
