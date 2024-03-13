//Del Toro Cruz Joseph Vladimir
//Variables que el usuario ingresará
var peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
var opcion = parseInt(prompt("Seleccione en que planeta quiere calcular su peso: \n1) Marte \n2) Jupiter"));

//Variables fijas de las gravedades de cada planeta
var peso_tierra = 9.80;
var peso_marte = 3.71;
var peso_jupiter = 24.79;

//Sentencia else if
if(opcion == 1){
    resultado = (peso * peso_marte) / peso_tierra;
    alert("Su peso es: " + resultado.toFixed(2));

}else if(opcion == 2){
    resultado = (peso * peso_jupiter) / peso_tierra;
    alert("Su peso es: " + resultado.toFixed(2));

}else{
    alert("No existe esa opción");
}

/*
Sentencia switch
switch (opcion) {
    case 1:
        resultado = (peso * peso_marte) / peso_tierra;
        alert("Su peso es: " + resultado.toFixed(2));
        break;

    case 2:
        resultado = (peso * peso_jupiter) / peso_tierra;
        alert("Su peso es: " + resultado.toFixed(2));
        break;
        
    default:
        alert("No existe esa opción");
        break;
}
*/