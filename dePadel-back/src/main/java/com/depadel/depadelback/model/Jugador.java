package com.depadel.depadelback.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "jugador", uniqueConstraints = {@UniqueConstraint(columnNames = {"username","numero_telefono"})})
public class Jugador implements UserDetails {

    @Id
    @Column(name = "numero_documento")
    private Long numDocumento;


    //CAMPOS QUE PUEDE ACTUALIZAR EL JUGADOR

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    @Column(name = "password")
    private String password;

    @Column(name = "genero")
    private String genero ;

    @Column(name = "posicion")
    private String posicion;

    @Column(name = "imagen_perfil")
    private String imagenPerfil;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "numero_telefono")
    private String numeroTelefono;


    //CAMPO INTRODUCIDO POR EL JUGADOR SOLO LA 1RA VEZ, LUEGO ES MODIFICABLE POR ADMIN

    @Column(name = "categoria")
    private Integer categoria;

    @Column(name = "rol")
    private String rol;


    //CAMPOS MODIFICABLES SOLO POR UN ADMIN

    @Column(name = "puntos_ranking")
    private Integer puntosRanking;

    @Column(name = "torneos_ganados")
    private Integer torneosGanados;

    @Column(name = "monedas_oro")
    private Integer monedasOro;

    @Column(name = "elo_ranking")
    private Integer eloRanking;

    //CAMPO QUE REQUIERE VALIDACION DE PAGO

    @Column(name = "esta_suscripto")
    private Boolean estaSuscripto;

    /*@ManyToOne
    @JoinColumn(name = "torneo_id")
    private Torneo torneo;*/


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority((getRol())));
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
