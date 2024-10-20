// 14. Obtener el carácter en una posición específica
function obtenerCaracterPosicion() {
    let cadena = prompt("Introduce una cadena:");
    let posicion = parseInt(prompt("Introduce la posición:"));
    return cadena.charAt(posicion);
}
console.log(obtenerCaracterPosicion());

//Funcion FLecha

// const obtenerCaracter = () => {
//     const cadena = prompt("Ingresa una cadena:");
//     const posicion = parseInt(prompt("Ingresa la posición del carácter que deseas obtener:"));
//     console.log(`Carácter en la posición ${posicion}: ${cadena.charAt(posicion)}`);
// };
