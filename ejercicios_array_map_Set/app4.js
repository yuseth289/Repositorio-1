// Arreglos para los nombres de los productos y sus cantidades
let productos = ["Agua", "Refresco", "Snack", "Chocolate", "Galletas"];
let cantidades = [5, 3, 0, 2, 1]; // Cantidades disponibles de cada producto

// Función para mostrar el inventario
const mostrarInventario = () => {
    console.log("Inventario de productos:");
    for (let i = 0; i < productos.length; i++) {
        console.log(`${i + 1}. ${productos[i]} - Cantidad: ${cantidades[i]}`);
    }
};

// Función para procesar el pago
const procesarPago = () => {
    let moneda = 1; // Valor fijo de la moneda
    console.log(`Se ha insertado $${moneda}.`);
    return moneda;
};

// Función para entregar el producto
const entregarProducto = (codigo) => {
    if (cantidades[codigo] > 0) {
        cantidades[codigo]--; // Disminuir la cantidad del producto
        console.log(`Se ha entregado: ${productos[codigo]}`);
    } else {
        console.log(`El producto ${productos[codigo]} está agotado.`);
        sugerirProducto();
    }
};

// Función para sugerir otro producto disponible
const sugerirProducto = () => {
    for (let i = 0; i < cantidades.length; i++) {
        if (cantidades[i] > 0) {
            console.log(`Te sugerimos: ${productos[i]} que está disponible.`);
            return;
        }
    }
    console.log("No hay productos disponibles.");
};

// Menú principal
while (true) {
    mostrarInventario();
    let codigo = parseInt(prompt("Selecciona un producto (1-5) o 0 para salir:")) - 1;

    if (codigo === -1) {
        console.log("Saliendo...");
        break;
    }

    if (codigo < 0 || codigo >= productos.length) {
        console.log("Código de producto inválido. Intenta de nuevo.");
        continue;
    }

    // Procesar el pago
    let pago = procesarPago();

    // Validar si hay stock y entregar el producto
    if (pago === 1) {
        entregarProducto(codigo);
    }
}