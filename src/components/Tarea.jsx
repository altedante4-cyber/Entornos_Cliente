function Tarea({ tarea, eliminarTarea, toggleCompletada }) {
  return (
    <li className={`tarea${tarea.completada ? ' tarea--completada' : ''}`}>
      <label className="tarea__marca">
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => toggleCompletada(tarea.id)}
        />
        <span className="tarea__texto">{tarea.texto}</span>
      </label>

      <button
        className="boton boton--peligro"
        type="button"
        onClick={() => eliminarTarea(tarea.id)}
        aria-label={`Eliminar la tarea "${tarea.texto}"`}
      >
        Eliminar
      </button>
    </li>
  )
}

export default Tarea
