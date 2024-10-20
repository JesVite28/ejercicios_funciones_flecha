function reemplazarPalabra() {
    let cadena = prompt("Introduce una cadena:");
    let palabraVieja = prompt("Introduce la palabra a reemplazar:");
    let palabraNueva = prompt("Introduce la nueva palabra:");
    return cadena.replace(palabraVieja, palabraNueva);
}
console.log(reemplazarPalabra());

//Funcion FLecha
// const reemplazarPalabra = () => {
//     const cadena = prompt("Ingresa una cadena:");
//     const palabraAntigua = prompt("Ingresa la palabra a reemplazar:");
//     const palabraNueva = prompt("Ingresa la nueva palabra:");
//     console.log(`Cadena modificada: ${cadena.replace(palabraAntigua, palabraNueva)}`);
// };
