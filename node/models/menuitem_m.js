var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Menu = new Schema({
    name: String,
    text: String,
    icon: String,
    items: [MenuItem]
}, {_id: true});

var MenuItem = new Schema({
    text: String,
    icon: {type: String, default: "fa fa-arrow-right"},
    href: {type: String, default: "#"},
    target: {type: String, default: "location"},
    items: [MenuItem]
}, {_id: true});


mongoose.model('Menu', Menu);
mongoose.model('MenuItem', MenuItem);
