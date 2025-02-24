let operador = "tigo";
let minutosInternacionales = 100;

if(operador === "tigo"){
    cargoFijo = 45000;
    valorMinuto = 200;
    valorDatos = 12000;
}else if(operador === "claro"){
    cargoFijo = 30000;
    valorMinuto = 100;
    valorDatos = 18000;
}else if(operador === "movistar"){
    cargoFijo = 40000;
    valorMinuto = 250;
    valorDatos = 8000;
}else{
    console.log("El operador es invalido.");
    Process.exit(1)
}

let total = cargoFijo + (valorMinuto * minutosInternacionales) + valorDatos;

console.log(`Operador: ${operador}. 
Cargo fijo: $${cargoFijo}.
Minutos internacionales: ${minutosInternacionales} y minutos $${valorMinuto}
Paquetes de datos: $${valorDatos}.
Costo total: $${total}. `);