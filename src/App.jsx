import { useState } from 'react'
import FormularioTarea from './components/FormularioTarea.jsx'
import ListaTareas from './components/ListaTareas.jsx'
import Contador from './components/Contador.jsx'
import './App.css'

// Datos de ejemplo con los que arranca la aplicación
const TAREAS_INICIALES = [
  { id: 1, texto: 'Estudiar React', completada: false },
  { id: 2, texto: 'Hacer la compra', completada: true },
]

function App() {
  // 👇 TODO el estado de la aplicación vive aquí
  const [tareas, setTareas] = useState(TAREAS_INICIALES)

  // Añade una tarea nueva al final del array
  const agregarTarea = (texto) => {
    const textoLimpio = texto.trim()
    if (textoLimpio === '') return

    setTareas((tareasActuales) => [
      ...tareasActuales,
      { id: crypto.randomUUID(), texto: textoLimpio, completada: false },
    ])
  }

  // Elimina la tarea cuyo id coincide
  const eliminarTarea = (id) => {
    setTareas((tareasActuales) => tareasActuales.filter((tarea) => tarea.id !== id))
  }

  // Invierte el valor de "completada" de la tarea indicada
  const toggleCompletada = (id) => {
    setTareas((tareasActuales) =>
      tareasActuales.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea,
      ),
    )
  }

  return (
    <main className="app">
      <header className="app__cabecera">
        <h1>Lista de tareas</h1>
        <p>
          Estado centralizado en <code>App.jsx</code> y repartido a los hijos mediante props.
        </p>
      </header>

      <FormularioTarea agregarTarea={agregarTarea} />

      <Contador tareas={tareas} />

      <ListaTareas
        tareas={tareas}
        eliminarTarea={eliminarTarea}
        toggleCompletada={toggleCompletada}
      />
    </main>
  )
}

export default App
