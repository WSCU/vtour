var express = require('express');

module.exports = function(app) {
    app.use('/static', express.static('./static')).
        use('/images', express.static('./img')).
        use('static', express.static('./static'));

    app.get('/', function(req, res) {
        res.render('index');
    });

    var menus = require('./controllers/menu_controller.js');
    app.get('/menu', menus.getMenu);

    var images = require('./controllers/images_controller.js');
    app.get('/images', images.getImages);
    app.get('/image', images.getImage);

    var maps = require('./controllers/maps_controller.js');
    app.get('/map/circle', maps.getCircle);
    app.get('/map/circles', maps.getCirlces);
    app.get('/map/marker', maps.getMarker);


    //Error Handling
    app.get('*', function(req, res, next) {
        var err = new Error();
        err.status = 404;
        next(err);
    });

    app.use(function(err, req, res, next) {
        if(err.status !== 404) {
            return next();
        }
        res.send("404");
    });
    //End error handling
};

