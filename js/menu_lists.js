var subwanita = [
new MenuItem({text: 'About', icon: '', target: '#'}),
new MenuItem({text: 'Location', icon: '', target: '#'}),
new MenuItem({text: 'Prices', icon: '', target: '#'})
]

var subfish = [
new MenuItem({text: 'Ice Fishing', icon: '', target: '#'}),
new MenuItem({text: 'Salmon Fishing', icon: '', target: '#'}),
new MenuItem({text: 'Gunnison River', icon: '', target: '#'})
]

var subblue = [
new MenuItem({text: 'About', icon: '', target: '#'}),
new MenuItem({text: 'Fishing', icon: '', items: subfish})
]

var subhart = [
new MenuItem({text: 'Location', icon: '', target: '#'})
]
var subfree = [
new MenuItem({text: 'Shuttle Stops', icon: '', target: '#'}),
new MenuItem({text: 'Times', icon: '', target: '#'})
]

var subpass = [
new MenuItem({text: 'Student Discount', icon: '', target: '#'}),
new MenuItem({text: 'CBMR Website', icon: '', target: '#'})
]


var subcbmr = [
new MenuItem({text: 'About', icon: '', target: '#'}),
new MenuItem({text: 'Ski Pass', icon: '', items: subpass}),
new MenuItem({text: 'Free Shuttle', icon: '', items: subfree})
]


var subnear = [
new MenuItem({text: 'CBMR', icon: '', items: subcbmr}),
new MenuItem({text: 'Monarch', icon: '', target: '#'}),
new MenuItem({text: 'Hartman Rocks', icon: '', items: subhart}),
new MenuItem({text: 'Blue Mesa', icon: '', items: subblue}),
new MenuItem({text: 'Wanita Hot Springs', icon: '', items: subwanita})
]

var suboff = [
new MenuItem({text: 'Mountaineer Village', icon: '', target: '#'}),
new MenuItem({text: 'Sunshine Appts', icon: '', target: '#'})
]

var subon = [
new MenuItem({text: 'Escalante', icon: '', taget: '#'}),
new MenuItem({text: 'Mears', icon: '', target: '#'}),
new MenuItem({text: 'Ute', icon: '', target: '#'}),
new MenuItem({text: 'Pinnacles', icon: '', target: '#'})
]


var subhousing = [
new MenuItem({text: 'On Campus', icon: '', items: subon}),
new MenuItem({text: 'Off Campus', icon: '', items: suboff})
]

var subacademicclub = [
new MenuItem({text: 'Math Club', icon: '', target: '#'}),
new MenuItem({text: 'CS Club', icon: '', target: '#'}),
new MenuItem({text: 'Chemistry Club', icon: '', target: '#'})
]


var subclub = [
new MenuItem({text: 'Academic Clubs', icon: '', items: subacademicclub}),
new MenuItem({text: 'Sports Clubs', icon: '', target: '#'}),
new MenuItem({text: 'Cultural', icon: '', target: '#'}),
new MenuItem({text: 'Special Interests', icon: '', target: '#'})
]


var subactivities = [
new MenuItem({text: 'Clubs and Organizations', icon: '', items: subclub}),
new MenuItem({text: 'Recreation', icon: '', target: '#'})
]
var subvisit = [
new MenuItem({text: 'Setup Visit', icon: '', target: '#'}),
new MenuItem({text: 'Contact Us', icon: '', target: '#'})
]

var subtution = [
new MenuItem({text: 'In State', icon: '', target: '#'}),
new MenuItem({text: 'Out of State', icon: '', target: '#'})
]


var subfuture = [
new MenuItem({text: 'Apply Now!!', icon: '', target: '#'}),
new MenuItem({text: 'Tution and Fees', icon: '', items: subtution}),
new MenuItem({text: 'Visit Campus', icon: '', items: subvisit}),
new MenuItem({text: 'Activities Housing', icon: '', items: subactivities}),
new MenuItem({text: 'Housing', icon: '', items: subhousing}),
new MenuItem({text: 'Nearby', icon: '', items: subnear}),
new MenuItem({text: 'Downtown Gunnison', icon: '', items: subdown})
]

