package com.fmera.crm.backend_crm_clientes.controllers;


import com.fmera.crm.backend_crm_clientes.models.dtos.MedidorDTO;
import com.fmera.crm.backend_crm_clientes.services.MedidorService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/medidores")
@CrossOrigin(originPatterns = "*")
@AllArgsConstructor
public class MedidorController {

    private final MedidorService medidorService;

    @GetMapping
    public List<MedidorDTO> listarMedidores() {
        return medidorService.allMedidores();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> mostrarClientePorId(@PathVariable UUID id) {
        Optional<MedidorDTO> medidorOp = medidorService.getMedidorById(id);
        if (medidorOp.isPresent()) {
            return ResponseEntity.ok(medidorOp.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> crearMedidor(@RequestBody @Valid MedidorDTO medidorDTO, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return validation(bindingResult);
        }
        return ResponseEntity.ok(medidorService.saveMedidor(medidorDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateMedidor(@RequestBody @Valid MedidorDTO medidorDTO, BindingResult bindingResult, @PathVariable UUID id) {
        Optional<MedidorDTO> medidorOp = medidorService.updateMedidor(medidorDTO, id);
        if (bindingResult.hasErrors()) {
            return validation(bindingResult);
        }
        if (medidorOp.isPresent()) {
            return ResponseEntity.status(HttpStatus.CREATED).body(medidorOp.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMedidor(@PathVariable UUID id) {
        medidorService.deleteMedidor(id);
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

