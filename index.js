//Creamos una variable que guarde los numeros introducidos del DNI
let numeros = prompt("Por favor, introduzca tan sólo los números de su DNI");

//Declaramos el array de letras para sacarla posteriormente con su índice
let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

//Asignamos a la variable resultado la letra y su correcto índice
let resultado = letras[numeros%23];

//Enseñamos con un alert el número de DNI junto a su letra
alert(`Tu DNI completo es ${numeros}-${resultado}`);