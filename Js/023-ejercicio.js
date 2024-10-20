// 23. Truncar una cadena a un número de caracteres
function truncarCadena() {
    let cadena = prompt("Introduce una cadena:");
    let num = parseInt(prompt("Introduce el número de caracteres a truncar:"));
    return cadena.slice(0, num);
}
console.log(truncarCadena());


//Funcion FLecha
// const truncarCadena = () => {
//     const cadena = prompt("Ingresa una cadena:");
//     const num = parseInt(prompt("Ingresa el número máximo de caracteres:"));
//     console.log(`Cadena truncada: ${cadena.length > num ? cadena.slice(0, num) + '...' : cadena}`);
// };
