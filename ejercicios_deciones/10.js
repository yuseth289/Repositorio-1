let numeroCopias = 1000;


if(numeroCopias > 0 && numeroCopias <= 499){
    copias = 120;
}else if(numeroCopias >= 500 && numeroCopias <= 749){
    copias = 100;
}else if(numeroCopias >= 750 && numeroCopias <= 999){
    copias = 80;
}else if(numeroCopias >= 1000){
    copias = 50;
}else{
    console.log("Numero de copias no valido.")
}

if(total = numeroCopias * copias){
    console.log(`Su precio por copia es de $${copias} y el costo total es $${total}`)
}