<?php
require_once(__DIR__ . "/../../config.php");
?>

<header>
    <div class="logoIProjects">
        <span class="IProyects-img"></span>
        <p class="mainName">IPROJECTS</p>
    </div>
    <div class="menu">
        <nav>
            <ul>
                <li>
                    <a href='<?php echo (APP_FOLDER . "/index.php") ?>'>Home</a>
                </li>
                <li>
                    <a href="#">Proyectos</a>
                </li>
                <li>
                    <a href="#">Ideas</a>
                </li>
                <li>
                    <a href="#">Crear sala</a>
                </li>
                <li hidden>
                    <a href="">Juegos</a>
                </li>
            </ul>
        </nav>
    </div>
    <div class="accessZone">
        <!-- <a href="/backend/alta.php">Iniciar sesión</a> -->
        <a href=' <?php echo (APP_FOLDER . "/backend/alta.php")?>'>Crear cuenta</a>
    </div>
</header>
<hr class="separador">