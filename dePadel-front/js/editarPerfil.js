const cookieValue = document.cookie.split('; ')
    .find(row => row.startsWith('miDato='))
    .split('=')[1];


let baseUrl = "http://localhost:8080/jugador";

let jugadores= [];







// Esta función se utiliza para obtener un jugador por su nombre de usuario, realizar una modificación y redirigir al usuario.
function traerJugadorPorUsername() {
  // Obtener el nombre de usuario almacenado en una variable llamada cookieValue.
  const username = cookieValue;

  // Realizar una solicitud (fetch) para obtener información del jugador por su nombre de usuario utilizando una URL compuesta.
  fetch(baseUrl + `/traer/username/${username}`)
      .then(res => {
          if (res.status === 200) {
              // Si la solicitud es exitosa (código de estado 200), procesar la respuesta como JSON.
              return res.json();
          } else {
              // Si la solicitud no es exitosa, mostrar una alerta de error y registrar detalles en la consola.
              alert("Hubo un error al obtener la información del jugador");
              console.error(res);
              throw new Error("Error al obtener la información del jugador");
          }
      })
      .then(json => {
          // Almacenar la información del jugador en una variable llamada jugadores.
          const jugadores = json;

          // Obtener el ID del jugador como un número.
          const id = Number(jugadores.numDocumento);

          // Llamar a la función modificarJugador() con el ID del jugador.
          modificarJugador(id);

          // Mostrar una alerta de éxito y redirigir al usuario a la página de perfil.
          alert("El jugador fue modificado exitosamente");
          window.location.href = "http://127.0.0.1:5500/perfil.html";
      })
      .catch(error => {
          // Capturar y manejar cualquier error que pueda ocurrir durante la solicitud o el procesamiento de la respuesta.
          console.error(error);
      });
}


function manejarError(error) {
    // Mostrar una alerta de error genérica al usuario.
    alert("Hubo un error en la operación. Por favor, intenta de nuevo más tarde.");
    console.error(error);
}


/*
// Esta función se utiliza para modificar la información de un jugador por su ID.
function modificarJugador(id) {
  // Obtener los valores del formulario.
  let nombre = document.getElementById("nombreJugador").value;
  let apellido = document.getElementById("apellidoJugador").value;
  let celular = Number(document.getElementById("celularJugador").value);
  let posicion = document.getElementById("posicionJugador").value;
  let genero = document.getElementById("generoJugador").value;

  // Crear un objeto de datos que contiene la información a modificar.
  let data = {
      "nombre": nombre,
      "apellido": apellido,
      "posicion": posicion,
      "genero": genero,
      "numeroTelefono": celular
  };

  // Realizar una solicitud (fetch) para modificar la información del jugador por su ID.
  fetch(baseUrl + '/modificar/' + id, {
      method: "POST", // Utilizar el método HTTP POST para enviar datos.
      headers: {
          "Content-type": 'application/json' // Especificar el tipo de contenido como JSON.
      },
      body: JSON.stringify(data) // Convertir los datos a formato JSON y enviarlos en el cuerpo de la solicitud.
  }).then(res => {
      if (res.status === 200) {
          // Si la operación es exitosa (código de estado 200), redirigir al usuario a la página de perfil.
          window.location.href = "http://127.0.0.1:5500/perfil.html";
      } else {
          // Si hay un error, mostrar una alerta de error y registrar detalles en la consola.
          alert("Hubo un error al modificar el jugador");
          console.error(res);
      }
  });
}
*/

function manejarError(error) {
    // Mostrar una alerta de error genérica al usuario.
    alert("Hubo un error en la operación. Por favor, intenta de nuevo más tarde.");
    console.error(error);
}

