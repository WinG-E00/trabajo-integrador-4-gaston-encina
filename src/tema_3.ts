
// Tipo de dato string number y boolean
const nombre: string = "gaston";
const edad: number = 21;
const esHombre: boolean = true;


console.log("Tipo de dato string",nombre)
console.log("Tipo de dato number",edad)
console.log("Tipo de dato boolean"," Es hombre?: ",nombre)



// Tipo de dato en un array

const nombreArray: string[] =  ["Gaston", "Jose"]

console.log("Tipo de dato array", nombreArray)



// Tipo de dato union
let dosDatos: number | boolean;
dosDatos = true;
console.log("Tipo de dato con union", dosDatos);


// Tipo de dato any
//Ejemplo
let dato: any = "hola";

//Ahora cambio el tipo de dato de la variable
dato = 42 // Esto no advierte ningun error durante el desarrollo

console.log(dato.toUpperCase()) // Typescript permite usar el metodo de string sin avisar que el tipo de dato fue cambiado y que provocara errores


