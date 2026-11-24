import React, { useState } from 'react'
import { useParams , useNavigate } from 'react-router-dom'

function EliminarTarea({tareas,eliminartarea}){
     const {id} = useParams();
     const [texto , settexto  ] = useState('')
     const ruta = useNavigate();

     function agregarruta(e){
        e.preventDefault()
        eliminartarea(texto);
        ruta(`/eliminar/${texto}`)
     }

     return (

         <>
            <form onSubmit={agregarruta}> 
                    <input type='text' value={texto} onChange={(e) => settexto(e.target.value)} placeholder='ingrese el id a eliminar'></input>
                    <button type='submit'>Enviar</button>
            </form>
            
         </>
     )
} 

export default EliminarTarea