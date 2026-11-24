import { useState } from 'react'
import FormularioTarea from './components/FormularioTarea.jsx'
import ListaTareas from './components/ListaTareas.jsx'
import Contador from './components/Contador.jsx'
import { BrowserRouter, Link, Route ,Routes } from 'react-router-dom'
import EliminarTarea  from './components/EliminarTarea.jsx'
import './App.css'

// Datos de ejemplo con los que arranca la aplicación
const TAREAS_INICIALES = [
  { id: 1, texto: 'Estudiar React', completada: false },
  { id: 2, texto: 'Hacer la compra', completada: true },
]

function App() {
  const [tareas, setTareas] = useState(TAREAS_INICIALES)

  const agregarTarea = (texto) => {
    const textoLimpio = texto.trim()
    if (textoLimpio === '') return

    setTareas((tareasActuales) => [
      ...tareasActuales,
      { id: crypto.randomUUID(), texto: textoLimpio, completada: false },
    ])
  }

  const eliminarTarea = (id) => {
    setTareas((tareasActuales) => tareasActuales.filter((tarea) => tarea.id !== id))
  }

  const toggleCompletada = (id) => {
    setTareas((tareasActuales) =>
      tareasActuales.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea,
      ),
    )
  }

  return (

      <BrowserRouter>
   <main className="app">
      <header className="app__cabecera">
        <h1>Lista de tareas</h1>
        <p>
          Estado centralizado en <code>App.jsx</code> y repartido a los hijos mediante props.
        </p>
      </header>
      <Link to="/formulario">Ver Formulario</Link>
      <Link to="/contador">Ver Contador</Link>
      <Link to="/tareas">Ver Tareas</Link>
      <Link to="/eliminar">Eliminar un producto</Link>
      </main>
        <Routes>  
          <Route path='/tareas' element={ <ListaTareas
        tareas={tareas}
        eliminarTarea={eliminarTarea}
        toggleCompletada={toggleCompletada}/>}></Route>

            <Route path='/formulario' element={<FormularioTarea agregarTarea={agregarTarea} />}></Route>
            <Route path='/contador' element={ <Contador tareas={tareas} />}></Route>
            <Route path='/eliminar' element={<EliminarTarea tareas={tareas} eliminartarea={eliminarTarea}></EliminarTarea>}></Route>
            <Route path="/eliminar/:id" element={ <ListaTareas
        tareas={tareas}
        eliminarTarea={eliminarTarea}
        toggleCompletada={toggleCompletada}/>}></Route>
        </Routes>
       </BrowserRouter>
   
  )
}

export default App
