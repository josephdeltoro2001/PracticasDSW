//Del Toro Cruz Joseph Vladimir
//Datos predefinidos
var numero1 = 42, numero2 = 23;

//Operciones de los datos predefinidos
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;

//Datos ingresados por el usuario
var numero_usuario1 = parseInt(prompt("Ingrese el número 1: "));
var numero_usuario2 = parseInt(prompt("Ingrese el número 2: "));

//Operciones de los datos ingresados por el usuario
var suma_usuario = numero_usuario1 + numero_usuario2;
var resta_usuario = numero_usuario1 - numero_usuario2;
var multiplicacion_usuario = numero_usuario1 * numero_usuario2;
var division_usuario = numero_usuario1 / numero_usuario2;

//Resultados que se mostrarán en el alert
var resultado_predefinido = "Datos predefinidos \nLa suma es: " + suma + "\nLa resta es: " + resta + "\nLa multiplicación es: " + multiplicacion + "\nLa división es: " + division;
var resultado_usuario = "Datos ingresados por el usuario \nLa suma es: " + suma_usuario + "\nLa resta es: " + resta_usuario + "\nLa multiplicación es: " + multiplicacion_usuario + "\nLa división es: " + division_usuario

alert(resultado_predefinido + "\n\n" + resultado_usuario)