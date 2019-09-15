var express = require('express') 
var logger = require('morgan')
var bodyParser = require('body-parser') 

// create instance of express app
var app = express()

// set port number or use 5000 as default. 
var port = process.env.PORT || 5000

// we want to serve js and html in ejs
// ejs stands for embedded javascript 
app.set('view engine', 'ejs')

// we also want to send css, and images and other static files 
app.use(express.static('views'))
app.set('views', __dirname + '/views')

// give the server access to the user input
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(logger('dev'))

app.get('/', function(request, response) {
  response.render('home.ejs')
})

app.post('/', function(request, response) {
  // send back a page with the yelled  breakfast on it
  var breakfast = request.body.breakfast
  response.render('result.ejs', { data: breakfast })
})

app.listen(port, function() {
  console.log('Node JS listen on ' + port) 
})
