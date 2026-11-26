import { useState, useEffect } from "react";
import ServiciosFrases from "../Servicios/ServiciosFrases";
import "../estilosComponentes/Inicio.css";

export default function Inicio() {
    const [frases, setFrases] = useState([]);
    const [rutinadiar, setrutinadiaria] = useState([])
    useEffect(() => {
        ServiciosFrases.getAll()
            .then((respuesta) => {
                setFrases(respuesta.data);
            })
            .catch((error) => {
                console.error("No se cargaron correctamente las frases", error);
            });

        ServiciosFrases.getRutina()
            .then((respuesta) => {
                setrutinadiaria(respuesta.data);
            })
            .catch((error) => {
                console.error("No se cargó correctamente la rutina diaria", error);
            });
    }, []);

    return (
        <>
         <section className="galeria">
            <h1 className="galeria__titulo">Galería de frases</h1>

            <div className="galeria__grid">
                {frases.length === 0 ? (
                    <p className="galeria__vacio">Todavía no hay imágenes para mostrar.</p>
                ) : (
                    frases.map((item) => (
                        <figure className="galeria__tarjeta" key={item.id}>
                            <img
                                className="galeria__imagen"
                                src={item.frases}
                                alt={`Frase ${item.id}`}
                                referrerPolicy="no-referrer"
                                loading="lazy"
                            />
                        </figure>
                    ))
                )}
            </div>
        </section>

        <section>
            <table border="1">
                <thead>
                    <tr>
                        <th>Día</th>
                        <th>Rutina de hoy</th>
                    </tr>
                </thead>

                <tbody>
                    {rutinadiar.length === 0 ? (
                        <tr>
                            <td colSpan="2">Todavía no hay rutina para mostrar.</td>
                        </tr>
                    ) : (
                        rutinadiar.map((item) => (
                            <tr key={item.dia}>
                                <td>{item.dia}</td>
                                <td>{item.toca}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </section>
        </>
       
        
    );
}
