/**
 * Created by anselmo on 28/01/17.
 */
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('home/index');
    });
}
