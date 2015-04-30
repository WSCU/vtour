$(function () {
    /**
     * Lines 20-27 are only in place for demo purposes until we hook everything up
     * They can be removed at some point along with the "show" section in html
     * Anything that references #start and .show in cnstyle.css can also be removed at that time
     */
    if (location.hash !== "") {
        $("#start").removeClass("show");
    } 
    $("#start").find("a").on("click", function () {
        $("#start").removeClass("show");
        $(this).off("click");
    });

    /**
     * Creates an instance of a Navigation Item
     * @constructor
     * @this {Navigation}
     * @param {string} tag The location tag of the navigation item (should be in form # + location, i.e #hurst
     * @param {string} name The name of the navigation item corresponding to div id to be filled
     * @param {string} styleClass The CSS style to apply
     * @param {string} ttip Tool tip
     * @param {string} destination The hash location destination (i.e. "#hurst)
     * @param {string} direction The direction of navigation arrow (i.e. "back", "forward", "right", "left")
     * @param {string} fillColor Arrow fill color in form #CC0000
     */
    function Navigation(tag, name, styleClass, ttip, dest, direction, fillColor) {
        this.tag = tag;
        this.name = name;
        this.styleClass = styleClass;
        this.ttip = ttip;
        this.dest = dest;
        this.direction = direction;
        this.fillColor = fillColor;
    }

    /**
     * Navigation object instances
     */
    var forward_to_pathway = new Navigation("#taylor", "forward_to_pathway", "forward_arrow", "to pathway", "#pathway", "forward", "#CC0000");
    var forward_to_hurst = new Navigation("#pathway", "forward_to_hurst", "forward_arrow", "to Hurst", "#hurst", "forward", "#CC0000");
    var back_to_taylor = new Navigation("#pathway", "back_to_taylor", "back_arrow", "back to Taylor", "#taylor", "back", "#CC0000");
    var back_to_pathway = new Navigation("#hurst", "back_to_pathway", "back_arrow", "back to pathway", "#pathway", "back", "#CC0000");
    var navs = [forward_to_pathway, forward_to_hurst, back_to_taylor, back_to_pathway];

    /**
     * Creates an instance of a Hotspot
     * @constructor
     * @this {Hspot}
     * @param {string} tag The location tag of the hotspot (should be in form # + location, i.e #hurst
     * @param {string} name The name of the location corresponding to div id to be filled
     * @param {Number} xLoc The x coordinate of the hotspot.
     * @param {Number} yLoc The y coordinate of the hotspot.
     * @param {Number} width The width of the hotspot.
     * @param {Number} height The height of the hotspot.
     * @param {Number} ttipWidth The width of the tooltip.
     * @param {string} image The html code for image, i.e "<img src = . . ."
     * @param {string} position The position of the tooltip in relation to hspot, i.e. "top", "bottom", "left", "right"
     * @param {string} type of hotspot, i.e. "spot", "rect"
     */
    function Hspot(tag, name, xLoc, yLoc, width, height, text, ttipWidth, image, position, type) {
        this.tag = tag;
        this.name = name;
        this.xLoc = xLoc;
        this.yLoc = yLoc;
        this.width = width;
        this.height = height;
        this.text = text;
        this.ttipWidth = ttipWidth;
        this.image = image;
        this.position = position;
        this.type = type;
    }

    /**
     * Hspot object instances
     */
    var taylor_hotspot = new Hspot("#taylor", "taylor_hotspot", 70, 30, 15, 30, "Taylor Hall", 100, null, "bottom", "spot");
    var pathway_hotspot = new Hspot("#pathway", "pathway_hotspot", 70, 30, 8, 8, "some trees", 100, null, "left", "rect");
    var hurst_hotspot = new Hspot("#hurst", "hurst_hotspot", 50, 34, 30, 30, "This is Hurst, the building above all buildings. Check out the super cool things about it. So much Hurst.", 200, null, "bottom", "spot");
    var hotspots = [taylor_hotspot, pathway_hotspot, hurst_hotspot];

    /**
     * Render all hotspots at the current location
     * @param {string} locationTag Location tag, should be in form "#" + location, i.e. "#Hurst"
     */
    function getHspots(locationTag) {
        var inner_html = "";
        for (var i in hotspots) {
            if (hotspots[i].tag === locationTag) {
                var hotspotsDiv = "#hotspots";
                inner_html += "<div class='hs-spot-object' data-tint-color='#e52929' data-type=" + hotspots[i].type +
                    " data-x =" + hotspots[i].xLoc + " data-y =" + hotspots[i].yLoc + " data-width = " + hotspots[i].width + " data-height = " + hotspots[i].height + " data-popup-position = " + hotspots[i].position +
                    " data-visible = 'visible'" +
                    "data-tooltip-width =" + hotspots[i].ttipWidth + " data-tooltip-auto-width= 'false'> " + hotspots[i].text + " </div>";
            }
        }
        $(".icon-clear").css({'fill': "black", "color": "white"});
        $(hotspotsDiv).html(inner_html);
    }

    /**
     *  Render all navigation items at the current location
     * @param {string} locationTag Location tag, should be in form "#" + location, i.e. "#hurst"
     */
    function getNavs(locationTag) {
        var inner_html = "";
        for (var i in navs) {
            if (navs[i].tag === locationTag) {
                console.log("Found a nav: " + navs[i])
                var d = "M202.969,0l-99.438,130.824h52.213c8.629,89.9-25.768,176.225-120.373,206.957" +
                    "c121.697,0.34,190.641-99.896,213.967-206.957h53.072L202.969,0z";
                if (navs[i].direction === "forward") {
                    var flip = 0;
                    var viewBox = "'0 0 300 502'";
                }
                if (navs[i].direction === "back") {
                    flip = "transform='rotate(180 0 0)'";
                    viewBox = "'-300 -450 300 502'";
                }
                inner_html += "<svg " + navs[i].dest + "' class=' " + navs[i].styleClass + " icon-clear icon-clear2' version='1.1' x='0px' y='0px' " +
                    "width='500' height='200' viewBox= " + viewBox + " enable-background='new 200 0 200 502.174' xml:space='preserve'> " +
                    "<use xlink:href = '#" + navs[i].name + "' class = 'icon-shadow' transform = 'translate(6, 5)' /> " +
                    "<path onclick=javascript:window.location.hash='" + navs[i].dest + "' title='" + navs[i].ttip + "' class ='icon-clear2' id='" + navs[i].name + "' " + flip + " d=" + d + "/></svg>";
                var navigationDiv = "#navigation";
                $(navigationDiv).html(inner_html);
                $(".icon-clear").css({"fill": navs[i].fillColor});
                if (navs[i].direction === "back") {
                    $(".icon-clear2").tipsy({gravity: 'nw', fade: true});
                }
                if (navs[i].direction === "forward") {
                    $(".icon-clear2").tipsy({gravity: 'nw', fade: true});
                }
            }
        }
    }

    /**
     * Render main image for the current location
     * @param {string} locationTag Location tag, should be in form "#" + location, i.e. "#hurst"
     * locationTag should match image file, i.e "hurst_main.jpg" (substring removes "#")
     */
    function getImage(locationTag) {
        var mainImageDiv = "#main_image";
        $(mainImageDiv).html("<img src='imgs/" + locationTag.substring(1) + "_main.jpg'/>");
    }

    /***Currently using location.hash, this will likely be replaced with getLocation()?
     * Functions above requires the location tag passed in to be # + location tag name. (i.e "#hurst")
     */
    $(window).on('hashchange', function () {
        $('.tipsy:last').remove();
        getImage(location.hash);
        getHspots(location.hash);
        getNavs(location.hash);
        getCIs(location.hash);
        $("#wrapper").hotspot({"show_on": "mouseover", "responsive": true});

    });
});
