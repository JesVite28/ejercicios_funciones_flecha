// 27. Contar las ocurrencias de una palabra en una cadena
function contarOcurrencias() {
    let cadena = prompt("Introduce una cadena:");
    let palabra = prompt("Introduce la palabra a contar:");
    return cadena.split(palabra).length - 1;
}
console.log(contarOcurrencias());


//Funcion FLecha
// const convertirSnakeCase = () => {
//     const cadena = prompt("Ingresa una cadena:");
//     console.log(`Snake case: ${cadena.split(' ').join('_').toLowerCase()}`);
// };
