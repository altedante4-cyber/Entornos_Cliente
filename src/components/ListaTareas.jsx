import Tarea from './Tarea.jsx'

function ListaTareas({ tareas, eliminarTarea, toggleCompletada }) {
  if (tareas.length === 0) {
    return <p className="lista-vacia">No hay tareas</p>
  }
  console.log(tareas)
  return (
    
     <>
      <ul className="lista">
      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          eliminarTarea={eliminarTarea}
          toggleCompletada={toggleCompletada}
        />
      ))}
    </ul>
     </>
  
  )
}

export default ListaTareas