function modificarJugador(id) {
    // Obtener los valores del formulario.
    let nombre = document.getElementById("nombreJugador").value;
    let apellido = document.getElementById("apellidoJugador").value;
    let celular = document.getElementById("celularJugador").value;
    let posicion = document.getElementById("posicionJugador").value;
    let genero = document.getElementById("generoJugador").value;

    // Realizar una validación de entrada más completa (por ejemplo, verificar si los campos obligatorios están llenos).

    // Crear un objeto de datos que contiene la información a modificar.
    let data = {
        "nombre": nombre,
        "apellido": apellido,
        "posicion": posicion,
        "genero": genero,
        "numeroTelefono": celular
    };

    // Realizar una solicitud (fetch) para modificar la información del jugador por su ID.
    fetch(baseUrl + '/modificar/' + id, {
        method: "POST", // Utilizar el método HTTP POST para enviar datos.
        headers: {
            "Content-type": 'application/json' // Especificar el tipo de contenido como JSON.
        },
        body: JSON.stringify(data) // Convertir los datos a formato JSON y enviarlos en el cuerpo de la solicitud.
    })
    .then(res => {
        if (res.status === 200) {
            // Si la operación es exitosa (código de estado 200), mostrar un mensaje de éxito.
            console.log(res)
            // Redirigir al usuario a la página de perfil o realizar otras acciones necesarias.
        } else {
            // Si hay un error, lanzar un error para activar el catch.
            throw new Error("Hubo un error al modificar el jugador");
        }
    })
    .catch(error => {
        // Capturar y manejar cualquier error que pueda ocurrir durante la solicitud o el procesamiento de la respuesta.
        manejarError(error);
    });
}


  


// Esta función se utiliza para prevenir el comportamiento predeterminado de un evento.
function preventDef(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del evento.
}



/*
// Esta función se utiliza para validar un formulario antes de enviarlo.
function validateForm() {
  // Obtener los valores de los campos del formulario.
  let nombre = document.getElementById("nombreJugador").value;
  let apellido = document.getElementById("apellidoJugador").value;
  let celular = document.getElementById("celularJugador").value;
  let posicion = document.getElementById("posicionJugador").value;
  let imagen = document.getElementById("imagenJugador").value;
  let genero = document.getElementById("generoJugador").value;

  // Validar que el campo "genero" no esté vacío.
  if (genero === "") {
      alert("El campo genero no debe estar vacío.");
      return false;
  }

  // Validar que el campo "nombre" no esté vacío y contenga solo letras válidas.
  if (!/^[a-zA-ZÀ-ÿ]{4,20}$/.test(nombre)) {
      alert("El nombre ingresado no es válido. Debe contener al menos 4 letras.");
      return false;
  }

  // Validar que el campo "apellido" no esté vacío y contenga solo letras válidas.
  if (!/^[a-zA-ZÀ-ÿ]{4,20}$/.test(apellido)) {
      alert("El apellido ingresado no es válido. Debe contener al menos 4 letras.");
      return false;
  }

  // Validar que el campo "celular" no esté vacío y cumpla con un formato de número de teléfono válido.
  if (!/^(?:(?:00)?549?)?0?(?:11\d{8})$/.test(celular)) {
      alert("Ingrese un número de teléfono válido. Ejemplo: 1123456789.");
      return false;
  }

  // Validar que el campo "posicion" no esté vacío.
  if (posicion === "") {
      alert("El campo posicion no debe estar vacío.");
      return false;
  }

  // Validar que el campo "imagen" no esté vacío.
  if (imagen === "") {
      alert("El campo imagen no debe estar vacío.");
      return false;
  }

  // Si todas las validaciones pasan, se considera que el formulario es válido.
  return true;
}
*/

function validateForm() {
    function validarCampo(valor, nombreCampo, regex) {
        if (!valor.trim()) {
            alert(`El campo ${nombreCampo} no debe estar vacío.`);
            return false;
        }
        if (!regex.test(valor)) {
            alert(`El campo ${nombreCampo} no es válido.`);
            return false;
        }
        return true;
    }

    const nombre = document.getElementById("nombreJugador").value;
    const apellido = document.getElementById("apellidoJugador").value;
    const celular = document.getElementById("celularJugador").value;
    const posicion = document.getElementById("posicionJugador").value;

    const genero = document.getElementById("generoJugador").value;

    const nombreRegex = /^[a-zA-ZÀ-ÿ\s']{4,20}$/;
    const celularRegex = /^\d{10}$/;

    if (
        validarCampo(genero, "género", /.+/) &&
        validarCampo(nombre, "nombre", nombreRegex) &&
        validarCampo(apellido, "apellido", nombreRegex) &&
        validarCampo(celular, "celular", celularRegex) &&
        validarCampo(posicion, "posición", /.+/)

    ) {
        traerJugadorPorUsername()
        return true;
        
    }

    return false;
}




