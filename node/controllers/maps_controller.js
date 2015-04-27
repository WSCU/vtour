var mongoose = require('mongoose'),
    Marker = mongoose.model('MapMarker'),
    Circle = mongoose.model('MapCircle');

exports.getCircle = function(req, res) {
    Circle.findOne({name: req.query.name})
    .exec(function(err, circle){
        if (!err) {
            res.json(circle);
        }
        else {
            res.json(404, {msg: 'Circle not found'});
        }
    });
};

exports.getCircles = function(req, res) {
    Circle.find()
    .exec(function(err, cirlces) {
        if (!err) {
            res.json(cirlces);
        }
        else {
            res.json(404, {msg: 'No circles found'});
        }
    });
};
