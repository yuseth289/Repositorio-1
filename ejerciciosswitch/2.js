let numeroCopias = 1000;
let copias;

switch (true) {
    case (numeroCopias > 0 && numeroCopias <= 499):
        copias = 120;
        break;
    case (numeroCopias >= 500 && numeroCopias <= 749):
        copias = 100;
        break;
    case (numeroCopias >= 750 && numeroCopias <= 999):
        copias = 80;
        break;
    case (numeroCopias >= 1000):
        copias = 50;
        break;
    default:
        console.log("Número de copias no válido.");
        break;
}

if (copias !== undefined) {
    let total = numeroCopias * copias;
    console.log(`Su precio por copia es de $${copias} y el costo total es $${total}`);
}