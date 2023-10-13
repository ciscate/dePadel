const cookieValue = document.cookie.split('; ')
    .find(row => row.startsWith('miDato='))
    .split('=')[1];


let baseUrl = "http://localhost:8080/jugador";

let jugadores = [];





document.addEventListener("DOMContentLoaded", traerJugadorPorUsername());







// Esta función se utiliza para obtener y mostrar la información de un jugador por su nombre de usuario.
function traerJugadorPorUsername() {
    // Obtener el contenedor HTML donde se mostrará la información del jugador.
    let container = document.getElementById("containerPerfil");
    // Borrar el contenido actual del contenedor.
    container.innerHTML = "";

    // Obtener el nombre de usuario del jugador desde una cookie o variable llamada "cookieValue".
    const username = cookieValue;

    // Realizar una solicitud (fetch) al servidor para obtener los datos del jugador utilizando su nombre de usuario.
    fetch(baseUrl + `/traer/username/${username}`)
        .then(res => {
            // Procesar la respuesta como JSON.
            res.json()
                .then(json => {
                    // Asignar los datos del jugador al objeto "jugadores".
                    jugadores = json;

                    // Recorrer las propiedades del objeto "jugadores" (datos del jugador).
                    for (let propiedad in jugadores) {
                        if (jugadores.hasOwnProperty(propiedad)) {
                            // Mostrar la información del jugador en el contenedor utilizando la función "mapearJugador".
                            container.innerHTML = mapearJugador(jugadores);
                        }
                    }
                });
        });
}

/*
// Esta función se utiliza para obtener y mostrar la información de un jugador por su nombre de usuario.
function traerJugadorPorUsername() {
    // Obtener el contenedor HTML donde se mostrará la información del jugador.
    let container = document.getElementById("containerPerfil");
    // Borrar el contenido actual del contenedor.
    container.innerHTML = "";

    // Obtener el nombre de usuario del jugador desde una cookie o variable llamada "cookieValue".
    const username = cookieValue;

    // Realizar una solicitud (fetch) al servidor para obtener los datos del jugador utilizando su nombre de usuario.
    fetch(baseUrl + `/traer/username/${username}`)
        .then(res => {
            // Procesar la respuesta como JSON.
            return res.json();
        })
        .then(json => {
            // Asignar los datos del jugador al objeto "jugadores".
            jugadores = json;


            // Crear un elemento div para almacenar la información del jugador.
            const jugadorDiv = document.createElement("div");

            // Recorrer las propiedades del objeto "jugadores" (datos del jugador).
            for (let propiedad in jugadores) {
                if (jugadores.hasOwnProperty(propiedad)) {
                    // Crear un elemento p para cada propiedad y su valor.
                    const p = document.createElement("p");
                    p.textContent = `${propiedad}: ${jugadores[propiedad]}`;
                    
                    // Agregar el elemento p al div del jugador.
                    jugadorDiv.appendChild(p);
                }
            }

            // Agregar el div del jugador al contenedor.
            container.appendChild(jugadorDiv);
        })
        .catch(error => {
            // Manejar errores aquí, por ejemplo, mostrar un mensaje de error al usuario.
            console.error("Error al obtener los datos del jugador:", error);
        });
}
*/









// Esta función se utiliza para mapear los datos de un jugador a una representación HTML.
function mapearJugador(jugador) {
    // Generar una representación HTML de la información del jugador.
    return ` <div class="perfil-container">
    <div class="img-container">
        <img src="${jugador.imagenPerfil}" alt="img-perfil">
    </div>
    <div>
        <h2>${jugador.nombre} ${jugador.apellido}</h2>
    </div>
    <div class="container-categoria-posicion">
        <h2> Cat ${jugador.categoria}</h2>
        <h2>${jugador.posicion}</h2>
    </div>
    <div class="container-ranking-puntos">
        <h2>${jugador.puntosRanking} Puntos</h2>
    </div>
    <div class="container-medallas">
        <h2>${jugador.torneosGanados}<img src="./assets/medalla-de-oro.png" alt="medalla-de-oro"></h2>
    </div>
    <div class="container-puntos-oro">
        <h2>${jugador.monedasOro} <img src="./assets/monedas.png" alt="monedas"></h2>
    </div>`;
}









// Esta función se utiliza para cerrar la sesión de un usuario.
function cerrarSesion() {
    // Elimina la cookie llamada "miDato" estableciendo su fecha de caducidad en el pasado.
    document.cookie = 'miDato=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';

    // Redirige al usuario a la página de inicio de sesión (u otra página de inicio).
    window.location.href = "http://127.0.0.1:5500/iniciarSesion.html";
}




