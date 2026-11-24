import { useState } from 'react'

function FormularioTarea({ agregarTarea }) {
  // Estado LOCAL solo para el texto que se está escribiendo
  const [texto, setTexto] = useState('')

  const manejarEnvio = (evento) => {
    evento.preventDefault()
    agregarTarea(texto)
    setTexto('') // limpiamos el input después de añadir
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <label className="formulario__etiqueta" htmlFor="nueva-tarea">
        Nueva tarea
      </label>

      <div className="formulario__fila">
        <input
          id="nueva-tarea"
          className="formulario__input"
          type="text"
          value={texto}
          onChange={(evento) => setTexto(evento.target.value)}
          placeholder="Ej. Repasar los props de React"
          autoComplete="off"
        />
        <button className="boton boton--principal" type="submit">
          Añadir
        </button>
      </div>
    </form>
  )
}

export default FormularioTarea
