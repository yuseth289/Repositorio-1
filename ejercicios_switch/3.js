let tipo = 2;
let cantidad = 3;
let horas = 0;
let costoHoras;

switch (tipo) {
    case 1:
        costoHoras = 4000;
        break;
    case 2:
        costoHoras = 3000;
        break;
    default:
        console.log("El tipo de lavadora es inválido");
        process.exit(1);
}

switch (true) {
    case (horas <= 0):
        console.log("El número de horas es inválido");
        break;
    default:
        let total = cantidad * horas * costoHoras;
        
        switch (true) {
            case (cantidad >= 3):
                let descuento = total * 0.03;
                total -= descuento;
                break;
        }

        switch (true) {
            case (total > 0):
                console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipo} por ${horas} horas $${total}.`);
                break;
        }
        break;
}