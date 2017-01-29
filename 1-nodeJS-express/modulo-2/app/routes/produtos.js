/**
 * Created by anselmo on 21/01/17.
 */
module.exports = function (app) {

    app.get('/produtos', function(req,res){

        var connection = app.infra.connectionFactory();
        var produtosbanco = app.infra.produtosBanco

        produtosbanco.lista(connection, function (erros, resultados) {
            res.render('produtos/lista', {lista:resultados});
        });

        connection.end();
    });

}
