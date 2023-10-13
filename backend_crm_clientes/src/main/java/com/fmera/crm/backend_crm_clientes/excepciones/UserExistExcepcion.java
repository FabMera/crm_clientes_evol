package com.fmera.crm.backend_crm_clientes.excepciones;

public class UserExistExcepcion extends RuntimeException{

        public UserExistExcepcion(String message) {
            super(message);
        }
}
