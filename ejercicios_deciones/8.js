let duracion = 15;

if(duracion === 15){
    costo = 18000;
}else if(duracion === 30){
    costo = 35000;
}else if(duracion === 90){
    costo = 86000;
}else{
    console.log("Duracion no validad")
}


if(costo > 0){
    console.log(`El costo por ${duracion} dias de mensualidad es: $${costo}.`);
}