package com.fmera.crm.backend_crm_clientes.services;

import com.fmera.crm.backend_crm_clientes.models.dtos.MedidorDTO;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface MedidorService {
    List<MedidorDTO> allMedidores();
    Optional<MedidorDTO> getMedidorById(UUID id);
    MedidorDTO saveMedidor(MedidorDTO newMedidorDTO);

    Optional<MedidorDTO> updateMedidor(MedidorDTO medidorDTO, UUID id);
    void deleteMedidor(UUID id);
}
