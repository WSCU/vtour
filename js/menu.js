var Menu = function(opts) {
    this.name = opts.name ? opts.name : 'main';
    this.text = opts.text ? opts.text : 'Menu';
    this.icon = opts.icon;
    this.items = opts.items;
    this.target = '';
};

var MenuItem = function(opts) {
    this.text = opts.text;
    this.icon = opts.icon ? opts.icon : '';
    this.target = opts.target ? opts.target : '';
    this.onclk = opts.onclick ? opts.onclick : '';
    this.rel = opts.rel ? opts.rel: '';
    this.items = opts.items ? opts.items : [];
};

function dispMenu(items) {
    var i;
    var inner = "";
    for (i in items) {
        var mi = items[i];
        inner += "<li><a href='"+mi.target+"'><i class='"+mi.icon+"'></i>&nbsp; "+mi.text+"</a>"
        if (mi.items.length > 0) {
            inner += "<ul>" + dispMenu(mi.items) + "</ul>";
        }
        inner += "</li>";
    }
    return inner;
}

function dispMainMenu() {
    console.log("hai");
    var inner = "";
    inner += "<li><a href='"+menu.target+"'><i class='"+menu.icon+"'></i>&nbsp; "+menu.text+"</a>"
    inner += "<ul>" + dispMenu(menu.items) + "</ul>";
    inner += "</li>";
    $("#drilldown-1").html(inner);
}

