function greeting () {
    var name = prompt('Nombre')
    console.log ('Hola '+ name + ' bienvenido :)')
}
greeting ()
let age = Number(prompt('Ingresar edad'));
let ageParse= parseInt(age);
if (ageParse >= 18){
    alert('Bienvenido puede ingresar')
}
else {
    alert ('Usted es menor de edad, se recomienda navegar esta página bajo supervisión de un adulto')
}
console.log('La edad del usuario es de'+' '+ age +' '+'años')


//Ejercicio de división interactuando con el usuario

alert('A continuación haremos un ejercicio de división donde debes ingresar un número para dividir y luego el número en el que será dividido')

let primerNumero = Number(prompt('Ingrese el numero que desea dividir')); 
let segundoNumero = Number(prompt('ingrese el número divisor'));  
let resultado;

if(primerNumero !=0 && segundoNumero !=0){
    resultado= primerNumero/segundoNumero
    alert(primerNumero + '/' + segundoNumero + '='+ resultado);
}
else{
    alert('Error')
}
console.log (resultado)

//Probando un ciclo básico

let x = 0; 
while (x < 5) {
    console.log ('Probando while'+' '+ x);
    x = x + 1;
}

//for (desde; hasta; actualización)
for (let x = 0; x < 5; x++){
    console.log ('Probando un ciclo for'+ ' '+ x);
}

for (var i=10; i <= 20; i = i + 2) {
    console.log('Probando saltar números en un ciclo for' + ' '+ i);
}

function goodbye (){
    console.log ('Chao, que tengan excelente día')
}
goodbye();