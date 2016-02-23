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

function deleteImage(parent, image) {
    $.post("php/deleteImage.php", { image: image }, function() {
        parent.remove();
    });
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