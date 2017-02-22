<?php
$to = 'sayan21071995@gmail.com';
$subject = 'Test email'; 
$message = "Hello World!\n\nThis is my first mail."; 
$headers = "From: sm4u2107@gmail.com\r\nReply-To: sm4u2107@gmail.com";
$mail_sent = @mail( $to, $subject, $message, $headers );
echo $mail_sent ? "Mail sent" : "Mail failed";
 ?>