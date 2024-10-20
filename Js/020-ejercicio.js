// 20. Reemplazar todas las ocurrencias de una palabra
function reemplazarTodas() {
    let cadena = prompt("Introduce una cadena:");
    let palabraVieja = prompt("Introduce la palabra a reemplazar:");
    let palabraNueva = prompt("Introduce la nueva palabra:");
    return cadena.split(palabraVieja).join(palabraNueva);
}
console.log(reemplazarTodas());


//Funcion FLecha
// const terminaCon = () => {
//     const cadena = prompt("Ingresa una cadena:");
//     const palabra = prompt("Ingresa la palabra que quieres comprobar:");
//     console.log(`¿Termina con "${palabra}"? ${cadena.endsWith(palabra)}`);
// };
