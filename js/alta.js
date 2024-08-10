document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('alta-container');

    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key.startsWith('paciente_')) {
            const paciente = JSON.parse(sessionStorage.getItem(key));
            const card = document.createElement('div');
            card.classList.add('card');
            card.style.width = '18rem';
            card.innerHTML = `
                <img src="${paciente.img}" class="card-img-top" alt="Paciente Imagen">
                <div class="card-body">
                    <h5 class="card-title">${paciente.nombre}</h5>
                    <p class="card-text">Edad: ${paciente.edad} años</p>
                    <p class="card-text">Enfermedad: ${paciente.enfermedad}</p>
                    <p class="card-text">Tiempo Internado: ${paciente.tiempoInternado} días</p>
                </div>
            `;
            container.appendChild(card);
        }
    }
});