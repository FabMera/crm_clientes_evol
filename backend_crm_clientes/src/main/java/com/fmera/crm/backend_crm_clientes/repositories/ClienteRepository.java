package com.fmera.crm.backend_crm_clientes.repositories;

import com.fmera.crm.backend_crm_clientes.models.entities.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, UUID> {
    Optional<Cliente> findByRut(String rut);
}
