<?php
include("makeThumbnail.php");

$url = $_POST['url'];
$filename = basename($url);

$path = $_SERVER['DOCUMENT_ROOT'] . "/images/";
$thumbpath = $path . "/thumbs/";

if (!file_exists($path)) {
    mkdir($path, 0777, true);
}
if (!file_exists($thumbpath)) {
    mkdir($thumbpath, 0777, true);
}

$file = file_get_contents($url);
file_put_contents($path . $filename, $file);

makeThumbnail($path . $filename, $thumbpath . $filename);

echo $filename;
?>