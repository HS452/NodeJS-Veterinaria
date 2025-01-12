const fs = require('fs');

function registrar(nombre, edad, animal, color, enfermedad) {
    const citas = JSON.parse(fs.readFileSync('citas.json'));
    const nuevaCita = { nombre, edad, animal, color, enfermedad };
    citas.push(nuevaCita);
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
    console.log('Cita registrada:', nuevaCita);
}

function leer() {
    const citas = JSON.parse(fs.readFileSync('citas.json'));
    console.log('Citas registradas:');
    citas.forEach(cita => console.log(cita));
}

module.exports = { registrar, leer };
