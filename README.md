

## Que es typescript y quien lo desarrolla?


### Tema 1
1. Typescript es un lenguaje de codigo de tipado estatico que esta basado en javascript, este agrega reglas de codigo mas especificas al momento de definir el programa que luego seran compiladas a lenguaje de javascript
   typescript es desarrollado y mantenido principalmente por **Microsoft**, bajo la dirección de diseño de Anders Heljsberg (creador de C# y Delphi)
2. Javascript posee tipado dinamico, mientras que typescript posee un tipado estatico que permite definir y comprobar los tipos antes de ejecutar el codigo.
3. Una de las principales ventajas es que permite detectar errores  en el codigo antes de ejecutarlo.
4. La version actual mas reciente de typescript es la 7.0.2


## Tema 2

1. Con el administrador de paquetes de node.js npm install typescript
2. El archivo tsconfig.json sirve para configurar las opciones del compilador
3. El comando tsc busca el archivo tsconfig.json y usa las opciones que trae dentro  para compilar el codigo ts que hayamos escrito
4. tsc es el compilador que transforma codigo ts a js, tsx es el que ejecuta el codigo de los archivos, y node ejecuta simplemente javascript


## Tema 3

1. Los tipo string son tipos de dato de tipo texto, number es el tipo de dato especificar que el formato sera numerico  y lo mismo para boolean, para especificar si el parametro sera verdadero o falso [true, false]
```ts
const nombre: string = "gaston",
const edad: number = 21,
const esHombre: boolean = true;

```
2. Para declarar una variable como array en ts se escribe el tipo de dato seguido de un [], 
```ts
const nombre: string[] =  ["Gaston", "Jose"]
```
3. El tipo union sirve para que una variable pueda tener dos tipos posibles de datos
```ts
let dosDatos: number | boolean;
```
4. No se se recomienda usar el tipo de dato any, por que desactiva las comprobaciones de tipo en el codigo
```ts
//Ejemplo
let dato: any = "hola";

//Ahora cambio el tipo de dato de la variable
dato = 42 // Esto no advierte ningun error durante el desarrollo

console.log(dato.toUpperCase()) // Typescript permite usar el metodo de string sin avisar que el tipo de dato fue cambiado y que provocara errores

```




## Tema 4 Funciones

1. Los tipos de parametros dentro de las funciones se escriben de la misma forma que la declaracion de variables o constantes, simplemente hay que agregar el tipo de dato a el parametro que recibe y despues hay que agregar el tipo de dato que devuelve la funcion
```ts
function sumar(a:number, b:number): number{
	return a+b
}

```

2. como explique en la pregunta anterior simplemente se define el tipo de dato que tendra el retorno
```ts
function hola():string {
	return "Hola"
}
```


4. Un parametro por defecto es un parametro que se le asigna por defecto al parametro de entrada de una funcion cuando se la define
```ts 
const hola(parametro: String = "mundo"){
	return `Hola ${parametro}`;
}

```


## Tema 5
1. Una interfaz es como un esquema que define que propiedades y metodos tendria mi objeto al momento de crearlo, y que tipo de datos tendra cada propiedad
```ts
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

```

2. El type seria una forma de definir una especie de alias a algun tipo de dato o estructura que le queramos dar a una constante o variable 
```ts

//Ejemplo

type Usuario = {
	nombre: string;
	edad: number;
}
// Despues yo puedo definir un objeto como este tipo de dato y puedo ahorrarme el paso de definir el tipo de dato por que ya fue definido previamente

const Elusuario: Usuario = {
	nombre: "Gaston",
	edad: 21
}

// Tambien se puede definir el alias simplemente para un tipo de dato

type numeritos = number;
const numerosEnteros: numeritos = 5;

type dosValores = "valor1" | "valor2";
const valores:dosValores = "valor"


```

3. una propiedad opcional seria un tipo de propiedad que puede tener un objeto pero que no es necesariamente obligatoria.
```ts
	
type Usuario = {
	nombre: string; // esta propiedad si es obligatoria al crear el objeto usuario
	edad?: number; // esta propiedad si es opcional
};

const usuario1: Usuario = { nombre: "Gaston"} 
const usuario2: Usuario = { nombre: "Gaston", edad; 21 }

```

4. Yo usuaria interfaces cuando tengo que definir objetos ya que puedo definir parametros opcionales y tipos de datos, y usuario el type cuando quiero ahorrarme el tiempo de destar declarando el tipo de dato en cada variable o constante que quiera hacer.



## Tema 6 Enums y tipos literales
1. Un enum es una declaracion de tipescript que te permite definir un conjunto de constantes para luego podes acceder a sus valores meidante una notacion de punto Agrupacion.constante1, no hace falta definir el tipo de dato que almecenes en las variables de enum por que typescript deduce su tipo.
```ts
enum EstadoDelClima {
	estado1 =  "Soleado",
	estado2 =  "Lloviendo"
}

console.log(EstadoDelClima.estado1)

``` 

2. El tipo de dato literal es el que solo te permite almacenar un tipo de dato en una constante o variable
```ts
// Ahora solo se puede definir o redefinir a esta variable con el valor de 1
let cantidad: 1 =  1;

```

3.  Se parecen por que los dos defininen que tipos de datos va a tener y estos son fijos y la diferencia es que enum crea un objeto que tiene las propiedades que nosotros le definimos, y el tipo literal simplemente declara el unico tipo de dato al que se le puede asignar a una variable o constante

4. Un ejemplo para el caso de enum seria cuando queres definir valores que sabes que nunca van a cambiar por ejemplo los dias de la semana y queres agruparlos en algun lado, en cambio el tipo literal se usaria cuando queres que tu constante o variable solo acepte ciertos tipos de valores especificos.