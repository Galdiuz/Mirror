<?php
$text = file_get_contents($_SERVER['DOCUMENT_ROOT'] . "/text.txt");
if($text !== FALSE) {
    echo htmlspecialchars($text);
}
else {
    echo "";
}
?>