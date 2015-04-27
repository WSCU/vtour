var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MapMarker = new Schema({
    name: String,
    lat: Number,
    lon: Number,
    icon: Image,
}, {_id: true});

var MapCircle = new Schema({
    name: String,
    lat: Number,
    lon: Number,
    radius: Number,
    color: String
} {_id: true});

mongoose.model('MapMarker', MapMarker);
mongoose.model('MapCircle', MapCircle);
