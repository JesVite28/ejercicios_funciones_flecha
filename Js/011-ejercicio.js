function revertirCadena() {
    let cadena = prompt("Introduce una cadena:");
    return cadena.split("").reverse().join("");
}
console.log(revertirCadena());

//Funcion FLecha
// const revertirCadena = () => {
//     const cadena = prompt("Ingresa una cadena:");
//     console.log(`Cadena invertida: ${cadena.split('').reverse().join('')}`);
// };
