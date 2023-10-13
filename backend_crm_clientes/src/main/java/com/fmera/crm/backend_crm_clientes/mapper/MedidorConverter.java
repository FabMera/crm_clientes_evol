package com.fmera.crm.backend_crm_clientes.mapper;

import com.fmera.crm.backend_crm_clientes.models.dtos.MedidorDTO;
import com.fmera.crm.backend_crm_clientes.models.entities.Medidor;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class MedidorConverter {
    private final ModelMapper modelMapper;

    public MedidorDTO convertEntityToDto(Medidor medidor) {
        return modelMapper.map(medidor, MedidorDTO.class);
    }
    public Medidor convertDtoToEntity(MedidorDTO medidorDTO) {
        return modelMapper.map(medidorDTO, Medidor.class);
    }
}
