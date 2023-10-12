import clienteAxios from "../apis/clienteAxios";

export const guardarMedidor = async ({ nombre, fechaCreacion, descripcion }) => {
    try {
        const save = clienteAxios.post('/medidores', { nombre, fechaCreacion, descripcion })
        return save;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
export const todosLosMedidores = async () => {
    try {
        const response = await clienteAxios.get(import.meta.env.VITE_BACKEND_URL + '/medidores');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export const obtenerMedidorPorId = async (id) => {
    try {
        const response = await clienteAxios.get(import.meta.env.VITE_BACKEND_URL + `/clientes/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const actualizarInfoMedidor = async (id, { nombre, rut, direccion }) => {
    try {
        const response = await clienteAxios.put(import.meta.env.VITE_BACKEND_URL + `/clientes/${id}`, { nombre, rut, direccion });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
