import clienteAxios from "../apis/clienteAxios";

export const guardarCliente = async ({ nombre, rut, direccion }) => {
    try {
        const save = clienteAxios.post(import.meta.env.VITE_BACKEND_URL + '/clientes', { nombre, rut, direccion })
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
        const response = await clienteAxios.put(import.meta.env.VITE_BACKEND_URL + `/clientes/${id}`, { nombre, rut, direccion });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}