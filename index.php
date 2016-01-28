<html>
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title>Mirror</title>
    <meta name="google" value="notranslate" />
    <link href="css/reset.css" rel="stylesheet" type="text/css" />
    <link href="css/style.css" rel="stylesheet" type="text/css" />
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
</head>
<body>
    <div id="content">
        <div id="datetime">
            <canvas id="clock"></canvas>
            <div id="time"></div>
            <div id="calendar"></div>
        </div>

        <div id="weather">
            <div class="row">
                <div class="col right">
                    <p id="current-name" class="name">Just nu</p>
                    <p id="current-desc" class="desc"></p>
                </div>
                <div class="col">
                    <p id="current-temp" class="temp"></p>
                </div>
                <div class="col">
                    <canvas id="current-dir" class="wind-icon"></canvas>
                    <p id="current-wind" class="wind"></p>
                </div>
                <div class="col">
                    <canvas id="current-icon" class="weather-icon"></canvas>
                </div>
            </div>
            <div class="row">
                <div class="col right">
                    <p id="today-name" class="name">Idag</p>
                    <p id="today-desc" class="desc"></p>
                </div>
                <div class="col">
                    <p id="today-temp" class="temp"></p>
                </div>
                <div class="col">
                    <canvas id="today-dir" class="wind-icon"></canvas>
                    <p id="today-wind" class="wind"></p>
                </div>
                <div class="col">
                    <canvas id="today-icon" class="weather-icon"></canvas>
                </div>
            </div>
            <div class="row">
                <div class="col right">
                    <p id="tomorrow-name" class="name">Imorgon</p>
                    <p id="tomorrow-desc" class="desc"></p>
                </div>
                <div class="col">
                    <p id="tomorrow-temp" class="temp"></p>
                </div>
                <div class="col">
                    <canvas id="tomorrow-dir" class="wind-icon"></canvas>
                    <p id="tomorrow-wind" class="wind"></p>
                </div>
                <div class="col">
                    <canvas id="tomorrow-icon" class="weather-icon"></canvas>
                </div>
            </div>
        </div>
        
        <div id="file"></div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script>apikey = "<?php include("../apikey.php"); ?>";</script>
    <script src="js/time.js"></script>
    <script src="js/calendar.js"></script>
    <script src="js/skycons.js"></script>
    <script src="js/translate.js"></script>
    <script src="js/weather.js"></script>
    <script src="js/file.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
