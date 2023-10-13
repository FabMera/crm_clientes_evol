import { useState } from "react";

const AsignarMedidorCliente = ({ medidor, onChange = () => {},medidoresSeleccionados,asignarMedidorAcliente }) => {
    const { nombre, codigo, id } = medidor;

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = (e) => {
        setIsChecked(e.target.checked);
        if (onChange) {
            onChange(id, e.target.checked);
        }
    };
    return (
        <tr className="border-b">
            <td className="p-6">
                <p className="text-2xl text-gray-600">{id}</p>
            </td>
            <td className="p-6">
                <p className="text-gray-600 ">{nombre}</p>
            </td>

            <td>
                <p className="text-gray-600 ">{codigo}</p>
            </td>

            <td className="p-6 flex gap-3">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleOnChange}
                    id={id}
                    disabled={medidoresSeleccionados.length === 3 && !isChecked }
                />

                <button
                    type="submit"
                    onClick={()=>asignarMedidorAcliente(id,medidoresSeleccionados)}
                    value="  Asignar a Cliente"
                    className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                >
                    Asignar a Cliente
                </button>
            </td>
        </tr>
    );
};

export default AsignarMedidorCliente;
