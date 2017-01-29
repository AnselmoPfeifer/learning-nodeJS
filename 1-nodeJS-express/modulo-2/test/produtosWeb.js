/**
 * Created by anselmo on 21/01/17.
 */

var http = require('http');

var server = http.createServer(function (request, response) {
    if(request.url == "/produtos") {
        response.end('<h1>Listando produtos</h1>')
        console.log('Listando produtos!');
    } else {
        response.end('<h1>Home</h1>')
        console.log('Home!');

    }
});

server.listen(3000);

console.log('Servidor rodando!');