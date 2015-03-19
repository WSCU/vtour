var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Menu = new Schema({
    name: String,
    text: String,
    items: [MenuItem]
}, {_id: true});

var MenuItem = new Schema({
    text: String,
    href: String,
    sub: [MenuItem]
}, {_id: true});

mongoose.model('Menu', Menu);
mongoose.model('MenuItem', MenuItem);

