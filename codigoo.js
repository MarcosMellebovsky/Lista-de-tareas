let tareas = [
    { nombre: "Tarea 1", completada: false, hora: obtenerHora() },
    { nombre: "Tarea 2", completada: false, hora: obtenerHora() }
];

function agregarTarea() {
    const nuevaTareaInput = document.getElementById('nuevaTareaInput');
    const tarea = nuevaTareaInput.value;
    if (tarea != '') {
        tareas.push({ nombre: tarea, completada: false, hora: obtenerHora() });
        nuevaTareaInput.value = '';
        actualizarListaTareas();
    }
}

function actualizarListaTareas() {
    const listaTareas = document.getElementById('listaTareas');
    listaTareas.innerHTML = '';
    tareas.forEach((tarea, index) => {
        const tareaElement = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarea.completada;
        checkbox.addEventListener('change', () => {
            tarea.completada = checkbox.checked;
            actualizarListaTareas();
        });
        tareaElement.appendChild(checkbox);
        
        const label = document.createElement('label');
        label.textContent = tarea.nombre;
        label.style.textDecoration = tarea.completada ? 'line-through' : 'none';
        tareaElement.appendChild(label);
        
        const horaLabel = document.createElement('label');
        horaLabel.textContent = tarea.hora;
        tareaElement.appendChild(horaLabel);
        
        const botonEliminar = document.createElement('button');
        botonEliminar.classList.add('eliminar-btn');
        botonEliminar.addEventListener('click', () => {
            eliminarTarea(index);
        });
        tareaElement.appendChild(botonEliminar);
        
        listaTareas.appendChild(tareaElement);
    });
}

function eliminarTarea(index) {
    tareas.splice(index, 1);
    actualizarListaTareas();
}

function tareaMasRapida() {
    const tareaMasRapida = tareas.find(tarea => tarea.completada);
    if (tareaMasRapida) {
        alert(`La tarea más rápida en completarse es: ${tareaMasRapida.nombre}`);
    } else {
        alert('No hay tareas completadas aún.');
    }
}//DDDD

function obtenerHora() {
    return new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
}

actualizarListaTareas();