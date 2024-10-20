
// 18. Eliminar todos los espacios de una cadena
function eliminarEspaciosTodos() {
    let cadena = prompt("Introduce una cadena:");
    return cadena.replace(/\s/g, "");
}
console.log(eliminarEspaciosTodos());


//Funcion FLecha

// const eliminarVocales = () => {
//     const cadena = prompt("Ingresa una cadena:");
//     console.log(`Cadena sin vocales: ${cadena.replace(/[aeiouAEIOU]/g, '')}`);
// };
