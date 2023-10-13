import { useLoaderData, useParams } from "react-router-dom";
import { todosLosMedidores } from "../../data/medidores";
import AsignarMedidorCliente from "../../components/clientes_components/AsignarMedidorCliente";
import { useState } from "react";
import {
    asignarMedidorCliente,
    obtenerClientePorId,
} from "../../data/clientes";

//funcion loader para obtener todos los medidores de la base de datos.
export function loader() {
    const medidores = todosLosMedidores();
    return medidores;
}

const SelectMedidores = () => {
    const medidores = useLoaderData();

    const params = useParams();
    console.log("id del usuario:" + params.medidorCod);

    //medidoresSeleccionados me indica los medidores que se seleccionan en los checkboxes
    //y medidorSeleccionado me indica el "medidor" que se selecciona actualmente en el checkbox
    const [medidoresSeleccionados, setMedidoresSeleccionados] = useState([]);
    const [medidorSeleccionado, setMedidorSeleccionado] = useState("");

    //Buscar el medidor seleccionado en el arreglo de medidores que se obtiene de la base de datos.
    const buscarMedidorSeleccionado = (medidorSeleccionado) => {
        const result = medidores.find(
            (medidor) => medidor.id === medidorSeleccionado
        );
        console.log(result);
        return result;
    };

    console.log("medidor seleccionado:" + medidorSeleccionado);

    const handleCheckboxChange = (id, isChecked) => {
        if (isChecked && medidoresSeleccionados.length <= 3) {
            setMedidoresSeleccionados([...medidoresSeleccionados, id]);
            setMedidorSeleccionado(id);
        } else {
            setMedidoresSeleccionados(
                medidoresSeleccionados.filter((medidorId) => medidorId !== id)
            );
            setMedidorSeleccionado("");
        }

        console.log(
            `Soy el checkbox ${id} y mi estado de check es ${isChecked}`
        );
        /*  console.log(medidoresSeleccionados); */
    };

    /*     console.log(medidores);*/

    //funcion para asignar medidores a cliente segun los checkboxes seleccionados

    const asignarMedidorAcliente = async () => {
        if (medidoresSeleccionados.length === 0) {
            alert("Debes seleccionar al menos un medidor");
            return;
        }
        const cliente = await obtenerClientePorId(params.medidorCod);
        console.log(cliente);
        if (Object.values(cliente).length === 0) {
            alert("No se encontro el cliente");
            return;
        }
        const medidor = buscarMedidorSeleccionado(medidorSeleccionado);
        //Buscar si el medidor ya esta asignado a un cliente
        if (medidor.asignado === true) {
            alert("El medidor ya se encuentra asignado");
            return;
        }

        medidor.asignado = true;
        medidor.cliente = cliente.id;
        cliente.medidores = [...cliente.medidores, medidor];

        const medidorAsignado = medidor;
        await asignarMedidorCliente(cliente.id, medidorAsignado);

        alert("Medidores asignados correctamente");
    };

    return (
        <>
            <h1 className="font-black text-4xl text-indigo-900">
                Medidores Lipigas
            </h1>
            <p className="mt-3">Administrar Medidores CLIENTE :</p>
            {medidores.length ? (
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-indigo-800 text-white">
                        <tr>
                            <th className="p-2">Medidor N°</th>
                            <th className="p-2">Nombre</th>
                            <th className="p-2">Codigo-Medidor</th>
                            <th className="p-2">Seleccionar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medidores.map((medidor) => (
                            <AsignarMedidorCliente
                                medidoresSeleccionados={medidoresSeleccionados}
                                asignarMedidorAcliente={asignarMedidorAcliente}
                                onChange={handleCheckboxChange}
                                key={medidor.id}
                                medidor={medidor}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center mt-5">No hay medidores asignados</p>
            )}
        </>
    );
};

export default SelectMedidores;
