import { useLoaderData } from "react-router-dom";
import { todosLosMedidores } from "../../data/medidores";
import AsignarMedidorCliente from "../../components/clientes_components/AsignarMedidorCliente";
import { useState } from "react";

export function loader() {
    const medidores = todosLosMedidores();
    return medidores;
}

const SelectMedidores = () => {
    const [medidoresSeleccionados, setMedidoresSeleccionados] = useState([]);

    const handleCheckboxChange = (id, isChecked) => {
        if (isChecked) {
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
