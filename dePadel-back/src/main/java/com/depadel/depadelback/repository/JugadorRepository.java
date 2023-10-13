package com.depadel.depadelback.repository;

import com.depadel.depadelback.model.Jugador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface JugadorRepository extends JpaRepository <Jugador, Long> {

        Optional<Jugador> findByUsername(String username);


}
