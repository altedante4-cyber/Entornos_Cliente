import React, { useState }  from "react";

export default function RegistrarEjercicio({mostrarejercicio,registrarejercicio}){
    const [formulario , setformulario ] = useState({
            nombreejercicio : "",
            serie : "",
            repeticiones : "",
    })

    function escucharEventoAgregar(e){
            const {name , value } = e.target 
          setformulario((prevState) => ({
        ...prevState, // Copia los valores anteriores del objeto
        [name]: value // Actualiza dinámicamente la propiedad según el 'name' del input
    }));
    }

    function agregar(){
        registrarejercicio(formulario)
    }
    return ( 

        <>
            <form onSubmit={agregar}>
                    <label>INGRESE EL NOMBRE EJERCICIO <input type="text" onChange={escucharEventoAgregar} ></input></label>
                    <label>Numero Serie <input type="number" onChange={escucharEventoAgregar} ></input></label>
                    <label>Numero Repeticiones <input type="number" onChange={escucharEventoAgregar} ></input></label>
                    <button type="submit">Enviar</button>
            </form>
     
  <section>
                <h2>Ejercicios registrados</h2>
                {registrarejercicio.length === 0 ? (
                    <p>Todavía no hay ejercicios registrados.</p>
                ) : (
                    <ul>
                        {registrarejercicio.map((item, indice) => (
                            <li key={indice}>
                                {item.nombreejercicio} - Serie: {item.serie} - Reps: {item.repeticiones}
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </>
    )
        
}