let baseUrl = "http://localhost:8080/jugador";

let jugadores = [];

let jugadorEncontrado = [];

let contador8 = 1;
let contadorFemenino8 = 1;
let contador7 = 1;
let contadorFemenino7 = 1;
let contador6 = 1;
let contadorFemenino6 = 1;
let contador5 = 1;
let contadorFemenino5 = 1;
let contador4 = 1;
let contadorFemenino4 = 1;
let contador3 = 1;
let contadorFemenino3 = 1;




document.addEventListener("DOMContentLoaded", traerJugadoresMasculinos());
document.addEventListener("DOMContentLoaded", traerJugadoresFemeninos());





// Tu lógica aquí se ejecutará cuando la página se cargue);


function traerJugadoresMasculinos(){

    traerTodosLosJugadoresMasculinosCategoria8();
    traerTodosLosJugadoresMasculinosCategoria7();
    traerTodosLosJugadoresMasculinosCategoria6();
    traerTodosLosJugadoresMasculinosCategoria5();
    traerTodosLosJugadoresMasculinosCategoria4();
    traerTodosLosJugadoresMasculinosCategoria3();
}

function traerJugadoresFemeninos(){

    traerTodosLosJugadoresFemeninosCategoria8();
    traerTodosLosJugadoresFemeninosCategoria7();
    traerTodosLosJugadoresFemeninosCategoria6();
    traerTodosLosJugadoresFemeninosCategoria5();
    traerTodosLosJugadoresFemeninosCategoria4();
    traerTodosLosJugadoresFemeninosCategoria3();
}



// Esta función se utiliza para obtener y mostrar la información de un jugador por su ID.
function traerJugadorPorId(id) {
    // Obtener el valor del ID desde un campo de entrada HTML.
    id = document.getElementById("inputIdEncontrado").value;

    // Realizar una solicitud (fetch) al servidor para obtener los datos del jugador utilizando el ID proporcionado.
    fetch(baseUrl + '/traer/' + id)
        .then(res => {
            // Procesar la respuesta como JSON.
            res.json()
                .then(json => {
                    // Asignar los datos del jugador al objeto "jugadores".
                    jugadores = json;

                    // Mostrar la información del jugador llamando a la función "mostrarJugador()".
                    mostrarJugador();
                });
        });
}





// Esta función se utiliza para mostrar la información de un jugador en la página.
function mostrarJugador() {
    // Obtener el contenedor HTML donde se mostrará la información del jugador.
    let container = document.getElementById("jugadorEncontrado");
    // Borrar el contenido actual del contenedor.
    container.innerHTML = "";

    // Recorrer las propiedades del objeto "jugadores" (datos del jugador).
    for (let propiedad in jugadores) {
        if (jugadores.hasOwnProperty(propiedad)) {
            // Agregar la información del jugador al contenido actual del contenedor.
            // Para mostrar todas las propiedades, se debe usar += en lugar de =.
            container.innerHTML = mapearJugador(jugadores);
        }
    }
}








// Esta función se utiliza para generar una fila HTML que muestra la información resumida de un jugador.
function mapearJugador(jugador) {
    return `<tr>
    <td>
        <div class="img-container-lista">
            <img src="${jugador.imagenPerfil}" alt="img-perfil">
        </div>
    </td>
    <td>${jugador.nombre} ${jugador.apellido}</td>
    <td>${jugador.posicion}</td>
    <td>${jugador.puntosRanking}</td>
    <td>
        <button type="button" class="btn btn-success btn-sm"
            data-toggle="modal" data-target="#exampleModalCenter"
            onclick="traerJugadorEncontradoPorIdModal(${jugador.id})">Ver</button>
    </td>
</tr>`;
}





// Esta función se utiliza para obtener y mostrar la información detallada de un jugador en un modal.
function traerJugadorEncontradoPorIdModal(id) {
    // Sobrescribe la variable "id" con el valor del campo de entrada HTML "inputIdEncontrado".
    id =  document.getElementById("inputIdEncontrado").value;

    // Realiza una solicitud (fetch) al servidor para obtener los datos detallados del jugador utilizando el ID proporcionado.
    fetch(baseUrl + '/traer/' + id)
        .then(res => {
            // Procesa la respuesta como JSON.
            res.json()
                .then(json => {
                    // Asigna los datos detallados del jugador al objeto "jugadores".
                    jugadores = json;

                    // Llama a la función "verJugadorPorId()" para mostrar los datos en el modal.
                    verJugadorPorId();
                });
        });
}




