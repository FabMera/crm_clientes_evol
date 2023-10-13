import { Form, redirect, useNavigate } from "react-router-dom";
import { eliminarCliente } from "../../data/clientes";
import { FaEdit,FaRegTrashAlt,FaEye} from "react-icons/fa";

//Funcion action para eliminar
export async function action({ params }) {
    await eliminarCliente(params.clienteId);
    return redirect("/");
}


// eslint-disable-next-line react/prop-types
const Cliente = ({ cliente }) => {
    const { id, nombre, rut, direccion } = cliente;
    const navigate = useNavigate();

    const handleSubmit = (e) => {
     
        if (!confirm("¿Estas seguro de eliminar el cliente?")){
            e.preventDefault();
        }
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
            <td className="p-6 flex gap-3 ">
                <button
                    onClick={() => navigate(`/clientes/${id}/editar`)}
                >
                    <FaEdit style={{color: 'blue', fontSize: '20px'}}/>
                </button>
                <Form
                    method="post"
                    action={`/clientes/${id}/eliminar`}
                    onSubmit={handleSubmit}
                >
                    <button
                        type="submit"
                    >
                        <FaRegTrashAlt style={{color: 'red', fontSize: '20px'}}/>
                    </button>
                </Form>
            </td>
            <td className="p-6">
                <button
                    className="text-indigo-600 hover:text-indigo-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/clientes/${id}/asignar`)}
                >
                    Asignar Medidor
                    <FaEye style={{color: 'green', fontSize: '20px'}}/>
                </button>
            </td>
        </tr>
    );
};

export default Cliente;
