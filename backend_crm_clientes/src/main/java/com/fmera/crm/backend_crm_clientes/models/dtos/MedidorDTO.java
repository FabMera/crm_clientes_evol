package com.fmera.crm.backend_crm_clientes.models.dtos;


import com.fmera.crm.backend_crm_clientes.models.entities.Cliente;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;
@Getter
@Setter
public class MedidorDTO {


    private UUID id;
    private String codigo;
    private String nombre;
    private Date fechaCreacion;
    private String descripcion;
    private boolean asignado;
    private Cliente cliente;
}
