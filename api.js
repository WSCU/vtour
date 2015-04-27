var images = [];
var hotspots = [];
var cis = [];
var navs = [];
var locations = [];

function Image(name, fname) {
    this.name = name;
    this.fname = fname;
}

function Hotspot(name, tag, x, y, text, image) {
    this.name = name;
    this.tag = tag;
    this.x = x;
    this.y = y;
    this.text = text;
    this.image = image;
}

function CarouselItem(name, tags, thumb, ttip, html) {
    this.name = name;
    this.tags = tags;
    this.thumb = thumb;
    this.ttip = ttip;
    this.html = html;
}

function Nav(name, image, color, ttip, dest, x, y) {
    this.name = name;
    this.image = image;
    this.color = color;
    this.ttip = ttip;
    this.dest = dest;
    this.x = x;
    this.y = y;
}

function Location(name, tag, mimage, lat, lng, campus, text) {
    this.name = name;
    this.tag = tag;
    this.mimage = mimage;
    this.lat = lat;
    this.lng = lng;
    this.campus = campus;
    this.text = text;
    this.hspots = getHspots(tag);
    this.navs = getNavs(tag);
    this.ci = getCis(tag);
}

function addLocation(loc) {
    locations[loc.name] = loc;
}

function addNav(nav) {
    navs[nav.name] = nav;
}

function addCI(ci) {
    cis[ci.name] = ci;
}

function addHotspot(hs) {
    hotspots[hs.name] = hs;
}

function addImage(image) {
    images[image.name] = image;
}

function getCis(tag) {
    res = []
    for (ci in cis) {
        if (ci.tag === tag) {
            res.push(ci)
        }
    }
    return res
}

function getImage(name) {
    for (image in images) {
        if (image.name === name) {
            return image
        }
    }
    return null
}

function getHspots(tag) {
    res = []
    for (hs in hotspots) {
        if (hs.tag === tag) {
            res.push(hs)
        }
    }
    return res
}

function getNavs(tag) {
    res = []
    for (nav in navs) {
        if (nav.tag === tag) {
            res.push(nav)
        }
    }
    return res
}

function getLocation(name) {
    for (loc in locations) {
        if (loc.name === name) {
            return loc
        }
    }
    return null
}
