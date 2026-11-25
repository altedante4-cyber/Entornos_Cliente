# Lista de Tareas (Todo List) · React

Ejercicio de refuerzo de **estado centralizado en `App.jsx`**, **paso de props a los hijos** y **`useState`**.

## Estructura de componentes

```
App.jsx (guarda TODO el estado)
├── FormularioTarea → añade nuevas tareas
├── ListaTareas     → recibe el array de tareas
│   └── Tarea       → muestra cada tarea
└── Contador        → muestra cuántas tareas hay (totales y completadas)
```

## Responsabilidades

### `App.jsx` (el "cerebro")

Guarda en `useState` el array `tareas`, donde cada tarea es:

```js
{ id, texto, completada }
```

Y define las funciones que pasa como props a los hijos:

- `agregarTarea(texto)` → añade una tarea nueva (ignora textos vacíos).
- `eliminarTarea(id)` → borra la tarea con ese `id`.
- `toggleCompletada(id)` → invierte el valor de `completada`.

### `FormularioTarea`

Recibe `agregarTarea`. Tiene un `useState` local para el texto del input, llama a `agregarTarea(texto)` al enviar el formulario y limpia el input.

### `ListaTareas`

Recibe `tareas`, `eliminarTarea` y `toggleCompletada`. Si el array está vacío muestra **"No hay tareas"**; si no, renderiza un `<Tarea />` por cada elemento con `.map()`.

### `Tarea`

Recibe `tarea`, `eliminarTarea` y `toggleCompletada`. Muestra un checkbox para marcarla como completada, el texto (tachado si está completada) y un botón para eliminarla.

### `Contador`

Recibe `tareas` y muestra `"X tareas — Y completadas"`. Las completadas se **calculan dentro del propio componente** con `filter`, no se reciben como prop (💡 reto resuelto).

## Cómo ejecutarlo

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # build de producción en dist/
npm run preview  # sirve el build
```

## Tecnologías

- React 19
- Vite 8
- CSS puro (sin frameworks)

## Práctica UT3 · Gemelo IA

Proyecto de diseño de interfaces web publicado con GitHub Pages.

- **[Abrir Gemelo IA](https://altedante4-cyber.github.io/Entornos_Cliente/)**
- [Carpeta completa del proyecto](practica-ut3-gemelo-ia/)
- [Moodboard PDF](practica-ut3-gemelo-ia/materiales/moodboard.pdf)
- [Kanban actualizado](practica-ut3-gemelo-ia/materiales/kanban-actualizado.md)
- [Evidencias de validación W3C](practica-ut3-gemelo-ia/materiales/validacion-w3c.pdf)
- [Créditos de imágenes](practica-ut3-gemelo-ia/materiales/creditos-imagenes.md) · [auditoría de optimización](practica-ut3-gemelo-ia/materiales/auditoria-imagenes.md)
