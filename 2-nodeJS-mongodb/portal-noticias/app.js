/**
 * Created by anselmo on 28/01/17.
 */
var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias')(app);

var rotaHome = require('./app/routes/home')(app);

var rotaFormularioNoticias = require('./app/routes/formulario_inclusao_noticias')(app);

var rotaTecnologia = require('./app/routes/tecnologia')(app)

app.listen(3000, function() {
    console.log('Server com express!')
    if app == 1 {
        console.console.log();
    }
})

// TODO fazer mais
