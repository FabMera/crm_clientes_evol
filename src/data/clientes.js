import clienteAxios from "../apis/clienteAxios";
//Comunicacion con el backend
const date = new Date();


export const guardarCliente = async ({ nombre, rut, direccion}) => {
    try {
        const save = clienteAxios.post(import.meta.env.VITE_BACKEND_URL + '/clientes', { nombre, rut, direccion, date})
        return save;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
export const todosLosClientes = async () => {
    try {
        const response = await clienteAxios.get(import.meta.env.VITE_BACKEND_URL + '/clientes');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }

}

export const obtenerClientePorId = async (id) => {
    try {
        const response = await clienteAxios.get(import.meta.env.VITE_BACKEND_URL + `/clientes/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const actualizarCliente = async (id, { nombre, rut, direccion }) => {
    try {
        const response = await clienteAxios.put(import.meta.env.VITE_BACKEND_URL + `/clientes/${id}`, { nombre, rut, direccion});
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const eliminarCliente = async (id) => {
    try {
         await clienteAxios.delete(import.meta.env.VITE_BACKEND_URL + `/clientes/${id}`);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const asignarMedidorCliente = async (id, { medidores }) => {
    try {
        const response = await clienteAxios.put(import.meta.env.VITE_BACKEND_URL + `/clientes/update/${id}`, { medidores });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}