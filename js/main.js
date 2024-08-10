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
        this.img = `../assets/${nombre.toLowerCase()}.webp`;
    }
}

let pacientes = [
    new Paciente("Messi", 38),
    new Paciente("Dibu", 32),
    new Paciente("Enzo", 24),
    new Paciente("Fideo", 37),
    new Paciente("DePaul", 29),
];

const container = document.getElementById('container');
const template = document.getElementById('card-template').content;

function guardarEnSessionStorage(paciente) {
    sessionStorage.setItem(`paciente_${paciente.id}`, JSON.stringify(paciente));
    alert(`${paciente.nombre} fue dado de alta! Muchaaaachooooosss`);
}

function guardarEnLocalStorage(paciente) {
    localStorage.setItem(`paciente_${paciente.id}`, JSON.stringify(paciente));
    alert(`${paciente.nombre} entro en terapia intnsiva!`);
}

pacientes.forEach(paciente => {
    const clon = document.importNode(template, true);
    const card = clon.querySelector('.card');
    card.querySelector('.card-title').textContent = paciente.nombre;
    card.querySelector('.card-text').textContent = `Edad: ${paciente.edad} años`;
    card.querySelector('.card-text:nth-of-type(2)').textContent = `Enfermedad: ${paciente.enfermedad}`;
    card.querySelector('.card-text:nth-of-type(3)').textContent = `Tiempo Internado: ${paciente.tiempoInternado} días`;
    card.querySelector('.card-img-top').setAttribute('src', paciente.img);
    card.querySelector('.save-session').addEventListener('click', () => guardarEnSessionStorage(paciente));
    card.querySelector('.save-local').addEventListener('click', () => guardarEnLocalStorage(paciente));

    container.appendChild(clon);
});