<?php
$text = $_POST['text'];
file_put_contents($_SERVER['DOCUMENT_ROOT'] . "/text.txt", $text, LOCK_EX);
?>