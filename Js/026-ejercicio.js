// 26. Encontrar la palabra más larga en una cadena
function palabraMasLarga() {
    let cadena = prompt("Introduce una cadena:");
    let palabras = cadena.split(" ");
    return palabras.reduce((larga, actual) => actual.length > larga.length ? actual : larga, "");
}
console.log(palabraMasLarga());


//Funcion FLecha

// const palabraMasLarga = () => {
//     const cadena = prompt("Ingresa una cadena:");
//     const palabras = cadena.split(' ');
//     const palabraLarga = palabras.reduce((palabraLarga, palabraActual) => palabraActual.length > palabraLarga.length ? palabraActual : palabraLarga, '');
//     console.log(`La palabra más larga es: ${palabraLarga}`);
// };
