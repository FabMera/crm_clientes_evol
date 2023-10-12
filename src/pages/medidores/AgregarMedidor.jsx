import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import FormularioMedidor from "../../components/medidores_components/FormularioMedidor";
import Error from "../../components/Error";
import { guardarMedidor } from "../../data/medidores";


//Funcion Action
export async function action({ request }) {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);

    //Validar los datos
    const errores = [];
    if (Object.values(datos).includes("")) {
        errores.push("Los campos nombres y fecha de creacion son obligatorios");
    }

    //Si hay errores
    if (Object.keys(errores).length) {
        return errores;
    }

    await guardarMedidor(datos);
    return redirect("/medidores");
}
const AgregarMedidor = () => {
    const errores = useActionData();
    const navigate = useNavigate();

    return (
        <>
            <h1 className="font-black text-4xl text-indigo-900">
                Nuevo Medidor
            </h1>
            <p className="mt-3">
                Ingresa todos los campos para crear un nuevo medidor
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
                    <FormularioMedidor />
                    <input
                        type="submit"
                        className="mt-5 w-full bg-indigo-700 p-3 uppercase font-bold text-white text-lg rounded-sm"
                        value="Crear Medidor"
                    />
                </Form>
            </div>
        </>
    );
};

export default AgregarMedidor;
