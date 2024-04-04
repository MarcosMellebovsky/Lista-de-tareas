let tareas = [
    { nombre: "Tarea 1", completada: false, fechaIngreso: Date.now(),tachado:null },
    
];

function agregarTarea() {
    const nuevaTareaInput = document.getElementById('nuevaTareaInput');
    const tarea = nuevaTareaInput.value;
    if (tarea != '') {
        tareas.push({ nombre: tarea, completada: false, fechaIngreso: Date.now(), tachado:null });
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
        horaLabel.textContent = tarea.fechaIngreso;
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

document.getElementById("tareaMasRapida").onclick=()=>{
    const tareasTachadas=tareas.filter(t=>t.completada==true);
    let tareaR=tareasTachadas[0];
    if(tareasTachadas.length==0)alert("No hay tareas hechas");
    tareasTachadas.forEach(t=>{
        console.log(t.tachado)
        console.log(t.fechaIngreso)
        if(t.tachado-t.fechaIngreso<tareaR.tachado-tareaR.fechaIngreso) tareaR=t
    });
    alert(`La tarea hecha más rápida fue: ${tareaR.nombre}`)
}



actualizarListaTareas();