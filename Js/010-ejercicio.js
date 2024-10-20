function contarLetra() {
    let cadena = prompt("Introduce una cadena:");
    let letra = prompt("Introduce la letra a contar:");
    return cadena.split(letra).length - 1;
}
console.log(contarLetra());

//Funcion FLecha

// const contarOcurrencias = () => {
//     const cadena = prompt("Ingresa una cadena:");
//     const letra = prompt("Ingresa la letra a contar:");
//     const ocurrencias = [...cadena].filter(char => char === letra).length;
//     console.log(`Ocurrencias de '${letra}': ${ocurrencias}`);
// };
