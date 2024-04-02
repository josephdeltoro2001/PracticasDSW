//Del Toro Cruz Joseph Vladimir
function OperacionesMatematicas(operacion, a, b) {
    switch (operacion) {
        case "sumar":
            return a + b;

        case "restar":
            return a - b;

        case "multiplicar":
            return a * b;

        case "dividir":
            return b !== 0 ? a / b : "No se puede dividir por cero";

        case "residuo":
            return b !== 0 ? a % b : "No se puede dividir por cero";

        default:
            return 0;
    }
}

// Ejemplos de uso:
alert("Suma\n" + OperacionesMatematicas("sumar", 5, 3));
alert("Resta\n" + OperacionesMatematicas("restar", 7, 4));
alert("Multiplicación\n" + OperacionesMatematicas("multiplicar", 2, 6));
alert("División\n" + OperacionesMatematicas("dividir", 10, 2));
alert("Residuo\n" +OperacionesMatematicas("residuo", 10, 3));
alert("Operación no válida\n" + OperacionesMatematicas("potencia", 2, 3));