// Esta función se utiliza para mostrar la información detallada de un jugador en un modal.
function verJugadorPorId() {
    // Obtener el contenedor HTML donde se mostrará la información del jugador en el modal.
    let container = document.getElementById("modalBody");
    // Borrar el contenido actual del contenedor.
    container.innerHTML = "";

    // Recorrer las propiedades del objeto "jugadores" (datos del jugador).
    for (let propiedad in jugadores) {
        if (jugadores.hasOwnProperty(propiedad)) {
            // Agregar la información del jugador al contenido actual del contenedor.
            // Para mostrar todas las propiedades, se debe usar += en lugar de =.
            container.innerHTML = mapearJugadorModal(jugadores);
        }
    }
}



// Esta función genera el contenido HTML para mostrar los detalles de un jugador en un modal.
function mapearJugadorModal(jugador) {
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


function traerTodosLosJugadoresMasculinosCategoria8() {
    // Realiza una solicitud (fetch) al servidor para obtener todos los jugadores de la categoría 6.
    fetch(baseUrl + '/todos/ordenados/categoria/masculino/' + 8)
        .then(res => {
            // Procesa la respuesta como JSON.
            res.json().then(json => {
                // Asigna los datos de los jugadores al objeto "jugadores".
                jugadores = json;

                // Llama a la función "mostrarJugadores()" para mostrar los jugadores en la interfaz de usuario.
                mostrarJugadores8();
            });
        });
}

function traerTodosLosJugadoresFemeninosCategoria8() {
    // Realiza una solicitud (fetch) al servidor para obtener todos los jugadores de la categoría 6.
    fetch(baseUrl + '/todas/ordenadas/categoria/femenino/' + 8)
        .then(res => {
            // Procesa la respuesta como JSON.
            res.json().then(json => {
                // Asigna los datos de los jugadores al objeto "jugadores".
                jugadores = json;

                // Llama a la función "mostrarJugadores()" para mostrar los jugadores en la interfaz de usuario.
                mostrarJugadoresFemeninos8();
            });
        });
}





// Esta función muestra una lista de jugadores en la interfaz de usuario.
function mostrarJugadores8() {
    // Obtener el contenedor HTML donde se mostrará la lista de jugadores.
    let container = document.getElementById("listaJugadores8");
    // Borrar el contenido actual del contenedor.
    container.innerHTML = "";
    
    // Iterar a través de cada jugador en el arreglo "jugadores".
    Array.from(jugadores).forEach(jugador => {
        // Agregar el contenido HTML generado por la función "mapearJugadores(jugador)" al contenedor.
        container.innerHTML += mapearJugadores8(jugador);
        
        
        contador8++;
    });
}

// Esta función muestra una lista de jugadores en la interfaz de usuario.
function mostrarJugadoresFemeninos8() {
    // Obtener el contenedor HTML donde se mostrará la lista de jugadores.
    let container = document.getElementById("listaJugadoresDamas8");
    // Borrar el contenido actual del contenedor.
    container.innerHTML = "";
    
    // Iterar a través de cada jugador en el arreglo "jugadores".
    Array.from(jugadores).forEach(jugador => {
        // Agregar el contenido HTML generado por la función "mapearJugadores(jugador)" al contenedor.
        container.innerHTML += mapearJugadoresFemeninos8(jugador);
        
        
        contadorFemenino8++;
    });
}



function traerTodosLosJugadoresMasculinosCategoria7() {
    // Realiza una solicitud (fetch) al servidor para obtener todos los jugadores de la categoría 6.
    fetch(baseUrl + '/todos/ordenados/categoria/masculino/' + 7)
        .then(res => {
            // Procesa la respuesta como JSON.
            res.json().then(json => {
                // Asigna los datos de los jugadores al objeto "jugadores".
                jugadores = json;

                // Llama a la función "mostrarJugadores()" para mostrar los jugadores en la interfaz de usuario.
                mostrarJugadores7();
            });
        });
}

function traerTodosLosJugadoresFemeninosCategoria7() {
    // Realiza una solicitud (fetch) al servidor para obtener todos los jugadores de la categoría 6.
    fetch(baseUrl + '/todas/ordenadas/categoria/femenino/' + 7)
        .then(res => {
            // Procesa la respuesta como JSON.
            res.json().then(json => {
                // Asigna los datos de los jugadores al objeto "jugadores".
                jugadores = json;

                // Llama a la función "mostrarJugadores()" para mostrar los jugadores en la interfaz de usuario.
                mostrarJugadoresFemeninos7();
            });
        });
}


// Esta función muestra una lista de jugadores en la interfaz de usuario.
function mostrarJugadores7() {
    // Obtener el contenedor HTML donde se mostrará la lista de jugadores.
    let container = document.getElementById("listaJugadores7");
    // Borrar el contenido actual del contenedor.
    container.innerHTML = "";
    
    // Iterar a través de cada jugador en el arreglo "jugadores".
    Array.from(jugadores).forEach(jugador => {
        // Agregar el contenido HTML generado por la función "mapearJugadores(jugador)" al contenedor.
        container.innerHTML += mapearJugadores7(jugador);
        
        contador7++;
    });
}

function mostrarJugadoresFemeninos7() {
    // Obtener el contenedor HTML donde se mostrará la lista de jugadores.
    let container = document.getElementById("listaJugadoresDamas7");
    // Borrar el contenido actual del contenedor.
    container.innerHTML = "";
    
    // Iterar a través de cada jugador en el arreglo "jugadores".
    Array.from(jugadores).forEach(jugador => {
        // Agregar el contenido HTML generado por la función "mapearJugadores(jugador)" al contenedor.
        container.innerHTML += mapearJugadoresFemeninos7(jugador);
        
        contadorFemenino7++;
    });
}

// Esta función obtiene y muestra todos los jugadores de la categoría 6.
function traerTodosLosJugadoresMasculinosCategoria6() {
    // Realiza una solicitud (fetch) al servidor para obtener todos los jugadores de la categoría 6.
    fetch(baseUrl + '/todos/ordenados/categoria/masculino/' + 6)
        .then(res => {
            // Procesa la respuesta como JSON.
            res.json().then(json => {
                // Asigna los datos de los jugadores al objeto "jugadores".
                jugadores = json;

                // Llama a la función "mostrarJugadores()" para mostrar los jugadores en la interfaz de usuario.
                mostrarJugadores6();
            });
        });
}

function traerTodosLosJugadoresFemeninosCategoria6() {
    // Realiza una solicitud (fetch) al servidor para obtener todos los jugadores de la categoría 6.
    fetch(baseUrl + '/todas/ordenadas/categoria/femenino/' + 6)
        .then(res => {
            // Procesa la respuesta como JSON.
            res.json().then(json => {
                // Asigna los datos de los jugadores al objeto "jugadores".
                jugadores = json;

                // Llama a la función "mostrarJugadores()" para mostrar los jugadores en la interfaz de usuario.
                mostrarJugadoresFemeninos6();
            });
        });
}

function mostrarJugadoresFemeninos6() {
    // Obtener el contenedor HTML donde se mostrará la lista de jugadores.
    let container = document.getElementById("listaJugadoresDamas6");
    // Borrar el contenido actual del contenedor.
    container.innerHTML = "";
    
    // Iterar a través de cada jugador en el arreglo "jugadores".
    Array.from(jugadores).forEach(jugador => {
        // Agregar el contenido HTML generado por la función "mapearJugadores(jugador)" al contenedor.
        container.innerHTML += mapearJugadoresFemeninos6(jugador);
        
        contadorFemenino6++;
    });
}





// Esta función muestra una lista de jugadores en la interfaz de usuario.
function mostrarJugadores6() {
    // Obtener el contenedor HTML donde se mostrará la lista de jugadores.
    let container = document.getElementById("listaJugadores6");
    // Borrar el contenido actual del contenedor.
    container.innerHTML = "";
    
    // Iterar a través de cada jugador en el arreglo "jugadores".
    Array.from(jugadores).forEach(jugador => {
        // Agregar el contenido HTML generado por la función "mapearJugadores(jugador)" al contenedor.
        container.innerHTML += mapearJugadores6(jugador);
        
        contador6++;
    });
}

function traerTodosLosJugadoresMasculinosCategoria5() {
    // Realiza una solicitud (fetch) al servidor para obtener todos los jugadores de la categoría 6.
    fetch(baseUrl + '/todos/ordenados/categoria/masculino/' + 5)
        .then(res => {
            // Procesa la respuesta como JSON.
            res.json().then(json => {
                // Asigna los datos de los jugadores al objeto "jugadores".
                jugadores = json;

                // Llama a la función "mostrarJugadores()" para mostrar los jugadores en la interfaz de usuario.
                mostrarJugadores5();
            });
        });
}

function traerTodosLosJugadoresFemeninosCategoria5() {
    // Realiza una solicitud (fetch) al servidor para obtener todos los jugadores de la categoría 6.
    fetch(baseUrl + '/todas/ordenadas/categoria/femenino/' + 5)
        .then(res => {
            // Procesa la respuesta como JSON.
            res.json().then(json => {
                // Asigna los datos de los jugadores al objeto "jugadores".
                jugadores = json;

                // Llama a la función "mostrarJugadores()" para mostrar los jugadores en la interfaz de usuario.
                mostrarJugadoresFemeninos5();
            });
        });
}

function mostrarJugadoresFemeninos5() {
    // Obtener el contenedor HTML donde se mostrará la lista de jugadores.
    let container = document.getElementById("listaJugadoresDamas5");
    // Borrar el contenido actual del contenedor.
    container.innerHTML = "";
    
    // Iterar a través de cada jugador en el arreglo "jugadores".
    Array.from(jugadores).forEach(jugador => {
        // Agregar el contenido HTML generado por la función "mapearJugadores(jugador)" al contenedor.
        container.innerHTML += mapearJugadoresFemeninos5(jugador);
        
        contadorFemenino5++;
    });
}

// Esta función muestra una lista de jugadores en la interfaz de usuario.
function mostrarJugadores5() {
    // Obtener el contenedor HTML donde se mostrará la lista de jugadores.
    let container = document.getElementById("listaJugadores5");
    // Borrar el contenido actual del contenedor.
    container.innerHTML = "";
    
    // Iterar a través de cada jugador en el arreglo "jugadores".
    Array.from(jugadores).forEach(jugador => {
        // Agregar el contenido HTML generado por la función "mapearJugadores(jugador)" al contenedor.
        container.innerHTML += mapearJugadores5(jugador);
        
        contador5++;
    });
}

function traerTodosLosJugadoresMasculinosCategoria4() {
    // Realiza una solicitud (fetch) al servidor para obtener todos los jugadores de la categoría 6.
    fetch(baseUrl + '/todos/ordenados/categoria/masculino/' + 4)
        .then(res => {
            // Procesa la respuesta como JSON.
            res.json().then(json => {
                // Asigna los datos de los jugadores al objeto "jugadores".
                jugadores = json;

                // Llama a la función "mostrarJugadores()" para mostrar los jugadores en la interfaz de usuario.
                mostrarJugadores4();
            });
        });
}

function traerTodosLosJugadoresFemeninosCategoria4() {
    // Realiza una solicitud (fetch) al servidor para obtener todos los jugadores de la categoría 6.
    fetch(baseUrl + '/todas/ordenadas/categoria/femenino/' + 4)
        .then(res => {
            // Procesa la respuesta como JSON.
            res.json().then(json => {
                // Asigna los datos de los jugadores al objeto "jugadores".
                jugadores = json;

                // Llama a la función "mostrarJugadores()" para mostrar los jugadores en la interfaz de usuario.
                mostrarJugadoresFemeninos4();
            });
        });
}

function mostrarJugadoresFemeninos4() {
    // Obtener el contenedor HTML donde se mostrará la lista de jugadores.
    let container = document.getElementById("listaJugadoresDamas4");
    // Borrar el contenido actual del contenedor.
    container.innerHTML = "";
    
    // Iterar a través de cada jugador en el arreglo "jugadores".
    Array.from(jugadores).forEach(jugador => {
        // Agregar el contenido HTML generado por la función "mapearJugadores(jugador)" al contenedor.
        container.innerHTML += mapearJugadoresFemeninos4(jugador);
        
        contadorFemenino4++;
    });
}

// Esta función muestra una lista de jugadores en la interfaz de usuario.
function mostrarJugadores4() {
    // Obtener el contenedor HTML donde se mostrará la lista de jugadores.
    let container = document.getElementById("listaJugadores4");
    // Borrar el contenido actual del contenedor.
    container.innerHTML = "";
    
    // Iterar a través de cada jugador en el arreglo "jugadores".
    Array.from(jugadores).forEach(jugador => {
        // Agregar el contenido HTML generado por la función "mapearJugadores(jugador)" al contenedor.
        container.innerHTML += mapearJugadores4(jugador);
        
        contador4++;
    });
}

function traerTodosLosJugadoresMasculinosCategoria3() {
    // Realiza una solicitud (fetch) al servidor para obtener todos los jugadores de la categoría 6.
    fetch(baseUrl + '/todos/ordenados/categoria/masculino/' + 3)
        .then(res => {
            // Procesa la respuesta como JSON.
            res.json().then(json => {
                // Asigna los datos de los jugadores al objeto "jugadores".
                jugadores = json;

                // Llama a la función "mostrarJugadores()" para mostrar los jugadores en la interfaz de usuario.
                mostrarJugadores3();
            });
        });
}

function traerTodosLosJugadoresFemeninosCategoria3() {
    // Realiza una solicitud (fetch) al servidor para obtener todos los jugadores de la categoría 6.
    fetch(baseUrl + '/todas/ordenadas/categoria/femenino/' + 3)
        .then(res => {
            // Procesa la respuesta como JSON.
            res.json().then(json => {
                // Asigna los datos de los jugadores al objeto "jugadores".
                jugadores = json;

                // Llama a la función "mostrarJugadores()" para mostrar los jugadores en la interfaz de usuario.
                mostrarJugadoresFemeninos3();
            });
        });
}

function mostrarJugadoresFemeninos3() {
    // Obtener el contenedor HTML donde se mostrará la lista de jugadores.
    let container = document.getElementById("listaJugadoresDamas3");
    // Borrar el contenido actual del contenedor.
    container.innerHTML = "";
    
    // Iterar a través de cada jugador en el arreglo "jugadores".
    Array.from(jugadores).forEach(jugador => {
        // Agregar el contenido HTML generado por la función "mapearJugadores(jugador)" al contenedor.
        container.innerHTML += mapearJugadoresFemeninos3(jugador);
        
        contadorFemenino3++;
    });
}

// Esta función muestra una lista de jugadores en la interfaz de usuario.
function mostrarJugadores3() {
    // Obtener el contenedor HTML donde se mostrará la lista de jugadores.
    let container = document.getElementById("listaJugadores3");
    // Borrar el contenido actual del contenedor.
    container.innerHTML = "";
    
    // Iterar a través de cada jugador en el arreglo "jugadores".
    Array.from(jugadores).forEach(jugador => {
        // Agregar el contenido HTML generado por la función "mapearJugadores(jugador)" al contenedor.
        container.innerHTML += mapearJugadores3(jugador);
        
        contador3++;
    });
}



// Esta función genera una representación HTML de un jugador a partir de sus datos.
function mapearJugadores8(jugador) {
    // Retorna una cadena HTML que representa al jugador.
    return `<tr>
    <td>${contador8}</td>
    <td><div class="img-container-lista">
    <img src="${jugador.imagenPerfil}" alt="img-perfil">
</div></td>
    <td>${jugador.nombre} ${jugador.apellido}</td>
    <td>${jugador.posicion}</td>
    <td>${jugador.puntosRanking}</td>
    <td>
        <button  type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#exampleModalCenter" onclick="traerJugadorEncontradoEnListaPorIdModal(${jugador.numDocumento})">Ver</button>
    </td>
    </tr>`;
}

function mapearJugadoresFemeninos8(jugador) {
    // Retorna una cadena HTML que representa al jugador.
    return `<tr>
    <td>${contadorFemenino8}</td>
    <td><div class="img-container-lista">
    <img src="${jugador.imagenPerfil}" alt="img-perfil">
</div></td>
    <td>${jugador.nombre} ${jugador.apellido}</td>
    <td>${jugador.posicion}</td>
    <td>${jugador.puntosRanking}</td>
    <td>
        <button  type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#exampleModalCenter" onclick="traerJugadorEncontradoEnListaPorIdModal(${jugador.numDocumento})">Ver</button>
    </td>
    </tr>`;
}

function mapearJugadores7(jugador) {
    // Retorna una cadena HTML que representa al jugador.
    return `<tr>
    <td>${contador7}</td>
    <td><div class="img-container-lista">
    <img src="${jugador.imagenPerfil}" alt="img-perfil">
</div></td>
    <td>${jugador.nombre} ${jugador.apellido}</td>
    <td>${jugador.posicion}</td>
    <td>${jugador.puntosRanking}</td>
    <td>
        <button  type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#exampleModalCenter" onclick="traerJugadorEncontradoEnListaPorIdModal(${jugador.numDocumento})">Ver</button>
    </td>
    </tr>`;
}

function mapearJugadoresFemeninos7(jugador) {
    // Retorna una cadena HTML que representa al jugador.
    return `<tr>
    <td>${contadorFemenino7}</td>
    <td><div class="img-container-lista">
    <img src="${jugador.imagenPerfil}" alt="img-perfil">
</div></td>
    <td>${jugador.nombre} ${jugador.apellido}</td>
    <td>${jugador.posicion}</td>
    <td>${jugador.puntosRanking}</td>
    <td>
        <button  type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#exampleModalCenter" onclick="traerJugadorEncontradoEnListaPorIdModal(${jugador.numDocumento})">Ver</button>
    </td>
    </tr>`;
}

function mapearJugadores6(jugador) {
    // Retorna una cadena HTML que representa al jugador.
    return `<tr>
    <td>${contador6}</td>
    <td><div class="img-container-lista">
    <img src="${jugador.imagenPerfil}" alt="img-perfil">
</div></td>
    <td>${jugador.nombre} ${jugador.apellido}</td>
    <td>${jugador.posicion}</td>
    <td>${jugador.puntosRanking}</td>
    <td>
        <button  type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#exampleModalCenter" onclick="traerJugadorEncontradoEnListaPorIdModal(${jugador.numDocumento})">Ver</button>
    </td>
    </tr>`;
}

function mapearJugadoresFemeninos6(jugador) {
    // Retorna una cadena HTML que representa al jugador.
    return `<tr>
    <td>${contadorFemenino6}</td>
    <td><div class="img-container-lista">
    <img src="${jugador.imagenPerfil}" alt="img-perfil">
</div></td>
    <td>${jugador.nombre} ${jugador.apellido}</td>
    <td>${jugador.posicion}</td>
    <td>${jugador.puntosRanking}</td>
    <td>
        <button  type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#exampleModalCenter" onclick="traerJugadorEncontradoEnListaPorIdModal(${jugador.numDocumento})">Ver</button>
    </td>
    </tr>`;
}

function mapearJugadores5(jugador) {
    // Retorna una cadena HTML que representa al jugador.
    return `<tr>
    <td>${contador5}</td>
    <td><div class="img-container-lista">
    <img src="${jugador.imagenPerfil}" alt="img-perfil">
</div></td>
    <td>${jugador.nombre} ${jugador.apellido}</td>
    <td>${jugador.posicion}</td>
    <td>${jugador.puntosRanking}</td>
    <td>
        <button  type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#exampleModalCenter" onclick="traerJugadorEncontradoEnListaPorIdModal(${jugador.numDocumento})">Ver</button>
    </td>
    </tr>`;
}

function mapearJugadoresFemeninos5(jugador) {
    // Retorna una cadena HTML que representa al jugador.
    return `<tr>
    <td>${contadorFemenino5}</td>
    <td><div class="img-container-lista">
    <img src="${jugador.imagenPerfil}" alt="img-perfil">
</div></td>
    <td>${jugador.nombre} ${jugador.apellido}</td>
    <td>${jugador.posicion}</td>
    <td>${jugador.puntosRanking}</td>
    <td>
        <button  type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#exampleModalCenter" onclick="traerJugadorEncontradoEnListaPorIdModal(${jugador.numDocumento})">Ver</button>
    </td>
    </tr>`;
}

function mapearJugadores4(jugador) {
    // Retorna una cadena HTML que representa al jugador.
    return `<tr>
    <td>${contador4}</td>
    <td><div class="img-container-lista">
    <img src="${jugador.imagenPerfil}" alt="img-perfil">
</div></td>
    <td>${jugador.nombre} ${jugador.apellido}</td>
    <td>${jugador.posicion}</td>
    <td>${jugador.puntosRanking}</td>
    <td>
        <button  type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#exampleModalCenter" onclick="traerJugadorEncontradoEnListaPorIdModal(${jugador.numDocumento})">Ver</button>
    </td>
    </tr>`;
}

function mapearJugadoresFemeninos4(jugador) {
    // Retorna una cadena HTML que representa al jugador.
    return `<tr>
    <td>${contadorFemenino4}</td>
    <td><div class="img-container-lista">
    <img src="${jugador.imagenPerfil}" alt="img-perfil">
</div></td>
    <td>${jugador.nombre} ${jugador.apellido}</td>
    <td>${jugador.posicion}</td>
    <td>${jugador.puntosRanking}</td>
    <td>
        <button  type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#exampleModalCenter" onclick="traerJugadorEncontradoEnListaPorIdModal(${jugador.numDocumento})">Ver</button>
    </td>
    </tr>`;
}

function mapearJugadores3(jugador) {
    // Retorna una cadena HTML que representa al jugador.
    return `<tr>
    <td>${contador3}</td>
    <td><div class="img-container-lista">
    <img src="${jugador.imagenPerfil}" alt="img-perfil">
</div></td>
    <td>${jugador.nombre} ${jugador.apellido}</td>
    <td>${jugador.posicion}</td>
    <td>${jugador.puntosRanking}</td>
    <td>
        <button  type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#exampleModalCenter" onclick="traerJugadorEncontradoEnListaPorIdModal(${jugador.numDocumento})">Ver</button>
    </td>
    </tr>`;
}

function mapearJugadoresFemeninos3(jugador) {
    // Retorna una cadena HTML que representa al jugador.
    return `<tr>
    <td>${contadorFemenino3}</td>
    <td><div class="img-container-lista">
    <img src="${jugador.imagenPerfil}" alt="img-perfil">
</div></td>
    <td>${jugador.nombre} ${jugador.apellido}</td>
    <td>${jugador.posicion}</td>
    <td>${jugador.puntosRanking}</td>
    <td>
        <button  type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#exampleModalCenter" onclick="traerJugadorEncontradoEnListaPorIdModal(${jugador.numDocumento})">Ver</button>
    </td>
    </tr>`;
}


// Esta función obtiene detalles adicionales de un jugador por su ID y muestra la información en un modal.
function traerJugadorEncontradoEnListaPorIdModal(id) {
    // Realiza una solicitud (fetch) al servidor para obtener detalles del jugador por su ID.
    fetch(baseUrl + '/traer/' + id)
        .then(res => {
            // Procesa la respuesta como JSON.
            res.json()
                .then(json => {
                    // Asigna los datos del jugador a la variable "jugadores".
                    jugadores = json;

                    // Llama a la función "verJugadorPorId()" para mostrar los detalles del jugador en un modal.
                    verJugadorPorId();
                });
        });
}







// Esta función elimina el contenido de un elemento HTML con el ID "jugadorEncontrado".
function limpiarCampo() {
    // Obtiene una referencia al elemento HTML con el ID "jugadorEncontrado".
    let container = document.getElementById("jugadorEncontrado");

    // Elimina el contenido del elemento, lo que efectivamente lo vacía.
    container.innerHTML = "";
}
