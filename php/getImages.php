<?php
$imagedir = $_SERVER['DOCUMENT_ROOT'] . "/images/";
$images = glob($imagedir . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);

foreach($images as &$img) {
    $img = str_replace($_SERVER['DOCUMENT_ROOT'] . "/images/", '', $img);
}

echo json_encode($images);
?>