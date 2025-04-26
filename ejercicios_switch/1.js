let tamañoSandwich = "grande";
let tocineta = true;
let jalapeño = true;
let pavo = true;
let queso = true;

let costo;

switch (tamañoSandwich) {
  case "grande":
    costo = 12000;
    break;
  case "pequeño":
    costo = 6000;
    break;
  default:
    console.log("Tipo de sándwich inválido.");
    process.exit(1);
}

let costoIngredientes = 0;

if (tocineta) {
  costoIngredientes += 3000;
}
if (pavo) {
  costoIngredientes += 3000;
}
if (queso) {
  costoIngredientes += 2500;
}
let total = costo + costoIngredientes;

console.log(`
Tamaño del sándwich: ${tamañoSandwich}
Ingredientes adicionales:
${tocineta ? "- Tocineta: $3000" : ""}
${jalapeño ? "- Jalapeño: $0 (gratis)" : ""}
${pavo ? "- Pavo: $3000" : ""}
${queso ? "- Queso: $2500" : ""}
Costo base: $${costo}
Costo de ingredientes adicionales: $${costoIngredientes}
Costo total: $${total}
`);