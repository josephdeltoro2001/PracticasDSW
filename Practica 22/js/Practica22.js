//Del Toro Cruz Joseph Vladimir

//Ejercicio 1
//Arreglo con los días de la semana
var diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

alert("Días de la semana: "+ diasSemana);

//Se muestra la longitud del arreglo
alert("Cantidad de días de la semana: " + diasSemana.length);

//Se acceder a un elemento específico del arreglo
alert("El tercer día de la semana es: " + diasSemana[2]);

//Se agrega un nuevo día al arreglo
diasSemana.push("Lunes2");
alert("Días de la semana después de agregar un nuevo día: " + diasSemana);

//Se elimina un día del arreglo
var ultimoDia = diasSemana.pop();
alert("Días de la semana después de eliminar el último día: " + diasSemana);
alert("Último día eliminado: " + ultimoDia);

/*
//Ejercicio 2
var numero = 1;
var suma = 0;

while (numero <= 5) {
    //Se suma el número actual a la suma total
    suma += numero; 
    numero++;
}

alert("La suma de los números del 1 al 5 es: " + suma);
*/

/*
//Ejercicio 3
var numero = 5; 
var factorial = 1;

do {
    //Se multiplica el factorial actual por el número
    factorial *= numero; 
    numero--; 
} while (numero > 1);

alert("El factorial de 5 es: " + factorial);
*/

/*
//Ejercicio 4
for (var i = 1; i <= 7; i++) {
    alert("Hola");

    if (i == 4) {
        alert("Soy el 4to");
    }
    
    if (i == 7) {
        alert("Acabamos de saludar");
    }
}
*/

//Ejercicio 5
/*
//for in
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];

for (var i in meses) {
    alert(meses[i]);
}
*/

/*
//forEach
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];

meses.forEach(function(mes) {
    alert(mes);
});
*/

/*
//for of
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];

for (let mes of meses) {
    alert(mes);
}
*/

/*
//Ejercicio 6
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];

//Omitir el mes de julio
for (let mes of meses) {
    alert(mes);
    if (mes == "Julio") {
        //Saltamos el mes de julio
        continue; 
    }
}

//Agregar diciembre fuera del arreglo
var diciembre = "Diciembre";

//Mostrar todos los meses incluyendo diciembre
meses.push(diciembre);

alert("Meses incluyendo diciembre:");

for (let mes of meses) {
    alert(mes);
}
*/