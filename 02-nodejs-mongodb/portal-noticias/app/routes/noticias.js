/**
 * Created by anselmo on 28/01/17.
 */

module.exports = function(aplication) {

    aplication.get('/noticias', function(request, response) {
        aplication.app.controllers.noticias.noticias(aplication, request, response)
    });

    aplication.get('/noticia', function(request, response) {
        aplication.app.controllers.noticias.noticia(aplication, request, response)
    });
};