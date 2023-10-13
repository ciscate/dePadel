package com.depadel.depadelback.service;

import com.depadel.depadelback.model.Torneo;
import com.depadel.depadelback.repository.TorneoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TorneoServiceImpl implements TorneoService{

    private final TorneoRepository torneoRepository;


    @Override
    public Torneo crearTorneo(Torneo crearTorneo) {
        return torneoRepository.save(crearTorneo);
    }

    @Override
    public List<Torneo> traerTodosLosTorneos() {
        return torneoRepository.findAll();
    }

    @Override
    public Optional<Torneo> traerTorneoPorId(Long idTorneo) {
        Optional<Torneo> torneoEncontrado = this.torneoRepository.findById(idTorneo);
        return torneoEncontrado;
    }


    @Override
    public Torneo modificarTorneo(Long idTorneo, Torneo torneo) {
        Optional<Torneo> torneoEncontrado = this.torneoRepository.findById(idTorneo);



        if(torneoEncontrado.get()!= null){
            torneoEncontrado.get();
            torneoEncontrado.get().setCategoria(torneo.getCategoria());
            torneoEncontrado.get().setTipo(torneo.getTipo());
            torneoEncontrado.get().setLugar(torneo.getLugar());
            torneoEncontrado.get().setFechaHora(torneo.getFechaHora());
            torneoEncontrado.get().setPremio(torneo.getPremio());
            torneoEncontrado.get().setCantidadParejas(torneo.getCantidadParejas());
            torneoEncontrado.get().setImagenTorneo(torneo.getImagenTorneo());
            torneoEncontrado.get().setDireccion(torneo.getDireccion());

            return this.crearTorneo(torneoEncontrado.get());
        }
        return null;
    }

    @Override
    public void borrarTorneo(Long idTorneo) {
        Optional<Torneo> torneoEncontrado = this.torneoRepository.findById(idTorneo);
        this.torneoRepository.deleteById(idTorneo);
    }
}
