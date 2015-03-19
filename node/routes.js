var express = require('express');

module.exports = function(app) {
    app.use('/static', express.static('./static')).
        use('/images', express.static('./img'));

    app.get('/', function(req, res) {
        res.render('index');
    });
//    var pages = require('./controllers/page_controller.js');
//    app.get('/page', pages.getPage);

    var menus = require('./controllers/menu_controller.js');
    app.get('/menu', menus.getMenu);

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

