var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    db = mongoose.connect('mongodb://localhost/vtour');

require('./node/models/place_m.js');
require('./node/models/menuitem_m.js');

var app = express();
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./node/routes.js')(app);
app.listen(80);
