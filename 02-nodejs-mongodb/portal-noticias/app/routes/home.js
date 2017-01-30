/**
 * Created by anselmo on 28/01/17.
 */

module.exports = function (aplication) {
    aplication.get('/', function (request, response) {
        aplication.app.controllers.home.index(aplication, request, response);
    });
}
