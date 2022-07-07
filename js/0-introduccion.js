//*VARIABLES

let numero1 = 15;

let numero2 = 3;

//*TIPOS DE DATOS

//?STRINGS

let string = 'Hola mundo, mi nombre es Nico😎'

//?NUMBERS
let number = 15;
console.log(number)

//?BOOLEANS

let boolean = true;

let booleanFalse = false;

//?ARRAYS --> Permite guardar una lista de cosas separadas siempre por una coma

let array = ['pan', 'agua', 'frutas', 'gaseosas'];

//?OBJECTS --> Se utiliza los : y la ,

let object = {
    propiedad1: 'valor de la propiedad 1',
    propiedad2: 'valor de la propiedad 2',
};

let fruta = {
    nombre: 'banana',
    color: 'amarrillo',
    fechaDeDescubrimiento: 12,
};

//?NULL

let vacía = null;

//? UNDEFINED

let indefinida;

//*TIPOS DE VARIABLES

var variablevar = 'soy una var'; //* ----> FUNCIONA DENTRO Y FUERA DE UN LIMITE
let variablelet = 'soy una let'; //* ----> FUNCIONA DENTRO DE UN LIMITE (COMO PUEDE SER UN IF)
//---------------------------------------------

//const variableconst = 'soy una const'; //?-----> NO SE CAMBIA NUNCA LO GUARDADO EN ESTA VARIABLE

variablevar = 15;
variablelet = 58;

//variableconst = 200;


//---------------------------------------------
//?EJEMPLO

var hola = 'hola';
let chau = 'chau';

if(true){
var hola = 'buen día';
let chau = 'chau chau chauuu';

console.log(hola);
console.log(chau);
}
console.log(hola);
console.log(chau);

//---------------------------------------------

//? COMENTARIOS

// COMENTARIO DE UNA SOLA LINEA

/* COMENTARIO 
DE
MULTILINEA */

//---------------------------------------------

//? OPERADORES

// ARITMETICOS

console.log('El resultado de la suma es', 15+3 );
console.log('El resultado de la resta es', 15-3 );
console.log('El resultado de la multiplicacion es', 15*3 );
console.log('El resultado de la division es', 15/3 );
console.log('El resultado del resto de la division es', 15%3 );

//UNITARIOS

let num = 4;
num++; //*---> PERMITE SUMAR EN 1
console.log(num);
num--; //*---> PERMITE RESTAR EN 1
console.log(num)
console.log(!boolean);

//?RELACIONALES ---> SIEMPRE LA RESPUESTA ES UN BOOLEN Y RESPONDE TRUE O FALSE
let num1= 7;
let num2= '7';
console.log('Comparaciones', num1 > num2);
console.log('Comparaciones', num1 >= num2);
console.log('Comparaciones', num1 < num2);
console.log('Comparaciones', num1 <= num2);

console.log('Comparaciones', num1 == num2); //--> SOLAMENTE COMPARA EL CONTENIDO
console.log('Comparaciones', num1 === num2); //--> COMPARA EL CONTENIDO Y EL TIPO DE DATO

console.log('Comparaciones', num1 != num2); //--> CONSULTA SI ES DISTINTO
console.log('Comparaciones', num1 !== num2); //--> CONSULTA SI ES ESTRICTAMENTE DISTINTO

//?OPERADORES LÓGICOS
//AND --> NECESITA QUE AMBOS SEAN TRUE PARA DEVOLVER UN RESULTADO POSITIVO
console.log('logicas', num1 === num2 && 7==7); // --> FALSE
console.log('logicas', num1 == num2 && 7==7); // --> TRUE

//OR --> SI UNO ES TRUE, EL RESULTADO SERÁ POSITIVO Y SERÁ FALSO CUANDO AMBOS SEAN FALSOS
console.log('logicas', num1 === num2 || 7==7); // -->TRUE
console.log('logicas', num1 === num2 || 7==8); // -->FALSE

//?CONDICIONALES 
// --> SIRVE PARA HACER UNA PREGUNTA Y SEGUN EL RESULTADO REALIZAR DETERMINADA ACCIÓN

8 > 5 ? console.log('Es mayor') : console.log('Es menor');

//? ALERT AND PROMPTS

// alert('Soy una alerta'); 

// let respuestaDelUsuario = prompt('¿Cuantos años tenes?');

// console.log(respuestaDelUsuario);

// //-------------------------------------------------------------
// /* RESOLUCION DE EJERCICIO 
// PEDIR 2 VALORES Y MOSTRAR EN CONSOLA LA SUMA Y EL PRODUCTO, SI LA SUMA O EL PRODUCTO ES MAYOR A 20,
// MOSTRAR EN CONSOLA QUE HAY UN VALOR MAYOR A 20*/ 

// let NumberOne= Number ( prompt ('Ingrese un número'));
// let NumberTwo= Number ( prompt ('Ingrese otro numero'));

// let suma= NumberOne+NumberTwo; 
// let producto= NumberOne*NumberTwo;

// console.log(suma);
// console.log(producto);

// suma > 20 || producto> 20 ? console.log('Hay un valor mayor a 20') : console.log('No hay un valor a 20');

//---------------------------------------------------------------
//? EJERCICIO Nº2

/* CREAR 3 VARIABLES Y ASIGNARLE UN VALOR NUMERICO A LAS DOS PRIMERAS Y MOSTRAR POR CONSOLA LA SUMA, LA RESTA,
LA MULTIPLICACION Y LA DIVISION, OBSERVANDO SI SON PARES O NO LOS DOS PRIMEROS NUMEROS. */ 

const constant1 = 3;
const constant2 = 30;
let variable3;
let suma= constant1+constant2;
let producto= constant1*constant2;
let resta= constant1-constant2;

console.log('Suma',suma); 
console.log('Resta',constant1-constant2); 
console.log('Multiplicacion',producto); 
console.log('Division',constant1/constant2); 

constant1%2==0 ? console.log('El numero 1 es par'): console.log('El numero 1 es impar');
constant2%2==0 ? console.log('El numero 2 es par'): console.log('El numero 2 es impar');

/* A LA TERCERA VARIABLE ASIGNARLE UN VALOR Y SUMAR CON LA SUMA ANTERIOR, MULTIPLICAR POR EL PRODUCTO ANTERIOR Y
RESTARSELA A LA RESTA ANTERIOR*/

variable3 = 10;
let resultado = suma + variable3;
resultado= resultado*producto;
resultado= resta - resultado;
console.log(resultado);











