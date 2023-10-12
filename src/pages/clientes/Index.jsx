import { useLoaderData } from "react-router-dom";
import { todosLosClientes } from "../../data/clientes";
import Cliente from "../../components/clientes_components/Cliente";

export async function loader() {
    const clientes = await todosLosClientes();
    return clientes;
}
console.log(loader());

const Index = () => {
    const clientes = useLoaderData();
    return (
        <>
            <h1 className="font-black text-4xl text-indigo-900">
                Clientes Lipigas
            </h1>
            <p className="mt-3">Administrar Clientes</p>
            {clientes.length ? (
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-indigo-800 text-white">
                        <tr>
                            <th className="p-2">Cliente</th>
                            <th className="p-2">Direccion</th>
                            <th className="p-2">Acciones</th>
                            <th className="p-2">Asignar Medidor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente) => (
                            <Cliente key={cliente.id} cliente={cliente} />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center mt-5">No hay clientes registrados</p>
            )}
        </>
    );
};

export default Index;
