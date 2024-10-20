function convertirMinusculas(cadena) {
    return cadena.toLowerCase();
}

let texto = prompt("Por favor, introduce una palabra:");
let resultado = convertirMinusculas(texto);
console.log(`La palabra en minusculas es: ${resultado}`)

//Funcion FLecha
// const convertirMinusculas = () => {
//     const cadena = prompt("Ingresa una cadena:");
//     console.log(`Minúsculas: ${cadena.toLowerCase()}`);
// };
