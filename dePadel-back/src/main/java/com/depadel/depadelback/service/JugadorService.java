package com.depadel.depadelback.service;


import com.depadel.depadelback.model.Jugador;

import java.util.List;
import java.util.Optional;

public interface JugadorService {
    

    

    Jugador crearJugador(Jugador crearJugador);

    List<Jugador> traerTodosLosJugadores();

    Optional<Jugador> traerJugadorPorId(Long idJugador);

    Optional<Jugador> traerJugadorPorUsername(String username);

    Jugador modificarCategoria(Long id, Jugador jugador);

    Jugador modificarPuntosRanking(Long id, Jugador jugador);

    Jugador modificarTorneosGanados(Long id, Jugador jugador);

    Jugador modificarMonedasOro(Long id, Jugador jugador);

    Jugador modificarEloRanking(Long id, Jugador jugador);




    Jugador modificarJugador(Long idJugador, Jugador jugador);

    void borrarJugador(Long idJugador);


    String traerRolJugador(String username);







}
