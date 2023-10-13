package com.depadel.depadelback.service;

import com.depadel.depadelback.model.Torneo;

import java.util.List;
import java.util.Optional;

public interface TorneoService {

    Torneo crearTorneo(Torneo crearTorneo);

    List<Torneo> traerTodosLosTorneos();

    Optional<Torneo> traerTorneoPorId(Long idTorneo);

    Torneo modificarTorneo(Long idTorneo, Torneo torneo);

    void borrarTorneo(Long idTorneo);
}
