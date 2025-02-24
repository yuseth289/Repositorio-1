let fisica = 7;
let quimica = 6;
let biologia = 9;
let matematicas = 9;
let informatica = 10;

let sumaCalificaciones = fisica + quimica + biologia + matematicas + informatica;
let porcentaje = (sumaCalificaciones / 50) * 100;
let calificacion;

switch (true) {
    case (porcentaje >= 0 && porcentaje < 60):
        calificacion = "Mala 😢";
        break;
    case (porcentaje >= 60 && porcentaje <= 80):
        calificacion = "Buena 👍";
        break;
    case (porcentaje > 80):
        calificacion = "Excelente 🥳";
        break;
    default:
        calificacion = "No válida";
        break;
}

console.log(`Tu porcentaje es ${porcentaje}% y tu calificación ${calificacion}.`);