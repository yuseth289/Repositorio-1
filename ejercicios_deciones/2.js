function esPar(numero){
    if (numero % 2 ===0){
        return `${numero} es par.`;
    }else if(numero % 2 !==0){
        return `${numero} es impar.`;
    }
}

 console.log(esPar(4))