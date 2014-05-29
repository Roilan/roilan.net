<?php

//Store your set values as variables here.
$to      = 'roilans@tragicservers.com'; 
$subject = 'Inquiry from'; //This can be preset or created based on form data entered

//Store your POST form data as variables here. 
$name       = $_POST['inputName']; 
$message    = $_POST['inputMessage'];
$email_from = $_POST["inputEmail"];

//Modify additional data as need.
$subject =  $subject . " $name";
$message = wordwrap($message, 70, "\r\n");
$headers = 'From: ' . $email_from  . "\r\n";  //Add additional headers as needed

// Try to Send Mail 
$send_contact = mail($to, $subject, $message, $headers);

// Check if message sent to your email 
if($send_contact) { 
header('Location: index.html#sent');
exit(); 
}
else { echo "Error"; }

?>
