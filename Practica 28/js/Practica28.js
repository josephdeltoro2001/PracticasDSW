//Del Toro Cruz Joseph Vladimir
function calcularPromedio() {
    let asignaturas = ["Matemáticas", "Programación", "Emprendedores", "Sistemas Operativos", "Inglés", "Física", "Métodos Cuantitativos", "Finanzas"];
    let totalNotas = 0;
    let notasLlenas = true;

    for (let i = 0; i < asignaturas.length; i++) {
        let nota = parseFloat(document.getElementById("nota" + i).value);

        if (isNaN(nota) || nota === "") {
            notasLlenas = false;
            alert("Por favor, complete todas las calificaciones.");
            document.getElementById("nota" + i).focus();
            return;
        }

        totalNotas += nota;
        alert("En " + asignaturas[i] + " has sacado " + nota);
    }

    let promedio = totalNotas / asignaturas.length;

    if (promedio > 85) {
        alert("Promedio final: " + promedio.toFixed(2) + "\n¡¡Felicidades!! \nEstás exento del ordinario.");
    } else {
        alert("Promedio final: " + promedio.toFixed(2) + "\nDebes presentar el examen ordinario.");
    }
}