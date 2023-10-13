import { useLoaderData, useParams } from "react-router-dom";
import { todosLosMedidores } from "../../data/medidores";
import AsignarMedidorCliente from "../../components/clientes_components/AsignarMedidorCliente";
import { useState } from "react";
import {
    asignarMedidorCliente,
    obtenerClientePorId,
} from "../../data/clientes";

export function loader() {
    const medidores = todosLosMedidores();
    return medidores;
}

const SelectMedidores = () => {
    const params = useParams();
    console.log(params.medidorCod);

    const [medidoresSeleccionados, setMedidoresSeleccionados] = useState([]);

    const handleCheckboxChange = (id, isChecked) => {
        if (isChecked && medidoresSeleccionados.length <= 3) {
            setMedidoresSeleccionados([...medidoresSeleccionados, id]);
        } else {
            setMedidoresSeleccionados(
                medidoresSeleccionados.filter((medidorId) => medidorId !== id)
            );
        }

        console.log(
            `Soy el checkbox ${id} y mi estado de check es ${isChecked}`
        );
        console.log(medidoresSeleccionados);
    };

    const medidores = useLoaderData();
    console.log(medidores);
    console.log(medidoresSeleccionados);

    //funcion para asignar medidores a cliente segun los checkboxes seleccionados

    const asignarMedidorAcliente =  async() => {
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
      
        
        cliente.medidores = medidoresSeleccionados.forEach(async (medidorId) => {
            await asignarMedidorCliente(cliente.id, medidorId );
            return
        });
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
