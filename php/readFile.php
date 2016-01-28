<?php
$text = file_get_contents("text.txt");
if($text !== FALSE) {
    echo htmlspecialchars($text);
}
else {
    echo "";
}
?>