let interrutor = prompt("Desea prender el semaforo: escribe 'si' o 'no'.");

if (interrutor === "si") {
    
    console.log("el semaforo esta prendido.");
    
    let colorSemaforo = prompt("color de semaforo: ")

    let mensaje = colorSemaforo == "rojo" ? "parar":
    colorSemaforo == "verde"? "siga" : colorSemaforo == "amarillo"?
    "preprar..": "semaforo dañado"

    console.log(mensaje)
    
} else if (interrutor === "no") {
    console.log("fin del programa.");
} else {
    console.log("Opción no válida.");
}
