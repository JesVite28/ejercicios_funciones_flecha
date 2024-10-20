// 28. Capitalizar todas las palabras de una frase
function capitalizarFrase() {
    let cadena = prompt("Introduce una cadena:");
    return cadena.split(" ").map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(" ");
}
console.log(capitalizarFrase());


//Funcion FLecha

// const capitalizarFrase = () => {
//     const cadena = prompt("Ingresa una frase:");
//     const capitalizada = cadena.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');
//     console.log(`Frase capitalizada: ${capitalizada}`);
// };
