let edadAcumulada = 0;
let contadorPacientes = 0;
let edadMaxima = 0;
let edadMinima = 99999999;
alert ("a continuacion, agregue los pacientes, para salir escriba `cancelar`")

function agregarPaciente() {
    let nombre = prompt(`Ingrese un nombre por favor`).toLowerCase();
    if (nombre === "cancelar") {
        console.log("Operaciin cancelada.");
        return false;
    }
    let edad = parseInt(prompt(`Ingrese la edad por favor`));
    if (isNaN(edad)) {
        alert(`Ingrese una edad valida por favor`);
        return true;
    }
    if (edad > edadMaxima){
        edadMaxima = edad;
    }
    if (edad < edadMinima){
        edadMinima = edad;
    }
    edadAcumulada += edad;
    contadorPacientes++;
    console.log(`Paciente ${nombre} edad ${edad}`);
    
    return true;
    
    
}
for(let i = 0; i <3; i++){
    if(agregarPaciente()===false){
        break;
    }
    
}



let promedio = edadAcumulada / contadorPacientes;
console.log(`El promedoi de edades es ${promedio}`);
console.log(`la edad maxima es ${edadMaxima}`);
console.log(`la edad minima es ${edadMinima}`);