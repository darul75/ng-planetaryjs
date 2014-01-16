var path = require('path');
var express = require('express');
var fs = require('fs');

var app = express();

app.configure(function(){
  //app.set('port', process.env.PORT || 4000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');  
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());  
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.static(path.join(__dirname, 'public')));
});


app.get('/demo', function(req, res){ 
    res.render('planetarystats');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    
});