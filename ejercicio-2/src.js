/* #################
## EJERCICIO2 ###### 
####################
Solicita a un usuario su nombre y su primer apellido. Posteriormente pregúntale si le apetece un café.

    Si el usuario acepta mostraremos un mensaje del tipo: "¡Bienvenid@ Juan Campos! En breves recibirá su café calentito en casa."

    Si el usuario no acepta: "¡Bienvenid@ Juan Campos! Hoy no hay café."

 */

'use strict';

// Solicitar nombre y apellido al usuario
const username = prompt (" Cual es tu nombre");
const lastName = prompt (" Cual es tu apellido");

// preguntar si quiere cafe

const result = confirm ("Quieres cafe?");

// condicion si el usuario acepta mostrar un mensaje "¡Bienvenid@ Juan Campos! En breves recibirá su café calentito en casa."
if (result) {
    alert (`¡Bienvenid@ ${username} ${lastName} ! En breves recibirá su café calentito en casa.`)    
} else {
    alert (`¡Bienvenid@ ${username} ${lastName} ! Hoy no hay café. `)
}
// condicion si el usuario no acepta mostrar un mensaje "¡Bienvenid@ Juan Campos! Hoy no hay café."

