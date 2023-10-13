import { Form, redirect, useNavigate } from "react-router-dom";
import { eliminarMedidor } from "../../data/medidores";

export async function action({ params }) {
    await eliminarMedidor(params.medidorCod);
    return redirect("/medidores");
}

const Medidor = ({ medidor }) => {
    const { id, nombre, fechaCreacion, descripcion, codigo } = medidor;
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if (!confirm("¿Estas seguro de eliminar los datos del Medidor?")) {
            e.preventDefault();
        }
    };

    return (
        <tr className="border-b">
            <td className="p-6 space-y-2">
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

            <td className="p-6 flex gap-3">
                <button
                    className="text-indigo-600 hover:text-indigo-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/medidores/${id}/editar`)}
                >
                    Editar
                </button>
                <Form
                    method="post"
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
