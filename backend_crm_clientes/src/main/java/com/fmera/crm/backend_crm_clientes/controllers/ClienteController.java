package com.fmera.crm.backend_crm_clientes.controllers;

import com.fmera.crm.backend_crm_clientes.models.dtos.ClienteDTO;
import com.fmera.crm.backend_crm_clientes.models.entities.Medidor;
import com.fmera.crm.backend_crm_clientes.services.ClienteService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/clientes")
@CrossOrigin(originPatterns = "*")
@AllArgsConstructor
public class ClienteController {
    private final ClienteService clienteService;

    @GetMapping
    public List<ClienteDTO> listarClientes() {
        return clienteService.getAllClientes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> mostrarClientePorId(@PathVariable UUID id) {
        Optional<ClienteDTO> clienteop = clienteService.getClienteById(id);
        if (clienteop.isPresent()) {
            return ResponseEntity.ok(clienteop.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> crearCliente(@RequestBody @Valid ClienteDTO clienteDTO, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return validation(bindingResult);
        }
        return ResponseEntity.ok(clienteService.saveCliente(clienteDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCliente(@RequestBody @Valid ClienteDTO clienteDTO, BindingResult bindingResult, @PathVariable UUID id) {
        Optional<ClienteDTO> clienteop = clienteService.updateCliente(clienteDTO, id);
        if (bindingResult.hasErrors()) {
            return validation(bindingResult);
        }
        if (clienteop.isPresent()) {
            return ResponseEntity.status(HttpStatus.CREATED).body(clienteop.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateClienteMedidor(@RequestBody @Valid Medidor medidor, @PathVariable UUID id, BindingResult bindingResult ) {
        Optional<ClienteDTO> clienteop = clienteService.updateCliente2(id,medidor);
        if (bindingResult.hasErrors()) {
            return validation(bindingResult);
        }
        if (clienteop.isPresent()) {
            return ResponseEntity.status(HttpStatus.CREATED).body(clienteop.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCliente(@PathVariable UUID id) {
        clienteService.deleteClienteById(id);
        return ResponseEntity.noContent().build();
    }


    //Validacion de errores con BindingResult
    private ResponseEntity<?> validation(BindingResult binding) {
        Map<String, String> errors = new HashMap<>();
        binding.getFieldErrors().forEach(err -> {
            errors.put(err.getField(), "El campo " + err.getField() + " " + err.getDefaultMessage());
        });
        return ResponseEntity.badRequest().body(errors);
    }
}
