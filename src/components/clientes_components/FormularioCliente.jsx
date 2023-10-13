

const FormularioCliente = ({cliente}) => {
  return (
    <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="nombre"
                >Nombre:</label>
                <input 
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del Cliente"
                    name="nombre"
                    defaultValue={cliente?.nombre} //si cliente existe le pasamos los datos al formulario si no ,se crea uno nuevo
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="rut"
                >Rut:</label>
                <input 
                    id="rut"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Rut del Cliente,sin puntos ni guion"
                    name="rut"
                    maxLength={9}
                    defaultValue={cliente?.rut}
                    disabled={cliente?.rut ? true : false}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="direccion"
                >Direccion:</label>
                <input 
                    id="direccion"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Direccion del Cliente"
                    name="direccion"
                    defaultValue={cliente?.direccion}
                />
            </div>
        </>
  )
}

export default FormularioCliente