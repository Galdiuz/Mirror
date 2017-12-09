<?php
function makeThumbnail($img, $dst) {
    $width = 300;
    $height = 250;
    $imgdetails = getimagesize($img);
    $ow = $imgdetails[0];
    $oh = $imgdetails[1];
    $perc = $height / $width;
    if ($ow * $perc > $oh) {
        $nw = intval($ow * $height / $oh);
        $nh = $height;
    }
    else {
        $nw = $width;
        $nh = intval($oh * $width / $ow);
    }
    $dest_x = intval(($width - $nw) / 2);
    $dest_y = intval(($height - $nh) / 2);

    $imgt = null;
    if ($imgdetails[2] == 1) {
        $imgt = "imagegif";
        $createfrom = "imagecreatefromgif";
    } elseif ($imgdetails[2] == 2) {
        $imgt = "imagejpeg";
        $createfrom = "imagecreatefromjpeg";
    } elseif ($imgdetails[2] == 3) {
        $imgt = "imagepng";
        $createfrom = "imagecreatefrompng";
    }
    if ($imgt) {
        $old_image = $createfrom($img);
        $new_image = imagecreatetruecolor($width, $height);
        imagecopyresampled($new_image, $old_image, $dest_x, $dest_y, 0, 0, $nw, $nh, $ow, $oh);
        $imgt($new_image, $dst);
    }
}
