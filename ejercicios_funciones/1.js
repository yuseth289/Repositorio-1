function obtenerCostoPorHora(tipo) {
    if (tipo === 1) {
        return 4000;
    } else if (tipo === 2) {
        return 3000;
    } else {
        console.log("El tipo de lavadora es invalido");
        process.exit(1);
    }
}

function validarHoras(horas) {
    if (horas <= 0) {
        console.log("El numero de horas es invalido");
        return false;
    }
    return true;
}

function calcularDescuento(total, cantidad) {
    if (cantidad >= 3) {
        return total * 0.03;
    }
    return 0;
}

function calcularCostoTotal(tipo, cantidad, horas) {
    const costoHoras = obtenerCostoPorHora(tipo);

    if (!validarHoras(horas)) {
        return;
    }

    let total = cantidad * horas * costoHoras;
    const descuento = calcularDescuento(total, cantidad);
    total -= descuento;

    if (total > 0) {
        console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipo} por ${horas} horas $${total}.`);
    }
}


const tipo = 2;
const cantidad = 3;
const horas = 5;

calcularCostoTotal(tipo, cantidad, horas);