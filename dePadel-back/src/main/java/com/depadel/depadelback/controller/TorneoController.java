package com.depadel.depadelback.controller;

import com.depadel.depadelback.model.Torneo;
import com.depadel.depadelback.service.TorneoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/torneo")
@RequiredArgsConstructor
public class TorneoController {

    private final TorneoService torneoService;

    @PostMapping("/nuevo")
    public Torneo crearTorneo(@RequestBody Torneo crearTorneo) {
        return this.torneoService.crearTorneo(crearTorneo);
    }

    @GetMapping("/traer/{id}")
    public Optional<Torneo> traerTorneoPorId(@PathVariable(value = "id") Long id) {
        return this.torneoService.traerTorneoPorId(id);
    }

    @GetMapping("/todos")
    public List<Torneo> traerTodosLosTorneos() {
        return this.torneoService.traerTodosLosTorneos();
    }

    @PostMapping("/modificar/{id}")
    public Torneo modificarTorneo(@PathVariable(value = "id") Long id, @RequestBody Torneo torneo) {
        return this.torneoService.modificarTorneo(id, torneo);
    }

    @DeleteMapping("/borrar/{id}")
    public void borrarTorneo(@PathVariable(value = "id")Long id){
        this.torneoService.borrarTorneo(id);

    }
}
