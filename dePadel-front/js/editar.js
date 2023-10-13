



// Esta función se utiliza para obtener un jugador por su nombre de usuario, modificarlo y redirigir al usuario.
function traerJugadorPorUsername() {
    // Obtener el nombre de usuario almacenado en una variable llamada cookieValue.
    const username = cookieValue;

    // Realizar una solicitud (fetch) para obtener información del jugador por su nombre de usuario utilizando una URL compuesta.
    fetch(baseUrl + `/traer/username/${username}`)
        .then(res => {
            res.json()
                .then(json => {
                    // Almacenar la información del jugador en una variable llamada jugadores.
                    const jugadores = json;

                    // Obtener el ID del jugador como un número.
                    const id = Number(jugadores.numDocumento);

                    // Llamar a la función modificarJugador() con el ID del jugador.
                    modificarJugador(id);

                    // Verificar el estado de la respuesta de la solicitud fetch.
                    if (res.status === 200) {
                        // Si la solicitud es exitosa (código de estado 200),
                        // mostrar una alerta de éxito y redirigir al usuario a la página de perfil.
                        alert("El jugador fue modificado exitosamente");
                        window.location.href = "http://127.0.0.1:5500/perfil.html";
                    } else {
                        // Si la solicitud no es exitosa, mostrar una alerta de error y registrar detalles en la consola.
                        alert("Hubo un error al modificar el jugador");
                        console.error(res);
                    }
                });
        });
}







// Esta función se utiliza para habilitar la edición de diferentes aspectos de la información de un jugador por un administrador.
function modificarJugadorPorAdmin(id) {
   
    // Obtener referencias a botones HTML para habilitar la edición de diferentes aspectos del jugador.
    var botonEditarPuntosRanking = document.getElementById("botonEditarPuntosRanking");
    
    // Agregar un oyente de eventos para el botón de edición de puntos de ranking.
    botonEditarPuntosRanking.addEventListener("click", function() {
        // Llamar a la función modificarPuntosRanking() con el ID del jugador.
        modificarPuntosRanking(id);
    });

    var botonEditarTorneosGanados = document.getElementById("botonEditarTorneosGanados");
    
    // Agregar un oyente de eventos para el botón de edición de torneos ganados.
    botonEditarTorneosGanados.addEventListener("click", function() {
        // Llamar a la función modificarTorneosGanados() con el ID del jugador.
        modificarTorneosGanados(id);
    });

    var botonEditarMonedasOro = document.getElementById("botonEditarMonedasOro");
    
    // Agregar un oyente de eventos para el botón de edición de monedas de oro.
    botonEditarMonedasOro.addEventListener("click", function() {
        // Llamar a la función modificarMonedasOro() con el ID del jugador.
        modificarMonedasOro(id);
    });

    var botonEditarEloRanking = document.getElementById("botonEditarEloRanking");
    
    // Agregar un oyente de eventos para el botón de edición de Elo de ranking.
    botonEditarEloRanking.addEventListener("click", function() {
        // Llamar a la función modificarEloRanking() con el ID del jugador.
        modificarEloRanking(id);
    });

    var botonEditarCategoria = document.getElementById("botonEditarCategoria");
    
    // Agregar un oyente de eventos para el botón de edición de la categoría.
    botonEditarCategoria.addEventListener("click", function() {
        // Llamar a la función modificarCategoria() con el ID del jugador.
        modificarCategoria(id);
    });
}








// Esta función se utiliza para modificar los puntos de ranking de un jugador por su ID.
function modificarPuntosRanking(id) {
    // Obtener el valor de los puntos de ranking desde un elemento de entrada HTML.
    let puntosRanking = Number(document.getElementById("puntosRankingJugador").value);

    // Crear un objeto de datos que contiene los nuevos puntos de ranking.
    let data = {
        "puntosRanking": puntosRanking
    };

    // Realizar una solicitud (fetch) para modificar los puntos de ranking del jugador por su ID.
    fetch(baseUrl + '/modificar/puntos-ranking/' + id, {
        method: "POST", // Utilizar el método HTTP POST para enviar datos.
        headers: {
            "Content-type": 'application/json' // Especificar el tipo de contenido como JSON.
        },
        body: JSON.stringify(data) // Convertir los datos a formato JSON y enviarlos en el cuerpo de la solicitud.
    }).then(res => {
        // Cuando la respuesta de la solicitud esté disponible, procesarla.
        console.log(res); // Imprimir la respuesta en la consola para propósitos de depuración.
    });
}






