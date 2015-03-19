var mongoose = require('mongoose'),
    db = mongoose.connect('mongodb://localhost/vtour');

require('./node/models/menuitem_m.js');

var Menu = mongoose.model('Menu'),
    MenuItem = mongoose.model('MenuItem');

Menu.remove().exec(function() {
    var menu = new Menu({name: 'main', text: "Main Menu"});
    for(var i = 0; i < 10; i++) {
        menu.items.push(new MenuItem({text: ""+i,
                                      href: "#"+i }));
    }
    menu.save();
});
