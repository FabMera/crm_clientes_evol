import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import FormularioCliente from "../../components/clientes_components/FormularioCliente";
import { guardarCliente } from "../../data/clientes";
import Error from "../../components/Error";

export async function action({ request }) {
    //React Router Dom,capturamos los datos del formulario.
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);

    const errores = [];
    if (Object.values(datos).includes("")) {
        errores.push("Todos los campos son obligatorios");
    }
    if (Object.keys(errores).length) {
        return errores;
    }
    await guardarCliente(datos);
    return redirect("/");
}

const NuevoCliente = () => {
    const errores = useActionData();
    const navigate = useNavigate();
    return (
        <>
            <h1 className="font-black text-4xl text-indigo-900">
                Nuevo Cliente
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
                <Form method="POST" noValidate>
                    <FormularioCliente />
                    <input
                        type="submit"
                        className="mt-5 w-full bg-indigo-700 p-3 uppercase font-bold text-white text-lg rounded-sm"
                        value="Crear Cliente"
                    />
                </Form>
            </div>
        </>
    );
};

export default NuevoCliente;
