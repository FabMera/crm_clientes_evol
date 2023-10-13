package com.fmera.crm.backend_crm_clientes.models.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "medidores")
@Getter
@Setter
@RequiredArgsConstructor
public class Medidor implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    @Column(nullable = false, unique = true)
    private String codigo;
    private boolean asignado;
    private String nombre;
    @Column(name = "fecha_creacion")
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date fechaCreacion;
    private String descripcion;

    @ManyToOne
    @JoinColumn(name = "id_cliente")
    private Cliente cliente;
}
