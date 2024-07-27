
const enfermedades = [
    "Gripe",
    "Cancer",
    "Sinusitis",
    "Asma",
    "COVID",
    "Dengue",
    "Neumonía"
];

function enfermedad(enf) {
    const azar = Math.floor(Math.random() * enf.length);
    return enf[azar];
}

let id_paciente = 1;

class Paciente {
    constructor(nombre, edad) {
        this.id = id_paciente++;
        this.nombre = nombre;
        this.edad = edad;
        this.enfermedad = enfermedad(enfermedades);
        this.tiempoInternado = Math.floor(Math.random() * 365) + 1;
    }
}

let pacientes = [
    new Paciente("Messi", 38),
    new Paciente("Dibu", 32),
    new Paciente("Enzo", 24),
    new Paciente("Fideo", 37),
    new Paciente("DePaul", 29),
];

let intro = `
Bienvenido
Elija la opcion correspondiente
1 - Ingresar paciente
2 - Buscar paciente
3 - Ver todos los pacientes
4 - Filtrar por edad
5 - Mostrar pacientes con dicha enfermedad
6 - Salir
`;

function mostrarMenu() {
    let opcion = prompt(intro);

    while (opcion !== '6') {
        switch (opcion) {
            case '1':
                ingresarPaciente();
                break;
            case '2':
                buscarPaciente();
                break;
            case '3':
                verTodosPacientes();
                break;
            case '4':
                filtrarPorEdad();
                break;
            case '5':
                mostrarPacientesPorEnfermedad();
                break;
            default:
                alert("Opcion no valida. Intente nuevamente.");
        }
        opcion = prompt(intro);
    }

    alert("¡Gracias por usar el sistema, la Escalonetta necesita tu Ayuda!");
}

function ingresarPaciente() {
    let nombre = prompt("Ingrese el nombre del paciente:");
    let edad = parseInt(prompt("Ingrese la edad del paciente:"));
    let enfermedad = prompt("ingrese la enfermedad del paciente"); /* como hago para que no se sobreescriba?*/

    if (nombre && !isNaN(edad)) {
        pacientes.push(new Paciente(nombre, edad));
        alert("Paciente ingresado con exito.");
    } else {
        alert("Error! Intente otra vez.");
    }
}

function buscarPaciente() {
    let nombre = prompt("Ingrese el nombre del paciente a buscar:");
    let paciente = pacientes.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

    if (paciente) {
        alert(`Paciente encontrado: \nNombre: ${paciente.nombre}\nEdad: ${paciente.edad}\nEnfermedad: ${paciente.enfermedad}\nTiempo Internado: ${paciente.tiempoInternado} días`);
    } else {
        alert("Paciente no encontrado.");
    }
}

function verTodosPacientes() {
    let mensaje = pacientes.map(p => `ID: ${p.id}, Nombre: ${p.nombre}, Edad: ${p.edad}, Enfermedad: ${p.enfermedad}, Tiempo Internado: ${p.tiempoInternado} días`).join('\n');
    alert(`Lista de pacientes:\n${mensaje}`);

}

function filtrarPorEdad() {
    let edadMin = parseInt(prompt("Ingrese la edad minima para filtrar:"));
    let edadMax = parseInt(prompt("Ingrese la edad maxima para filtrar:"));

    if (!isNaN(edadMin) && !isNaN(edadMax)) {
        let resultado = pacientes.filter(p => p.edad >= edadMin && p.edad <= edadMax);

        if (resultado.length > 0) {
            let mensaje = resultado.map(p => `Nombre: ${p.nombre}, Edad: ${p.edad}, Enfermedad: ${p.enfermedad}, Tiempo Internado: ${p.tiempoInternado} días`).join('\n');
            alert(`Pacientes en el rango de edad ${edadMin} a ${edadMax}:\n${mensaje}`);
        } else {
            alert("No se encontraron pacientes en ese rango de edad.");
        }
    } else {
        alert("Rango de edad no valido.");
    }
}

function mostrarPacientesPorEnfermedad() {
    let enfermedadBuscada = prompt("Ingrese la enfermedad para buscar pacientes:");
    let resultado = pacientes.filter(p => p.enfermedad.toLowerCase() === enfermedadBuscada.toLowerCase());

    if (resultado.length > 0) {
        let mensaje = resultado.map(p => `Nombre: ${p.nombre}, Edad: ${p.edad}, Tiempo internado: ${p.tiempoInternado} dias`).join('\n');
        alert(`Pacientes con la enfermedad ${enfermedadBuscada}:\n${mensaje}`);
    } else {
        alert("No se encontraron pacientes con esa enfermedad.");
    }
}

mostrarMenu();