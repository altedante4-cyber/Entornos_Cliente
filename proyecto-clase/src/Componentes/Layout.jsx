import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout({ ejercicios, agregarEjercicio }) {
    return (
        <>
            <Header />

            <main>
                {/* Aquí se renderiza únicamente el hijo de la ruta activa */}
                <Outlet context={{ ejercicios, agregarEjercicio }} />
            </main>
        </>
    );
}
