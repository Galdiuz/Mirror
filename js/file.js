(function(){
    window.file.init = readFile;

    function readFile() {
        $.post("php/readFile.php", function(text) {
            text = text.replace("&lt;img src=&quot;", "<img src=\"");
            text = text.replace("&quot;&gt;&lt;/img&gt;", "\"></img>");
            $("#file").html(text);
        });
        setTimeout(readFile, 5000);
    }
})();