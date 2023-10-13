let baseUrl = "http://localhost:8080/auth";


// Esta función crea un nuevo jugador enviando una solicitud al servidor con los datos del formulario.
function crearJugador() {
  // Obtén los valores del formulario.
  let nombre = document.getElementById("nombreJugador").value;
  let apellido = document.getElementById("apellidoJugador").value;
  let dni = Number(document.getElementById("dniJugador").value);
  let username = document.getElementById("emailJugador").value;
  let contraseña = document.getElementById("contraseñaJugador").value;
  let celular = document.getElementById("celularJugador").value;
  let posicion = document.getElementById("posicionJugador").value;
  let categoria = Number(document.getElementById("categoriaJugador").value);
  let genero = document.getElementById("generoJugador").value;
  
  // Crea el objeto de datos con la información del nuevo jugador.
  let data = {
    "numDocumento": dni,
    "nombre": nombre,
    "apellido": apellido,
    "password": contraseña,
    "posicion": posicion,
    "genero" : genero,
    "imagenPerfil": "https://i.postimg.cc/mDFHQfV8/user.png",
    "username": username,
    "numeroTelefono": celular,
    "categoria": categoria,
    "puntosRanking": 0,
    "torneosGanados": 0,
    "monedasOro": 0,
    "eloRanking": 0,
    "estaSuscripto": false,
    "rol" : "USER" 
  };

  // Envía los datos al servidor.
  fetch(baseUrl + '/register', {
    method: "POST",
    headers: {  
      "Content-type": 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => {
    // Maneja la respuesta del servidor.
    if (res.status === 200) {
      // El jugador se creó exitosamente.
      alert("El jugador fue creado exitosamente");
      
      window.location.href = "http://127.0.0.1:5500/iniciarSesion.html";
      console.log(res);
    } else {
      // Hubo un error al crear el jugador.
      alert("Hubo un error al crear el jugador");
      console.error(res);
    }
  });
}


// Esta función previene el comportamiento predeterminado de un evento.
function preventDef(event) {
  event.preventDefault();
}



/*
function validateForm() {
  // Obtener los valores de los campos del formulario.
  let nombre = document.getElementById("nombreJugador").value;
  let username = document.getElementById("emailJugador").value;
  let apellido = document.getElementById("apellidoJugador").value;
  let dni = document.getElementById("dniJugador").value;
  let contraseña = document.getElementById("contraseñaJugador").value;
  let celular = document.getElementById("celularJugador").value;
  let posicion = document.getElementById("posicionJugador").value;
  let categoria = document.getElementById("categoriaJugador").value;
  let genero = document.getElementById("generoJugador").value;

  // Validar que el campo nombre no esté vacío.
  if (nombre == "") {
      alert("El campo nombre no debe estar vacío");
      return false;
  }

  // Validar que el campo apellido no esté vacío.
  if (apellido == "") {
      alert("El campo apellido no debe estar vacío");
      return false;
  }

  // Validar que el campo email no esté vacío.
  if (username == "") {
      alert("El campo email no debe estar vacío");
      return false;
  }

  // Validar que el campo DNI no esté vacío.
  if (dni == "") {
      alert("El campo DNI no debe estar vacío");
      return false;
  }

  // Validar que el campo contraseña no esté vacío.
  if (contraseña == "") {
      alert("El campo contraseña no debe estar vacío");
      return false;
  }

  // Validar que el campo celular no esté vacío.
  if (celular == "") {
      alert("El campo celular no debe estar vacío");
      return false;
  }

  // Validar que el campo género no esté vacío.
  if (genero == "") {
      alert("El campo género no debe estar vacío");
      return false;
  }

  // Validar que el campo posición no esté vacío.
  if (posicion == "") {
      alert("El campo posición no debe estar vacío");
      return false;
  }

  // Validar que el campo categoría no esté vacío.
  if (categoria == "") {
      alert("El campo categoría no debe estar vacío");
      return false;
  }

  // Validar el formato del DNI (8 dígitos numéricos).
  if (!/^[0-9]{8}$/.test(dni)) {
      alert("Ingrese un número de DNI válido, ejemplo: 30456789");
      return false;
  }

  // Validar la longitud y formato de la contraseña (al menos 4 letras y un número).
  if (!/^(?=.*[a-zA-Z0-9]).{8,20}$/.test(contraseña)) {
      alert("La contraseña debe tener al menos 4 letras y un número");
      return false;
  }

  // Validar el formato del número de celular (opcional: prefijo nacional y sin espacios).
  if (!/^(?:(?:00)?549?)?0?(?:11\d{8})$/.test(celular)) {
      alert("Ingrese un número de teléfono válido, ejemplo: 1123456789");
      return false;
  }

  // Validar el formato del nombre y apellido (solo letras y al menos 4 caracteres).
  if (!/^[a-zA-ZÀ-ÿ]{4,20}$/.test(nombre)) {
      alert("El nombre debe contener al menos 4 letras y no puede contener números");
      return false;
  }

  if (!/^[a-zA-ZÀ-ÿ]{4,20}$/.test(apellido)) {
      alert("El apellido debe contener al menos 4 letras y no puede contener números");
      return false;
  }

  // Validar el formato del correo electrónico.
  if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          username
      )
  ) {
      alert("El email ingresado no es válido, verifique que tenga el formato correcto: ejemplo@gmail.com");
      return false;
  }

  // Si todas las validaciones son exitosas, retorna true.
  return true;
}
*/

function validateForm() {
  // Obtener los valores de los campos del formulario.
  let nombre = document.getElementById("nombreJugador").value.trim();
  let username = document.getElementById("emailJugador").value.trim();
  let apellido = document.getElementById("apellidoJugador").value.trim();
  let dni = document.getElementById("dniJugador").value.trim();
  let contraseña = document.getElementById("contraseñaJugador").value.trim();
  let celular = document.getElementById("celularJugador").value.trim();
  let posicion = document.getElementById("posicionJugador").value.trim();
  let categoria = document.getElementById("categoriaJugador").value.trim();
  let genero = document.getElementById("generoJugador").value.trim();

  // Validar que los campos no estén vacíos.
  if (nombre === "") {
      alert("El campo nombre no debe estar vacío");
      return false;
  }

  if (apellido === "") {
      alert("El campo apellido no debe estar vacío");
      return false;
  }

  if (username === "") {
      alert("El campo email no debe estar vacío");
      return false;
  }

  if (dni === "") {
      alert("El campo DNI no debe estar vacío");
      return false;
  }

  if (contraseña === "") {
      alert("El campo contraseña no debe estar vacío");
      return false;
  }

  if (celular === "") {
      alert("El campo celular no debe estar vacío");
      return false;
  }

  if (genero === "") {
      alert("El campo género no debe estar vacío");
      return false;
  }

  if (posicion === "") {
      alert("El campo posición no debe estar vacío");
      return false;
  }

  if (categoria === "") {
      alert("El campo categoría no debe estar vacío");
      return false;
  }

  // Validar el formato del DNI (8 dígitos numéricos).
  if (!/^[0-9]{8}$/.test(dni)) {
      alert("Ingrese un número de DNI válido, ejemplo: 30456789");
      return false;
  }

  // Validar la longitud y formato de la contraseña (al menos 4 caracteres y al menos un número).
  if (!/^(?=.*[a-zA-Z])(?=.*\d).{4,}$/.test(contraseña)) {
      alert("La contraseña debe tener al menos 4 caracteres y contener al menos un número");
      return false;
  }

  // Validar el formato del número de celular (opcional: prefijo nacional y sin espacios).
  if (!/^(?:(?:00)?549?)?0?(?:11\d{8})$/.test(celular)) {
      alert("Ingrese un número de teléfono válido, ejemplo: 1123456789");
      return false;
  }

  // Validar el formato del nombre y apellido (solo letras y al menos 4 caracteres).
  if (!/^[a-zA-ZÀ-ÿ]{4,20}$/.test(nombre)) {
      alert("El nombre debe contener al menos 4 letras y no puede contener números");
      return false;
  }

  if (!/^[a-zA-ZÀ-ÿ]{4,20}$/.test(apellido)) {
      alert("El apellido debe contener al menos 4 letras y no puede contener números");
      return false;
  }

  // Validar el formato del correo electrónico.
  if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          username
      )
  ) {
      alert("El email ingresado no es válido, verifique que tenga el formato correcto: ejemplo@gmail.com");
      return false;
  }

  // Si todas las validaciones son exitosas, retorna true.
  return true;
}


