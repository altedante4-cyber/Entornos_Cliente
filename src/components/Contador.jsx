function Contador({ tareas }) {
  const completadas = tareas.filter((tarea) => tarea.completada).length

  return (
    <p className="contador">
      <strong>{tareas.length}</strong> {tareas.length === 1 ? 'tarea' : 'tareas'} —{' '}
      <strong>{completadas}</strong> {completadas === 1 ? 'completada' : 'completadas'}
    </p>
  )
}

export default Contador
