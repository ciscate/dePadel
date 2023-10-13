package com.depadel.depadelback.controller;


import com.depadel.depadelback.model.Jugador;
import com.depadel.depadelback.service.JugadorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/jugador")
@RequiredArgsConstructor
public class JugadorController {


    private final JugadorService jugadorService;





    @PostMapping("/nuevo")
    public Jugador crearJugador(@RequestBody Jugador crearJugador){
        return this.jugadorService.crearJugador(crearJugador);
    }



    @GetMapping("/todos/ordenados/categoria/masculino/{value}")
    public List<Jugador> traerTodosLosJugadoresMasculinosOrdenados(@PathVariable Integer value) {

        // Obtiene todos los jugadores desde el servicio
        List<Jugador> jugadores = this.jugadorService.traerTodosLosJugadores();

        List<Jugador> jugadoresMasculinos = jugadores.stream()
                .filter(jugador -> "Masculino".equals(jugador.getGenero()))
                .collect(Collectors.toList());

        // Filtra los jugadores por la categoría especificada
        List<Jugador> jugadoresMasculinosFiltradosPorCategoria = jugadoresMasculinos.stream()
                .filter(jugador -> jugador.getCategoria().equals(value)).toList();

        // Ordena la lista de jugadores filtrados por puntos de ranking de mayor a menor
        return jugadoresMasculinosFiltradosPorCategoria.stream()
                .sorted((j1, j2) -> Integer.compare(j2.getPuntosRanking(), j1.getPuntosRanking()))
                .collect(Collectors.toList());
    }

    @GetMapping("/todas/ordenadas/categoria/femenino/{value}")
    public List<Jugador> traerTodosLosJugadoresFemeninosOrdenados(@PathVariable Integer value) {

        // Obtiene todos los jugadores desde el servicio
        List<Jugador> jugadores = this.jugadorService.traerTodosLosJugadores();

        List<Jugador> jugadoresFemeninos = jugadores.stream()
                .filter(jugador -> "Femenino".equals(jugador.getGenero()))
                .collect(Collectors.toList());

        // Filtra los jugadores por la categoría especificada
        List<Jugador> jugadoresFemeninosFiltradosPorCategoria = jugadoresFemeninos.stream()
                .filter(jugador -> jugador.getCategoria().equals(value)).toList();

        // Ordena la lista de jugadores filtrados por puntos de ranking de mayor a menor
        return jugadoresFemeninosFiltradosPorCategoria.stream()
                .sorted((j1, j2) -> Integer.compare(j2.getPuntosRanking(), j1.getPuntosRanking()))
                .collect(Collectors.toList());
    }

    @GetMapping("/traer/{id}")
    public Optional<Jugador> traerJugadorPorId(@PathVariable(value = "id") Long id){
        return this.jugadorService.traerJugadorPorId(id);
    }

    @GetMapping("/traer/username/{username}")
    public Optional<Jugador> traerJugadorPorUsername(@PathVariable(value = "username")String username){
        return this.jugadorService.traerJugadorPorUsername(username);
    }

    @GetMapping("/traer/rol/{username}")
    public String traerRolJugador(@PathVariable(value = "username")String username){
        return this.jugadorService.traerRolJugador(username);
    }




    @GetMapping("/todos")
    public List<Jugador> traerTodosLosJugadores(){
        return this.jugadorService.traerTodosLosJugadores();
    }

    @PostMapping("/modificar/{id}")
    public Jugador modificarJugador(@RequestBody Jugador jugadorModificado, @PathVariable(value= "id") Long id){
        return this.jugadorService.modificarJugador(id, jugadorModificado);
    }

    @PostMapping("/modificar/categoria/{id}")
    public Jugador modificarCategoria(@RequestBody Jugador jugador, @PathVariable(value = "id")Long id){
        return this.jugadorService.modificarCategoria(id, jugador);
    }

    @PostMapping("/modificar/puntos-ranking/{id}")
    public Jugador modificarPuntosRanking(@RequestBody Jugador jugador, @PathVariable(value = "id")Long id){
        return this.jugadorService.modificarPuntosRanking(id, jugador);
    }

    @PostMapping("/modificar/torneos-ganados/{id}")
    public Jugador modificarTorneosGanados(@RequestBody Jugador jugador, @PathVariable(value = "id")Long id){
        return this.jugadorService.modificarTorneosGanados(id, jugador);
    }
    @PostMapping("/modificar/monedas-oro/{id}")
    public Jugador modificarMonedasOro(@RequestBody Jugador jugador, @PathVariable(value = "id")Long id){
        return this.jugadorService.modificarMonedasOro(id, jugador);
    }

    @PostMapping("/modificar/elo-ranking/{id}")
    public Jugador modificarEloRanking(@RequestBody Jugador jugador, @PathVariable(value = "id")Long id){
        return this.jugadorService.modificarEloRanking(id, jugador);
    }

    @DeleteMapping(value = "/borrar/{id}")
    public void borrarJugador(@PathVariable(value = "id") Long id){
        this.jugadorService.borrarJugador(id);
    }

}