<?php

$nombre = $_POST["nombre"];
$email = $_POST["email"];
$asunto = $_POST["asunto"];
$mensaje = $_POST["mensaje"];

$destinatario = "jyc.plasticos3d@gmail.com";

$header = "Enviado desde la web de J&C Impresiones 3D";

$mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre . "\n" . $email;

mail($destinatario, $asunto, $mensajeCompleto, $header);

echo "<script> alert('Correo enviado exitosamente') </script>";
echo "<script> setTimeout(\"location.href='../enviarCorreos.html'\", 1000) </script>";

?>