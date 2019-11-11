var express = require('express')
var app = express()

//app.use(express.static('assets'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

//Launch listening server on port 8080
var server = app.listen(8080, function () {
    console.log('Server listening on port 8080!')
})
module.exports = server;
