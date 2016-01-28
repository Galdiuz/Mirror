(function(){
    window.time.init = update;

	function update() {
		var now = new Date();
        var hs = formatTime(now.getHours());
        var ms = formatTime(now.getMinutes());
        var ss = formatTime(now.getSeconds());
        var t = hs + ":" + ms + ":" + ss;
        $("#time").text(t);

        var color = "white";
        var el = document.getElementById("clock");
        var ctx = el.getContext("2d");
        var w = el.width;
        var h = el.height;
        var s = Math.min(w, h);
        var sec = now.getSeconds() + now.getMilliseconds() / 1000;
        var min = now.getMinutes() + sec / 60;
        var hour = now.getHours() + min / 60;
        var i;

        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineCap = "round";
        ctx.clearRect(0, 0, w, h);
        ctx.save();
        ctx.translate(w / 2, h / 2);

        ctx.lineWidth = 2;
        ctx.beginPath();
        for(i = 0; i < 12; i++) {
            ctx.moveTo(Math.sin(i * Math.PI / 6) * s / 2.1, Math.cos(i * Math.PI / 6) * s / 2.1);
            ctx.lineTo(Math.sin(i * Math.PI / 6) * s / 2.3, Math.cos(i * Math.PI / 6) * s / 2.3);
        }
        ctx.stroke();

        ctx.lineWidth = 1;
        ctx.beginPath();
        for(i = 0; i < 60; i++) {
            ctx.moveTo(Math.sin(i * Math.PI / 30) * s / 2.1, Math.cos(i * Math.PI / 30) * s / 2.1);
            ctx.lineTo(Math.sin(i * Math.PI / 30) * s / 2.2, Math.cos(i * Math.PI / 30) * s / 2.2);
        }
        ctx.stroke();

        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.sin(hour * Math.PI / 6) * s / 4, -Math.cos(hour * Math.PI / 6) * s / 4);
        ctx.stroke();

        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.sin(min * Math.PI / 30) * s / 2.4, -Math.cos(min * Math.PI / 30) * s / 2.4);
        ctx.stroke();

        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.sin(sec * Math.PI / 30) * s / 3, -Math.cos(sec * Math.PI / 30) * s / 3);
        ctx.stroke();

        ctx.font = (s / 12.5) + "px Open Sans";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        for(i = 1; i <= 12; i++) {
            ctx.fillText(i.toString(), Math.sin(i * Math.PI / 6) * s / 2.65, -Math.cos(i * Math.PI / 6) * s / 2.65);
        }

        ctx.restore();
        setTimeout(update, 40);
	}

    function formatTime(i) {
        if(i < 10) {i = "0" + i};
        return i;
    }
})();