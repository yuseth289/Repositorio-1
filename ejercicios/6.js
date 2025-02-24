let numero1 = 1;
let numero2 = 2;
let numero3 = 3;

if(numero1 > numero2 && numero3 < numero1){
    console.log(`El numero mayor es ${numero1}.`)
}else if(numero2 > numero1 && numero3 < numero2){
    console.log(`El numero mayor es ${numero2}.`)
}else if(numero3 > numero2 && numero1 < numero3){
    console.log(`El numero mayor es ${numero3}.`)
}else if(numero1 === numero2 && numero3 === numero1){
    console.log("Los numero son iguales.")
}else{
    console.log("Caracter no valido")
}