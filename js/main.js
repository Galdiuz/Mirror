$(document).ready(function() {
    time.init();
    calendar.init();
    weather.init();
    file.init();

    resizeCanvas($("#clock"));
    resizeCanvas($("#current-dir"));
    resizeCanvas($("#current-icon"));
    resizeCanvas($("#today-icon"));
    resizeCanvas($("#today-dir"));
    resizeCanvas($("#tomorrow-icon"));
    resizeCanvas($("#tomorrow-dir"));
});

function resizeCanvas(canvas) {
    canvas[0].width = canvas.width();
    canvas[0].height = canvas.height();
}