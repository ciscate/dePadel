//FUNCION PARA RECIBIR LOS MENSAJES DE LA SECCION DE CONTACTO

// Obtener el elemento de botón con el ID 'button'.
const btn = document.getElementById('button');

// Agregar un manejador de eventos al formulario con el ID 'form' para interceptar su envío.
document.getElementById('form').addEventListener('submit', function (event) {
  // Prevenir el comportamiento predeterminado del formulario que es enviarlo por HTTP.
  event.preventDefault();

  // Cambiar el valor del botón a 'Enviando...' para indicar que se está procesando la solicitud.
  btn.value = 'Enviando...';

  // Definir el ID del servicio y el ID de la plantilla de EmailJS.
  const serviceID = 'default_service';
  const templateID = 'template_zekakup';

  // Enviar el formulario utilizando EmailJS.
  emailjs
    .sendForm(serviceID, templateID, this)
    .then(
      () => {
        // Cuando el envío del formulario sea exitoso, se ejecuta esta función.
        // Cambiar el valor del botón de vuelta a 'Enviar'.
        btn.value = 'Enviar';
        // Mostrar una alerta indicando que el mensaje se envió con éxito.
        alert('El mensaje se envió con éxito, alguien del staff le responderá a la brevedad.');
      },
      (err) => {
        // Cuando hay un error en el envío del formulario, se ejecuta esta función.
        // Cambiar el valor del botón de vuelta a 'Enviar'.
        btn.value = 'Enviar';
        // Mostrar una alerta que contiene detalles del error.
        alert(JSON.stringify(err));
      }
    );
});

