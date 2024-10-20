function esPalindromo() {
    let cadena = prompt("Introduce una palabra:");
    let cadenaRevertida = cadena.split("").reverse().join("");
    return cadena === cadenaRevertida;
}
console.log(esPalindromo());

//Funcion FLecha
// const esPalindromo = () => {
//     const cadena = prompt("Ingresa una palabra:");
//     const esPalindromo = cadena === cadena.split('').reverse().join('');
//     console.log(`Es palíndromo: ${esPalindromo}`);
// };
