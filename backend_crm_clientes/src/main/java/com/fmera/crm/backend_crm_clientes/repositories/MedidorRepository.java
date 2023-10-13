package com.fmera.crm.backend_crm_clientes.repositories;

import com.fmera.crm.backend_crm_clientes.models.entities.Medidor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MedidorRepository extends JpaRepository<Medidor, UUID> {
}
