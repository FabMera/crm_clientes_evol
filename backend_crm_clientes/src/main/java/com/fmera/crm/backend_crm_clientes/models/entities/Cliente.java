package com.fmera.crm.backend_crm_clientes.models.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "clientes")
@Getter
@Setter
public class Cliente implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    @NotEmpty
    private String nombre;
    @NotEmpty
    private String direccion;
    @Column(nullable = false, unique = true)
    private String rut;
    @Column(name = "create_at")
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date createAt = new Date();

    @OneToMany(mappedBy="cliente")
    private List<Medidor> medidores;
}
