package com.depadel.depadelback.auth;

import com.depadel.depadelback.jwt.JwtService;
import com.depadel.depadelback.model.Jugador;
import com.depadel.depadelback.repository.JugadorRepository;

import lombok.RequiredArgsConstructor;


import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {


    private final JugadorRepository jugadorRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;


    public AuthResponse login(LoginRequest request) {

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        UserDetails jugador = jugadorRepository.findByUsername(request.username).orElseThrow();
        String token = jwtService.getToken(jugador);
        return AuthResponse.builder()
                .token(token)
                .build();
    }

    public AuthResponse register(RegisterRequest request) {

        Jugador jugador = Jugador.builder()
                .numDocumento(request.getNumDocumento())
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .nombre(request.getNombre())
                .apellido(request.getApellido())
                .genero(request.getGenero())
                .numeroTelefono(request.getNumeroTelefono())
                .posicion(request.getPosicion())
                .imagenPerfil(request.getImagenPerfil())
                .categoria(request.getCategoria())
                .rol(request.getRol())
                .puntosRanking(request.getPuntosRanking())
                .torneosGanados(request.getTorneosGanados())
                .monedasOro(request.getMonedasOro())
                .eloRanking(request.getEloRanking())
                .estaSuscripto(request.getEstaSuscripto())
                .build();

        jugadorRepository.save(jugador);

        return AuthResponse.builder()
                .token(jwtService.getToken(jugador))
                .build();

    }
}

