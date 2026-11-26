import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
    
    return (
            <>      
                    <div>
                      <button><Link to="/inicio" >Inicio</Link></button>
                      
                      <button><Link to="/Plan Semanal">Plan Semanal </Link></button>
                     
                     <button><Link to="/RegistrarEjercicio">Registrar Ejercicio</Link></button>

                    </div>
                     
            
            </>
        
    )

}