(function(){
    window.file.init = readFile;

    function readFile() {
        $.post("php/readFile.php", function(text) {
            text = text.replace(/&lt;img&gt;/g, "<img src=\"");
            text = text.replace(/&lt;\/img&gt;/g, "\"></img>");
            $("#file").html(text);
        });
        setTimeout(readFile, 15000);
    }
})();