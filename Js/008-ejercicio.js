function capitalizarPrimeraLetra() {
    let cadena = prompt("Introduce una cadena:");
    return cadena.split(" ").map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(" ");
}
console.log(capitalizarPrimeraLetra());

//Funcion FLecha
// const extraerParte = () => {
//     const cadena = prompt("Ingresa una cadena:");
//     const inicio = parseInt(prompt("Ingresa el índice de inicio:"));
//     const fin = parseInt(prompt("Ingresa el índice de fin:"));
//     console.log(`Parte extraída: ${cadena.substring(inicio, fin)}`);
// };
