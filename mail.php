<?php

$name = $_POST['name'];

$email = $_POST['email'];

$subject = $_POST['subject'];

$message = $_POST['message'];

$from = "CONTACT_BOT"; //Nie polecam dawac spacji tylko podlogi :v

$to = "mail"; //na jaki mail ma przyjsc wiadomosc

$text = "";
$text .= "Name / Company name:\n" . $name . "\n\n";
$text .= "E-mail:\n" . $email . "\n\n";
$text .= "Message:\n" . $message . "\n\n";

$success = mail($to, $subject, $text, "From: <$from>");

if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=success.php\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.php\">";
}
?>
