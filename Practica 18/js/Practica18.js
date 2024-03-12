//Del Toro Cruz Joseph Vladimir
//Arreglo vacío para almacenar los días de la semana
var diasSemana = [];

//Se capturan los días de la semana
for (var i = 0; i < 7; i++) {
    var dia = prompt("Ingrese el día " + (i + 1) + " de la semana");
    diasSemana.push(dia);
}

//Desplegar los días capturados en un alert
var mensajeAlerta = "Días de la semana ingresados:\n";
for (var i = 0; i < diasSemana.length; i++) {
    mensajeAlerta += (i + 1) + ". " + diasSemana[i] + "\n";
}

alert(mensajeAlerta);