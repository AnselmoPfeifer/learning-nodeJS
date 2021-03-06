/**
 * Created by anselmo on 28/01/17.
 */
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidadtor = require('express-validator')
var app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidadtor());

consign()
    .include('app/routes')
    .then('config/connectionDb.js') // Necessario add a extensao do arquivo.
    .then('app/controllers')
    .then('app/models')
    .into(app)
module.exports = app;
