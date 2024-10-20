function obtenerCaracter() {
    let cadena = prompt("Introduce una cadena:");
    let posicion = parseInt(prompt("Introduce la posición del carácter:"));
    return cadena.charAt(posicion);
}
console.log(obtenerCaracter());

//Funcion FLecha
// const primeraLetraMayuscula = () => {
//     const cadena = prompt("Ingresa una cadena:");
//     console.log(`Primera letra en mayúscula: ${cadena.charAt(0).toUpperCase() + cadena.slice(1)}`);
// };
