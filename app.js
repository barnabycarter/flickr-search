
/**
 * Module dependencies.
 */

var express = require('express')

var results = require('./routes/results.js');
var search = require('./routes/search.js');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hbs');
  app.set('view options', { layout: false });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', search.form);

app.post('/results', results.panda);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
