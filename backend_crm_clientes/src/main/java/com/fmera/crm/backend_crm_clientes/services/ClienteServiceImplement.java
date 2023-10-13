package com.fmera.crm.backend_crm_clientes.services;

import com.fmera.crm.backend_crm_clientes.excepciones.UserExistExcepcion;
import com.fmera.crm.backend_crm_clientes.mapper.ClienteConverter;
import com.fmera.crm.backend_crm_clientes.models.dtos.ClienteDTO;
import com.fmera.crm.backend_crm_clientes.models.entities.Cliente;
import com.fmera.crm.backend_crm_clientes.models.entities.Medidor;
import com.fmera.crm.backend_crm_clientes.repositories.ClienteRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@AllArgsConstructor
@Service
public class ClienteServiceImplement implements ClienteService {

    private final ClienteRepository clienteRepository;
    private final ClienteConverter clienteConverter;

    @Override
    @Transactional
    public List<ClienteDTO> getAllClientes() {
        List<Cliente> clientes = clienteRepository.findAll();
        return clientes.stream().map(clienteConverter::convertEntityToDto).toList();

    }

    @Override
    public Optional<ClienteDTO> getClienteById(UUID id) {
        return clienteRepository.findById(id).map(clienteConverter::convertEntityToDto);
    }

    @Override
    public ClienteDTO saveCliente(ClienteDTO newClienteDTO) {
        Cliente cliente = clienteConverter.convertDtoToEntity(newClienteDTO);
        Optional<Cliente> clienteOp = clienteRepository.findByRut(cliente.getRut());

        if(clienteOp.isPresent()){
            throw new UserExistExcepcion("El cliente ya existe");
        }
        cliente = clienteRepository.save(cliente);
        return clienteConverter.convertEntityToDto(cliente);
    }

    @Override
    public Optional<ClienteDTO> updateCliente(ClienteDTO clienteDTO, UUID id) {
        Optional<Cliente> cliente = clienteRepository.findById(id);
        Cliente clienteOp = null;
        if(cliente.isPresent()){
            Cliente clienteDB = cliente.get();
            clienteDB.setNombre(clienteDTO.getNombre());
            clienteDB.setDireccion(clienteDTO.getDireccion());
            clienteOp = clienteRepository.save(clienteDB);
        }
        return Optional.ofNullable(clienteConverter.convertEntityToDto(clienteOp));
    }


    @Override
    public Optional<ClienteDTO> updateCliente2(UUID id, Medidor medidor) {
        Optional<Cliente> clienteOp = clienteRepository.findById(id);
        if(clienteOp.isPresent()){
            Cliente clienteDB = clienteOp.get();
            clienteDB.getMedidores().add(medidor);
            clienteRepository.save(clienteDB);
            return Optional.ofNullable(clienteConverter.convertEntityToDto(clienteDB));
        }
        return Optional.empty();
    }

    @Override
    public void deleteClienteById(UUID id) {
        clienteRepository.deleteById(id);
    }
}
