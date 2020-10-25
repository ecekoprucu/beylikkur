<?php
// requires php5+
// create directory
if (!file_exists('images/')) {
    mkdir('images/', 0777, true);
}
define('UPLOAD_DIR', 'images/');
$img = $_POST['imgBase64'];
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$data = base64_decode($img);
$file = UPLOAD_DIR . uniqid() . '.png';
$success = file_put_contents($file, $data);
print $success ? $file : 'Unable to save the file.';
?>