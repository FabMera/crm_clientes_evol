import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//Layout
import Layout from "./layout/Layout.jsx";

//Action y loader
import Index, { loader as clientesLoader } from "./pages/clientes/Index";
import NuevoCliente, {
    action as nuevoClienteAction,
} from "./pages/clientes/NuevoCliente";
import AgregarMedidor, {
    action as nuevoMedidorAction,
} from "./pages/medidores/AgregarMedidor";
import ListadoMedidores, {
    loader as medidoresLoader,
} from "./pages/medidores/ListadoMedidores";

//Editar
import EditarDatosMedidor, {
    action as editarMedidorAction,
    loader as editarMedidorLoader,
} from "./pages/medidores/EditarDatosMedidor";
import EditarCliente, {
    action as editarClienteAction,
    loader as editarClienteLoader,
} from "./pages/clientes/EditarCliente";
import { action as eliminarClienteAction } from "./components/clientes_components/Cliente";
//Error
import ErrorPage from "./components/ErrorPage";

import SelectMedidores, {
    loader as asignarMedidorLoader,
} from "./pages/medidores/SelectMedidores";
import { action as eliminarMedidorAction } from "./components/medidores_components/Medidor";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Index />,
                loader: clientesLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "/clientes/nuevo",
                element: <NuevoCliente />,
                action: nuevoClienteAction,
                errorElement: <ErrorPage />,
            },
            {
                path: "/clientes/:clienteId/editar",
                element: <EditarCliente />,
                loader: editarClienteLoader,
                action: editarClienteAction,
                errorElement: <ErrorPage />,
            },
            {
                path: "/clientes/:clienteId/eliminar",
                action: eliminarClienteAction,
            },
            {
                path: "/medidores",
                element: <ListadoMedidores />,
                loader: medidoresLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "/medidores/nuevo",
                element: <AgregarMedidor />,
                action: nuevoMedidorAction,
                errorElement: <ErrorPage />,
            },
            {
                path: "/medidores/:medidorCod/editar",
                element: <EditarDatosMedidor />,
                loader: editarMedidorLoader,
                action: editarMedidorAction,
                errorElement: <ErrorPage />,
            },
            {
                path: "/clientes/:medidorCod/asignar",
                element: <SelectMedidores />,
                loader: asignarMedidorLoader,
            },
            {
                path: "/medidores/:medidorCod/eliminar",
                action: eliminarMedidorAction,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
