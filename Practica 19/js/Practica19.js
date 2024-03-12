//Del Toro Cruz Joseph Vladimir
//Array que se utilizará para la práctica
var valores = [true, 10, false, "codigo", "herramientas", 7];

//Determinar cuál de los dos elementos de texto es mayor
var texto1 = valores[3];
var texto2 = valores[4];

var textoMayor = (texto1.length > texto2.length) ? texto1 : texto2;

//Utilizando los dos valores booleanos del array, determinar los operadores necesarios
var booleano1 = valores[0];
var booleano2 = valores[2];

var resultadoTrue = booleano1 && booleano2; //Operador lógico AND
var resultadoFalse = booleano1 || booleano2; //Operador lógico OR

//Determinar el resultado de las cinco operaciones matemáticas con los dos elementos numéricos
var numero1 = valores[1];
var numero2 = valores[5];

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var modulo = numero1 % numero2;

//Resultados que se mostrarán en el alert
var texto_parte1 = "El texto mayor es: " + textoMayor + "\nResultado true: " + resultadoTrue + "\nResultado false: " + resultadoFalse;
var texto_parte2 = "Resultado de operaciones \nSuma: "+ suma + "\nResta: " + resta + "\nMultiplicación: " + multiplicacion + "\nDivisión: " + division + "\nMódulo: " + modulo;

alert(texto_parte1 + "\n\n" + texto_parte2);