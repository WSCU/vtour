/********************************
 *  Mouse move on Map           *
 ********************************/

var clicking = false;
var previousX;
var previousY;

$('.mapImage').load(function () {



    $('body').on('mousedown', '#map', function (e) {
        console.log("mouse down");
        e.preventDefault();
        previousX = e.clientX;
        previousY = e.clientY;
        clicking = true;
    });

    $(document).mouseup(function () {
        clicking = false;
    });

    $('body').on('mousemove', '#map', function (e) {
        if (clicking) {
            e.preventDefault();
            var directionX = (previousX - e.clientX) > 0 ? 1 : -1;
            var directionY = (previousY - e.clientY) > 0 ? 1 : -1;
            $("#map").scrollLeft($("#map").scrollLeft() + 10 * directionX);
            $("#map").scrollTop($("#map").scrollTop() + 10 * directionY);
            previousX = e.clientX;
            previousY = e.clientY;
        }
    });
});
