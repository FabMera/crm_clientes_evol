import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation();
    return (
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 bg-indigo-600 px-5 py-10">
                <h2 className="text-4xl font-black text-center text-white">
                    CLIENTES
                </h2>

                <nav className="mt-10">
                    <Link
                        className={`${
                            location.pathname === "/"
                                ? "text-indigo-300"
                                : "text-white"
                        } text-2xl block mt-2 hover:text-blue-500`}
                        to="/"
                    >
                        Listado Clientes
                    </Link>
                    <Link
                        className={`${
                            location.pathname === "/clientes/nuevo"
                                ? "text-indigo-300"
                                : "text-white"
                        } text-2xl block mt-2 hover:text-blue-500`}
                        to="/clientes/nuevo"
                    >
                        Crear Cliente
                    </Link>
                </nav>
                <h2 className="text-4xl font-black text-center text-white mt-10">
                    MEDIDORES
                </h2>
                <nav className="mt-10">
                    <Link
                        className={`${
                            location.pathname === "/medidores"
                                ? "text-indigo-300"
                                : "text-white"
                        } text-2xl block mt-2 hover:text-blue-500`}
                        to="/medidores"
                    >
                        Listado Medidores
                    </Link>
                    <Link
                        className={`${
                            location.pathname === "/medidores/nuevo"
                                ? "text-indigo-300"
                                : "text-white"
                        } text-2xl block mt-2 hover:text-blue-500`}
                        to="/medidores/nuevo"
                    >
                        Crear Medidor
                    </Link>
                </nav>
            </aside>
            <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
