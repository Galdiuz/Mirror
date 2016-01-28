<?php
$text = $_POST['text'];
file_put_contents("text.txt", $text, LOCK_EX);
?>