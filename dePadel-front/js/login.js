let baseUrl = "http://localhost:8080/auth";


// Esta función se utiliza para manejar el inicio de sesión de un jugador.
function login() {
    // Obtener el nombre de usuario y contraseña ingresados por el usuario.
    let username = document.getElementById("emailJugador").value;
    let password = document.getElementById("passwordJugador").value;

    // Crear un objeto de datos que contiene el nombre de usuario y contraseña.
    let data = {
        "username": username,
        "password": password
    };

    // Realizar una solicitud (fetch) para iniciar sesión enviando los datos de usuario y contraseña al servidor.
    fetch(baseUrl + '/login', {
        method: "POST", // Utilizar el método HTTP POST para enviar datos.
        headers: {
            "Content-type": 'application/json' // Especificar el tipo de contenido como JSON.
        },
        body: JSON.stringify(data) // Convertir los datos a formato JSON y enviarlos en el cuerpo de la solicitud.
    }).then(res => {
        if (res.status === 200) {
            // Si el inicio de sesión es exitoso (código de estado 200), se establece una cookie con el nombre de usuario.
            document.cookie = `miDato=${username}`;
            // Llamar a la función traerRoljugador() para obtener el rol del jugador.
            return traerRoljugador(username);
        } else {
            // Si hay un error en el inicio de sesión, mostrar una alerta de error y registrar detalles en la consola.
            alert("Hubo un error al iniciar sesión, verifique sus credenciales");
            console.error(res);
            throw new Error("Error al iniciar sesión");
        }
    }).then(rol => {
        if (rol === "ADMIN") {
            // Si el rol es "ADMIN", mostrar una alerta de bienvenida y redirigir al usuario a la página de administrador.
            alert("¡Bienvenido, ADMIN!");
            window.location.href = "http://127.0.0.1:5500/admin.html";
        } else {
            // Si el rol no es "ADMIN", mostrar una alerta de inicio de sesión exitoso y redirigir al usuario a la página de perfil.
            alert("Inicio de sesión exitoso");
            window.location.href = "http://127.0.0.1:5500/perfil.html";
        }
    }).catch(error => {
        // Capturar y manejar cualquier error que pueda ocurrir durante la solicitud o el procesamiento de la respuesta.
        console.error(error);
    });
}

/*
async function login() {
    try {
        const username = document.getElementById("emailJugador").value;
        const password = document.getElementById("passwordJugador").value;

        const data = {
            "username": username,
            "password": password
        };

        const response = await fetch(baseUrl + '/login', {
            method: "POST",
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.status === 200) {
            const rol = await traerRoljugador(username);
            if (rol === "ADMIN") {
                alert("¡Bienvenido, ADMIN!");
                window.location.href = "http://127.0.0.1:5500/admin.html";
            } else {
                alert("Inicio de sesión exitoso");
                window.location.href = "http://127.0.0.1:5500/perfil.html";
            }
        } else {
            const errorMessage = await response.text();
            alert("Hubo un error al iniciar sesión: " + errorMessage);
            console.error(errorMessage);
        }
    } catch (error) {
        console.error(error);
        alert("Hubo un error al iniciar sesión. Por favor, inténtelo de nuevo más tarde.");
    }
}
*/



// Esta función se utiliza para obtener el rol de un jugador a partir de su nombre de usuario.
function traerRoljugador(username) {
    // Retorna una nueva promesa que manejará la solicitud asíncrona.
    return new Promise((resolve, reject) => {
        // Realizar una solicitud (fetch) para obtener el rol del jugador utilizando su nombre de usuario.
        fetch("http://localhost:8080/jugador/traer/rol/" + username)
            .then(res => {
                if (res.status === 200) {
                    // Si la solicitud es exitosa (código de estado 200), leer la respuesta como texto.
                    res.text()
                        .then(rol => {
                            // Resuelve la promesa con la cadena del rol.
                            resolve(rol);
                        })
                        .catch(error => {
                            console.error("Error al obtener el rol del jugador:", error);
                            // Rechaza la promesa con el error.
                            reject(error);
                        });
                } else {
                    console.error("Error al obtener el rol del jugador. Estado de respuesta:", res.status);
                    // Rechaza la promesa con un mensaje de error.
                    reject("Error en la solicitud");
                }
            })
            .catch(error => {
                console.error("Error en la solicitud:", error);
                // Rechaza la promesa con el error.
                reject(error);
            });
    });
}

/*
async function traerRoljugador(username) {
    try {
        const response = await fetch('http://localhost:8080/jugador/traer/rol/' + username);

        if (response.status === 200) {
            const rol = await response.text();
            return rol;
        } else {
            console.error("Error al obtener el rol del jugador. Estado de respuesta:", response.status);
            throw new Error("Error en la solicitud");
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
        throw error;
    }
}*/





// Esta función se utiliza para prevenir el comportamiento predeterminado de un evento.
function preventDef(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del evento.
}



// Esta función se utiliza para obtener información de un jugador por su nombre de usuario.
function traerJugadorPorUsername(username) {
    // Realizar una solicitud (fetch) al servidor para obtener los datos del jugador utilizando su nombre de usuario.
    fetch("http://localhost:8080/jugador/traer/username/" + username)
        .then(res => {
            // Procesar la respuesta como JSON.
            res.json()
                .then(json => {
                    // Asignar los datos del jugador al objeto "jugadores".
                    jugadores = json;
                    // En este punto, los datos del jugador están disponibles en la variable "jugadores".
                    // Sin embargo, no se realiza ninguna acción con estos datos en esta función.
                });
        });
}

/*
function traerJugadorPorUsername(username) {
    return new Promise((resolve, reject) => {
        // Realizar una solicitud (fetch) al servidor para obtener los datos del jugador utilizando su nombre de usuario.
        fetch(baseUrl + '/jugador/traer/username/' + username)
            .then(res => {
                // Verificar si la solicitud fue exitosa.
                if (res.status === 200) {
                    // Procesar la respuesta como JSON y resolver la promesa con los datos del jugador.
                    res.json()
                        .then(json => {
                            resolve(json);
                        })
                        .catch(error => {
                            console.error("Error al procesar la respuesta JSON:", error);
                            reject(error);
                        });
                } else {
                    console.error("Error al obtener los datos del jugador. Estado de respuesta:", res.status);
                    reject("Error en la solicitud");
                }
            })
            .catch(error => {
                console.error("Error en la solicitud:", error);
                reject(error);
            });
    });
}
*/











