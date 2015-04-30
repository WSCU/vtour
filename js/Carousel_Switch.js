// JavaScript Document
function CarouselItem(tags, thumb, ttip, html) {
    this.name = name;
    this.tags = tags;
    this.thumb = thumb;
    this.ttip = ttip;
    this.html = html;
}

function Image(name, fname) {
    this.name = name;
    this.fname = fname;
}

//********************Field House****************************
var FieldHouseAquaCenterFull = new Image("FieldHouse_AquaCenterFull", "FieldHouse_AquaCenterFull.png");
var FieldHouseAquaCenterThumb = new Image("FieldHouse_AquaCenterThumb", "FieldHouse_AquaCenterCarThumb.png");
var FieldHouseAquaCenter = new CarouselItem(["Fieldhouse"], FieldHouseAquaCenterThumb,
											"AquaticCenter", "<a class=\"gallery_thumbs\" href=\"imgs/FieldHouse_AquaCenterCarFull.png\"\
											 rel=\"lightbox[painting]\" title=\"&lt;a target='_self'\ onClick=&quot;window.location.href=&#x27;http://www.western.edu/current-students/campus-recreation/aquatic-center&#x27;&quot;\
						href=\'/http://www.western.edu/current-students/campus-recreation/aquatic-center'&gt;Click here to learn more information about the Aquatic Center&lt;/a&gt;\">\
 		<img src='imgs/FieldHouse_Thumb/FieldHouse_AquaCenterCarThumb.png' alt=\"\" /></a>");

		
var FieldHouseClimbingWallFull = new Image("FieldHouse_ClimbingWallFull", "FieldHouse_ClimbingWallFull.png");
var FieldHouseClimbingWallThumb = new Image("FieldHouse_ClimbingWallThumb", "FieldHouse_ClimbingWallThumb.png");
var FieldHouseClimbingWall = new CarouselItem(["Fieldhouse"], FieldHouseClimbingWallThumb,
											"ClimbingWall", "<a class=\"gallery_thumbs\" href=\"imgs/FieldHouse_ClimbingWallCarFull.png\" rel=\"lightbox[painting]\" \
        rel=\"lightbox[painting]\"  title=\"&lt;a target='_self'\ onClick=&quot;window.location.href=&#x27;http://www.western.edu/current-students/campus-recreation/mountaineer-field-house/climbing-wall-mountaineer-field-house&#x27;&quot; \  href='http://www.western.edu/current-students/campus-recreation/mountaineer-field-house/climbing-wall-mountaineer-field-house'&gt;Click here to learn more information about the Climbing\ Wall&lt;/a&gt;");

var FieldHouseFitCenterFull = new Image("FieldHouse_FitCenterFull", "FieldHouse_FitCenter.png");
var FieldHouseFitCenterThumb = new Image("FieldHouse_FitCenterThumb", "FieldHouse_FitCenter.png");
var FieldHouseFitCenter = new CarouselItem(["Fieldhouse"], FieldHouseFitCenterThumb,
											"FitnessCenter", "<a class=\"gallery_thumbs\" href=\"imgs/FieldHouse_FitCenterCarFull.png\" rel=\"lightbox[painting]\" \
        rel=\"lightbox[painting]\" title=\"&lt;a target='_self'\ onClick=&quot;window.location.href=&#x27;http://www.western.edu/current-students/campus-recreation/mountaineer-field-house/climbing-wall-mountaineer-field-house&#x27;&quot; \  href='http://www.western.edu/current-students/campus-recreation/mountaineer-field-house/climbing-wall-mountaineer-field-house'&gt;Click here to learn more information about the Climbing\ Wall&lt;/a&gt;") ;

