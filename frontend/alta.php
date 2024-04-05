<?php
session_start();

if (isset($_SESSION["errorEmail"])) {
    $errorEmail = $_SESSION["errorEmail"];
}

if (isset($_SESSION["errorPassword"])) {
    $errorPassword = $_SESSION["errorPassword"];
}

if (isset($_SESSION["errorFichero"])) {
    $errorFichero = $_SESSION["errorFichero"];
}

if (isset($_SESSION["datosOK"])) {
    $datosOK = $_SESSION["datosOK"];
}

?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/principal.css">
    <link rel="stylesheet" href="styles/alta.css">
    <script src="scripts/alta.js"></script>
    <script src="https://accounts.google.com/gsi/client" async></script>
    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    <link rel="icon" type="image/x-icon" href="assets/img/favicon2.png">
    <title>Alta usuarios</title>
</head>

<body>
    <?php include "../frontend/assets/menu.php"; ?>
    <main>
        <h1>Regístrate</h1>
        <hr class="sep">
    <div class="alta-wrapper">
            <form action="" method="post" enctype="multipart/form-data">
                <div class="group">
                    <input type="text" name="nombre" id="nombre" value="<?php echo !empty($_SESSION['usuario']) ? $_SESSION["usuario"]["nombre"] : ''; ?>">
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label for="nombre">Nombre</label>
                </div>
                    
                <div class="group">
                    <input type="text" name="apellido1" id="apellido1" value="<?php echo !empty($_SESSION['usuario']) ? $_SESSION["usuario"]["apellido1"] : ''; ?>">
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label for="apellido1">Primer apellido</label>
                </div>

                <div class="group">
                    <input type="text" name="apellido2" id="apellido2" value="<?php echo !empty($_SESSION['usuario']) ? $_SESSION["usuario"]["apellido2"] : ''; ?>">
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label for="apellido2">Segundo apellido</label>
                </div>

                <div class="group">
                    <input type="text" name="email" id="email" value="<?php echo !empty($_SESSION['usuario']) ? $_SESSION["usuario"]["email"] : ''; ?>">
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label for="email">*Email</label>
                </div>

                <div class="group">
                    <input class="pass" type="password" name="password" id="password" value="<?php echo !empty($_SESSION['usuario']) ? $_SESSION["usuario"]["password"] : ''; ?>">
                    <i class="bx bx-show-alt"></i>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label for="password">*Contraseña</label>
                </div>

                <div class="group">
                    <input type="password" name="password2" id="password2">
                    <label for="password2">*Repite contraseña</label>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                </div>
                
                <div>
                    <div class="drop-area">
                        <h2>Arrastra y suelta tu imágen</h2>
                        <button type="button">Seleccionar imágen</button>
                        <input type="file" name="" id="input-file" style="visibility: hidden; display:none" />
                    </div>
                    <div id="preview">
    
                    </div>
                </div>

                <p><button type="submit" class="btn btn-submit" name="submit" value="alta">Enviar</button></p>
            </form>
        </div>



        <?php
        if (isset($errorEmail)) {
            print "<p class='error'>$errorEmail</p>";
        }
        if (isset($errorPassword)) {
            print "<p class='error'>$errorPassword</p>";
        }
        if (isset($errorFichero)) {
            print "<p class='error'>$errorFichero</p>";
        }

        if (isset($datosOK) && $datosOK == true) {
            print "<p class='exito fade-in-out'>Alta de usuario correcta</p>";
            unset($_SESSION["datosOK"]);
        }

        ?>
    </main>
</body>
</html>