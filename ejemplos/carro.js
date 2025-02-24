let encendido = true;
let velocidad = 32;

encendido == true ? velocidad === 0 ? console.log("Carro freno"):
velocidad > 0 && velocidad <= 100? console.log("Carro en marcha..."): 
console.log("Evite un accidente... exceso de velocidad"):
console.log("Encienda su vehículo");