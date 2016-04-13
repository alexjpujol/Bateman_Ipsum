var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'jade');
app.set('views', './public/views');

app.get('/', function(req, res) {
  res.render("index")  
})


app.listen(process.env.PORT || 3000)