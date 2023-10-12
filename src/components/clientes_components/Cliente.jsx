import { Form, useNavigate } from "react-router-dom";

const Cliente = ({ cliente }) => {
    const { id, nombre, rut, direccion } = cliente;
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!confirm("¿Estas seguro de eliminar el cliente?")) return;
    };
    return (
        <tr className="border-b">
            <td className="p-6">
                <p className="text-xl text-gray-800">{nombre}</p>
                <p className="mt-2">{rut}</p>
            </td>
            <td className="p-6">
                <p className="text-l text-gray-600">
                    <span className="text-gray-500 uppercase font-bold">
                        {direccion}
                    </span>
                </p>
            </td>
            <td className="p-4 flex gap-3">
                <button
                    className="text-indigo-600 hover:text-indigo-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/clientes/${id}/editar`)}
                >
                    Editar
                </button>
                <Form
                    method="POST"
                    action={`/clientes/${id}/eliminar`}
                    onSubmit={handleSubmit}
                >
                    <button
                        type="submit"
                        className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                    >
                        Eliminar
                    </button>
                </Form>
            </td>
            <td>
                <button
                    className="text-indigo-600 hover:text-indigo-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/clientes/${id}/medidor`)}
                >
                    icono ver
                </button>
            </td>
        </tr>
    );
};

export default Cliente;