package com.depadel.depadelback.auth;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {


    private Long numDocumento;


    private String nombre;

    private String apellido;

    private String password;

    private String genero ;

    private String posicion;

    private String imagenPerfil;

    private String username;

    private String numeroTelefono;

    private Integer categoria;

    private String rol;

    private Integer puntosRanking;

    private Integer torneosGanados;

    private Integer monedasOro;

    private Integer eloRanking;

    private Boolean estaSuscripto;

}