var FieldhouseHaaPLabFull = new Image("Fieldhouse_HaaPLabFull", "Fieldhouse_HaaPLabFull.png");
var FieldhouseHaaPLabThumb = new Image("Fieldhouse_HaaPLabThumb", "Fieldhouse_HaaPLabThumb.png");
var FieldhouseHaaPLab = new CarouselItem(["Fieldhouse"], FieldhouseHaaPLabThumb, 
											"HaaPLab",   "<a class=\"gallery_thumbs\" href=\"imgs/FieldHouse_HaaPLabCarFull.png\" rel=\"lightbox[painting]\" \
        rel=\"lightbox[painting]\" title=\"&lt;a target='_self'\
		onClick=&quot;window.location.href=&#x27;https://www.western.edu/academics/undergraduate/exercise-sport-science-ess/high-altitude-performance-lab-haplab&#x27;&quot; \  href='https://www.western.edu/academics/undergraduate/exercise-sport-science-ess/high-altitude-performance-lab-haplab'&gt;Click here to learn more information about the HAPLab \here&lt;/a&gt;\">\
 		<img src=\"imgs/FieldHouse_Thumb/FieldHouse_HaaPLabCarThumb.png\" alt=\"\" /></a>");

var FieldhouseInfoGymFishEyeFull = new Image("Fieldhouse_InfoGymFishEyeFull", "Fieldhouse_InfoGymFishEyeFull.png");
var FieldhouseInfoGymFishEyeThumb = new Image("Fieldhouse_InfoGymFishEyeThumb", "Fieldhouse_InfoGymFishEyeThumb.png");
var FieldhouseInfoGymFishEye = new CarouselItem(["Fieldhouse"], FieldhouseInfoGymFishEye, 
											"InfoGymFishEye", "<a class=\"gallery_thumbs\" href=\"imgs/FieldHouse_InfoGymFishEyeFull.png\"\
        rel=\"lightbox[painting]\" href='http://www.western.edu/current-students/campus-recreation/mountaineer-field-house'&gt;Click here to learn more information about the Mountaineer Field House&lt;/a&gt;\">\
 		<img src='imgs/FieldHouse_Thumb/FieldHouse_InfoGymFishEyeThumb.png' alt=\"\" /></a>");

//********************Hurst****************************
var HurstQuinFull = new Image("Hurst_QuinFull", "Hurst_QuinFull.png");
var HurstQuinThumb = new Image("Hurst_QuinnThumb", "Hurst_QuinnThumb.png");
var HurstQuin = new CarouselItem(["#hurst"], HurstQuinThumb,
                                            "QuinTestimonial", "<a class=\"gallery_thumbs\" href=\"imgs/Hurst_QuinnFull.png\"\
        rel=\"lightbox[painting]\"  title=\"&lt;a target='_self' onClick=&quot;window.location.href=&#x27; http://www.western.edu/profile/student/rebecca-and-quinn-bryant;\
		 href='\ http://www.western.edu/profile/student/rebecca-and-quinn-bryant;Click Here to Read More...&lt;/a&gt;\">\
         <img src=\"imgs/Hurst_QuinnThumb.png\" alt=\"\" /></a>");
        
var HurstKendricEvansFull = new Image("Hurst_STKendricEvans", "Hurst_STKendricEvans.png");
var HurstKendricEvansThumb = new Image("Hurst_STKendricEvansThumb", "Hurst_KendricEvansThumb.png");
var HurstKendricEvans = new CarouselItem(["#hurst"], HurstKendricEvansThumb, 
                                            "KendricEvansTestimonial", "<a class=\"gallery_thumbs\" href=\"imgs/Hurst_STKendricEvansFull.png\"\
        rel=\"lightbox[painting]\" title=\"&lt;a target='_self' onClick=&quot;window.location.href=&#x27;http://www.western.edu/profile/alumnus/kendric-evans;   href='http://www.western.edu/profile/alumnus/kendric-evans;Click Here to Read More...&lt;/a&gt;\">\
         <img src=\"imgs/Hurst_STKendricEvans.png\" alt=\"\" /></a>");

var HurstRobotsFull = new Image("Hurst_RobotsFull", "Hurst_RobotsFull.png");
var HurstRobotsThumb = new Image("Hurst_RobotsThumb", "Hurst_RobotsThumb.png");
var HurstRobots = new CarouselItem(["#hurst"], HurstRobotsThumb, 
                                            "WesternRobotics", "<a class=\"gallery_thumbs\" href=\"imgs/Hurst_RobotsFull.png\"\
        rel=\"lightbox[painting]\" title=\"&lt;a target='_self' onClick=&quot;window.location.href=&#x27;http://www.western.edu/news/students-build-robot-compete-sand-dunes; href='http://www.western.edu/news/students-build-robot-compete-sand-dunes;Click here to learn more information...&lt;/a&gt;\">\
         <img src=\"imgs/Hurst_RobotsThumb.png\" alt=\"\" /></a>");
        

