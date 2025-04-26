// Sistema de Gestión de Habitaciones
function sistemaHabitaciones() {
    let habitaciones = [0, 0, 0, 0, 0];
    
    const mostrarEstado = () => {
        let estado = "Estado de habitaciones:\n";
        for (let i = 0; i < habitaciones.length; i++) {
            estado += `Habitación ${i + 1}: ${habitaciones[i] === 0 ? "Libre" : "Ocupada"}\n`;
        }
        alert(estado);
    };
    
    const reservarHabitacion = (num) => {
        if (num < 1 || num > 5) {
            alert("Número de habitación inválido. Usa 1-5.");
        } else if (habitaciones[num - 1] === 1) {
            alert("Habitación ya ocupada.");
        } else {
            habitaciones[num - 1] = 1;
            alert(`Habitación ${num} reservada con éxito.`);
        }
    };
    
    const liberarHabitacion = (num) => {
        if (num < 1 || num > 5) {
            alert("Número de habitación inválido. Usa 1-5.");
        } else if (habitaciones[num - 1] === 0) {
            alert("Habitación ya está libre.");
        } else {
            habitaciones[num - 1] = 0;
            alert(`Habitación ${num} liberada con éxito.`);
        }
    };
    
    // Menú del sistema de habitaciones
    while (true) {
        let opcion = prompt("Sistema de Habitaciones\n1. Ver estado\n2. Reservar\n3. Liberar\n4. Volver al menú principal\nElige una opción:");
        if (opcion === "1") {
            mostrarEstado();
        } else if (opcion === "2") {
            let num = parseInt(prompt("Ingresa el número de habitación (1-5):"));
            reservarHabitacion(num);
        } else if (opcion === "3") {
            let num = parseInt(prompt("Ingresa el número de habitación (1-5):"));
            liberarHabitacion(num);
        } else if (opcion === "4") {
            break;
        } else {
            alert("Opción inválida.");
        }
    }
}

// Calculadora de Lavadoras
function calculadoraLavadoras() {
    function obtenerCostoPorHora(tipo) {
        if (tipo === 1) {
            return 4000;
        } else if (tipo === 2) {
            return 3000;
        } else {
            alert("El tipo de lavadora es inválido");
            return null;
        }
    }

    function validarHoras(horas) {
        if (horas <= 0) {
            alert("El número de horas es inválido");
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
        if (costoHoras === null) return;

        if (!validarHoras(horas)) {
            return;
        }

        let total = cantidad * horas * costoHoras;
        const descuento = calcularDescuento(total, cantidad);
        total -= descuento;

        if (total > 0) {
            alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipo} por ${horas} horas: $${total}.`);
        }
    }

    // Menú de la calculadora de lavadoras
    while (true) {
        let opcion = prompt("Calculadora de Lavadoras\n1. Calcular costo\n2. Volver al menú principal\nElige una opción:");
        
        if (opcion === "1") {
            let tipo = parseInt(prompt("Tipo de lavadora (1 o 2):"));
            let cantidad = parseInt(prompt("Cantidad de lavadoras:"));
            let horas = parseInt(prompt("Horas de alquiler:"));
            
            calcularCostoTotal(tipo, cantidad, horas);
        } else if (opcion === "2") {
            break;
        } else {
            alert("Opción inválida.");
        }
    }
}

// Menú principal
function main() {
    while (true) {
        let opcion = prompt("MENÚ PRINCIPAL\n1. Sistema de Gestión de Habitaciones\n2. Calculadora de Lavadoras\n3. Salir\nElige una opción:");
        
        if (opcion === "1") {
            sistemaHabitaciones();
        } else if (opcion === "2") {
            calculadoraLavadoras();
        } else if (opcion === "3") {
            alert("Saliendo del sistema...");
            break;
        } else {
            alert("Opción inválida. Por favor elige 1, 2 o 3.");
        }
    }
}

// Iniciar el programa
main();