<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>
<body>
    <h2>Llenar el formulario</h2>
    <form action="procesar.php" method="POST">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre"><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
        <input type="submit" value="Enviar">
    </form>
    <?php
    // Mostrar los datos devueltos por el archivo procesar.php
    if(isset($_GET['nombre']) && isset($_GET['email'])){
        echo "<h2>Datos recibidos:</h2>";
        echo "<p>Nombre: ".$_GET['nombre']."</p>";
        echo "<p>Email: ".$_GET['email']."</p>";
    }
    ?>
</body>
</html>