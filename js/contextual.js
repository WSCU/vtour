$(function () {

    var mapState = 1;

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
    function Location(tag, name, locationType, description, onCampus, x, y) {
        this.tag = tag;
        this.name = name;
        this.locationType = locationType;
        this.description = description;
        this.onCampus = onCampus;
        this.x = x;
        this.y = y;
    }

    /**
     * Location object instances
     */
    var taylor = new Location("#taylor", "Taylor Hall", "academic",
                              "Home of administrative offices, classrooms, faculty offices, computer labs, as well as an " +
                              "auditorium and theater.", true, 1905, 1200);
    var quigley = new Location("#quigley", "Quigley Hall", "academic",
                               "Home of the Music and Art departments", true, 2170, 1419);
    var hurst = new Location("#hurst", "Hurst Hall", "academic",
                             "Home of Science and Mathematics departments", true, 2422, 1227);
    var kelley = new Location("#kelley", "Kelley Hall", "academic",
                              "Home of Social Sciences and Environment & Sustainability programs", true, 2288, 1100);
    var library = new Location("#library", "Leslie J. Savage Library", "studentlife",
                               "The research hub for campus and a great study spot", true, 1918, 994);
    var universitycenter = new Location("#universitycenter", "University Center", "studentlife",
                                        "The hub of student life on campus", true, 1849, 887);
    var mountaineerbowl = new Location("#mountaineerbowl", "Mountaineer Bowl", "athletic",
                                       "The world's highest collegiate football stadium", true, 2023, 644);
    var telluride = new Location("#telluride", "Telluride", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var taylorcanyon = new Location("#tc", "Taylor Canyon", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var crestedbutte = new Location("#cb", "Crested Butte", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var monarchmountain = new Location("#mm", "Monarch Mountain", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var taylorreservoir = new Location("#tr", "Taylor Reservoir", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var hartmanrocks = new Location("#hr", "Hartman Rocks", "recreation", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var cbmr = new Location("#cbmr", "Crested Butte Mountain Resort", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var artscenter = new Location("#artscenter", "Gunnison Arts Center", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var wmountain = new Location("#wmountain", "W Mountain", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var elkmountains = new Location("#elkmountains", "Elk Mountains", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var sanjuan = new Location("#sanjuan", "San Juan Mountains", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var gunnison = new Location("#gunnison", "Gunnison", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var pathway = new Location('#pathway', "Academic Quad", "walkway", "Pathway to Hurst and Quiqly", true, 2041, 1232);
    var pathway2 = new Location("#pathway2", "Kelley Steps", "walkway", "Pathway to Taylor", true, 2083, 1076);

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
    var taylor_to_pathway = new Navigation("#taylor", "taylor_to_pathway", "to pathway", "#pathway", "forward", 47, 27); //
    var pathway_to_hurst = new Navigation("#pathway", "pathway_to_hurst", "to Hurst", "#hurst", "forward", 47, 27);
    var pathway_to_taylor = new Navigation("#pathway", "pathway_to_taylor", "back to Taylor", "#taylor", "back", 50, 17); //
    var pathway_to_quigly = new Navigation("#pathway", "pathway_to_quigly", "to Quigly", "#quigley", "right", 58, 27);
    var hurst_to_pathway = new Navigation("#hurst", "hurst_to_pathway", "back to pathway", "#pathway", "back", 50, 17);
    var hurst_to_kelley = new Navigation("#hurst", "hurst_to_kelley", "to Kelley Hall", "#kelley", "left", 42, 27);
    var quigly_to_pathway = new Navigation("#quigley", "quigly_to_pathway", "back to pathway", "#pathway", "left", 42, 27);
    var kelley_to_hurst = new Navigation("#kelley", "kelley_to_hurst", "to Hurst Hall", "#hurst", "right", 58, 27);
    var kelley_to_pathway2 = new Navigation("#kelley", "kelley_to_pathway2", "to pathway", "#pathway2", "left", 42, 27);
    var pathway2_to_library = new Navigation("#pathway2", "pathway2_to_library", "to Library", "#library", "forward", 47, 27);
    var pathway2_to_kelley = new Navigation("#pathway2", "pathway2_to_kelley", "to Kelley Hall", "#kelley", "back", 50, 17);
    var library_to_pathway2 = new Navigation("#library", "library_to_pathway2", "to pathway", "#pathway2", "back", 50, 17);
    var library_to_universitycenter = new Navigation("#library", "library_to_universitycenter", "to University Center", "#universitycenter", "forward", 47, 27);
    var universitycenter_to_library = new Navigation("#universitycenter", "universitycenter_to_library", "to Library", "#library", "right", 58, 27);
    var universitycenter_to_mountaineerbowl = new Navigation("#universitycenter", "universitycenter_to_mountaineerbowl", "to Mountaineer Bowl", "#mountaineerbowl", "left", 42, 27);
    var mountaineerbowl_to_universitycenter = new Navigation("#mountaineerbowl", "mountaineerbowl_to_universitycenter", "to University Center", "#universitycenter", "right", 58, 27);

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
    var cbmr_to_gunnison = new Navigation("#cbmr", "cbmr_to_gunnison", "to Gunnison", "#gunnison", "right", 800, 130);
    var gunnison_to_cbmr = new Navigation("#gunnison", "telluride_to_gunnison", "to CBMR", "#cbmr", "left");
    var gunnison_to_elkmountains = new Navigation("#gunnison", "gunnison_to_elkmountains", "to Elk Mountains", "#elkmountains", "right");
    var elkmountains_to_gunnison = new Navigation("#elkmountains", "elkmountains_to_gunnison", "to Gunnison", "#gunnison", "left");
    var elkmountains_to_hr = new Navigation("#elkmountains", "elkmountains_to_hr", "to Hartman's Rocks", "#hr", "right");
    var hr_to_elkmountains = new Navigation("#hr", "hr_to_elkmountains", "to Elk Mountains", "#elkmountains", "left");
    var hr_to_tc = new Navigation("#hr", "hr_to_tc", "to Taylor Canyon", "#tc", "right");
    var tc_to_hr = new Navigation("#tc", "tc_to_hr", "to Hartman's Rocks", "#hr", "left");
    var tc_to_sanjuan = new Navigation("#tc", "tc_to_sanjuan", "to San Juan Mountains", "#sanjuan", "right");
    var sanjuan_to_tc = new Navigation("#sanjuan", "sanjuan_to_tc", "to Taylor Canyon", "#tc", "left");
    var sanjuan_to_cbmr = new Navigation("#sanjuan", "sanjuan_to_cbmr", "to CBMR", "#cbmr", "right");
    var cbmr_to_sanjuan = new Navigation("#cbmr", "cbmr_to_sanjuan", "to San Juan Mountains", "#sanjuan", "left");

    var navs = [taylor_to_pathway, pathway_to_hurst, pathway_to_taylor, pathway_to_quigly, hurst_to_pathway,
        hurst_to_kelley, quigly_to_pathway, kelley_to_hurst, kelley_to_pathway2, pathway2_to_library,
    pathway2_to_kelley, library_to_pathway2, library_to_universitycenter, universitycenter_to_library,
    universitycenter_to_mountaineerbowl, mountaineerbowl_to_universitycenter, hr_to_tc, tc_to_hr,cbmr_to_gunnison,
    gunnison_to_cbmr, gunnison_to_elkmountains, elkmountains_to_gunnison, elkmountains_to_hr, hr_to_elkmountains,
    tc_to_sanjuan, sanjuan_to_tc, sanjuan_to_cbmr, cbmr_to_sanjuan];

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
                if(mapState === 0) {
                    $("#map").animate({width: window.innerWidth * 0.25, height: window.innerHeight * 0.38}, function(){
                        $('#map').animate({
                            scrollLeft: currentLocation.x - ($('#map').width() / 2),
                            scrollTop: currentLocation.y - ($('#map').height() / 2)
                        }, 1500, 'easeOutQuad');
                    });
                    mapState += 1;
                }
                else if(mapState === 1) {
                    $("#map").animate({width: window.innerWidth * 0.75, height: window.innerHeight * 0.85}, function() {
                        $('#map').animate({
                            scrollLeft: currentLocation.x - ($('#map').width() / 2),
                            scrollTop: currentLocation.y - ($('#map').height() / 2)
                        }, 1500, 'easeOutQuad');
                    });
                    $(".map_button").animate({right: window.innerWidth * 0.75});
                    mapState += 1;
                }
                else if(mapState === 2) {
                    $("#map").animate({width: '0', height: '0'});
                    $(".map_button").animate({right: window.innerWidth * 0.001});
                    mapState = 0;
                }
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
    var taylor_hotspot = new Hspot("#taylor", "taylor_panorama_hs", "view Panorama", "panoramas/taylor_panorama/Taylor_Panorama.html", 60, 75);
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

    /**********************************
     * Load static image map screen
     *********************************/

    var prevCampus = true;

    function loadMap(locationTag){
        for(var i in locations){
            if(locations[i].tag === locationTag){
                if(prevCampus != locations[i].onCampus) {
                    if (!locations[i].onCampus) {
                        document.getElementById("map").innerHTML = '<img class="mapImage" src="imgs/library_main.jpg">';
                    }
                    else{
                        document.getElementById("map").innerHTML = '<img class="mapImage" src="imgs/oncampusMap.jpg">';
                    }
                }
                $('.mapImage').load(function ()
                                    {
                                        console.log("IMAGE");
                                        $('#map').animate({scrollLeft: currentLocation.x - ($('#map').width() / 2), scrollTop: currentLocation.y - ($('#map').height() / 2)}, 1500, 'easeOutQuad');
                                    });
                                    prevCampus = locations[i].onCampus;
            }
        }
    }

    /***
     * Functions above requires the location tag passed in to be # + location tag name. (i.e "#hurst")
     */

    $(window).on('hashchange', function () {
        getImage(location.hash);
        getLocation(location.hash);
        getNavs(location.hash);
        getHspots(location.hash);
        loadMap(location.hash);
        killCarousel();
        getCIs(location.hash);
        $('#map').animate({scrollLeft: currentLocation.x - ($('#map').width() / 2), scrollTop: currentLocation.y - ($('#map').height() / 2)}, 1500, 'easeOutQuad');
    });

    if(window.location.hash) {
        dispMainMenu();
        $('#drilldown-1').dcDrilldown({
            speed : 'fast',
            saveState : true,
            showCount : false,
            linkType : 'backlink',
            defaultText: ''
        });
        $(window).trigger('hashchange');
    }
});
