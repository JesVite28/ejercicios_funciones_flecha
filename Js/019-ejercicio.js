// 19. Comprobar si una cadena termina con una palabra específica
function terminaCon() {
    let cadena = prompt("Introduce una cadena:");
    let palabra = prompt("Introduce la palabra:");
    return cadena.endsWith(palabra);
}
console.log(terminaCon());


//Funcion FLecha
// const comienzaCon = () => {
//     const cadena = prompt("Ingresa una cadena:");
//     const palabra = prompt("Ingresa la palabra que quieres comprobar:");
//     console.log(`¿Comienza con "${palabra}"? ${cadena.startsWith(palabra)}`);
// };
