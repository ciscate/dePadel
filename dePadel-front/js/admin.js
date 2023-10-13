const cookieValue = document.cookie.split('; ')
    .find(row => row.startsWith('miDato='))
    .split('=')[1];


let baseUrl = "http://localhost:8080/jugador";

let jugadores = [];

let jugadorEncontrado = [];



document.addEventListener("DOMContentLoaded", traerJugadorPorUsername());


// Esta función se encarga de traer información de un jugador por su nombre de usuario.
function traerJugadorPorUsername() {
    // Obtener el elemento HTML con el id "containerPerfil".
    let container = document.getElementById("containerPerfil");
    
    // Limpiar el contenido dentro del elemento HTML.
    container.innerHTML = "";

    // Obtener el nombre de usuario almacenado en una variable llamada cookieValue.
    const username = cookieValue;

    // Realizar una solicitud (fetch) para obtener información del jugador usando una URL compuesta.
    fetch(baseUrl + `/traer/username/${username}`)
        .then(res => {
            // Cuando la respuesta (res) esté disponible, procesarla como JSON.
            res.json()
                .then(json => {
                    // Almacenar la información del jugador en una variable llamada jugadores.
                    jugadores = json;

                    // Iterar a través de las propiedades del objeto jugadores.
                    for (let propiedad in jugadores) {
                        if (jugadores.hasOwnProperty(propiedad)) {
                            // Actualizar el contenido del contenedor con la información mapeada del jugador.
                            container.innerHTML = mapearJugador(jugadores);
                        }
                    }
                });
        });
}







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


// Esta función se utiliza para traer un jugador por su ID.
function traerJugadorPorId(id) {
    // Obtener el valor del elemento de entrada con el id "inputIdEncontrado".
    id = document.getElementById("inputIdEncontrado").value;

    // Realizar una solicitud (fetch) para obtener información del jugador por su ID utilizando una URL compuesta.
    fetch(baseUrl + '/traer/' + id)
        .then(res => {
            // Cuando la respuesta (res) esté disponible, procesarla como JSON.
            res.json()
                .then(json => {
                    // Almacenar la información del jugador en una variable llamada jugadores.
                    jugadores = json;
                    
                    // Llamar a la función mostrarJugador() para mostrar la información del jugador en algún lugar.
                    mostrarJugador();
                });
        });
}





// Esta función se utiliza para mostrar la información de un jugador en un contenedor en la página web.
function mostrarJugador() {
    // Obtener una referencia al elemento HTML con el id "jugadorEncontrado".
    let container = document.getElementById("jugadorEncontrado");
    
    // Limpiar cualquier contenido existente dentro del elemento HTML.
    container.innerHTML = "";

    // Iterar a través de las propiedades del objeto jugadores.
    for (let propiedad in jugadores) {
        if (jugadores.hasOwnProperty(propiedad)) {
            // Actualizar el contenido del contenedor con la información del jugador mapeada.
            // Esto parece sobrescribir el contenido en cada iteración, lo que mostrará
            // solo la última propiedad del objeto jugadores en el contenedor.
            container.innerHTML = mapearJugadorSolo(jugadores);
        }
    }
}







// Esta función toma un objeto jugador como entrada y devuelve una cadena de texto HTML
// que representa la información del jugador en un formato específico para mostrarlo en una lista o tabla.
function mapearJugadorSolo(jugador) {
    // La función devuelve una cadena de texto HTML que representa una fila de datos de jugador en una tabla.
    return `<tr>
        <!-- Columna para la imagen de perfil del jugador -->
        <td>
            <div class="img-container-lista">
                <img src="${jugador.imagenPerfil}" alt="img-perfil">
            </div>
        </td>
        <!-- Columna para el nombre y apellido del jugador -->
        <td>${jugador.nombre} ${jugador.apellido}</td>
        <!-- Columna para la posición del jugador -->
        <td>${jugador.posicion}</td>
        <!-- Columna para los puntos de ranking del jugador -->
        <td>${jugador.puntosRanking}</td>
        <!-- Columna con botones de editar y ver detalles del jugador -->
        <td>
            <button type="button" class="btn btn-warning btn-sm" data-dismiss="modal" 
                data-toggle="modal" data-target="#ventanaModal" 
                onclick="modificarJugadorPorAdmin(${jugador.numDocumento})">Editar</button>
            <button type="button" class="btn btn-success btn-sm" data-toggle="modal" 
                data-target="#exampleModalCenter" 
                onclick="traerJugadorEncontradoPorIdModal(${jugador.numDocumento})">Ver</button>
        </td>
    </tr>`;
}




