import { actualizarCliente, obtenerClientePorId } from "../../data/clientes";
import { Form, redirect, useActionData, useLoaderData, useNavigate } from "react-router-dom";
import FormularioCliente from "../../components/clientes_components/FormularioCliente";
import Error from "../../components/Error";

//Necesitamos la funcion loader para obtener los datos del cliente
//Necesitamos la funcion action para guardar los datos del cliente
export async function loader({ params }) {
    const cliente = await obtenerClientePorId(params.clienteId);
    if (Object.values(cliente).length === 0) {
        throw new Response("", {
            status: 404,
            statusText: "No se Encontro el Cliente",
        });
    }
    return cliente;
}
export async function action({ request, params }) {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);

    //Validar los datos
    const errores = [];
    if (Object.values(datos).includes("")) {
        errores.push("Todos los campos son obligatorios");
    }

    //Actualizar el cliente
    await actualizarCliente(params.clienteId, datos);
    return redirect("/");
}

const EditarCliente = () => {
    const navigate = useNavigate();
    const cliente = useLoaderData();/* cargamos el cliente del loader y lo enviamos como prop en el formulario */
    const errores = useActionData();/* cargamos los errores */

    return (
        <>
            <h1 className="font-black text-4xl text-indigo-900">
               Editar Cliente
            </h1>
            <p className="mt-3">
                Ingresa todos los campos para registrar un cliente
            </p>
            <div className="flex justify-end">
                <button
                    className="bg-indigo-800 text-white px-3 py-1 font-bold uppercase"
                    onClick={() => navigate(-1)}
                >
                    Volver
                </button>
            </div>
            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
                {errores?.length &&
                    errores.map((error, index) => (
                        <Error key={index}>{error}</Error>
                    ))}
                <Form method="PUT" noValidate>
                    <FormularioCliente cliente={cliente}/>
                    <input
                        type="submit"
                        className="mt-5 w-full bg-indigo-700 p-3 uppercase font-bold text-white text-lg rounded-sm"
                        value="Editar Cliente"
                    />
                </Form>
            </div>
        </>
    );
};

export default EditarCliente;