var subdown = []

var subbike = [
new MenuItem({text: 'Hartmans Rocks', icon: '', target: '#'}),
new MenuItem({text: 'Trails Nearby', icon: '', target: '#'})
]
var subski = [
new MenuItem({text: 'CBMR', icon: '', target: '#'}),
new MenuItem({text: 'Monarch', icon: '', target: '#'})
]


var submountain = [
new MenuItem({text: 'Ski and Snowboard', icon: '', items: subski}),
new MenuItem({text: 'Mountain Biking', icon: '', items: subbike})
]

var subsoccer = [
new MenuItem({text: 'Soccer Field', icon: '', target: '#'}),
new MenuItem({text: 'Staff', icon: '', target: '#'})
]

var subswimming = [
new MenuItem({text: 'Swimming Pool', icon: '', target: '#'}),
new MenuItem({text: 'Staff', icon: '', target: '#'})
]

var subtrack = [
new MenuItem({text: 'Indoor Facility', icon: '', target: '#'}),
new MenuItem({text: 'Staff', icon: '', target: '#'})
]

var subwrestling = [
new MenuItem({text: 'Paul Wright Gym', icon: '', target: '#'}),
new MenuItem({text: 'Staff', icon: '', target: '#'})
]

var subbasketball = [
new MenuItem({text: 'Paul Wright Gym', icon: '', target: '#'}),
new MenuItem({text: 'Staff', icon: '', target: '#'})
]

var subfootball = [
new MenuItem({text: 'Mountaineer Bowl', icon: '', target: '#'}),
new MenuItem({text: 'Staff', icon: '', target: '#'})
]


var subncaa = [
new MenuItem({text: 'Football', icon: '', items: subfootball}),
new MenuItem({text: 'Basketball', icon: '', items: subbasketball}),
new MenuItem({text: 'Wrestling', icon: '', items: subwrestling}),
new MenuItem({text: 'Track', icon: '', items: subtrack}),
new MenuItem({text: 'Swimming', icon: '', items: subswimming}),
new MenuItem({text: 'Soccer', icon: '', items: subsoccer})
]


var subathletics = [
new MenuItem({text: 'NCAA Sports', icon: '', items: subncaa}),
new MenuItem({text: 'Mountain Sports', icon: '', items: submountain})
]

var subcatalog = [
new MenuItem({text: 'Past Catalogs', icon: '', target: '#'}),
new MenuItem({text: 'Current Catalog', icon: '', target: '#'})
]

var subconcurrent = [
new MenuItem({text: 'Learn More', icon: '', target: '#'})
]

var subaccess = [
new MenuItem({text: 'Learn More', icon: '', target: '#'})
]

var subregister = [
new MenuItem({text: 'Join In', icon: '', target: '#'})
]


var subextended = [
new MenuItem({text: 'Register', icon: '', items: subregister}),
new MenuItem({text: 'Access Program', icon: '', items: subaccess}),
new MenuItem({text: 'Concurrent Enrollment Programs', icon: '', items: subconcurrent})
]


var subgrad = [
new MenuItem({text: 'Art', icon: '', target: '#'}),
new MenuItem({text: 'Creative Writing', icon: '', target: '#'}),
new MenuItem({text: 'Education', icon: '', target: '#'}),
new MenuItem({text: 'Enviromental Management', icon: '', items: submenu}),
new MenuItem({text: 'High Altitude Exercise Physiology', icon: '', items: submenu}),
]

var subcriminal = [
new MenuItem({text: 'Professors', icon: '', target: '#'}),
new MenuItem({text: 'Buildings', icon: '', target: '#'}),
new MenuItem({text: 'Criminal Justice Page', icon: '', target: '#'}),
new MenuItem({text: 'Courses', icon: '', target: '#'})
]

var subcreative = [
new MenuItem({text: 'Professors', icon: '', target: '#'}),
new MenuItem({text: 'Buildings', icon: '', target: '#'}),
new MenuItem({text: 'Creative Writing Page', icon: '', target: '#'}),
new MenuItem({text: 'Courses', icon: '', target: '#'})
]

