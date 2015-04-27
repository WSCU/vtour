var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Image = new Schema({
    name: String,
    file: String,
    thumb: String,
    tags: [String]
}, {_id: true});

mongoose.model('Image', Image);
