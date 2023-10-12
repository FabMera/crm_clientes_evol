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
import EditarDatosMedidor from "./pages/medidores/EditarDatosMedidor";
import EditarCliente, {
    action as editarClienteAction,
    loader as editarClienteLoader,
} from "./pages/clientes/EditarCliente";

//Error
import ErrorPage from "./components/ErrorPage";

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
            },
            {
                path: "/medidores/:medidorCod/eliminar",
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
