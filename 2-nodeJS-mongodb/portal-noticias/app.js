/**
 * Created by anselmo on 28/01/17.
 */

var app = require('./config/server');

app.get('/tecnologia', function (req, res) {
    res.render('sessao/tecnologia');
});

app.get('/formulario_inclusao_noticias', function (req, res) {
    res.render('admin/form_add_noticia');
});

app.get('/noticias', function (req, res) {
    res.render('noticias/noticias');
});

app.get('/', function (req, res) {
    res.render('home/index');
});

app.listen(3000, function () {
    console.log('Server com express!')
})