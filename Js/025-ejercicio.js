// 25. Remover caracteres especiales de una cadena
function removerEspeciales() {
    let cadena = prompt("Introduce una cadena:");
    return cadena.replace(/[^\w\s]/gi, '');
}
console.log(removerEspeciales());


//Funcion FLecha
// const eliminarCaracteresEspeciales = () => {
//     const cadena = prompt("Ingresa una cadena:");
//     console.log(`Cadena sin caracteres especiales: ${cadena.replace(/[@#&!]/g, '')}`);
// };
