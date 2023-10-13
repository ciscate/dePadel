//FUNCION PARA HACER SCROLL A LA SECCION DE CONTACTO
function scrollToSection(event) {
    // Previene el comportamiento predeterminado de un enlace cuando se hace clic en él.
    event.preventDefault();

    // Obtiene el identificador de la sección a la que se desea desplazar desde el atributo 'href' del enlace.
    const targetId = event.target.getAttribute('href');

    // Encuentra el elemento de destino en el DOM utilizando el identificador.
    const targetElement = document.querySelector(targetId);

    // Obtiene la posición vertical (offset desde la parte superior) del elemento de destino con respecto al documento.
    const targetOffset = targetElement.offsetTop;

    // Obtiene la posición vertical actual de la ventana del navegador.
    const startPosition = window.pageYOffset;

    // Calcula la distancia que se debe recorrer para llegar a la sección de destino.
    const distance = targetOffset - startPosition;

    // Establece la duración de la animación en milisegundos.
    const duration = 1300;

    // Inicializa la variable 'startTime' como 'null', se usará para realizar un seguimiento del tiempo transcurrido durante la animación.
    let startTime = null;

    // Define una función de animación que se ejecutará en cada cuadro de animación.
    function animation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }

        // Calcula la posición actual de desplazamiento en función del tiempo transcurrido.
        const timeElapsed = currentTime - startTime;
        const ease = Math.easeInOutQuad(timeElapsed, startPosition, distance, duration);

        // Realiza el desplazamiento de la ventana del navegador.
        window.scrollTo(0, ease);

        // Si el tiempo transcurrido es menor que la duración, solicita el siguiente cuadro de animación.
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    // Define una función de interpolación que suaviza el movimiento.
    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    // Inicia la animación llamando a 'requestAnimationFrame' y pasando la función 'animation'.
    requestAnimationFrame(animation);
}

