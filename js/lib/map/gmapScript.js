var centerControlDiv = document.createElement('div');
var subControlDiv = document.createElement('div1');
var sub1ControlDiv = document.createElement('div2');
var sub2ControlDiv = document.createElement('div3');
function Recreation(controlDiv, map) {
    var state = 0;
    // Set CSS for the control border
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#ff0000';
    controlUI.style.border = '2px solid #797980';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);
    // Set CSS for the control interior
    var controlText = document.createElement('controls');
    controlText.style.color = 'rgb(255,255,255)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '10px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Recreation';
    controlUI.appendChild(controlText);
    // Setup the click event listeners: simply set the map to
    // Chicago
    google.maps.event.addDomListener(controlUI, 'click', function () {
        if (state === 1) {
            hartmanM.setMap(null);
            gothicM.setMap(null);
            cbmrM.setMap(null);
            aspenM.setMap(null);
            tellM.setMap(null);
            monarchM.setMap(null);
            irwinM.setMap(null);
            bcM.setMap(null);
            chsM.setMap(null);
            trrM.setMap(null);
            tresM.setMap(null);
            wwM.setMap(null);
            map.controls[google.maps.ControlPosition.BOTTOM_CENTER].clear(subControlDiv);
        }
        if (state === 0) {
            map.controls[google.maps.ControlPosition.BOTTOM_CENTER].clear(sub1ControlDiv);
            map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(subControlDiv);
            hartmanM.setMap(map);
            gothicM.setMap(map);
            cbmrM.setMap(map);
            aspenM.setMap(map);
            tellM.setMap(map);
            monarchM.setMap(map);
            irwinM.setMap(map);
            bcM.setMap(map);
            chsM.setMap(map);
            trrM.setMap(map);
            tresM.setMap(map);
            wwM.setMap(map);
            state = 1;
        } else
            state = 0;
    });
}
function Skiing(controlDiv, map) {
    var state = 0;
    // Set CSS for the control border
    var controlUI = document.createElement('div1');
    controlUI.style.backgroundColor = '#ff0000';
    controlUI.style.border = '2px solid #797980';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to see ski resorts';
    controlDiv.appendChild(controlUI);
    // Set CSS for the control interior
    var controlText = document.createElement('div1');
    controlText.style.color = 'rgb(255,255,255)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Skiing';
    controlUI.appendChild(controlText);
    // Setup the click event listeners: simply set the map to
    // Chicago
    google.maps.event.addDomListener(controlUI, 'click', function () {
        if (state === 1) {
            cbmrM.setMap(null);
            aspenM.setMap(null);
            tellM.setMap(null);
            monarchM.setMap(null);
            irwinM.setMap(null);
        }
        if (state === 0) {
            irwinM.setMap(null);
            tresM.setMap(null);
            wwM.setMap(null);
            bcM.setMap(null);
            irwinM.setMap(null);
            tresM.setMap(null);
            wwM.setMap(null);
            bcM.setMap(null);
            hartmanM.setMap(null);
            gothicM.setMap(null);
            chsM.setMap(null);
            cbmrM.setMap(map);
            aspenM.setMap(map);
            tellM.setMap(map);
            monarchM.setMap(map);
            irwinM.setMap(map);
            state = 1;
        } else
            state = 0;
    });
}
function Fishing(controlDiv, map) {
    var state = 0;
    // Set CSS for the control border
    var controlUI = document.createElement('div1');
    controlUI.style.backgroundColor = '#ff0000';
    controlUI.style.border = '2px solid #797980';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to see ski resorts';
    controlDiv.appendChild(controlUI);
    // Set CSS for the control interior
    var controlText = document.createElement('div1');
    controlText.style.color = 'rgb(255,255,255)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Fishing';
    controlUI.appendChild(controlText);
    // Setup the click event listeners: simply set the map to
    // Chicago
    google.maps.event.addDomListener(controlUI, 'click', function () {
        if (state === 1) {
            irwinM.setMap(null);
            tresM.setMap(null);
            wwM.setMap(null);
            bcM.setMap(null);
        }
        if (state === 0) {
            cbmrM.setMap(null);
            aspenM.setMap(null);
            tellM.setMap(null);
            monarchM.setMap(null);
            hartmanM.setMap(null);
            gothicM.setMap(null);
            chsM.setMap(null);
            irwinM.setMap(map);
            tresM.setMap(map);
            wwM.setMap(map);
            bcM.setMap(map);
            state = 1;
        } else
            state = 0;
    });
}
function Natl(controlDiv, map) {
    var state = 0;
    // Set CSS for the control border
    var controlUI = document.createElement('div1');
    controlUI.style.backgroundColor = '#ff0000';
    controlUI.style.border = '2px solid #797980';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to see ski resorts';
    controlDiv.appendChild(controlUI);
    // Set CSS for the control interior
    var controlText = document.createElement('div1');
    controlText.style.color = 'rgb(255,255,255)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Wilderness Areas';
    controlUI.appendChild(controlText);
    // Setup the click event listeners: simply set the map to
    // Chicago
    google.maps.event.addDomListener(controlUI, 'click', function () {
        if (state === 1) {
            irwinM.setMap(null);
            tresM.setMap(null);
            wwM.setMap(null);
            bcM.setMap(null);
            hartmanM.setMap(null);
            gothicM.setMap(null);
            chsM.setMap(null);
        }
        if (state === 0) {
            cbmrM.setMap(null);
            aspenM.setMap(null);
            tellM.setMap(null);
            monarchM.setMap(null);
            hartmanM.setMap(map);
            chsM.setMap(map);
            gothicM.setMap(map);
            irwinM.setMap(map);
            tresM.setMap(map);
            wwM.setMap(map);
            bcM.setMap(map);
            state = 1;
        } else
            state = 0;
    });
}
function Culture(controlDiv, map) {
    var state = 0;
    // Set CSS for the control border
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#ff0000';
    controlUI.style.border = '2px solid #797980';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);
    // Set CSS for the control interior
    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(255,255,255)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Culture';
    controlUI.appendChild(controlText);
    google.maps.event.addDomListener(controlUI, 'click', function () {
        if (state === 1) {
            cbArtsM.setMap(null);
            westernM.setMap(null);
            glibM.setMap(null);
            ibarM.setMap(null);
            pionM.setMap(null);
            cbhM.setMap(null);
            majM.setMap(null);
            map.controls[google.maps.ControlPosition.BOTTOM_CENTER].clear(sub1ControlDiv);
        }
        if (state === 0) {
            glibM.setMap(map);
            cbArtsM.setMap(map);
            ibarM.setMap(map);
            pionM.setMap(map);
            cbhM.setMap(map);
            majM.setMap(map);
            westernM.setMap(map);
            map.controls[google.maps.ControlPosition.BOTTOM_CENTER].clear(sub2ControlDiv);
            map.controls[google.maps.ControlPosition.BOTTOM_CENTER].clear(subControlDiv);
            map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(sub1ControlDiv);
            state = 1;
        } else
            state = 0;
    });
}
function Music(controlDiv, map) {
    var state = 0;
    // Set CSS for the control border
    var controlUI = document.createElement('div2');
    controlUI.style.backgroundColor = '#ff0000';
    controlUI.style.border = '2px solid #797980';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);
    // Set CSS for the control interior
    var controlText = document.createElement('div2');
    controlText.style.color = 'rgb(255,255,255)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Music';
    controlUI.appendChild(controlText);
    google.maps.event.addDomListener(controlUI, 'click', function () {
        if (state === 1) {
            cbArtsM.setMap(null);
            ibarM.setMap(null);
        }
        if (state === 0) {
            westernM.setMap(null);
            glibM.setMap(null);
            pionM.setMap(null);
            cbhM.setMap(null);
            majM.setMap(null);
            cbArtsM.setMap(map);
            ibarM.setMap(map);
            state = 1;
        } else
            state = 0;
    });
}
function Museums(controlDiv, map) {
    var state = 0;
    // Set CSS for the control border
    var controlUI = document.createElement('div2');
    controlUI.style.backgroundColor = '#ff0000';
    controlUI.style.border = '2px solid #797980';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);
    // Set CSS for the control interior
    var controlText = document.createElement('div2');
    controlText.style.color = 'rgb(255,255,255)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Museums';
    controlUI.appendChild(controlText);
    google.maps.event.addDomListener(controlUI, 'click', function () {
        if (state === 1) {
            pionM.setMap(null);
            cbhM.setMap(null);
        }
        if (state === 0) {
            cbArtsM.setMap(null);
            westernM.setMap(null);
            glibM.setMap(null);
            ibarM.setMap(null);
            majM.setMap(null);
            pionM.setMap(map);
            cbhM.setMap(map);
            state = 1;
        } else
            state = 0;
    });
}
function Movies(controlDiv, map) {
    var state = 0;
    // Set CSS for the control border
    var controlUI = document.createElement('div2');
    controlUI.style.backgroundColor = '#ff0000';
    controlUI.style.border = '2px solid #797980';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);
    // Set CSS for the control interior
    var controlText = document.createElement('div2');
    controlText.style.color = 'rgb(255,255,255)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Movies';
    controlUI.appendChild(controlText);
    google.maps.event.addDomListener(controlUI, 'click', function () {
        if (state === 1) {
            majM.setMap(null);
            westernM.setMap(null);
        }
        if (state === 0) {
            cbArtsM.setMap(null);
            glibM.setMap(null);
            ibarM.setMap(null);
            pionM.setMap(null);
            cbhM.setMap(null);
            majM.setMap(map);
            westernM.setMap(map);
            state = 1;
        } else
            state = 0;
    });
}
function Food(controlDiv, map) {
    var state = 0;
    // Set CSS for the control border
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#ff0000';
    controlUI.style.border = '2px solid #797980';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);
    // Set CSS for the control interior
    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(255,255,255)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Food';
    controlUI.appendChild(controlText);
    google.maps.event.addDomListener(controlUI, 'click', function () {
        if (state === 1) {
            Pstop.setMap(null);
            tfM.setMap(null);
            gmM.setMap(null);
            bsbM.setMap(null);
            mpM.setMap(null);
            mocM.setMap(null);
            stashM.setMap(null);
            camp4M.setMap(null);
            ryceM.setMap(null);
            donitaM.setMap(null);
            avyM.setMap(null);
            map.controls[google.maps.ControlPosition.BOTTOM_CENTER].clear(sub2ControlDiv);
        }
        if (state === 0) {
            gmM.setMap(map);
            mpM.setMap(map);
            stashM.setMap(map);
            mocM.setMap(map);
            camp4M.setMap(map);
            tfM.setMap(map);
            ryceM.setMap(map);
            donitaM.setMap(map);
            avyM.setMap(map);
            Pstop.setMap(map);
            bsbM.setMap(map);
            map.controls[google.maps.ControlPosition.BOTTOM_CENTER].clear(subControlDiv);
            map.controls[google.maps.ControlPosition.BOTTOM_CENTER].clear(sub1ControlDiv);
            map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(sub2ControlDiv);
            state = 1;
        } else
            state = 0;
    });
}
function Asian(controlDiv, map) {
    var state = 0;
    // Set CSS for the control border
    var controlUI = document.createElement('div3');
    controlUI.style.backgroundColor = '#ff0000';
    controlUI.style.border = '2px solid #797980';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);
    // Set CSS for the control interior
    var controlText = document.createElement('div3');
    controlText.style.color = 'rgb(255,255,255)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Asian';
    controlUI.appendChild(controlText);
    google.maps.event.addDomListener(controlUI, 'click', function () {
        if (state === 1) {

            tfM.setMap(null);
            ryceM.setMap(null);
        }
        if (state === 0) {
            Pstop.setMap(null);
            gmM.setMap(null);
            bsbM.setMap(null);
            mpM.setMap(null);
            mocM.setMap(null);
            stashM.setMap(null);
            camp4M.setMap(null);
            donitaM.setMap(null);
            avyM.setMap(null);
            tfM.setMap(map);
            ryceM.setMap(map);
            state = 1;
        } else
            state = 0;
    });
}
function Italian(controlDiv, map) {
    var state = 0;
    // Set CSS for the control border
    var controlUI = document.createElement('div3');
    controlUI.style.backgroundColor = '#ff0000';
    controlUI.style.border = '2px solid #797980';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);
    // Set CSS for the control interior
    var controlText = document.createElement('div3');
    controlText.style.color = 'rgb(255,255,255)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Italian';
    controlUI.appendChild(controlText);
    google.maps.event.addDomListener(controlUI, 'click', function () {
       if (state === 1) {
            gmM.setMap(null);
            mpM.setMap(null);
            stashM.setMap(null);
        }
        if (state === 0) {
            Pstop.setMap(null);
            tfM.setMap(null);
            bsbM.setMap(null);
            mocM.setMap(null);
            camp4M.setMap(null);
            ryceM.setMap(null);
            donitaM.setMap(null);
            avyM.setMap(null);
            gmM.setMap(map);
            mpM.setMap(map);
            stashM.setMap(map);
            state = 1;
        } else
            state = 0;
    });
}
function Coffee(controlDiv, map) {
    var state = 0;
    // Set CSS for the control border
    var controlUI = document.createElement('div3');
    controlUI.style.backgroundColor = '#ff0000';
    controlUI.style.border = '2px solid #797980';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);
    // Set CSS for the control interior
    var controlText = document.createElement('div3');
    controlText.style.color = 'rgb(255,255,255)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Coffee';
    controlUI.appendChild(controlText);
    google.maps.event.addDomListener(controlUI, 'click', function () {
        if (state === 1) {
            mocM.setMap(null);
            camp4M.setMap(null);
        }
        if (state === 0) {
            Pstop.setMap(null);
            tfM.setMap(null);
            gmM.setMap(null);
            bsbM.setMap(null);
            mpM.setMap(null);
            stashM.setMap(null);
            ryceM.setMap(null);
            donitaM.setMap(null);
            avyM.setMap(null);
            mocM.setMap(map);
            camp4M.setMap(map);
            state = 1;
        } else
            state = 0;
    });
}
function American(controlDiv, map) {
    var state = 0;
    // Set CSS for the control border
    var controlUI = document.createElement('div3');
    controlUI.style.backgroundColor = '#ff0000';
    controlUI.style.border = '2px solid #797980';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);
    // Set CSS for the control interior
    var controlText = document.createElement('div3');
    controlText.style.color = 'rgb(255,255,255)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'American';
    controlUI.appendChild(controlText);
    google.maps.event.addDomListener(controlUI, 'click', function () {

        if (state === 1) {
            avyM.setMap(null);
            Pstop.setMap(null);
            bsbM.setMap(null);
        }
        if (state === 0) {
            tfM.setMap(null);
            gmM.setMap(null);
            mpM.setMap(null);
            mocM.setMap(null);
            stashM.setMap(null);
            camp4M.setMap(null);
            ryceM.setMap(null);
            donitaM.setMap(null);
            avyM.setMap(map);
            Pstop.setMap(map);
            bsbM.setMap(map);
            state = 1;
        } else
            state = 0;
    });
}
var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">The Great Outdoors</h1>' +
        '<div id="bodyContent">' +
        '<p><img src=""><b>Western</b>, also referred to as <b>WSCU</b>, is a large ' +
        'sandstone rock formation in the southern part of the ' +
        'Gunnison county, central Colorado. It lies 400 miles ' +
        'south west of the nearest large town, Denver.; ' +
        ' Kata Tjuta and Uluru are the two major ' +
        'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
        'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
        'Aboriginal people of the area. It has many springs, waterholes, ' +
        'rock caves and ancient paintings. Uluru is listed as a World ' +
        'Heritage Site.</p>' +
        '<p>Attribution: Uluru, <a href="western.edu">' +
        'https://western.edu</a> ' +
        '(last visited June 22, 2009).</p>' +
        '<input type="button" id="myButton1" value="Show On Tour"/>' +
        '</div>' +
        '</div>';
