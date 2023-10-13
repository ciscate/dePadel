package com.depadel.depadelback.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "torneo")
public class Torneo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer categoria;
    @Column(name="imagen_torneo")
    private String imagenTorneo;
    private String tipo;
    private String premio;
    @Column(name = "cantidad_parejas")
    private Integer cantidadParejas;
    private String lugar;
    private String direccion;
    @Column (name = "fecha_hora")
    private String fechaHora;



   /* @OneToMany(mappedBy = "torneo")
    private List<Jugador> jugadores;*/
}
