<?php
// Verificar si se han enviado datos por el formulario
if(isset($_POST['nombre']) && isset($_POST['email'])){
    // Procesar los datos recibidos
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    
    // Hacer algún procesamiento (puede ser guardar en la base de datos, enviar por correo, etc.)
    
    // Redirigir de vuelta al archivo principal (index.php) con los datos procesados
    header("Location: index.php?nombre=$nombre&email=$email");
    exit();
} else {
    // Si no se enviaron los datos esperados, redirigir al formulario
    header("Location: index.php");
    exit();
}
?>
