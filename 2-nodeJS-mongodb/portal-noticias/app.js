/**
 * Created by anselmo on 28/01/17.
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('' +
        '<html>' +
            '<head><title>Porta de Noticias</title></head>' +
            '<body><h1>Porta de Noticias</h1></body>' +
        '</html>');
});

app.get('/tecnologia', function (req, res) {
    res.send(
        '<html>' +
            '<head><title>Categoria Tecnologia</title></head>' +
            '<body><h1>Categoria Tecnologia</h1></body>' +
        '</html>');
});

app.get('/moda', function (req, res) {
    res.send(
        '<html>' +
        '<head><title>Categoria Moda</title></head>' +
        '<body><h1>Categoria Moda</h1></body>' +
        '</html>');
});

app.get('/beleza', function (req, res) {
    res.send(
        '<html>' +
        '<head><title>Categoria Beleza</title></head>' +
        '<body><h1>Categoria Beleza</h1></body>' +
        '</html>');
});

app.listen(3000, function () {
    console.log('Server com express!')
})