(function(){
    window.slideshow.init = slideshow;
    var current = -1;

    function slideshow() {
        $.post("php/getImages.php", function(json) {
            images = JSON.parse(json);
            if (images.length == 0) {
                $("#slideshow").html("");

                return;
            }

            if (current >= images.length) {
                current = 0;
            } else if (current == -1) {
                current = Math.floor(Math.random() * images.length);
            }

            $("#slideshow").html("<img src='/images/" + images[current] + "'>");
            current++;
        });
        setTimeout(slideshow, 15000)
    }
})();
