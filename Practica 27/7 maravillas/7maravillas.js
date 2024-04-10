//Del Toro Cruz Joseph Vladimir
//Arreglo en el cuál se almacenan las imagenes en formato svg
let maravillas = ["chichen-itza.svg", "coliseo.svg", "cristo-redentor.svg", "machu-picchu.svg", "muralla-china.svg","petra.svg","taj-mahal.svg"];

//Arreglo que contiene los índices de la respuesta correcta para cada pregunta
let correcta = [1,0,2,1,2,0,1];

//Arreglo que contiene las opciones para cada pregunta
let opciones = [];

//Se agrega la opción 1
opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);

//Se agrega la opción 2
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);

//Se agrega la opción 3
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);

//Se agrega la opción 4
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);

//Se agrega la opción 5
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);

//Se agrega la opción 6
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);

//Se agrega la opción 7
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);

//Variable que se utilizar para llegar un seguimiento de la posición actual
let posActual = 0;

//Variable para contabilizar el número de respuestas correctas
let cantidadAcertadas = 0;

//Función para comenzar el juego
function comenzarJuego(){
    //Variable que se utilizar para llegar un seguimiento de la posición actual
    posActual = 0;

    //Variable para contabilizar el número de respuestas correctas
    cantidadAcertadas = 0;

    //Se accede al id pantalla-inicial y esté se oculta de la pantalla
    document.getElementById("pantalla-inicial").style.display = "none";

    //Se accede al id pantalla-juego y esté se muestra en pantalla
    document.getElementById("pantalla-juego").style.display = "block";

    //Se manda a llamar la función cargarMaravilla()
    cargarMaravilla();
}

//Función que funciona para cargar la maravilla y mostrarla en pantalla
function cargarMaravilla(){
    //Se evalua sí todas las preguntas fueron respondidas
    if(maravillas.length <= posActual){
        //Se manda a llamar está función para terminar el juego
        terminarJuego();
    }
    else{
        //Se manda a llamar está función para limpiar el estilo de las opciones
        limpiarOpciones();

        //Se accede al id imgMaravilla en la cuál se mostrará la imagen de la maravilla
        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual];

        //Se accede al elemento HTML que tenga el id n0 y establece su contenido con el valor del arreglo opciones en la posición posActual
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        
        //Se accede al elemento HTML que tenga el id n1 y establece su contenido con el valor del arreglo opciones en la posición posActual
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        
        //Se accede al elemento HTML que tenga el id n2 y establece su contenido con el valor del arreglo opciones en la posición posActual
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

//Función que funciona para restablecer el estilo de las opciones de respuesta antes de cargar una pregunta nueva
function limpiarOpciones(){
    //Se selecciona el elemento HTML con el id n0 y establece su clase css como nombre. Elimina cualquier clase adicional
    document.getElementById("n0").className = "nombre";

    //Se selecciona el elemento HTML con el id n1 y establece su clase css como nombre. Elimina cualquier clase adicional
    document.getElementById("n1").className = "nombre";

    //Se selecciona el elemento HTML con el id n2 y establece su clase css como nombre. Elimina cualquier clase adicional
    document.getElementById("n2").className = "nombre";

    //Se selecciona el elemento HTML con el id l0 y establece su clase css como letra. Elimina cualquier clase adicional
    document.getElementById("l0").className = "letra";

    //Se selecciona el elemento HTML con el id l1 y establece su clase css como letra. Elimina cualquier clase adicional
    document.getElementById("l1").className = "letra";

    //Se selecciona el elemento HTML con el id l2 y establece su clase css como letra. Elimina cualquier clase adicional
    document.getElementById("l2").className = "letra";
}

//Función para comprobar sí el jugador acerta una respuesta o no acerta
function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        //Se accede al elemento HTML con el id n + la opción elegida (0, 1 o 2) y se estable la clase css nombre nombreAcertada
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";

        //Se accede al elemento HTML con el id l + la opción elegida (0, 1 o 2) y se estable la clase css letra letraAcertada
        document.getElementById("l" + opElegida).className = "letra letraAcertada";

        //Se incrementa en 1 la variable cantidadAcertada
        cantidadAcertadas++;
    }else{
        //Se accede al elemento HTML con el id n + la opcion elegida (0, 1 o 2) y se estable la clase css nombre nombreNoAcertada
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";

        //Se accede al elemento HTML con el id l + la opcion elegida (0, 1 o 2) y se estable la clase css letra letraNoAcertada
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //Se accede al elemento HTML con el id n + la opcion del arreglo correcta[con la posición en la que se encuentra actualmente] y se estable la clase css nombre nombreAcertada
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";

        //Se accede al elemento HTML con el id l + la opcion del arreglo correcta[con la posición en la que se encuentra actualmente] y se estable la clase css letra letraAcertada
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    //Se incrementa en 1 la posición actual
    posActual++;

    //Se ejecuta la función cargarMaravilla en 1000 milisegundos (1 segundo)
    setTimeout(cargarMaravilla,1000);
}

//Función encargada de terminar el juego
function terminarJuego(){
    //Se accede al elemento HTML con el id pantalla-juego para ocultarlo de la pantalla
    document.getElementById("pantalla-juego").style.display = "none";

    //Se accede al elemento HTML con el id pantalla-final y lo muestra en la pantalla
    document.getElementById("pantalla-final").style.display = "block";

    //Se accede al elemento HTML con el id numCorrectas y muestra la cantidad de respuestas correctas
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;

    //Se accede al elemento HTML con el id numCorrectas y se calcula el número de preguntas incorrectas y la cantidad se muestra en pantalla
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;
}

//Función que sirve para volver a la pantalla inicial
function volverAlInicio(){
    //Se accede al elemento HTML con el id pantalla-final y lo oculta de la pantalla
    document.getElementById("pantalla-final").style.display = "none";

    //Se accede al elemento HTML con el id pantalla-inicial y lo muestra en pantalla
    document.getElementById("pantalla-inicial").style.display = "block";

    //Se accede al elemento HTML con el id pantalla-juego y lo oculta de la pantalla
    document.getElementById("pantalla-juego").style.display = "none";
}