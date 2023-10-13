package com.fmera.crm.backend_crm_clientes.services;

import com.fmera.crm.backend_crm_clientes.models.dtos.ClienteDTO;
import com.fmera.crm.backend_crm_clientes.models.dtos.MedidorDTO;
import com.fmera.crm.backend_crm_clientes.models.entities.Medidor;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ClienteService {
    List<ClienteDTO> getAllClientes();
    Optional<ClienteDTO> getClienteById(UUID id);
    ClienteDTO saveCliente(ClienteDTO newClienteDTO);

    Optional<ClienteDTO> updateCliente(ClienteDTO clienteDTO, UUID id);

    Optional<ClienteDTO> updateCliente2(UUID id, Medidor medidor);

    void deleteClienteById(UUID id);

}
