console.log( new Date())
// //Ejercicio de división interactuando con el usuario

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

class persona {
    constructor (nombre, edad, nacionalidad) {

    this.nombre = nombre;
    this.edad = edad;
    this.nacionalidad = nacionalidad;
}
}
const persona0 = new persona(prompt('nombre'), Number(prompt('Edad')), prompt('Nacionalidad'))
const persona1 = new persona('Giovanni', 25 , 'Italia')
const persona2 = new persona('Ruth', 28 , 'Arabe')
const persona3 = new persona('Mery', 22 , 'Chile')
const persona4 = new persona('Sofia', 21, 'Argentina')
const persona5 = new persona('Leo', 19, 'Brasil')
const persona6 = new persona('Joe',23 , 'Colombia')
const persona7 = new persona('Alejandro', 32 , 'USA')

const miArray = [persona0, persona1,persona2, persona3, persona4, persona5, persona6, persona7];
const cant = miArray.length;
console.log(cant)

//Recorrer el array

for (let i = 0; i < miArray.length; i++) {
    console.log('=============================');
    console.log('Nombre: '+ miArray[i].nombre);
    console.log('Edad: '+ miArray[i].edad);
    console.log('Nacionalidad:'+ miArray[i].nacionalidad);
}

//Funciones de orden superior = Creare un array que me agrupe los usuarios según su sexo
let usuarios =[
    { id: 1, usuario: 'Andrea', sexo: 'Femenino'},
    { id: 2, usuario: 'Carolina', sexo: 'Femenino'},
    { id: 3, usuario: 'Miguel', sexo: 'Masculino'},
    { id: 4, usuario: 'José', sexo: 'Masculino'},
    { id: 5, usuario: 'Enrique', sexo: 'Masculino'},
    { id: 6, usuario: 'Matias', sexo: 'Masculino'},
    { id: 7, usuario: 'Florencia', sexo: 'Femenino'},
    { id: 8, usuario: 'Javier', sexo: 'Masculino'},
    { id: 9, usuario: 'Pedro', sexo: 'Masculino'},
    { id: 10, usuario: 'Antonia', sexo: 'Femenino'},

];
let usuarioFemenino = usuarios.filter(function(usuarios){
    return usuarios.sexo === 'Femenino'
})
console.log(usuarioFemenino)

let usuarioMasculino = usuarios.filter(function(usuarios){
    return usuarios.sexo === 'Masculino'
})
console.log(usuarioMasculino)

const goodbye = () => console.log ('Chao, que tengas excelente día')

goodbye();


