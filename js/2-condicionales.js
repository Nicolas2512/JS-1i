// // ESTRUCTURAS CONDICIONALES

// // SIMPLES
// let edad = Number (prompt('Cual es tu edad?'));
// if (edad>18){
// console.log('Podes ver los goles de Messi');}

// // DOBLES
// if (edad>18){
// console.log('Podes ver los goles de Messi');}
// else{
// console.log('Solo podes ver los goles de Icardi');}

// EJERCICIO SOLO RESPUESTAS SI Y NO
let anteojos = prompt('Trajiste anteojos?');

if(anteojos.toLowerCase()=='si') {
    console.log('No compres este inmbueble');
}else{
    if(anteojos.toLowerCase()=='no'){
    console.log('Compra, no hay problema');
    }else{
        console.log('Solo se admiten respuestas: si o no');
    }
}