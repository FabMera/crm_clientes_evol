package com.fmera.crm.backend_crm_clientes.mapper;

import com.fmera.crm.backend_crm_clientes.models.dtos.ClienteDTO;
import com.fmera.crm.backend_crm_clientes.models.entities.Cliente;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ClienteConverter {
    private final ModelMapper modelMapper;

    public ClienteDTO convertEntityToDto(Cliente cliente) {
        return modelMapper.map(cliente, ClienteDTO.class);
    }
    public Cliente convertDtoToEntity(ClienteDTO clienteDTO) {
        return modelMapper.map(clienteDTO, Cliente.class);
    }
}
