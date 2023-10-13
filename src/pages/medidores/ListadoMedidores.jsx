import { todosLosMedidores } from "../../data/medidores";
import { useLoaderData } from "react-router-dom";
import Medidor from "../../components/medidores_components/Medidor";

//funcion loader.
export function loader() {
    const medidores = todosLosMedidores();
    return medidores;
}
const ListadoMedidores = () => {
    const medidores = useLoaderData();

    return (
        <>
            <h1 className="font-black text-4xl text-indigo-900">
                Medidores Lipigas
            </h1>
            <p className="mt-3">Administrar Medidores Lipigas</p>
            {medidores.length ? (
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-indigo-800 text-white">
                        <tr>
                            <th className="p-2">Cod-Medidor</th>
                            <th className="p-2">Nombre</th>
                            <th className="p-2">Fecha Creacion</th>
                            <th className="p-2">Descripcion</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medidores.map((medidor) => (
                            <Medidor key={medidor.id} medidor={medidor} />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center mt-5">No hay medidores creados.</p>
            )}
        </>
    );
};

export default ListadoMedidores;
