/**
 * Created by anselmo on 29/01/17.
 */

module.exports.index = function (aplication, request, response) {

    var connection = aplication.config.connectionDb();
    var noticiasModel = new aplication.app.models.NoticiasDAO(connection);

    noticiasModel.get5UltimasNoticias(function(error, result) {
        console.log(result);
        response.render('home/index', { noticias: result });
    });
}