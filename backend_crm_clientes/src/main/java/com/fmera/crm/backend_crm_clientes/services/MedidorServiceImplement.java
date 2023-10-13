package com.fmera.crm.backend_crm_clientes.services;

import com.fmera.crm.backend_crm_clientes.mapper.MedidorConverter;
import com.fmera.crm.backend_crm_clientes.models.dtos.MedidorDTO;
import com.fmera.crm.backend_crm_clientes.models.entities.Cliente;
import com.fmera.crm.backend_crm_clientes.models.entities.Medidor;
import com.fmera.crm.backend_crm_clientes.repositories.MedidorRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class MedidorServiceImplement implements MedidorService {

    private final MedidorRepository medidorRepository;
    private final MedidorConverter medidorConverter;

    @Override
    @Transactional
    public List<MedidorDTO> allMedidores() {
        List<Medidor> medidor = medidorRepository.findAll();
        return medidor.stream().map(medidorConverter::convertEntityToDto).toList();
    }

    @Override
    @Transactional
    public Optional<MedidorDTO> getMedidorById(UUID id) {
        return medidorRepository.findById(id).map(medidorConverter::convertEntityToDto);
    }

    @Override
    @Transactional
    public MedidorDTO saveMedidor(MedidorDTO newMedidorDTO) {
        Medidor medidor = medidorConverter.convertDtoToEntity(newMedidorDTO);
        medidor = medidorRepository.save(medidor);
        return medidorConverter.convertEntityToDto(medidor);
    }

    @Override
    @Transactional
    public Optional<MedidorDTO> updateMedidor(MedidorDTO medidorDTO, UUID id) {
        Optional<Medidor> medidor = medidorRepository.findById(id);
        Medidor medidorOp = null;
        if (medidor.isPresent()) {
            Medidor medidorDB = medidor.get();
            medidorDB.setNombre(medidorDTO.getNombre());
            medidorDB.setCodigo(medidorDTO.getCodigo());
            medidorDB.setDescripcion(medidorDTO.getDescripcion());
            medidorOp = medidorRepository.save(medidorDB);
        }
        return Optional.ofNullable(medidorConverter.convertEntityToDto(medidorOp));
    }

    @Override
    @Transactional
    public void deleteMedidor(UUID id) {
        medidorRepository.deleteById(id);
    }
}
