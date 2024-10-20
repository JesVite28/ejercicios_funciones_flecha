function convertirMayusculas(cadena) {
    return cadena.toUpperCase();
}

const texto = prompt("Por favor, introduce una palabra:");
const resultado = convertirMayusculas(texto);
console.log(`La palabra en mayúsculas es: ${resultado}`);

//Funcion FLecha
// const convertirMayusculas = () => {
//     const cadena = prompt("Ingresa una cadena:");
//     console.log(`Mayúsculas: ${cadena.toUpperCase()}`);
// };
