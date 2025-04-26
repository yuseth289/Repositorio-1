//Ejercicio 1
const codigosLibros = [10, 25, 60, 45, 80, 15, 70];

const filtrarCodigos = codigosLibros.filter(codigo => codigo > 50);

console.log(filtrarCodigos);

//Ejercicio 2
const preciosProductos = [500, 1200, 300, 1500, 800];

const hayPreciosAltos = preciosProductos.some(precio => precio > 1000);

console.log(hayPreciosAltos);

const asistentes = new Map([[1, "Ana"], [2, "Luis"]]);

//Ejercicio 3
const agregarAsistente = (map, id, nombre) => {
    map.set(id, nombre);
};

agregarAsistente(asistentes, 3, "Sofia");

console.log(asistentes);

//Ejercicio 4
const asistentes = new Map([[101, "Carlos"], [102, "María"], [103, "José"]]);

const verificarAsistente = (map, codigo) => map.has(codigo);

console.log(verificarAsistente(asistentes, 102)); // Debe devolver true
console.log(verificarAsistente(asistentes, 104)); // Debe devolver false

//Ejercicio 5
const productosVendidos = new Set([1001, 1002, 1003]);

const verificarProducto = (codigo) => productosVendidos.has(codigo);

console.log(verificarProducto(1002)); // Debe devolver true
console.log(verificarProducto(1004)); // Debe devolver false

//Ejercicio 6
const sociosActivos = new Set([5001, 5002, 5003]);

// Agregar un nuevo socio
sociosActivos.add(5004); // Agrega el nuevo socio con ID 5004
sociosActivos.add(5001); // Intentar agregar un ID existente (no tendrá efecto)

console.log(sociosActivos); // Debe mostrar Set {5001, 5002, 5003, 5004}

//Ejercicio 7
const sociosActivos = new Set([5001, 5002, 5003]);

// Agregar un nuevo socio
sociosActivos.add(5004); // Agrega el nuevo socio con ID 5004

console.log(sociosActivos); // Debe mostrar Set {5001, 5002, 5003, 5004}

//Ejercicio 8