function contienePalabra() {
    let cadena = prompt("Introduce una cadena:");
    let palabra = prompt("Introduce la palabra a buscar:");
    return cadena.includes(palabra);
}
console.log(contienePalabra());

//Funcion FLecha
// const contienePalabra = () => {
//     const cadena = prompt("Ingresa una cadena:");
//     const palabra = prompt("Ingresa la palabra a buscar:");
//     console.log(`Contiene la palabra: ${cadena.includes(palabra)}`);
// };
