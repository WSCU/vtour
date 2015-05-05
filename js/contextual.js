$(function () {
    if (location.hash !== "") {
        $("#start").removeClass("show");
    }
    $("#start").find("a").on("click", function () {
        $("#start").removeClass("show");
        $(this).off("click");
    });

    /**
     * Creates an instance of a Location Item
     * @constructor
     * @this {Navigation}
     * @param {string} tag The location tag of the navigation item (should be in form # + location, i.e #hurst
     * @param {string} name The name of the navigation item corresponding to div id to be filled
     * @param {string} locationType Type of location, i.e. "academic", etc
     * @param {string} description The description of the current location
     * @param {Boolean} onCampus If location is on campus or off campus
     */
    function Location(tag, name, locationType, description, onCampus) {
        this.tag = tag;
        this.name = name;
        this.locationType = locationType;
        this.description = description;
        this.onCampus = onCampus;
    }

    /**
     * Location object instances
     */
    var taylor = new Location("#taylor", "Taylor Hall", "academic",
        "Home of administrative offices, classrooms, faculty offices, computer labs, as well as an " +
        "auditorium and theater.", true);
    var quigley = new Location("#quigley", "Quigley Hall", "academic",
        "Home of the Music and Art departments", true);
    var hurst = new Location("#hurst", "Hurst Hall", "academic",
        "Home of Science and Mathematics departments", true);
    var kelley = new Location("#kelley", "Kelley Hall", "academic",
        "Home of Social Sciences and Environment & Sustainability programs", true);
    var library = new Location("#library", "Leslie J. Savage Library", "studentlife",
        "The research hub for campus and a great study spot", true);
    var universitycenter = new Location("#universitycenter", "University Center", "studentlife",
        "The hub of student life on campus", true);
    var mountaineerbowl = new Location("#mountaineerbowl", "Mountaineer Bowl", "athletic",
        "The world's highest collegiate football stadium", true);
    var telluride = new Location("#telluride", "Telluride", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var taylorcanyon = new Location("#tc", "Taylor Canyon", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var crestedbutte = new Location("#cb", "Crested Butte", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var monarchmountain = new Location("#mm", "Monarch Mountain", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var taylorreservoir = new Location("#tr", "Taylor Reservoir", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var hartmanrocks = new Location("#hr", "Hartman Rocks", "recreation", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var cbmr = new Location("#cbmr", "Crested Butte Mountain Resort", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var artscenter = new Location("#artscenter", "Gunnison Arts Center", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var wmountain = new Location("#wmountain", "W Mountain", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var pathway = new Location('#pathway', "Academic Quad", "walkway", "Pathway to Hurst and Quiqly", true);
    var pathway2 = new Location("#pathway2", "Kelley Steps", "walkway", "Pathway to Taylor", true);

    var locations = [taylor, pathway, pathway2, quigley, hurst, kelley, library, universitycenter, mountaineerbowl, telluride,
        taylorcanyon, crestedbutte, monarchmountain, taylorreservoir, hartmanrocks, cbmr, artscenter, wmountain];

    var currentLocation;
    var previousLocation;

    function getLocation(locationTag) {
        $('.caption_wrapper').hide();
        var inner_html = "";
        for (var i in locations) {
            if (locationTag === locations[i].tag) {
                inner_html = "<div class='caption_wrapper'><div class='caption'><div id='caption_title'>" +
                    locations[i].name + "</div><div id='caption_text' class='description'>" + locations[i].description +
                    "</div></div></div>";
                $('#text_overlay').html(inner_html);
                $('.description').delay(5000).slideUp("slow");
                $("#caption_title").click(function(){
                    $(".description").slideToggle("slow");
                });
                if (currentLocation && currentLocation.onCampus) {
                    previousLocation = currentLocation;
                }
                currentLocation = locations[i];
                break;
            }
        }
    }

    /**
     * Creates an instance of a Navigation Item
     * @constructor
     * @this {Navigation}
     * @param {string} tag The location tag of the navigation item (should be in form # + location, i.e #hurst
     * @param {string} styleClass The css style class name (no spaces)
     * @param {string} ttip Tool tip
     * @param {string} destination The hash location destination (i.e. "#hurst)
     * @param {string} direction The direction of navigation arrow (i.e. "back", "forward", "right", "left")
     * @param {number} x x coordinate in pixels (for on campus)
     * @param {number} y y coordinate in pixels (for on campus)
     */
    function Navigation(tag, styleClass, ttip, dest, direction, x, y) {
        this.tag = tag;
        this.styleClass = styleClass;
        this.ttip = ttip;
        this.dest = dest;
        this.direction = direction;
        this.x = x;
        this.y = y;
    }

    /**
     * Navigation object instances
     */
    var taylor_to_pathway = new Navigation("#taylor", "taylor_to_pathway", "to pathway", "#pathway", "forward", 47, 10); //
    var pathway_to_hurst = new Navigation("#pathway", "pathway_to_hurst", "to Hurst", "#hurst", "forward", 47, 12);
    var pathway_to_taylor = new Navigation("#pathway", "pathway_to_taylor", "back to Taylor", "#taylor", "back", 50, 2); //
    var pathway_to_quigly = new Navigation("#pathway", "pathway_to_quigly", "to Quigly", "#quigley", "right", 58, 12);
    var hurst_to_pathway = new Navigation("#hurst", "hurst_to_pathway", "back to pathway", "#pathway", "back", 50, 2);
    var hurst_to_kelley = new Navigation("#hurst", "hurst_to_kelley", "to Kelley Hall", "#kelley", "left", 42, 12);
    var quigly_to_pathway = new Navigation("#quigley", "quigly_to_pathway", "back to pathway", "#pathway", "left", 42, 12);
    var kelley_to_hurst = new Navigation("#kelley", "kelley_to_hurst", "to Hurst Hall", "#hurst", "right", 58, 12);
    var kelley_to_pathway2 = new Navigation("#kelley", "kelley_to_pathway2", "to pathway", "#pathway2", "left", 42, 12);
    var pathway2_to_library = new Navigation("#pathway2", "pathway2_to_library", "to Library", "#library", "forward", 47, 12);
    var pathway2_to_kelley = new Navigation("#pathway2", "pathway2_to_kelley", "to Kelley Hall", "#kelley", "back", 50, 2);
    var library_to_pathway2 = new Navigation("#library", "library_to_pathway2", "to pathway", "#pathway2", "back", 50, 2);
    var library_to_universitycenter = new Navigation("#library", "library_to_universitycenter", "to University Center", "#universitycenter", "forward", 47, 12);
    var universitycenter_to_library = new Navigation("#universitycenter", "universitycenter_to_library", "to Library", "#library", "right", 58, 12);
    var universitycenter_to_mountaineerbowl = new Navigation("#universitycenter", "universitycenter_to_mountaineerbowl", "to Mountaineer Bowl", "#mountaineerbowl", "left", 42, 12);
    var mountaineerbowl_to_universitycenter = new Navigation("#mountaineerbowl", "mountaineerbowl_to_universitycenter", "to University Center", "#universitycenter", "right", 58, 12);

    var cbmr_to_telluride = new Navigation("#cbmr", "cbmr_to_telluride", "to Telluride", "#telluride", "right", 800, 130);
    var telluride_to_cbmr = new Navigation("#telluride", "telluride_to_cbmr", "to CBMR", "#cbmr", "left");
    var telluride_to_cb = new Navigation("#telluride", "telluride_to_cb", "to Crested Butte", "#cb", "right");
    var cb_to_telluride = new Navigation("#cb", "cb_to_telluride", "to Telluride", "#telluride", "left");
    var cb_to_mm = new Navigation("#cb", "cb_to_mm", "to Monarch Mountain", "#mm", "right");
    var mm_to_cb = new Navigation("#mm", "mm_to_cb", "to Crested Butte", "#cb", "left");
    var mm_to_tr = new Navigation("#mm", "mm_to_tr", "to Taylor Resevoir", "#tr", "right");
    var tr_to_mm = new Navigation("#tr", "tr_to_mm", "to Monarch Mountain", "#mm", "left");
    var tr_to_hr = new Navigation("#tr", "tr_to_hr", "to Hartman's Rocks", "#hr", "right");
    var hr_to_tr = new Navigation("#hr", "hr_to_tr", "to Taylor Resevoir", "#tr", "left");
    var hr_to_tc = new Navigation("#hr", "hr_to_tc", "to Taylor Canyon", "#tc", "right");
    var tc_to_hr = new Navigation("#tc", "tc_to_hr", "to Hartman's Rocks", "#hr", "left");
    var tc_to_wmountain = new Navigation("#tc", "tc_to_wmountain", "to W Mountain", "#wmountain", "right");
    var wmountain_to_tc = new Navigation("#wmountain", "wmountain_to_tc", "to Taylor Canyon", "#tc", "left");
    var wmountain_to_artscenter = new Navigation("#wmountain", "wmountain_to_artscenter", "to Arts Center", "#artscenter", "right");
    var artscenter_to_wmountain = new Navigation("#artscenter", "artscenter_to_wmountain", "to W Mountain", "#wmountain", "left");
    var artscenter_to_cbmr = new Navigation("#artscenter", "artscenter_to_cbmr", "to CBMR", "#cbmr", "right");
    var cbmr_to_artscenter = new Navigation("#cbmr", "cbmr_to_artscenter", "to Arts Center", "#artscenter", "left");

    var navs = [taylor_to_pathway, pathway_to_hurst, pathway_to_taylor, pathway_to_quigly, hurst_to_pathway,
        hurst_to_kelley, quigly_to_pathway, kelley_to_hurst, kelley_to_pathway2, pathway2_to_library,
        pathway2_to_kelley, library_to_pathway2, library_to_universitycenter, universitycenter_to_library,
        universitycenter_to_mountaineerbowl, mountaineerbowl_to_universitycenter, cbmr_to_telluride, telluride_to_cbmr,
        telluride_to_cb, cb_to_telluride, cb_to_mm, mm_to_cb, mm_to_tr, tr_to_mm, tr_to_hr, hr_to_tr, hr_to_tc, tc_to_hr,
        tc_to_wmountain, wmountain_to_tc, artscenter_to_wmountain, artscenter_to_cbmr, cbmr_to_artscenter, wmountain_to_artscenter];

    /**
     *  Render all navigation items at the current location
     * @param {string} locationTag Location tag, should be in form "#" + location, i.e. "#hurst"
     */
    function getNavs(locationTag) {
        $('.tipsy:last').remove();
        var inner_html = "";
        var items = [];
        for (var i in navs) {
            if (currentLocation.onCampus) {
                if (navs[i].tag === locationTag) {
                    inner_html += "<button class='map_button'>Map</button>" +
                        "<button class='switch_button' onclick=javascript:window.location.hash='#cb'>Go Off Campus</button>" +
                        "<button class='restart_button' onclick=javascript:window.location=''>Restart Tour</button>" +
                        "<img onclick=javascript:window.location.hash='" + navs[i].dest + "' class='" +
                        navs[i].styleClass + " arrow' src='imgs/nav_arrows/" + navs[i].direction + "_white.png'" +
                        "onmouseover=" + "this.src='imgs/nav_arrows/" + navs[i].direction + "_hover.png'" +
                        " onmouseout=" + "this.src='imgs/nav_arrows/" + navs[i].direction + "_white.png' " +
                        "title='" + navs[i].ttip + "' />";
                    items.push(navs[i].styleClass);
                }
                $("#navigation").html(inner_html);
                $(".arrow").tipsy({gravity: 's', fade: true, html: true});
                for (var i in items) {
                    for (var j in navs) {
                        if (items[i] === navs[j].styleClass) {
                            $("." + navs[j].styleClass).css({bottom: navs[j].y + "%", "left": navs[j].x + "%"});
                        }
                    }
                }
            }
            else {
                if (navs[i].tag === locationTag) {
                    inner_html += "<button class='switch_button' onclick=javascript:window.location.hash='"+previousLocation.tag+"'>Go On Campus</button><img onclick=javascript:window.location.hash='" + navs[i].dest + "' class='" +
                        navs[i].direction + "_offcampus arrow' src='imgs/nav_arrows/" + navs[i].direction + "_offcampus.png'" +
                        "onmouseover=" + "this.src='imgs/nav_arrows/" + navs[i].direction + "_offcampus_hover.png'" +
                        " onmouseout=" + "this.src='imgs/nav_arrows/" + navs[i].direction + "_offcampus.png' " +
                        "title='" + navs[i].ttip + "' />";
                }
                $("#navigation").html(inner_html);
                $(".arrow").tipsy({gravity: 's', fade: true, html: true});
            }
            $(".map_button").click(function(){
                $(".map").animate({width:'toggle'}, window.innerWidth*0.2);
            });
        }
    }

    /**
     * Creates an instance of a Hotspot
     * @constructor
     * @this {Hspot}
     * @param {string} tag The location tag of the hotspot (should be in form # + location, i.e #hurst
     * @param {string} styleClass name of css class (no spaces)
    <thwaydiv class="menu">
      <div class="wrap">
        <div class="blue menu-container">
          <ul id="drilldown-1">
          </ul>
        </div>
      </div>
    </div>
     * @param {string} ttip Tooltip for hotspot
     * @param {string} dest The destination url for hotspot
     * @param {Number} x The x coordinate of the hotspot (in pixels)
     * @param {Number} y The y coordinate of the hotspot (in pixels)
     */
    function Hspot(tag, styleClass, ttip, dest, x, y) {
        this.tag = tag;
        this.styleClass = styleClass;
        this.ttip = ttip;
        this.dest = dest;
        this.x = x;
        this.y = y;
    }

    /**
     * Hspot object instances
     */
    var taylor_hotspot = new Hspot("#taylor", "taylor_panorama_hs", "view Panorama", "panoramas/taylor_panorama/Taylor_Panorama.html", 75, 75);
    var hotspots = [taylor_hotspot];

    /**
     * Render all hotspots at the current location
     * @param {string} locationTag Location tag, should be in form "#" + location, i.e. "#Hurst"
     */
    function getHspots(locationTag) {
        $('.tipsy:last').remove();
        var inner_html = "";
        var items = [];
        for (var i in hotspots) {
            if (hotspots[i].tag === locationTag) {
                inner_html += "<a href=" + hotspots[i].dest + " " + "target='_blank'><img class='" +
                    hotspots[i].styleClass + " hotspot' src='imgs/logo_hotspot.png'" +
                    "onmouseover=" + "this.src='imgs/logo_hotspot_hover.png'" +
                    " onmouseout=" + "this.src='imgs/logo_hotspot.png' " +
                    "title='" + hotspots[i].ttip + "' /></a>";
                items.push(hotspots[i].styleClass);
            }
            $("#hotspots").html(inner_html);
            $(".hotspot").tipsy({gravity: 'sw', fade: true, html: true});
            for (var i in items) {
                for (var j in hotspots) {
                    if (items[i] === hotspots[j].styleClass) {
                        $("." + hotspots[j].styleClass).css({bottom: hotspots[j].y + "%", "left": hotspots[j].x + "%"});
                    }
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

    /***
     * Functions above requires the location tag passed in to be # + location tag name. (i.e "#hurst")
     */
    $(window).on('hashchange', function () {
        getImage(location.hash);
        getLocation(location.hash);
        getNavs(location.hash);
        getHspots(location.hash);
        getCIs(location.hash);
    });

    if(window.location.hash) {
        $(window).trigger('hashchange');
    }
});
