// 29. Comprimir una cadena eliminando letras repetidas
function comprimirCadena() {
    let cadena = prompt("Introduce una cadena:");
    return cadena.replace(/(.)\1+/g, "$1");
}
console.log(comprimirCadena());


//Funcion FLecha
// const eliminarRepetidas = () => {
//     const cadena = prompt("Ingresa una cadena:");
//     const comprimida = cadena.split('').filter((letra, indice) => letra !== cadena[indice - 1]).join('');
//     console.log(`Cadena comprimida: ${comprimida}`);
// };
