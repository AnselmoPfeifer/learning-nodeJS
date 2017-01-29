/**
 * Created by anselmo on 28/01/17.
 */

// module.exports = function (app) {
//     app.get('/noticias', function (req, res) {
//         res.render('noticias/noticias');
//     });
// }

module.exports = function (app) {
    app.get('/noticias', function (req, res) {
        var mysql = require('mysql');
        var conection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123',
            database: 'curso_nodejs'
        });

        conection.query('select * from noticias', function (error, result){
            // retorna um json
            //res.send(result);

            // retorna um json e na view (ejs)
            res.render('noticias/noticias', {noticias: result});
        });
    });

};