let fisica = 7;
let quimica = 6;
let biologia = 9;
let matematicas = 9;
let informatica = 10;

let sumaCalificaciones = fisica + quimica + biologia + matematicas + informatica;
let porcentaje = (sumaCalificaciones / 50) * 100;

if (porcentaje >=0 && porcentaje < 60){
    calificacion = "Mala 😢";
}else if(porcentaje >= 60 && porcentaje <= 80){
    calificacion = "Buena 👍";
}else if(porcentaje > 80){
    calificacion = "Exelente 🥳 ";
}else{
    calificacion = "No válida";
}


console.log(`Tu porsentaje es ${porcentaje}% y tu calificacion ${calificacion}. `);

