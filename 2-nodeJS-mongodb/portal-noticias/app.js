/**
 * Created by anselmo on 28/01/17.
 */
var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);

var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaFormularioNoticias = require('./app/routes/formulario_inclusao_noticias');
rotaFormularioNoticias(app);

var rotaTecnologia = require('./app/routes/tecnologia');
rotaTecnologia(app)

app.listen(3000, function () {
    console.log('Server com express!')
})