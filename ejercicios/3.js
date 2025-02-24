let tipo = 2;
let cantidad = 3;
let horas = 0;

if (tipo === 1){
    costoHoras = 4000;
}else if(tipo === 2){
    costoHoras = 3000;
}else{
    console.log("El tipo de lavadora es invalido")
    process.exit(1);
}

if(horas <=0){
    console.log("El numero de horas es invalido")
}

let total = cantidad * horas * costoHoras

if(cantidad >= 3){
    descuento = total * 0.03;
    total -= descuento
}

if (total > 0){
    console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipo} por ${horas} horas $${total}.`);
}
