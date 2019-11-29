/**
 * Created by anselmo on 21/01/17.
 */
var app = require ('./config/express')();

app.listen(3000,function(){
    console.log("servidor rodando")
});