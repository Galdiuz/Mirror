<?php
$image = $_POST['image'];

unlink($_SERVER['DOCUMENT_ROOT'] . "/images/" . $image);
unlink($_SERVER['DOCUMENT_ROOT'] . "/images/thumbs/" . $image);

echo $image;
?>