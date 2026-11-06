
// Interface
interface Usuario {
  nombre: string;
  edad: number;
  email?: string; // opcional
}

// En esta interfaz por ejemplo si es que se crea un usuario tiene que tener si si un nombre y edad pero por ejemplo el parametro email es opcional
const usuario: Usuario = {
  nombre: "Ana",
  edad: 28
};


console.log("Objeto Usuario" usuario)


// Type

type Usuario = {
	nombre: string;
	edad: number;
}
// Despues yo puedo definir un objeto como este tipo de dato y puedo ahorrarme el paso de definir el tipo de dato por que ya fue definido previamente

const Elusuario: Usuario = {
	nombre: "Gaston",
	edad: 21
}


type numeritos = number;
const numerosEnteros: numeritos = 5;

type dosValores = "valor1" | "valor2";
const valores:dosValores = "valor"



console.log("Objeto usuario creado con un type", Elusuario);

console.log("Constante llamada numerosEnteros creada con type numeritos", numerosEnteros)
console.log("Constante que solo puede tener dos valores posibles creada con alias de dosValores", valores)




// Pripiedades opcionales
type Usuario = {
	nombre: string; // esta propiedad si es obligatoria al crear el objeto usuario
	edad?: number; // esta propiedad si es opcional
};

const usuario1: Usuario = { nombre: "Gaston"} 
const usuario2: Usuario = { nombre: "Gaston", edad; 21 }

console.log("Usuario creado sin la propiedad edad", usuario1);
console.log("Usuario creado con la propiedad edad", usuario2);

