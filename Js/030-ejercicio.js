// 30. Insertar una cadena en una posición específica
function insertarCadena() {
    let cadena = prompt("Introduce una cadena:");
    let insertar = prompt("Introduce la cadena a insertar:");
    let posicion = parseInt(prompt("Introduce la posición:"));
    return cadena.slice(0, posicion) + insertar + cadena.slice(posicion);
}
console.log(insertarCadena());

//Funcion FLecha
// const frecuenciaCaracteres = () => {
//     const cadena = prompt("Ingresa una cadena:");
//     const frecuencias = [...cadena].reduce((contador, char) => {
//         contador[char] = (contador[char] || 0) + 1;
//         return contador;
//     }, {});
//     console.log(`Frecuencia de caracteres:`, frecuencias);
// };