//var infowindow = new google.maps.InfoWindow({
//    content: contentString
//});
//Rec markers
var aspenM = new google.maps.Marker({
    position: new google.maps.LatLng(39.185986, -106.817456),
    icon: 'asp.jpg',
    title: "Aspen"
});
var tellM = new google.maps.Marker({
    position: new google.maps.LatLng(37.938949, -107.820528),
    icon: 'Telluride.jpg',
    title: "Telluride"
});
var monarchM = new google.maps.Marker({
    position: new google.maps.LatLng(38.512031, -106.331470),
    icon: 'monarch.jpg',
    title: "Monarch"
});
var irwinM = new google.maps.Marker({
    position: new google.maps.LatLng(38.879437, -107.103771),
    icon: 'fs.jpg',
    title: "Lake Irwin"
});
var bcM = new google.maps.Marker({
    position: new google.maps.LatLng(38.574866, -107.741617),
    icon: 'nps.jpg',
    title: "Black Canyon National Park"
});
var chsM = new google.maps.Marker({
    position: new google.maps.LatLng(39.011499, -106.891310),
    icon: 'fs.jpg',
    title: "Conundrum Hot Springs"
});
var trrM = new google.maps.Marker({
    position: new google.maps.LatLng(38.664371, -106.844160),
    icon: 'tr.jpg',
    title: "Three Rivers Resort"
});
var tresM = new google.maps.Marker({
    position: new google.maps.LatLng(38.819244, -106.601608),
    icon: 'fs.jpg',
    title: "Taylor Reservoir"
});
var wwM = new google.maps.Marker({
    position: new google.maps.LatLng(38.532904, -106.949891),
    icon: 'blm.jpg',
    title: "Gunnison Whitewater Park"
});

