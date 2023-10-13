import { Form, useNavigate } from "react-router-dom";

const Medidor = ({ medidor }) => {
    const { id, nombre, fechaCreacion, descripcion,codigo } = medidor;
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!confirm("¿Estas seguro de eliminar los datos del Medidor?"))
            return;
    };
    return (
        <tr className="border-b">
            <td className="p-6">
                <p className="text-xl text-gray-800">{codigo}</p>
            </td>
            <td className="p-6">
                <p className="text-xl text-gray-800">{nombre}</p>
            </td>
            <td className="p-6">
                <p className="text-l text-gray-600">
                    <span className="text-gray-500 uppercase font-bold">
                        {fechaCreacion}
                    </span>
                </p>
            </td>
            <td className="p-6">
                <p className="text-l text-gray-600">
                    <span className="text-gray-500 uppercase font-bold">
                        {descripcion}
                    </span>
                </p>
            </td>

            <td className="p-4 flex gap-3">
                <button
                    className="text-indigo-600 hover:text-indigo-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/medidores/${id}/editar`)}
                >
                    Editar
                </button>
                <Form
                    method="POST"
                    action={`/medidores/${id}/eliminar`}
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
        </tr>
    );
};

export default Medidor;
