<?php
$email = 'bil@mail.com';
$password = 'password';

$to = 'biloholovskyi@gmail.com';
$subject = 'Вы добавленны к курсу по изучению английского языка';
$message = 'Ваши данные для входа:'
  . "\r\n" .'Email: '.$email
  . "\r\n" .'Пароль: '.$password;
$headers = 'From: some@i-teacher.ru' . "\r\n" .
  'Reply-To: some@i-teacher.ru' . "\r\n" .
  'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

die('mail send');