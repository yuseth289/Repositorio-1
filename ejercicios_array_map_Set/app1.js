const readline = require('readline');

// Crear una interfaz para leer desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Precio de la habitación
const PRECIO_HABITACION = 100000;

// Arreglo para las 5 habitaciones (0 = libre, 1 = ocupada)
let habitaciones = [0, 0, 0, 0, 0];

// Función para contar habitaciones libres
const contarHabitacionesLibres = () => {
  return habitaciones.filter((estado) => estado === 0).length;
};

// Función para mostrar el estado de las habitaciones
const mostrarEstado = () => {
  let estado = "Estado de habitaciones:\n";
  for (let i = 0; i < habitaciones.length; i++) {
    estado += `Habitación ${i + 1}: ${habitaciones[i] === 0 ? "Libre 🥳" : "Ocupada 😢"}\n`;
  }
  console.log(estado);
  console.log(`Habitaciones libres: ${contarHabitacionesLibres()}\n`);
  mostrarMenu(); // Volver al menú después de mostrar el estado
};

// Función para procesar el pago
const procesarPago = (nombre, numeroHabitacion, metodoPago) => {
  if (metodoPago === "tarjeta") {
    rl.question("Ingresa el número de tarjeta: ", (numeroTarjeta) => {
      rl.question("Ingresa el monto a pagar: ", (monto) => {
        if (parseInt(monto) >= PRECIO_HABITACION) {
          console.log(`\nPago exitoso. ¡Bienvenido, ${nombre}! Has reservado la Habitación ${numeroHabitacion}.\n`);
          habitaciones[numeroHabitacion - 1] = 1; // Reservar la habitación
          console.log(`Habitaciones libres: ${contarHabitacionesLibres()}\n`);
        } else {
          console.log("Cantidad insuficiente. Pago cancelado.");
        }
        mostrarMenu(); // Volver al menú después del pago
      });
    });
  } else if (metodoPago === "efectivo") {
    rl.question("Ingresa la cantidad en efectivo: ", (monto) => {
      const montoIngresado = parseInt(monto);
      if (montoIngresado >= PRECIO_HABITACION) {
        const cambio = montoIngresado - PRECIO_HABITACION;
        console.log(`\nPago exitoso. ¡Bienvenido, ${nombre}! Has reservado la Habitación ${numeroHabitacion}.`);
        if (cambio > 0) {
          console.log(`Tu cambio es: ${cambio}`);
        }
        habitaciones[numeroHabitacion - 1] = 1; // Reservar la habitación
        console.log(`Habitaciones libres: ${contarHabitacionesLibres()}\n`);
      } else {
        console.log("Cantidad insuficiente. Pago cancelado.");
      }
      mostrarMenu(); // Volver al menú después del pago
    });
  } else {
    console.log("Método de pago inválido.");
    mostrarMenu(); // Volver al menú si el método de pago es inválido
  }
};

// Función para reservar una habitación
const reservarHabitacion = () => {
  rl.question("Por favor, ingresa tu nombre: ", (nombre) => {
    console.log(`El precio de la habitación es: ${PRECIO_HABITACION}`);
    rl.question("¿Deseas continuar con el pago? (si/no): ", (respuesta) => {
      if (respuesta.toLowerCase() === "si") {
        rl.question("Ingresa el número de habitación que deseas reservar (1-5): ", (num) => {
          const numeroHabitacion = parseInt(num);

          if (numeroHabitacion < 1 || numeroHabitacion > 5) {
            console.log("Número de habitación inválido. Usa 1-5.");
            mostrarMenu();
          } else if (habitaciones[numeroHabitacion - 1] === 1) {
            console.log("Habitación ya ocupada.");
            mostrarMenu();
          } else {
            rl.question("¿Deseas pagar con tarjeta o efectivo? (tarjeta/efectivo): ", (metodoPago) => {
              procesarPago(nombre, numeroHabitacion, metodoPago.toLowerCase());
            });
          }
        });
      } else if (respuesta.toLowerCase() === "no") {
        console.log("Reserva cancelada. Volviendo al menú principal.");
        mostrarMenu();
      } else {
        console.log("Respuesta inválida. Volviendo al menú principal.");
        mostrarMenu();
      }
    });
  });
};

// Función para liberar una habitación
const liberarHabitacion = (num) => {
  if (num < 1 || num > 5) {
    console.log("Número de habitación inválido. Usa 1-5.");
  } else if (habitaciones[num - 1] === 0) {
    console.log("Habitación ya está libre.");
  } else {
    habitaciones[num - 1] = 0;
    console.log(`Habitación ${num} liberada con éxito.`);
    console.log(`Habitaciones libres: ${contarHabitacionesLibres()}\n`);
  }
  mostrarMenu(); // Volver al menú después de liberar
};

// Función para mostrar el menú principal
const mostrarMenu = () => {
  console.log("\n--- Menú Principal ---");
  console.log("1. Ver estado de habitaciones");
  console.log("2. Reservar una habitación");
  console.log("3. Liberar una habitación");
  console.log("4. Salir");

  rl.question("Elige una opción: ", (opcion) => {
    if (opcion === "1") {
      mostrarEstado();
    } else if (opcion === "2") {
      reservarHabitacion(); // Llamar a la función de reserva
    } else if (opcion === "3") {
      rl.question("Ingresa el número de habitación (1-5): ", (num) => {
        liberarHabitacion(parseInt(num));
      });
    } else if (opcion === "4") {
      console.log("Saliendo...");
      rl.close(); // Cerrar la interfaz readline
    } else {
      console.log("Opción inválida. Intenta de nuevo.");
      mostrarMenu(); // Volver al menú si la opción es inválida
    }
  });
};

// Iniciar el programa mostrando el menú
mostrarMenu();