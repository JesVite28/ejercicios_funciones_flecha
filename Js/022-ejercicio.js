// 22. Comprobar si una cadena contiene solo números
function soloNumeros() {
    let cadena = prompt("Introduce una cadena:");
    return /^\d+$/.test(cadena);
}
console.log(soloNumeros());

//Funcion FLecha
// const convertirCamelCase = () => {
//     const cadena = prompt("Ingresa una frase:");
//     const camelCase = cadena.split(' ').map((palabra, indice) => indice === 0 ? palabra.toLowerCase() : palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join('');
//     console.log(`Camel case: ${camelCase}`);
// };
