(function(){
    window.weather.init = init;

    var skycons;

    function init() {
        skycons = new Skycons({"color": "white"});
        skycons.play();
        update();
    }

    function update() {
        var now = new Date();
        var cityid = "2697703";
        var units = "metric";
        var url = "http://api.openweathermap.org/data/2.5/weather?id=" + cityid + "&appid=" + apikey + "&units=" + units;
        jQuery.getJSON(url, function(data) {
            $("#current-desc").text(translate(data.weather[0].description));
            $("#current-temp").text(Math.round(data.main.temp) + "°C");
            $("#current-wind").text(Math.round(data.wind.speed) + " m/s");
            arrow("current-dir", data.wind.deg, "white");
            if(now.getTime() / 1000 < data.sys.sunset) {
                skycons.set("current-icon", iconDay(data.weather[0].id));
            }
            else {
                skycons.set("current-icon", iconNight(data.weather[0].id));
            }
        });

        url = "http://api.openweathermap.org/data/2.5/forecast/daily?id=" + cityid + "&appid=" + apikey + "&units=" + units + "&cnt=2";
        jQuery.getJSON(url, function(data) {
            $("#today-desc").text(translate(data.list[0].weather[0].description));
            $("#today-wind").text(Math.round(data.list[0].speed) + " m/s");
            arrow("today-dir", data.list[0].deg, "white");

            if(now.getHours() < 16) {
                $("#today-name").text("Idag");
                $("#today-temp").text(Math.round(data.list[0].temp.day) + "°C");
                skycons.set("today-icon", iconDay(data.list[0].weather[0].id));
            }
            else {
                $("#today-name").text("I natt");
                $("#today-temp").text(Math.round(data.list[0].temp.night) + "°C");
                skycons.set("today-icon", iconNight(data.list[0].weather[0].id));
            }

            $("#tomorrow-desc").text(translate(data.list[1].weather[0].description));
            $("#tomorrow-temp").text(Math.round(data.list[1].temp.day) + "°C");
            $("#tomorrow-wind").text(Math.round(data.list[1].speed) + " m/s");
            arrow("tomorrow-dir", data.list[1].deg, "white");
            skycons.set("tomorrow-icon", iconDay(data.list[1].weather[0].id));
        });

        setTimeout(update, 900000);
    }

    function arrow(el, degrees, color) {
        if(typeof el === "string") {
            el = document.getElementById(el);
        }

        if(el != null) {
            var ctx = el.getContext("2d");
            var w = el.width;
            var h = el.height;
            var s = Math.min(w, h);

            ctx.fillStyle = color;
            ctx.clearRect(0, 0, w, h);
            ctx.save();
            ctx.translate(w / 2, h / 2);
            ctx.rotate(degrees * Math.PI / 180);
            ctx.beginPath();
            ctx.moveTo(0, -s / 2);
            ctx.lineTo(s / 3, s / 8);
            ctx.lineTo(s / 16, -s / 8);
            ctx.lineTo(s / 10, s / 2.2);
            ctx.lineTo(-s / 10, s / 2.2);
            ctx.lineTo(-s / 16, -s / 8);
            ctx.lineTo(-s / 3, s / 8);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }

	function iconDay(id) {
        var icons = new Array();

        icons[200] = Skycons.THUNDER_RAIN;
        icons[201] = Skycons.THUNDER_RAIN;
        icons[202] = Skycons.THUNDER_RAIN;
        icons[210] = Skycons.THUNDER;
        icons[211] = Skycons.THUNDER;
        icons[212] = Skycons.THUNDER;
        icons[221] = Skycons.THUNDER;
        icons[230] = Skycons.THUNDER_SHOWERS_DAY;
        icons[231] = Skycons.THUNDER_SHOWERS_DAY;
        icons[232] = Skycons.THUNDER_SHOWERS_DAY;

        icons[300] = Skycons.RAIN;
        icons[301] = Skycons.RAIN;
        icons[302] = Skycons.RAIN;
        icons[310] = Skycons.RAIN;
        icons[311] = Skycons.RAIN;
        icons[312] = Skycons.RAIN;
        icons[313] = Skycons.SHOWERS_DAY;
        icons[314] = Skycons.SHOWERS_DAY;
        icons[321] = Skycons.SHOWERS_DAY;

        icons[500] = Skycons.RAIN;
        icons[501] = Skycons.RAIN;
        icons[502] = Skycons.RAIN;
        icons[503] = Skycons.RAIN;
        icons[504] = Skycons.RAIN;
        icons[511] = Skycons.RAIN;
        icons[520] = Skycons.SHOWERS_DAY;
        icons[521] = Skycons.SHOWERS_DAY;
        icons[522] = Skycons.SHOWERS_DAY;
        icons[531] = Skycons.SHOWERS_DAY;

        icons[600] = Skycons.SNOW;
        icons[601] = Skycons.SNOW;
        icons[602] = Skycons.SNOW;
        icons[611] = Skycons.RAIN_SNOW;
        icons[612] = Skycons.RAIN_SNOW_SHOWERS_DAY;
        icons[615] = Skycons.RAIN_SNOW;
        icons[616] = Skycons.RAIN_SNOW;
        icons[620] = Skycons.SNOW_SHOWERS_DAY;
        icons[621] = Skycons.SNOW_SHOWERS_DAY;
        icons[522] = Skycons.SNOW_SHOWERS_DAY;

        icons[701] = Skycons.FOG;
        icons[711] = Skycons.FOG;
        icons[721] = Skycons.FOG;
        icons[731] = Skycons.FOG;
        icons[741] = Skycons.FOG;
        icons[751] = Skycons.FOG;
        icons[761] = Skycons.FOG;
        icons[762] = Skycons.FOG;
        icons[771] = Skycons.WIND;
        icons[781] = Skycons.WIND;

        icons[800] = Skycons.CLEAR_DAY;
        icons[801] = Skycons.PARTLY_CLOUDY_DAY;
        icons[802] = Skycons.PARTLY_CLOUDY_DAY;
        icons[803] = Skycons.CLOUDY;
        icons[804] = Skycons.CLOUDY;

        icons[900] = Skycons.WIND;
        icons[901] = Skycons.WIND;
        icons[902] = Skycons.WIND;
        icons[903] = Skycons.CLOUDY;
        icons[904] = Skycons.CLOUDY;
        icons[905] = Skycons.WIND;
        icons[906] = Skycons.HAIL;

        icons[951] = Skycons.WIND;
        icons[952] = Skycons.WIND;
        icons[953] = Skycons.WIND;
        icons[954] = Skycons.WIND;
        icons[955] = Skycons.WIND;
        icons[956] = Skycons.WIND;
        icons[957] = Skycons.WIND;
        icons[958] = Skycons.WIND;
        icons[959] = Skycons.WIND;
        icons[960] = Skycons.WIND;
        icons[961] = Skycons.WIND;
        icons[962] = Skycons.WIND;

        return typeof icons[id] != 'undefined' ? icons[id] : icons[800];
    }

    function iconNight(id) {
        var icons = new Array();

        icons[200] = Skycons.THUNDER_RAIN;
        icons[201] = Skycons.THUNDER_RAIN;
        icons[202] = Skycons.THUNDER_RAIN;
        icons[210] = Skycons.THUNDER;
        icons[211] = Skycons.THUNDER;
        icons[212] = Skycons.THUNDER;
        icons[221] = Skycons.THUNDER;
        icons[230] = Skycons.THUNDER_SHOWERS_NIGHT;
        icons[231] = Skycons.THUNDER_SHOWERS_NIGHT;
        icons[232] = Skycons.THUNDER_SHOWERS_NIGHT;

        icons[300] = Skycons.RAIN;
        icons[301] = Skycons.RAIN;
        icons[302] = Skycons.RAIN;
        icons[310] = Skycons.RAIN;
        icons[311] = Skycons.RAIN;
        icons[312] = Skycons.RAIN;
        icons[313] = Skycons.SHOWERS_NIGHT;
        icons[314] = Skycons.SHOWERS_NIGHT;
        icons[321] = Skycons.SHOWERS_NIGHT;

        icons[500] = Skycons.RAIN;
        icons[501] = Skycons.RAIN;
        icons[502] = Skycons.RAIN;
        icons[503] = Skycons.RAIN;
        icons[504] = Skycons.RAIN;
        icons[511] = Skycons.RAIN;
        icons[520] = Skycons.SHOWERS_NIGHT;
        icons[521] = Skycons.SHOWERS_NIGHT;
        icons[522] = Skycons.SHOWERS_NIGHT;
        icons[531] = Skycons.SHOWERS_NIGHT;

        icons[600] = Skycons.SNOW;
        icons[601] = Skycons.SNOW;
        icons[602] = Skycons.SNOW;
        icons[611] = Skycons.RAIN_SNOW;
        icons[612] = Skycons.RAIN_SNOW_SHOWERS_NIGHT;
        icons[615] = Skycons.RAIN_SNOW;
        icons[616] = Skycons.RAIN_SNOW;
        icons[620] = Skycons.SNOW_SHOWERS_NIGHT;
        icons[621] = Skycons.SNOW_SHOWERS_NIGHT;
        icons[522] = Skycons.SNOW_SHOWERS_NIGHT;

        icons[701] = Skycons.FOG;
        icons[711] = Skycons.FOG;
        icons[721] = Skycons.FOG;
        icons[731] = Skycons.FOG;
        icons[741] = Skycons.FOG;
        icons[751] = Skycons.FOG;
        icons[761] = Skycons.FOG;
        icons[762] = Skycons.FOG;
        icons[771] = Skycons.WIND;
        icons[781] = Skycons.WIND;

        icons[800] = Skycons.CLEAR_NIGHT;
        icons[801] = Skycons.PARTLY_CLOUDY_NIGHT;
        icons[802] = Skycons.PARTLY_CLOUDY_NIGHT;
        icons[803] = Skycons.CLOUDY;
        icons[804] = Skycons.CLOUDY;

        icons[900] = Skycons.WIND;
        icons[901] = Skycons.WIND;
        icons[902] = Skycons.WIND;
        icons[903] = Skycons.CLOUDY;
        icons[904] = Skycons.CLOUDY;
        icons[905] = Skycons.WIND;
        icons[906] = Skycons.HAIL;

        icons[951] = Skycons.WIND;
        icons[952] = Skycons.WIND;
        icons[953] = Skycons.WIND;
        icons[954] = Skycons.WIND;
        icons[955] = Skycons.WIND;
        icons[956] = Skycons.WIND;
        icons[957] = Skycons.WIND;
        icons[958] = Skycons.WIND;
        icons[959] = Skycons.WIND;
        icons[960] = Skycons.WIND;
        icons[961] = Skycons.WIND;
        icons[962] = Skycons.WIND;

        return typeof icons[id] != 'undefined' ? icons[id] : icons[800];
    }
})();