// Esta función se utiliza para obtener y mostrar la información de un jugador por su ID en un modal.
function traerJugadorEncontradoPorIdModal(id) {
    
    // Realizar una solicitud (fetch) para obtener información del jugador por su ID utilizando una URL compuesta.
    fetch(baseUrl + '/traer/' + id)
        .then(res => {
            // Cuando la respuesta (res) esté disponible, procesarla como JSON.
            res.json()
                .then(json => {
                    // Almacenar la información del jugador en una variable llamada jugadores.
                    jugadores = json;
                    
                    // Llamar a la función verJugadorPorId() para mostrar la información del jugador en el modal.
                    verJugadorPorId();
                });
        });
}




// Esta función se utiliza para mostrar la información de un jugador en un modal por su ID.
function verJugadorPorId() {
    // Obtener una referencia al elemento HTML con el id "modalBody".
    let container = document.getElementById("modalBody");
    
    // Limpiar cualquier contenido existente dentro del elemento HTML.
    container.innerHTML = "";

    // Iterar a través de las propiedades del objeto jugadores.
    for (let propiedad in jugadores) {
        if (jugadores.hasOwnProperty(propiedad)) {
            // Actualizar el contenido del contenedor con la información del jugador mapeada.
            // Al igual que en el código anterior, esto parece sobrescribir el contenido en cada iteración,
            // lo que mostrará solo la última propiedad del objeto jugadores en el modal.
            container.innerHTML = mapearJugadorModal(jugadores);
        }
    }
}




// Esta función toma un objeto jugador como entrada y devuelve una cadena de texto HTML
// que representa la información del jugador en un formato específico para mostrarlo en un modal.
function mapearJugadorModal(jugador) {
    // La función devuelve una cadena de texto HTML con información del jugador formateada
    // para su visualización dentro de un modal.
    return `<div class="perfil-container">
        <!-- Contenedor para la imagen de perfil del jugador -->
        <div class="img-container">
            <img src="${jugador.imagenPerfil}" alt="img-perfil">
        </div>
        <!-- Contenedor para el nombre y apellido del jugador -->
        <div>
            <h2>${jugador.nombre} ${jugador.apellido}</h2>
        </div>
        <!-- Contenedor para la categoría y posición del jugador -->
        <div class="container-categoria-posicion">
            <h2> Cat ${jugador.categoria}</h2>
            <h2>${jugador.posicion}</h2>
        </div>
        <!-- Contenedor para los puntos de ranking del jugador -->
        <div class="container-ranking-puntos">
            <h2>${jugador.puntosRanking} Puntos</h2>
        </div>
        <!-- Contenedor para las medallas ganadas por el jugador -->
        <div class="container-medallas">
            <h2>${jugador.torneosGanados}<img src="./assets/medalla-de-oro.png" alt="medalla-de-oro"></h2>
        </div>
        <!-- Contenedor para las monedas de oro del jugador -->
        <div class="container-puntos-oro">
            <h2>${jugador.monedasOro} <img src="./assets/monedas.png" alt="monedas"></h2>
        </div>
        <!-- Botón para cerrar el modal -->
        <button type="button" class="btn btn-danger" data-dismiss="modal" >Cerrar</button>
    </div>`;
}




// Esta función se utiliza para cerrar la sesión del usuario.
function cerrarSesion() {
    // Eliminar la cookie llamada 'miDato' estableciendo su fecha de caducidad en el pasado.
    document.cookie = 'miDato=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    
    // Redirigir al usuario a la página de inicio de sesión.
    window.location.href = "http://127.0.0.1:5500/iniciarSesion.html";
}






function limpiarCampo() {
    let container = document.getElementById("jugadorEncontrado");
    if (container) {
        container.innerHTML = "";
    }
}
