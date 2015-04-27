var mongoose = require('mongoose'),
    db = mongoose.connect('mongodb://localhost/vtour');

require('./node/models/menuitem_m.js');

var Menu = mongoose.model('Menu'),
    MenuItem = mongoose.model('MenuItem');

Menu.remove().exec(function() {
    var menu = new Menu({name: 'main', text: "Menu"});
    var mi = new MenuItem({text: 'hello'});
    menu.items.push(mi);
    for(var i = 0; i < 10; i++) {
        mi.items.push(new MenuItem({text: ""+i,
                                    icon: "fa fa-arrow",
                                    href: "#"+i }));
    }
    menu.save();
});
