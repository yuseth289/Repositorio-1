let genero = "femenino";
let edad = 20;


if (edad > 50){
    ayuda = 120000;
}else if(edad >= 30 && edad <= 50){
    ayuda = 100000;
}else if(genero === "hombre"){
    ayuda = 40000;
}else if (genero >= 0 ){
    console.log("Informción no valida.");
}


if(edad < 30){
    console.log("No recibe ayuda.");
    process.exit(1)
}

console.log(`El valor de ayuda mensual es: $${ayuda}`);