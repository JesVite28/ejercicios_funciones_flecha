// 24. Comprobar si una cadena contiene solo letras
function soloLetras() {
    let cadena = prompt("Introduce una cadena:");
    return /^[a-zA-Z]+$/.test(cadena);
}
console.log(soloLetras());



//Funcion FLecha
// const contieneSoloNumeros = () => {
//     const cadena = prompt("Ingresa una cadena:");
//     console.log(`¿Contiene solo números? ${/^[0-9]+$/.test(cadena)}`);
// };
