(function(){
    downloading = false;
    getImages();

    

    function getImages() {
        $.post("php/getImages.php", function(json) {
                
                images = JSON.parse(json);
                for(var i = 0; i < images.length; i++) {
                    addImage(images[i]);
                }
            });
    }

    function addImage(image) {
        var html = "<div class='imagebox'>";
        html += "<img src='/images/thumbs/" + image + "'></img>";
        html += "<input type='image' src='trash.png' onclick='deleteImage($(this).parent(), \"" + image + "\")'>";
        html += "</div>"
        $("#images").append(html);
    }

    $("#box").dmUploader({
        url: "php/uploadImage.php",
        fileName: 'file',
        allowedTypes: 'image/*',
        onNewFile: function(id, file) {
            $("#progress").append("<div id='pdiv" + id + "' class='progressdiv'><span class='progressname'>" + file.name + "</span><span id='pn" + id + "' class='progressbar'>0%</span></div>");
        },
        onUploadProgress: function(id, percent) {
            $("#pn" + id).html(percent + "%");
        },
        onUploadSuccess: function(id, data) {
            $("#pdiv" + id).remove();
            addImage(data);
        }
    });
})();

function imageFromURL(url) {
    if(!downloading) {
        downloading = true;
        $("#urltextbox").val("");
        var id = 0;
        $("#progress").append("<div id='pdiv" + id + "' class='progressdiv'><span class='progressname'>" + url + "</span><span id='pn" + id + "' class='progressbar'>0%</span></div>");
        $.post("php/downloadImage.php", {url: url}, function(data) {
            addImage(data);
            $("#pdiv" + id).remove();
            downloading = false;
        });
    }
}

function deleteImage(parent, image) {
        $.post("php/deleteImage.php", { image: image }, function() {
            parent.remove();
        });
    }