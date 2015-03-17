var mongoose = require('mongoose'),
    Menu = mongoose.model('Menu'),
    MenuItem = mongoose.model('MenuItem');

exports.getMenu = function(req, res) {
    Menu.findOne({name: req.query.menuName})
    .exec(function(err, menu){
        if (!err) {
            res.json(menu);
        }
        else {
            res.json(404, {msg: 'Menu not found'});
        }
    });
};
