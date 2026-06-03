// Funciones de Navegación para mostrar el contenido dinámico
function navigate(pageId) {
    const contentDisplay = document.getElementById('content-display');
    const contentTitle = document.getElementById('content-title');
    const contentBody = document.getElementById('content-body');
    const formContainer = document.getElementById('form-container');

    // Ocultar el formulario si no estamos en 'registro'
    if (pageId === 'register') {
        formContainer.style.display = 'block';
        contentDisplay.style.display = 'none';
    } else {
        formContainer.style.display = 'none';
        contentDisplay.style.display = 'block';
    }

    // Actualizar el contenido según el botón presionado
    switch (pageId) {
        case 'home':
            contentTitle.innerText = "Página de Inicio";
            contentBody.innerText = "Bienvenido a nuestra plataforma principal. Aquí encontrarás las últimas novedades y noticias.";
            break;
        case 'about':
            contentTitle.innerText = "Sobre Nosotros";
            contentBody.innerText = "Somos una empresa dedicada a la innovación tecnológica. Conoce nuestra historia, visión y equipo de expertos.";
            break;
        case 'products':
            contentTitle.innerText = "Nuestros Productos";
            contentBody.innerText = "Explora nuestro catálogo de productos diseñados para optimizar tu flujo de trabajo. Desde software avanzado hasta soluciones de hardware.";
            break;
        case 'contact':
            contentTitle.innerText = "Contáctanos";
            contentBody.innerText = "Estamos aquí para ayudarte. Ponte en contacto con nosotros a través de nuestro formulario o por correo electrónico.";
            break;
        // La sección 'register' no necesita actualizar el contenido dinámico porque muestra el formulario
    }
}