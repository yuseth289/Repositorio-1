//Error ReferenceError
try {
    // Intentamos acceder a una variable que no existe
    console.log(variableInexistente);
   } catch (error) {
    console.log('Tipo de error:', error.name);
    console.log('Mensaje:', error.message);
   }
//-------------------------------------------------------------------------------------------------
//Error TypeError
try {
 // Caso 1
 const arr = [1, 2, 3];
 arr.toUppercase();
} catch (error) {
 console.log('Error Caso 1:', error.name); 
}
//-------------------------------------------------------------------------------------------------
//Error SyntaxError
try {
    // Caso 2
    eval('if (true) {');
   } catch (error) {
    console.log('Error Caso 2:', error.name); 
   }
//-------------------------------------------------------------------------------------------------
//Contraseña
function validarPassword(password) {
    if (password.length < 8) {
        throw new Error('La contraseña debe tener al menos 8 caracteres');
    }
    if (!/[A-Z]/.test(password)) {
        throw new Error('La contraseña debe contener al menos una mayúscula');
    }
    if (!/[0-9]/.test(password)) {
        throw new Error('La contraseña debe contener al menos un número');
    }
    return true;
}

// Prueba la función con diferentes contraseñas
const contraseñasParaProbar = [
    'abc123',        // Muy corta
    'abcdefgh',      // Sin mayúsculas y sin números
    'Abcdefgh',      // Sin números
    'Abc12345',      // Válida
    'abc12345',      // Sin mayúsculas
    'ABC12345',      // Sin minúsculas
    'Abc1234'        // Válida
];

contraseñasParaProbar.forEach(password => {
    try {
        validarPassword(password);
        console.log(`La contraseña "${password}" es válida.`);
    } catch (error) {
        console.log('Error de validación:', error.message);
    }
});

//-------------------------------------------------------------------------------------------------
//Manejo de archivos
function procesarArchivo(nombreArchivo) {
    let archivo = null;
    try {
        archivo = { nombre: nombreArchivo, estado: 'abierto' };
        // Simular procesamiento
        if (nombreArchivo === 'corrupto.txt') {
            throw new Error('Archivo corrupto');
        }
        console.log('Procesamiento exitoso de', archivo.nombre);
    } catch (error) {
        console.log('Error al procesar:', error.message);
    } finally {
        if (archivo) {
            console.log('Cerrando archivo:', archivo.nombre);
            archivo.estado = 'cerrado';
        }
    }
}

// Pruebas con diferentes nombres de archivos
const archivosParaProbar = [
    'documento.txt',  // Archivo válido
    'imagen.png',     // Archivo válido
    'corrupto.txt',   // Archivo corrupto
    'datos.csv'       // Archivo válido
];

archivosParaProbar.forEach(nombreArchivo => {
    procesarArchivo(nombreArchivo);
});
//----------------------------------------------------------------------------------------------------