var HurstSTAlanClearyFull = new Image("Hurst_STAlanClearyFull", "Hurst_STAlanClearyFull.png");
var HurstSTAlanClearyThumb = new Image("Hurst_STAlanClearyThumbs", "Hurst_STAlanClearyThumbs.png");
var HurstSTAlanCleary = new CarouselItem(["#hurst"], HurstSTAlanClearyThumb,
                                            "AlanClearyTestimonial", "<a class=\"gallery_thumbs\" href=\"imgs/Hurst_STAlanClearyFull.png\"\
        rel=\"lightbox[painting]\" title=\"&lt;a target='_self' onClick=&quot;window.location.href=&#x27; http://www.western.edu/profile/alumnus/alan-cleary ;   href=' http://www.western.edu/profile/alumnus/alan-cleary;Click Here to Read More...&lt;/a&gt;\">\
         <img src=\"imgs/Hurst_STAlanClearyThumb.png\" alt=\"\" /></a>");
        
var HurstSTKevinSearsFull = new Image("Hurst_STKevinSearsFull", "Hurst_STKevinSearsFull.png");
var HurstSTKevinSearsThumb = new Image("Hurst_STKevinSearsThumb", "Hurst_STKevinSearsThumb.png");
var HurstSTKevinSears = new CarouselItem(["#hurst"], HurstSTKevinSearsThumb, 
                                            "KevinSearsTestimonial", "<a class=\"gallery_thumbs\" href=\"imgs/Hurst_STKevinSearsFull.png\"\
        rel=\"lightbox[painting]\"  title=\"&lt;a target='_self' onClick=&quot;window.location.href=&#x27;http://www.western.edu/profile/alumnus/kevin-sears;  href=http://www.western.edu/profile/alumnus/kevin-sears;Click Here to Read More...&lt;/a&gt;\">\
         <img src=\"imgs/Hurst_STKevinSears.png\" alt=\"\" /></a>");

//********************Taylor****************************
var TaylorJohnMasonFull = new Image("Taylor_JohnMasonFull", "Taylor_JohnMasonFull.png");
var TaylorJohnMasonThumb = new Image("Taylor_JohnMasonThumb", "Taylor_JohnMasonThumb.png");
var TaylorJohnMason = new CarouselItem(["#taylor"], TaylorJohnMasonThumb, 
                                            "JohnMason", "<a class=\"gallery_thumbs\" href=\"imgs/Taylor_JohnMasonFull.png\"\
        rel=\"lightbox[painting]\" \
title=\"&lt;a target='_self' onClick=&quot;window.location.href=&#x27;\
https://www.western.edu/profile/faculty/dr-john-mason; href='https://www.western.edu/profile/faculty/dr-john-mason;Click Here to Read More...&lt;/a&gt;\">\
         <img src=\"imgs/Taylor_JohnMasonThumb.png\" alt=\"\" /></a>");

var TaylorSTAnnaBoyleFull = new Image("Taylor_STAnnaBoyleFull", "Taylor_JSTAnnaBoyleFull.png");
var TaylorSTAnnaBoyleThumb = new Image("Taylor_STAnnaBoyleThumb", "Taylor_STAnnaBoyleThumbs.png");
var TaylorSTAnnaBoyle = new CarouselItem(["#taylor"], TaylorSTAnnaBoyleThumb, 
                                            "AnnaBoyleTestimonial", "<a class=\"gallery_thumbs\" href=\"imgs/Taylor_JSTAnnaBoyleFull.png\"\
        rel=\"lightbox[painting]\" title=\"&lt;a target='_self' onClick=&quot;window.location.href=&#x27; https://www.western.edu/profile/staff-student/anna-boyle; href=' https://www.western.edu/profile/staff-student/anna-boyle;Click Here to Read More...&lt;/a&gt;\">\
         <img src=\"imgs/Taylor_STAnnaBoyleThumbs.png\" alt=\"\" /></a>");
        