var subcs = [
new MenuItem({text: 'Professors', icon: '', target: '#'}),
new MenuItem({text: 'Buildings', icon: '', target: '#'}),
new MenuItem({text: 'CS Page', icon: '', target: '#'}),
new MenuItem({text: 'Courses', icon: '', target: '#'})
]

var subcom = [
new MenuItem({text: 'Professors', icon: '', target: '#'}),
new MenuItem({text: 'Buildings', icon: '', target: '#'}),
new MenuItem({text: 'Communication Arts Page', icon: '', target: '#'}),
new MenuItem({text: 'Courses', icon: '', target: '#'})
]

var subchem = [
new MenuItem({text: 'Professors', icon: '', target: '#'}),
new MenuItem({text: 'Buildings', icon: '', target: '#'}),
new MenuItem({text: 'Chemistry Page', icon: '', target: '#'}),
new MenuItem({text: 'Courses', icon: '', target: '#'})
]

var subbusiness = [
new MenuItem({text: 'Professors', icon: '', target: '#'}),
new MenuItem({text: 'Buildings', icon: '', target: '#'}),
new MenuItem({text: 'Business Page', icon: '', target: '#'}),
new MenuItem({text: 'Courses', icon: '', target: '#'})
]

var subbio = [
new MenuItem({text: 'Professors', icon: '', target: '#'}),
new MenuItem({text: 'Buildings', icon: '', target: '#'}),
new MenuItem({text: 'Biology Page', icon: '', target: '#'}),
new MenuItem({text: 'Courses', icon: '', target: '#'})
]

var subartmajor = [
new MenuItem({text: 'Professors', icon: '', target: '#'}),
new MenuItem({text: 'Buildings', icon: '', target: '#'}),
new MenuItem({text: 'Art Page', icon: '', target: '#'}),
new MenuItem({text: 'Courses', icon: '', target: '#'})
]

var subanthro = [
new MenuItem({text: 'Professors', icon: '', target: '#'}),
new MenuItem({text: 'Buildings', icon: '', target: '#'}),
new MenuItem({text: 'Anthropology Page', icon: '', target: '#'}),
new MenuItem({text: 'Courses', icon: '', target: '#'})
]

var subaccounting = [
new MenuItem({text: 'Professors', icon: '', target: '#'}),
new MenuItem({text: 'Buildings', icon: '', target: '#'}),
new MenuItem({text: 'Accounting Page', icon: '', target: '#'}),
new MenuItem({text: 'Courses', icon: '', target: '#'})
]


var submajors = [
new MenuItem({text: 'Accounting', icon: '', items: subaccounting}),
new MenuItem({text: 'Anthropology', icon: '', items: subanthro}),
new MenuItem({text: 'Art', icon: '', items: subartmajor}),
new MenuItem({text: 'Biology', icon: '', items: subbio}),
new MenuItem({text: 'Business', icon: '', items: subbusiness}),
new MenuItem({text: 'Chemistry', icon: '', items: subchem}),
new MenuItem({text: 'Communication Arts', icon: '', items: subcom}),
new MenuItem({text: 'Computer Science', icon: '', items: subcs}),
new MenuItem({text: 'Creative Writing', icon: '', items: subcreative}),
new MenuItem({text: 'Criminal Justice', icon: '', items: subcriminal})
]


var subacademics = [
new MenuItem({text: 'Majors', icon: '', items: submajors}),
new MenuItem({text: 'Graduate Programs', icon: '', items: subgrad}),
new MenuItem({text: 'Extended Studies', icon: '', items:  subextended}),
new MenuItem({text: 'University Catalog', icon: '', items: subcatalog}),
new MenuItem({text: 'Academic Calendar', icon: '', target: '#'})
]

var submenu = [
new MenuItem({text: 'Academics', icon: '', items: subacademics}),
new MenuItem({text: 'Athletics', icon: '', items: subathletics}),
new MenuItem({text: 'Future Students', icon: '', items: subfuture})
]

var menu = new Menu({text: 'Menu', icon: '', items: submenu})
menu.items = submenu;

