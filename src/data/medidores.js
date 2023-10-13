import clienteAxios from "../apis/clienteAxios";
//Comunicacion con el backend

export const guardarMedidor = async ({ nombre, fechaCreacion, descripcion,codigo }) => {
    try {
        const save = clienteAxios.post('/medidores', { nombre, fechaCreacion, descripcion,codigo })
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
        const response = await clienteAxios.get(import.meta.env.VITE_BACKEND_URL + `/medidores/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const actualizarInfoMedidor = async (id, { nombre, fechaCreacion, descripcion,codigo }) => {
    try {
        const response = await clienteAxios.put(import.meta.env.VITE_BACKEND_URL + `/medidores/${id}`, { nombre, fechaCreacion, descripcion,codigo });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const eliminarMedidor = async (id) => {
    try {
         await clienteAxios.delete(import.meta.env.VITE_BACKEND_URL + `/medidores/${id}`);
    } catch (error) {
        console.error(error);
        throw error;
    }
}