var TaylorSTBradArcherFull = new Image("Taylor_STBradArcherFull", "Taylor_STBradArcherFull.png");
var TaylorSTBradArcherThumb = new Image("Taylor_STBradArcherThumb", "Taylor_STBradArcherThumb.png");
var TaylorSTBradArcher = new CarouselItem(["#taylor"], TaylorSTBradArcherThumb, 
                                            "BradArcherTestimonial", "<a class=\"gallery_thumbs\" href=\"imgs/Taylor_STBradArcherFull.png\"\
        rel=\"lightbox[painting]\" \
title=\"&lt;a target='_self' onClick=&quot;window.location.href=&#x27;http://www.western.edu/news/students-build-robot-compete-sand-dunes; href='http://www.western.edu/news/students-build-robot-compete-sand-dunes;Click Here to Read More...&lt;/a&gt;\">\
         <img src=\"imgs/Taylor_STBradArcherThumb.png\" alt=\"\" /></a>");

var TaylorSTChristinaFull = new Image("Taylor_STChristinaFull", "Taylor_STChristinaFull.png");
var TaylorSTChristinaThumb = new Image("Taylor_STChristinaThumb", "Taylor_STChristinaThumb.png");
var TaylorSTChristina = new CarouselItem(["#taylor"], TaylorSTChristinaThumb, 
                                            "ChristinaTestimonial", "<a class=\"gallery_thumbs\" href=\"imgs/Taylor_STChristinaFull.png\"\
        rel=\"lightbox[painting]\" \
title=\"&lt;a target='_self' onClick=&quot;window.location.href=&#x27; https://www.western.edu/future-students/student-testimonials-and-profiles; href=' https://www.western.edu/future-students/student-testimonials-and-profiles;Click Here to Read More...&lt;/a&gt;\">\
         <img src=\"imgs/Taylor_STChristinaThumb.png\" alt=\"\" /></a>");

var TaylorSTZoeSmithFull = new Image("Taylor_ZoeSmithFull", "Taylor_ZoeSmithFull.png");
var TaylorSTZoeSmithThumb = new Image("Taylor_ZoeSmithThumb", "Taylor_ZoeSmithThumb.png");
var TaylorSTZoeSmith = new CarouselItem(["#taylor"], TaylorSTZoeSmithThumb, 
                                            "ZoeSmithTestimonial", "<a class=\"gallery_thumbs\" href=\"imgs/Taylor_ZoeSmithFull.png\"\
        rel=\"lightbox[painting]\" title=\"&lt;a target='_self' onClick=&quot;window.location.href=&#x27;http://www.western.edu/news/students-build-robot-compete-sand-dunes; href='http://www.western.edu/news/students-build-robot-compete-sand-dunes;Click Here to Read More...&lt;/a&gt;\">\
         <img src=\"imgs/Taylor_ZoeSmithThumb.png\" alt=\"\" /></a>");
		 
var CIs = [FieldHouseAquaCenter, FieldHouseClimbingWall, FieldHouseFitCenter, FieldhouseHaaPLab, FieldhouseInfoGymFishEye, HurstQuin, HurstKendricEvans, HurstRobots, HurstSTAlanCleary, HurstSTKevinSears, TaylorJohnMason, TaylorSTAnnaBoyle,  TaylorSTBradArcher, TaylorSTChristina, TaylorSTZoeSmith]

function getCIs(locationTag) /*Carousel Items*/{
       var inner_html = "";
        for (var i in CIs) {
            for (var tag in CIs[i].tags) {
                if (CIs[i].tags[tag] === locationTag) {
                    inner_html += CIs[i].html;
                }
            }
        }
        var CIsDiv = "#owl-demo";
        $(CIsDiv).html(inner_html);
    $("#owl-demo").owlCarousel({
        autoPlay: 2000,
        itemsDesktop : [1250,6],
        itemsDesktopSmall : [979,4],
        items : 9
    });
    }
getCIs("#hurst");