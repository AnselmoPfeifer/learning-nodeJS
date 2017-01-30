/**
 * Created by anselmo on 28/01/17.
 */
module.exports = function (aplication) {
    aplication.get('/tecnologia', function (request, response) {
        aplication.app.controllers.tecnologia.tecnologia(aplication, request, response);
    });
};