(function(){
    window.slideshow.init = slideshow;
    var current = 0;

    function slideshow() {
        $.post("php/getImages.php", function(json) {
            images = JSON.parse(json);
            if(images.length == 0) {
                $("#slideshow").html("");
            }
            else {
                if(current >= images.length) {
                    current = 0;
                }
                $("#slideshow").html("<img src='/images/" + images[current] + "'>");
                current++;
            }
        });
        setTimeout(slideshow, 15000)
    }
})();