/**
 * Created by anselmo on 28/01/17.
 */

// module.exports = function (app) {
//     app.get('/noticias', function (req, res) {
//         res.render('noticias/noticias');
//     });
// }

var dbConnection = require('../../config/conectionDb');

module.exports = function (app) {
    var conection = dbConnection();

    app.get('/noticias', function (req, res) {
        conection.query('select * from noticias', function (error, result){
            // retorna um json
            //res.send(result);

            // retorna um json e na view (ejs)
            res.render('noticias/noticias', {noticias: result});
        });
    });

};