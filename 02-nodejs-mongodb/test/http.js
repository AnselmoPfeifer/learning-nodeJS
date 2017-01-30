/**
 * Created by anselmo on 28/01/17.
 */

var http = require('http');

var server = http.createServer(function (req, res) {
    res.end('<html>' +
            '<head>' +
                '<title>Teste HTTP</title>' +
            '</head>' +
            '<body>' +
            '   <h1>Teste HTTP</h1>' +
            '</body>' +
        '</html>');
})

server.listen(3000);