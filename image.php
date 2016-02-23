<html>
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <title>Mirror - Set Images</title>
    <meta name="google" value="notranslate">
    <link href="css/style.css" rel="stylesheet" type="text/css">
</head>
<body>
    <div id="box">
        <span>Släpp bilder här</span>
        <span>eller</span>
        <span>Tryck för att ladda upp</span>
        <input id="fileinput" type="file" multiple accept="image/*">
    </div>

    <div id="url">
        <input id="urltextbox" type="text" placeholder="Ladda upp från URL">
        <input type="button" value="OK" onclick="imageFromURL($('#urltextbox').val())">
    </div>
    <div id="progress"></div>
    <div id="images"></div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="js/dmuploader.min.js"></script>
    <script src="js/image.js"></script>
</body>
</html>