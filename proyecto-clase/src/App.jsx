import Header from "./Componentes/Header"
import {Routes , Route} from 'react-router-dom'
import Inicio from './Componentes/Inicio'
import { useState } from "react"
import RegistrarEjercicio from "./Componentes/RegistrarEjercicio"
import Footer from './Componentes/Footer'
export default function App(){
        const [registrarejercicio , setejercicios ] = useState([])

        function agregarEjercicio(nuevoEjercicio){
            setejercicios((anteriores) => [...anteriores, nuevoEjercicio])
        }

        return(

            <>      
                <Header>

                </Header>

                <Routes>
                    <Route path="/inicio" element={<Inicio></Inicio>}></Route>
                    <Route path="/RegistrarEjercicio"  element={<RegistrarEjercicio registrarejercicio={agregarEjercicio}></RegistrarEjercicio>}></Route>
                </Routes>
          
            
            <Footer></Footer>
             
            </>
        )

}