package com.fmera.crm.backend_crm_clientes.models.dtos;

import com.fmera.crm.backend_crm_clientes.models.entities.Medidor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
public class ClienteDTO {

    private UUID id;
    private String nombre;
    private String direccion;
    private String rut;
    private LocalDateTime createAt;
    private List<Medidor> medidores;
}
