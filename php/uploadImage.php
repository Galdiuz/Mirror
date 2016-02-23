<?php
include("makeThumbnail.php");

$file = $_FILES['file'];

$path = $_SERVER['DOCUMENT_ROOT'] . "/images/";
$thumbpath = $path . "/thumbs/";

if (!file_exists($path)) {
    mkdir($path, 0777, true);
}
if (!file_exists($thumbpath)) {
    mkdir($thumbpath, 0777, true);
}


if(move_uploaded_file($file['tmp_name'], $path . $file['name'])) {
    makeThumbnail($path . $file['name'], $thumbpath . $file['name']);
    echo $file['name'];
}



?>