//Declaracion de el tipo de dato que tendra el parametro dentro de las funciones
// Y definicion de el tipo de dato que tendra el retorno de esa funcion
function sumar(a:number, b:number): number{
	return a+b
}

// Entran dos parametros 2 y 3  que son de tipo number, y salen de la funcion como el tipo number
console.log(sumar(2,3))


// Parametros por defecto, si yo utilizo esta funcion sin enviarle ningun parametro este tendra por defecto el valor de mundo
const hola(parametro: String = "mundo"){
	return `Hola ${parametro}`;
}

console.log(hola());


