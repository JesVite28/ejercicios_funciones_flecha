
// 17. Comprobar si una cadena comienza con una palabra específica
function comienzaCon() {
    let cadena = prompt("Introduce una cadena:");
    let palabra = prompt("Introduce la palabra:");
    return cadena.startsWith(palabra);
}
console.log(comienzaCon());

//Funcion FLecha
// const contarPalabras = () => {
//     const cadena = prompt("Ingresa una cadena:");
//     console.log(`Número de palabras: ${cadena.split(' ').length}`);
// };
