const FormularioMedidor = ({ medidor }) => {
    return (
        <>
            <div className="mb-4">
                <label className="text-gray-800" htmlFor="codigo">
                    Codigo:
                </label>
                <input
                    id="codigo"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Ingrese el codigo del Medidor"
                    name="codigo"
                    defaultValue={medidor?.codigo} //si cliente existe le pasamos los datos al formulario si no ,se crea uno nuevo
                />
            </div>
            <div className="mb-4">
                <label className="text-gray-800" htmlFor="nombre">
                    Nombre:
                </label>
                <input
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del Medidor"
                    name="nombre"
                    defaultValue={medidor?.nombre} //si cliente existe le pasamos los datos al formulario si no ,se crea uno nuevo
                />
            </div>

            <div className="mb-4">
                <label className="text-gray-800" htmlFor="fechaCreacion">
                    Fecha de Creacion:
                </label>
                <input
                    id="fechaCreacion"
                    type="date"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    name="fechaCreacion"
                    defaultValue={medidor?.fechaCreacion}
                />
            </div>

            <div className="mb-4">
                <label className="text-gray-800" htmlFor="descripcion">
                    Descripcion:
                </label>
                <textarea
                    id="descripcion"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Agregue una descripcion del medidor (opcional)"
                    name="descripcion"
                    defaultValue={medidor?.descripcion}
                ></textarea>
            </div>
        </>
    );
};

export default FormularioMedidor;
