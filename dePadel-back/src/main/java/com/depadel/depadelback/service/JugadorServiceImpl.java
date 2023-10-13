package com.depadel.depadelback.service;


import com.depadel.depadelback.model.Jugador;
import com.depadel.depadelback.repository.JugadorRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class JugadorServiceImpl implements JugadorService{



    private final JugadorRepository jugadorRepository;

    private final PasswordEncoder passwordEncoder;


    @Override
    public Jugador crearJugador(Jugador crearJugador) {
        return jugadorRepository.save(crearJugador);
    }

    @Override
    public List<Jugador> traerTodosLosJugadores() {
        return this.jugadorRepository.findAll();
    }




    public Optional<Jugador> traerJugadorPorId(Long idJugador) {
        Optional<Jugador> jugadorEncontrado= this.jugadorRepository.findById(idJugador);

        return  jugadorEncontrado;
    }

    @Override
    public Optional<Jugador> traerJugadorPorUsername(String username) {
        Optional<Jugador> jugadorEncontrado = this.jugadorRepository.findByUsername(username);
        return jugadorEncontrado;
    }

    @Override
    public String traerRolJugador(String username) {
        Optional<Jugador> jugadorEncontrado = this.jugadorRepository.findByUsername(username);

        return jugadorEncontrado.get().getRol();
    }


    @Override
    public Jugador modificarCategoria(Long idJugador,Jugador jugador) {

        Optional<Jugador> jugadorEncontrado = this.jugadorRepository.findById(idJugador);

        if(jugadorEncontrado.isPresent()){
            Jugador jugadorExistente = jugadorEncontrado.get();


            jugadorExistente.setCategoria(jugador.getCategoria());

            return this.jugadorRepository.save(jugadorExistente);
        }
        throw new EntityNotFoundException("Jugador no encontrado");

    }



    @Override
    public Jugador modificarPuntosRanking(Long idJugador,Jugador jugador){

        Optional<Jugador> jugadorEncontrado = this.jugadorRepository.findById(idJugador);

        if(jugadorEncontrado.isPresent()){
            Jugador jugadorExistente = jugadorEncontrado.get();


            jugadorExistente.setPuntosRanking(jugador.getPuntosRanking());

            return this.jugadorRepository.save(jugadorExistente);
        }
        throw new EntityNotFoundException("Jugador no encontrado");
    }


    @Override
    public Jugador modificarMonedasOro(Long idJugador,Jugador jugador){

        Optional<Jugador> jugadorEncontrado = this.jugadorRepository.findById(idJugador);


        if(jugadorEncontrado.isPresent()){
            Jugador jugadorExistente = jugadorEncontrado.get();


            jugadorExistente.setMonedasOro(jugador.getMonedasOro());

            return this.jugadorRepository.save(jugadorExistente);
        }
        throw new EntityNotFoundException("Jugador no encontrado");
    }

    @Override
    public Jugador modificarEloRanking(Long idJugador,Jugador jugador){

        Optional<Jugador> jugadorEncontrado = this.jugadorRepository.findById(idJugador);


        if(jugadorEncontrado.isPresent()){
            Jugador jugadorExistente = jugadorEncontrado.get();


            jugadorExistente.setEloRanking(jugador.getEloRanking());

            return this.jugadorRepository.save(jugadorExistente);
        }
        throw new EntityNotFoundException("Jugador no encontrado");
    }

    @Override
    public Jugador modificarTorneosGanados(Long idJugador,Jugador jugador){

        Optional<Jugador> jugadorEncontrado = this.jugadorRepository.findById(idJugador);


        if(jugadorEncontrado.isPresent()){
            Jugador jugadorExistente = jugadorEncontrado.get();


            jugadorExistente.setTorneosGanados(jugador.getTorneosGanados());

            return this.jugadorRepository.save(jugadorExistente);
        }
        throw new EntityNotFoundException("Jugador no encontrado");
    }


    @Override
    public Jugador modificarJugador(Long idJugador, Jugador jugador) {


        Optional<Jugador> jugadorEncontrado = this.jugadorRepository.findById(idJugador);



        if(jugadorEncontrado.isPresent()){
            Jugador jugadorExistente = jugadorEncontrado.get();

            jugadorExistente.setNombre(jugador.getNombre());
            jugadorExistente.setApellido(jugador.getApellido());
            jugadorExistente.setPosicion(jugador.getPosicion());
            jugadorExistente.setNumeroTelefono(jugador.getNumeroTelefono());
            jugadorExistente.setGenero(jugador.getGenero());

            return this.jugadorRepository.save(jugadorExistente);
        }
        throw new EntityNotFoundException("Jugador no encontrado");
    }




    @Override
    public void borrarJugador(Long idJugador) {
        Optional<Jugador> jugadorEncontrado = this.jugadorRepository.findById(idJugador);

        if(jugadorEncontrado.isPresent()){
            this.jugadorRepository.deleteById(idJugador);
        }
    }


}