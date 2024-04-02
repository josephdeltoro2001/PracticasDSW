//Del Toro Cruz Joseph Vladimir
function verificarParImpar(numero) {
    if(numero % 2 == 0){
        return "El número es par";
    }else{
        return "El número es impar";
    }
}

//Se solicita al usuario que ingrese un número
let numeroIngresado = prompt("Por favor ingrese un número:");

//Convertir la entrada del usuario a un número entero
numeroIngresado = parseInt(numeroIngresado);

//Verificar sí el número es par o impar y mostrar el resultado
if(!isNaN(numeroIngresado)){
    alert(verificarParImpar(numeroIngresado));
}else{
    alert("El valor ingresado no es un número válido.");
}