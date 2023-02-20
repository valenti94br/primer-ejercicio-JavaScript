// VARIABLES


// Crea un cuadro de diálogo (alert) que muestre lo siguiente “JavaScript funcionando correctamente”
// Comenta el código que muestra el cuadro de diálogo

// console.warn("JavaScript funcionando correctamente");

// Crear variable tipo let de nombre variableSinValor declarada sin valor

let variableSinValor; 

// Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos

let booleano1 = true;
let booleano2 = false;

// Crear variable tipo const de nombre PI declarada con valor 3.14

const PI = 3.14;

// Crear variable tipo const de nombre TAU declarada con valor 2 veces PI

const TAU = PI*2;

// Crear variable tipo const de nombre miNombre declarada con valor tu nombre

const miNombre = "Valenti";

// Crear variable tipo const de nombre miNumeroFav declarada con valor numérico

const miNumeroFav = 7

// Crea una variable de tipo booleano

const booleano = true

// Muestra por consola la longitud de la variable miNombre

console.log(miNombre.length)

// Crear variable tipo const de nombre miNumeroFav declarada con valor numérico

console.log(typeof miNumeroFav)

// Muestra un console.log que diga ‘Mi nombre es Euralio y mi numero favorito es 7” concatenado variables declaradas más arriba.

console.log(`Mi nombre es ${miNombre} y mi numero favorito es ${miNumeroFav}`)

// Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.

console.log("Seré un crack en JavaScript al terminar el bootcamp".toUpperCase());

// Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack”

const crack = "Hola soy un crack"

console.log(crack.substring(0,5));

// Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable

const numeroFav = miNumeroFav.toString()
console.log(numeroFav);

// Crea una variable y asignale un valor. Después utilizando template literal haz uso de la variable que habías creado, guarda el template literal en otra variable y sacala por consola.

const inventado = 14
cosa = (`Usando la variable ${inventado} para sustituir el número ${miNumeroFav}`);
console.log(cosa)

// Muestra por consola la variable PI hasta los 2 primeros decimales

console.log(PI.toFixed(2));


// ARRAYS

// Crear variable de nombre arrayVacio cuyo valor sea un array vacío

const arrayVacio = [];

// Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)

const arrayNumeros = [0,1,2,3,4,5,6,7,8,9];

// Crear variable de nombre arrayNumeros2 declarada con un array de números del 0 al 15 (0, 1, 2...)

const arrayNumeros2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)

const arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-7,-8,-9];


// Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'

const holaMundo = ["Hola","Mundo"]

// Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'

const loGuardoTodo = ["hola","que",23,42.33,"tal"];

// Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

const arrayDeArrays = [[756,"nombre"],[225,"apellido"],[298,"direccion"]]

// Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola

loGuardoTodo.push("megainvent");
console.log(loGuardoTodo)

// Muestra por consola el valor ‘que’ de la variable loGuardoTodo

console.log(loGuardoTodo[1])

// Añade el valor ‘Euralio’ en la array loGuardoTodo y muestrala por consola

loGuardoTodo.push("Euralio");
console.log(loGuardoTodo[6])

// Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo y matrícula con sus respectivos valores

const coche = {
   marca: "mazda",
   modelo: "premaci",
   matrícula: 123456,

} 

// Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal y piso con sus respectivos valores

const casa = {
    codPostal: 46007,
    calle: "calleYecla",
    portal: "piso",
    piso: "4",
}

// Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes(ej. ‘javascript’,’php’), array proyectos(ej. ‘mi página personal’,etc)

const fullStackDeveloper = {
    arrayLenguajes: ["html","css","javaScript"],
    arrayProyectos: ["miPagina","objetosJavaScript","juegoRanitas"]
}

// Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color y edad con sus respectivos valores

const perro = {
    nombre: "cas",
    raza: "husky",
    color: "blanco",
    edad: 8,
}

// Crea un objeto de nombre Noticia que tenga las propiedades: titular y cuerpo con sus respectivos valores

const noticia = {
    titular: "llamativo",
    cuerpo: "asustaviejas",
}

// Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos y edad con sus respectivos valores

const persona = {
    nombre: "Marcos",
    apellidos:"Calatayud",
    edad: 130,
}

// Muestra por consola el nombre de la variable Persona

console.log(persona.nombre)

// Muestra por consola el lenguaje javascript de la variable FullStackDeveloper

console.log(fullStackDeveloper.arrayLenguajes[2])

// Crea un objeto de nombre Portatil que tenga la propiedad marca, accede a esta propiedad con .marca y muestrala por consola

const portatil = {
    marca: "Lenovo"
}
console.log(portatil.marca)

// Obtén el valor de la propiedad marca del objeto anteriormente creado (Portatil) con ["marca"] y muestrala por consola

console.log(portatil["marca"])

// Crea un objeto de nombre Concierto con una propiedad llamada grupos que es un array, obtén el valor de la propiedad y muestrala por consola

const concierto = {
    grupos: ["a","b","c"]
}
console.log(concierto.grupos)

// Crea un objeto de nombre Led, con las propiedades: lampara1 con valor rojo, lampara2 con valor verde y lampara3 con valor azul, obtén el valor de las propiedades guardándolo en la variable array RGB[Rojo, Verde, Azul] y muestra este array por consola. La array por consola debería mostrarse así [‘rojo’,’verde’,’azul’]

const led = {
    lampara1: "rojo",
    lampara2: "verde",
    lampara3: "azul",
}
const arrayRGB = [led.lampara1,led.lampara2,led.lampara3]
console.log(arrayRGB)

// Crea un objeto de nombre O_Error con la propiedad código, obtén el valor de la propiedad y muestrala por consola

const O_Error = {
    codigo: "error"
}
console.log(O_Error.codigo)

// Crea un objeto de nombre Grupo con la propiedad integrantes (array),obtén el valor de la propiedad guardándolo en la variable integrantes y muestra por consola a uno de los integrantes

const grupo = {
    intengrantes: ["Paco","Manuel","Matias","Enrique"]
}
console.log(grupo.intengrantes[2])

// Crea un objeto de nombre Impresora con la propiedad objeto tinta{rojo, verde, azul}, obtén el valor de la propiedad guardándolo en la variable nivelesTinta y muestrala por consola

const Impresora = {
    tinta: ["rojo","verde","azul"]
}
const nivelesTinta = Impresora.tinta
console.log(nivelesTinta)

// Crea un objeto de nombre Movil con la propiedad especificaciones obtén el valor de la propiedad con ["especificaciones"] guardándolo en la variable especificaciones y muestrala por consola

const Movil = {
    especificaciones: "caro"
}
const especificaciones = Movil["especificaciones"]
console.log(Movil["especificaciones"])
console.log(especificaciones)

// Dado el objeto de nombre Portatil con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”, consolea el resultado

portatil.marca="MSI"
console.log(portatil)

// Dado el objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad grupos, consolea el resultado

con


console.log

