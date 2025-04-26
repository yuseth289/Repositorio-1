let nombre = "Ana López";
let horas = 8;

if (horas >= 1 && horas <= 10){
    salario = horas * 30000;
}else if(horas > 10){
    salario = horas * 3300;
}else{
    salario = 0
    console.log("El numero de horas es invalido")
}

if (salario > 0){
    console.log(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario}.`);
}