///Culture Markers
var glibM = new google.maps.Marker({
    position: new google.maps.LatLng(38.547010, -106.928533),
    title: "Gunnison Library",
    icon: 'lib.jpg',
    type: 'Cult'
});

var ibarM = new google.maps.Marker({
    position: new google.maps.LatLng(38.541476, -106.904030),
    icon: 'ibar.jpg',
    title: "I Bar Ranch"
});
var pionM = new google.maps.Marker({
    position: new google.maps.LatLng(38.544044, -106.916706),
    icon: 'pio.jpg',
    title: "Gunnison Pioneer Museum"
});
var cbhM = new google.maps.Marker({
    position: new google.maps.LatLng(38.869835, -106.984323),
    icon: 'cbh.jpg',
    title: "Crested Butte Heritage Museum"
});
var majM = new google.maps.Marker({
    position: new google.maps.LatLng(38.866733, -106.981357),
    icon: 'maj.jpg',
    title: "Majestic Theatre"
});
var westernM = new google.maps.Marker({
    position: new google.maps.LatLng(38.547, -106.918),
    title: "Western",
    icon: 'W.jpg',
    type: 'Cul'
});
var hartmanM = new google.maps.Marker({
    position: new google.maps.LatLng(38.505, -106.9501),
    title: "Hartmans",
    icon: 'blm.jpg',
    type: 'Rec'
});
var Pstop = new google.maps.Marker({
    position: new google.maps.LatLng(38.547, -106.928),
    title: "PowerStop",
    icon: 'powerstop.jpg',
    type: 'Food'
});
//CB markers
var cbmrM = new google.maps.Marker({
    position: new google.maps.LatLng(38.9, -106.95),
    icon: 'cbmr.jpg',
    title: "CBMR"
});
var cbArtsM = new google.maps.Marker({
    position: new google.maps.LatLng(38.8677, -106.9773),
    icon: 'cbart.jpg',
    title: "CB Art Center"
});
var gothicM = new google.maps.Marker({
    position: new google.maps.LatLng(38.9592, -106.9898),
    icon: 'fs.jpg',
    title: "RMBL"
});
///FOOD MARKERS
var tfM = new google.maps.Marker({
    position: new google.maps.LatLng(38.545852, -106.926794),
    icon: 'tf.jpg',
    title: "Twisted Fork"
});
var gmM = new google.maps.Marker({
    position: new google.maps.LatLng(38.582215, -106.921878),
    icon: 'gm.jpg',
    title: "Garlic Mike's"
});
var bsbM = new google.maps.Marker({
    position: new google.maps.LatLng(38.544533, -106.927674),
    icon: 'bsb.jpg',
    title: "Blackstock Bistro"
});
var mpM = new google.maps.Marker({
    position: new google.maps.LatLng(38.544250, -106.924154),
    icon: 'mp.jpg',
    title: "Mikey's Pizza"
});
var mocM = new google.maps.Marker({
    position: new google.maps.LatLng(38.551886, -106.926557),
    icon: 'mocha.jpg',
    title: "Mocha's!!"
});
var stashM = new google.maps.Marker({
    position: new google.maps.LatLng(38.869848, -106.985497),
    icon: 'stash.jpg',
    title: "Secret Stash"
});
var camp4M = new google.maps.Marker({
    position: new google.maps.LatLng(38.869256, -106.984046),
    icon: 'camp4.jpg',
    title: "Camp 4 Coffee!!"
});
var ryceM = new google.maps.Marker({
    position: new google.maps.LatLng(38.869655, -106.988249),
    icon: 'ryce.png',
    title: "Ryce Asian Bistro"
});
var donitaM = new google.maps.Marker({
    position: new google.maps.LatLng(38.869589, -106.984569),
    icon: 'donita.jpg',
    title: "Donita's Cantina"
});
var avyM = new google.maps.Marker({
    position: new google.maps.LatLng(38.900076, -106.966526),
    icon: 'avy.jpg',
    title: "Avalanche"
});
// To add the marker to the map, call setMap();
// First, create an object containing LatLng and population for each city.
var citymap = {};
citymap['gunnison'] = {
    center: new google.maps.LatLng(38.547, -106.918),
    population: 10000
};
citymap['cb'] = {
    center: new google.maps.LatLng(38.8677, -106.9773),
    population: 3000
};
var cityCircle;
function initialize() {
    // Create the map.
    var myLatlng = new google.maps.LatLng(38.547, -106.918);
    var mapOptions = {
        zoom: 4,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.HYBRID

    };
    function smoothZoom(map, max, cnt) {
        if (cnt >= max) {
            return;
        }
        else {
            z = google.maps.event.addListener(map, 'zoom_changed', function (event) {
                google.maps.event.removeListener(z);
                smoothZoom(map, max, cnt + 1);
            });
            setTimeout(function () {
                map.setZoom(cnt);
            }, 300); // 80ms is what I found to work well on my system -- it might not work well on all systems
        }
    }
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    smoothZoom(map, 10, map.getZoom());
    //var  = document.getElementById('myBtn');
    //var myBtn1 = document.getElementById('myButton1');
//    function tourStateChange(lat,lng){
// var myLatlng = new google.maps.LatLng(lat, lng);
//    };
//    var myLatlng = new google.maps.LatLng(38.9592, -106.9898);
//    myBtn.addEventListener('click', function (event) {
//        map.panTo(myLatlng);
//        smoothZoom(map, 14, map.getZoom());
//    });
//    myBtn1.addEventListener('click', function(event) {
//    window.location.ahref=('');
//    
//  });
//Buttons for .panTo()
//    var aspenBtn = document.getElementById('aspenBtn');
//    var aspenLL = new google.maps.LatLng(39.185986, -106.817456);
//    aspenBtn.addEventListener('click', function (event) {
//        map.panTo(aspenLL);
//        smoothZoom(map, 14, map.getZoom());
//    });
//    var tellBtn = document.getElementById('tellBtn');
//    var tellLL = new google.maps.LatLng(37.938949, -107.820528);
//    tellBtn.addEventListener('click', function (event) {
//        map.panTo(tellLL);
//        smoothZoom(map, 14, map.getZoom());
//    });
//    var cbBtn = document.getElementById('cbBtn');
//    var cbLL = new google.maps.LatLng(38.9, -106.95);
//    cbBtn.addEventListener('click', function (event) {
//        map.panTo(cbLL);
//        smoothZoom(map, 14, map.getZoom());
//    });
//    var monarchBtn = document.getElementById('monarchBtn');
//    var monarchLL = new google.maps.LatLng(38.512031, -106.33147);
//    monarchBtn.addEventListener('click', function (event) {
//        map.panTo(monarchLL);
//        smoothZoom(map, 14, map.getZoom());
//    });
//    var taylorBtn = document.getElementById('taylorBtn');
//    var taylorLL = new google.maps.LatLng(38.819244, -106.601608);
//    taylorBtn.addEventListener('click', function (event) {
//        map.panTo(taylorLL);
//        smoothZoom(map, 14, map.getZoom());
//    });
//    var hartBtn = document.getElementById('hartBtn');
//    var hartLL = new google.maps.LatLng(38.505, -106.9501);
//    hartBtn.addEventListener('click', function (event) {
//        map.panTo(hartLL);
//        smoothZoom(map, 14, map.getZoom());
//    });
//End buttons for .panTo()
    centerControlDiv.index = 1;
    subControlDiv.index = 1;
    sub1ControlDiv.index = 1;
    sub2ControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(centerControlDiv);
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].clear(subControlDiv);
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].clear(sub1ControlDiv);
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].clear(sub2ControlDiv);
    var recreation = new Recreation(centerControlDiv, map);
        var skiing = new Skiing(subControlDiv, map);
        var fishing = new Fishing(subControlDiv, map);
        var natl = new Natl(subControlDiv, map);
    var culture = new Culture(centerControlDiv, map);
        var music = new Music(sub1ControlDiv, map);
        var museums = new Museums(sub1ControlDiv, map);
        var movie = new Movies(sub1ControlDiv, map);
    var food = new Food(centerControlDiv, map);
        var asian = new Asian(sub2ControlDiv, map);
        var italian = new Italian(sub2ControlDiv, map);
        var coffee = new Coffee(sub2ControlDiv, map);
        var merica = new American(sub2ControlDiv, map);
    var gunnyC = {
        strokeColor: 'rgb(255,255,255)',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.30,
        map: map,
        center: citymap['gunnison'].center,
        radius: Math.sqrt(citymap['gunnison'].population) * 100
    };
    var cbC = {
        strokeColor: 'rgb(255,255,255)',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.30,
        map: map,
        center: citymap['cb'].center,
        radius: Math.sqrt(citymap['cb'].population) * 100
    };
    //cityCircle1 = new google.maps.Circle(gunnyC);
    //cityCircle2 = new google.maps.Circle(cbC);
    //google.maps.event.addListener(cityCircle1, 'click', function () {
    //    smoothZoom(map, 14, map.getZoom());
    //    map.panTo(citymap['gunnison'].center);
    //    westernM.setMap(map);
    //    hartmanM.setMap(map);
    //    Pstop.setMap(map);
    //    cityCircle2.setMap(map);
    //    cbmrM.setMap(null);
    //    gothicM.setMap(null);
    //    cityCircle1.setMap(null);
    //    cbArtsM.setMap(null);
    //
    //});
    //google.maps.event.addListener(cityCircle2, 'click', function () {
    //    smoothZoom(map, 14, map.getZoom());
    //    map.panTo(citymap['cb'].center);
    //    westernM.setMap(null);
    //    hartmanM.setMap(null);
    //    Pstop.setMap(null);
    //    cityCircle2.setMap(null);
    //    cityCircle1.setMap(map);
    //    cbmrM.setMap(map);
    //    cbArtsM.setMap(map);
    //    gothicM.setMap(map);
    //});
    google.maps.event.addListener(westernM, 'click', function () {
        infowindow.open(map, westernM);
    });
    google.maps.event.addListener(irwinM, 'click', function () {
        infowindow.open(map, irwinM);
    });
    google.maps.event.addListener(tresM, 'click', function () {
        infowindow.open(map, tresM);
    });
    google.maps.event.addListener(wwM, 'click', function () {
        infowindow.open(map, wwM);
    });
    google.maps.event.addListener(bcM, 'click', function () {
        infowindow.open(map, bcM);
    });
}
//close intialize

   