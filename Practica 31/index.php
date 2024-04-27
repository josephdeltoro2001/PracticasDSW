<!-- Del Toro Cruz Joseph Vladimir -->
<?php
$servidor = "localhost";
$usuario = "root";
$clave = "";
$bd = "registrocontactos";

$conexion = mysqli_connect ($servidor, $usuario, $clave, $bd);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registro contactos</title>
</head>
<body>
    <form action="#" name="registrocontactos" method="post">
        <input type="text" name="Nombre" placeholder="nombre">
        <input type="text" name="Telefono" placeholder="telefono">
        <input type="text" name="Correo" placeholder="correo">
        <input type="text" name="Comentarios" placeholder="comentarios">

        <input type="submit" name="registro" value="Submit Query">
    </form>
</body>

<?php
if(isset($_POST['registro'])){
    $nombre = $_POST['Nombre'];
    $telefono = $_POST['Telefono'];
    $correo = $_POST['Correo'];
    $comentarios = $_POST['Comentarios'];

    $guardar = "INSERT INTO contactos VALUES ('$nombre', '$telefono', '$correo', '$comentarios', '')";

    $ejecutar = mysqli_query ($conexion, $guardar);
}
?>

</html>