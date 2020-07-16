<?php


$name = $_POST["name"];
$email = $_POST["email"]
$subject = $_POST["subject"];
$message = $_POST["message"];

mail("bugrabesen@gmail.com",$subject, $message, "From: ".$email);



?>