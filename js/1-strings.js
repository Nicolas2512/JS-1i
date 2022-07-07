//*ESCAPANDO AL STRING

console.log("'Leo Messi' dijo: \"La comision 1i es la mejor\"");

//*CONCATENACIÓN DE STRING

console.log('Hola' + 'Manola');
console.log(15 + '15'); //--> LEE COMO STRING AMBOS OPERANDO
console.log('15' + 15 + 15 ); //--> LEE COMO STRING PORQUE EL PRIMERO ESTA ENTRE ''
console.log(15 + 15 + '15'); //--> PRIMERO HACE LA SUMA Y DESPUES LEE EL STRING, JS LEE DE ARRIBA ABAJO Y DE IZQ A DER

//*TEMPLATE LITERALS 
//! SE UTILIZA PARA PONER VARIABLES DENTRO DEL STRING SIEMPRE DEBE TENER `` Y LA VARIABLE --> ${} 

let ganador = 'Pau';
let proyecto = 'Avances en JS';
let premio = 'USD 10000';

console.log(`El ganador fue ${ganador} por su proyecto ${proyecto} y ganó ${premio}`);

//*METODOS DE STRING

//toUpperCase --> Pasa todo el string a mayúsculas

console.log('hola soy NICO'.toUpperCase());

//toLowerCase --> Pasa todo el string a minusculas

console.log('ESTO ES UNA PRUEBA'.toLowerCase());

//length --> Ver cantidad de caracteres  

console.log('Esto va a tener 18'.length);

//charAt --> Ver una posicion de un caracter

console.log(ganador.charAt(2)); //La posicion comienza en 0.

//substr --> Obtenes una porcion del string

console.log('Hola, soy Nicolás'.substr(0,4));

//trim --> Elimina espacios iniciales y finales

console.log('       Nicolás       '.trim());

//includes --> Verifica si un string se encuentra dentro de otro string

console.log('Estoy buscando a Nemo'.includes('Nemo'));

console.log('Estoy buscando a Doris'.includes('Nemo'));

//----- Recibir el apellido del usuario y mostrar por consola la ultima letra

// let apellido = prompt('Ingresa tu apellido')

// console.log(apellido.charAt(apellido.length-1));

//----- Recibir el nombre del usuario y mostrar por consola el nombre con la primera letra en mayuscula

let nombre = prompt('Ingrese su nombre');

let firstletter = nombre.substr(0,1).toUpperCase();
let resto = nombre.substr(1,nombre.length-1);

console.log(firstletter+resto);


