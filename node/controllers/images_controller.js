var mongoose = require('mongoose'), Image = mongoose.model('Image');

exports.getImage = function(req, res) {
    Image.findOne({name: req.query.name}).
        exec(function(err, image) {
        if (!err) {
            res.json(image);
        }
        else {
            res.json(404, {msg: 'Image:' + req.query.name + ' not found'});
        }
    });
};

exports.getImages = function(req, res) {
    var tag = req.query.tags ? req.query.tags : req.query.tag
    Image.find({tags: tag})
    .exec(function(err, images) {
        if (!err) {
            res.json(images);
        }
        else {
            res.json(404,{msg:'No images with tag '+req.query.tag+' found'});
        }
    });
};