// Esta función se utiliza para modificar la cantidad de torneos ganados por un jugador por su ID.
function modificarTorneosGanados(id) {
    // Obtener el valor de torneos ganados desde un elemento de entrada HTML.
    let torneosGanados = Number(document.getElementById("torneosGanadosJugador").value);

    // Crear un objeto de datos que contiene la nueva cantidad de torneos ganados.
    let data = {
        "torneosGanados": torneosGanados
    };

    // Realizar una solicitud (fetch) para modificar la cantidad de torneos ganados del jugador por su ID.
    fetch(baseUrl + '/modificar/torneos-ganados/' + id, {
        method: "POST", // Utilizar el método HTTP POST para enviar datos.
        headers: {
            "Content-type": 'application/json' // Especificar el tipo de contenido como JSON.
        },
        body: JSON.stringify(data) // Convertir los datos a formato JSON y enviarlos en el cuerpo de la solicitud.
    }).then(res => {
        // Cuando la respuesta de la solicitud esté disponible, procesarla.
        console.log(res); // Imprimir la respuesta en la consola para propósitos de depuración.
    });
}






// Esta función se utiliza para modificar la cantidad de monedas de oro de un jugador por su ID.
function modificarMonedasOro(id) {
    // Obtener el valor de monedas de oro desde un elemento de entrada HTML.
    let monedasOro = Number(document.getElementById("monedasDeOroJugador").value);

    // Crear un objeto de datos que contiene la nueva cantidad de monedas de oro.
    let data = {
        "monedasOro": monedasOro
    };

    // Realizar una solicitud (fetch) para modificar la cantidad de monedas de oro del jugador por su ID.
    fetch(baseUrl + '/modificar/monedas-oro/' + id, {
        method: "POST", // Utilizar el método HTTP POST para enviar datos.
        headers: {
            "Content-type": 'application/json' // Especificar el tipo de contenido como JSON.
        },
        body: JSON.stringify(data) // Convertir los datos a formato JSON y enviarlos en el cuerpo de la solicitud.
    }).then(res => {
        // Cuando la respuesta de la solicitud esté disponible, procesarla.
        console.log(res); // Imprimir la respuesta en la consola para propósitos de depuración.
    });
}






// Esta función se utiliza para modificar el Elo de ranking de un jugador por su ID.
function modificarEloRanking(id) {
    // Obtener el valor del Elo de ranking desde un elemento de entrada HTML.
    let eloRanking = Number(document.getElementById("eloRankingJugador").value);

    // Crear un objeto de datos que contiene el nuevo Elo de ranking.
    let data = {
        "eloRanking": eloRanking
    };

    // Realizar una solicitud (fetch) para modificar el Elo de ranking del jugador por su ID.
    fetch(baseUrl + '/modificar/elo-ranking/' + id, {
        method: "POST", // Utilizar el método HTTP POST para enviar datos.
        headers: {
            "Content-type": 'application/json' // Especificar el tipo de contenido como JSON.
        },
        body: JSON.stringify(data) // Convertir los datos a formato JSON y enviarlos en el cuerpo de la solicitud.
    }).then(res => {
        // Cuando la respuesta de la solicitud esté disponible, procesarla.
        console.log(res); // Imprimir la respuesta en la consola para propósitos de depuración.
    });
}






// Esta función se utiliza para modificar la categoría de un jugador por su ID.
function modificarCategoria(id) {
    // Obtener el valor de la categoría desde un elemento de entrada HTML.
    let categoria = Number(document.getElementById("categoriaJugador").value);

    // Crear un objeto de datos que contiene la nueva categoría.
    let data = {
        "categoria": categoria
    };

    // Realizar una solicitud (fetch) para modificar la categoría del jugador por su ID.
    fetch(baseUrl + '/modificar/categoria/' + id, {
        method: "POST", // Utilizar el método HTTP POST para enviar datos.
        headers: {
            "Content-type": 'application/json' // Especificar el tipo de contenido como JSON.
        },
        body: JSON.stringify(data) // Convertir los datos a formato JSON y enviarlos en el cuerpo de la solicitud.
    }).then(res => {
        // Cuando la respuesta de la solicitud esté disponible, procesarla.
        console.log(res); // Imprimir la respuesta en la consola para propósitos de depuración.
    });
}




