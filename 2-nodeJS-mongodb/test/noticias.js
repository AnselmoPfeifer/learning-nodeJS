/**
 * Created by anselmo on 28/01/17.
 */

/**
 * Created by anselmo on 28/01/17.
 */

var http = require('http');

var server = http.createServer(function (req, res) {
    var categoria = req.url;

    if (categoria == '/tecnologia'){
        res.end('<html><head><title>Categoria Tecnologia</title></head>' +
                    '<body><h1>Categoria Tecnologia</h1></body>' +
                '</html>');
    } else if (categoria == '/moda'){
        res.end('<html><head><title>Categoria Moda</title></head>' +
                    '<body><h1>Categoria Moda</h1></body>' +
                '</html>');
    } else if (categoria == '/beleza'){
        res.end('<html><head><title>Categoria Beleza</title></head>' +
            '<body><h1>Categoria Beleza</h1></body>' +
            '</html>');
    } else {
        res.end('<html><head><title>Porta de Noticias</title></head>' +
            '<body><h1>Porta de Noticias</h1></body>' +
            '</html>');
    }
})

server.listen(3000);