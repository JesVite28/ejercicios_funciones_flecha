function extraerParte() {
    let cadena = prompt("Introduce una cadena:");
    let inicio = parseInt(prompt("Introduce la posición inicial:"));
    let fin = parseInt(prompt("Introduce la posición final:"));
    return cadena.substring(inicio, fin);
}
console.log(extraerParte());

//Funcion FLecha
// const eliminarEspacios = () => {
//     const cadena = prompt("Ingresa una cadena con espacios:");
//     console.log(`Cadena sin espacios: '${cadena.trim()}'`);
// };
