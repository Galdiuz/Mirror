<html>
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title>Mirror - Set Text</title>
    <meta name="google" value="notranslate" />
    <link href="css/style.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <textarea id="textbox" type="text"><?php include("php/readFile.php"); ?></textarea>
    <br />
    <input type="button" value="Save" onclick="writeFile()">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script>
    function writeFile() {
        var text = $("#textbox").val();
        $.post("php/writeFile.php", { text: text });
    }
    </script>
</body>
</html>