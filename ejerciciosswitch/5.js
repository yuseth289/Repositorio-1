let numero1 = 1;
let numero2 = 2;
let numero3 = 3;

switch (true) {
    case (numero1 > numero2 && numero3 < numero1):
        console.log(`El número mayor es ${numero1}.`);
        break;
    case (numero2 > numero1 && numero3 < numero2):
        console.log(`El número mayor es ${numero2}.`);
        break;
    case (numero3 > numero2 && numero1 < numero3):
        console.log(`El número mayor es ${numero3}.`);
        break;
    case (numero1 === numero2 && numero3 === numero1):
        console.log("Los números son iguales.");
        break;
    default:
        console.log("Carácter no válido");
        break;
}