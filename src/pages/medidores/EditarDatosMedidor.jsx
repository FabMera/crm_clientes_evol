import {
    Form,
    redirect,
    useActionData,
    useLoaderData,
    useNavigate,
} from "react-router-dom";
import FormularioMedidor from "../../components/medidores_components/FormularioMedidor";
import Error from "../../components/Error";
import {
    actualizarInfoMedidor,
    obtenerMedidorPorId,
} from "../../data/medidores";

export async function action({ request, params }) {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);

    //Validar los datos
    const errores = [];
    if (Object.values(datos).includes("")) {
        errores.push("Los campos nombre y fecha de creacion son obligatorios");
    }

    //Si hay errores
    if (Object.keys(errores).length) {
        return errores;
    }

    //Actualizar el medidor y redireccionar
    await actualizarInfoMedidor(params.medidorCod, datos);
    return redirect("/medidores");
}

export async function loader({ params }) {
    const medidor = await obtenerMedidorPorId(params.medidorCod);
    console.log(medidor);
    if (Object.values(medidor).length === 0) {
        throw new Response("", {
            status: 404,
            statusText: "No se encontro el medidor",
        });
    }
    return medidor;
}

const EditarDatosMedidor = () => {
    const errores = useActionData();
    const navigate = useNavigate();
    const medidor = useLoaderData();
    return (
        <>
            <h1 className="font-black text-4xl text-indigo-900">
                Editar Medidor
            </h1>
            <p className="mt-3 text-indigo-500 font-black">
                Ingresa todos los campos requeridos.
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
                <Form method="post" noValidate>
                    <FormularioMedidor medidor={medidor} />
                    <input
                        type="submit"
                        className="mt-5 w-full bg-indigo-700 p-3 uppercase font-bold text-white text-lg rounded-sm"
                        value="Editar Medidor"
                    />
                </Form>
            </div>
        </>
    );
};

export default EditarDatosMedidor;
