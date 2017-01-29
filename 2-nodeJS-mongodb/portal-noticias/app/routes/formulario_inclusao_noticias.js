/**
 * Created by anselmo on 28/01/17.
 */
module.exports = function (app) {
    app.get('/formulario_inclusao_noticias', function (req, res) {
        res.render('admin/form_add_noticia');
    });
}
