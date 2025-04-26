// Inicialización de variables
let saldo = 0;
let transacciones = [];

// Función para mostrar el saldo actual
const consultarSaldo = () => {
    console.log(`Saldo actual: $${saldo}`);
};

// Función para depositar dinero
const depositar = (monto) => {
    if (monto <= 0) {
        console.log("El monto a depositar debe ser positivo.");
        return;
    }
    saldo += monto;
    registrarTransaccion(monto);
    console.log(`Se han depositado $${monto}.`);
};

// Función para retirar dinero
const retirar = (monto) => {
    if (monto <= 0) {
        console.log("El monto a retirar debe ser positivo.");
        return;
    }
    if (monto > 500) {
        console.log("No se puede retirar más de $500 en una sola transacción.");
        return;
    }
    if (monto > saldo) {
        console.log("Fondos insuficientes.");
        return;
    }
    saldo -= monto;
    registrarTransaccion(-monto);
    console.log(`Se han retirado $${monto}.`);
};

// Función para registrar transacciones
const registrarTransaccion = (monto) => {
    if (transacciones.length >= 5) {
        transacciones.shift(); // Elimina la transacción más antigua
    }
    transacciones.push(monto);
};

// Función para mostrar las últimas transacciones
const mostrarTransacciones = () => {
    console.log("Últimas transacciones:");
    transacciones.forEach((transaccion, index) => {
        console.log(`Transacción ${index + 1}: $${transaccion}`);
    });
};

// Menú principal
while (true) {
    let opcion = prompt("1. Consultar saldo\n2. Depositar\n3. Retirar\n4. Mostrar transacciones\n5. Salir\nElige una opción:");
    if (opcion === "1") {
        consultarSaldo();
    } else if (opcion === "2") {
        let monto = parseFloat(prompt("Ingresa el monto a depositar:"));
        depositar(monto);
    } else if (opcion === "3") {
        let monto = parseFloat(prompt("Ingresa el monto a retirar:"));
        retirar(monto);
    } else if (opcion === "4") {
        mostrarTransacciones();
    } else if (opcion === "5") {
        console.log("Saliendo...");
        break;
    } else {
        console.log("Opción inválida.");
    }
}