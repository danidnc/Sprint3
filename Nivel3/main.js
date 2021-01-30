let numeroPantalla = ""; //inicializa variable del display como string
let op1, op2, total;
let operacion = "";

function capturaTecla(valor) { //valora parametro recibido
    if ((valor == 'C')) {
        limpiar(); //invoca limpiar pantalla
    } else {
        if ((valor == '0') && (numeroPantalla.length == 1)) { //controla que no entren 0 en primera posicion
            limpiar();
        } else {
            numeroPantalla += valor; //concatena valor recibido al string mostrado en pantalla
            Number(numeroPantalla); //parsea para eliminar 0 inicial y convertir en integer
            document.getElementById("pantalla").innerHTML = numeroPantalla; //vuelca integer en el display
        }
    }

}

function limpiar() { //funcion limpiar pantalla
    document.getElementById("pantalla").innerHTML = '0'; //inserta 0 en el display
    numeroPantalla = ""; //reinicializa el string
}

function sumar() {
    op1 = Number(numeroPantalla);
    operacion = "sumar";
    limpiar();
}
function restar() {
    op1 = Number(numeroPantalla);
    operacion = "restar";
    limpiar();
}
function multiplicar() {
    op1 = Number(numeroPantalla);
    operacion = "multiplicar";
    limpiar();
}
function dividir() {
    op1 = Number(numeroPantalla);
    operacion = "dividir";
    limpiar();
}

function calcular() {
    op2 = Number(numeroPantalla);
    numeroPantalla = "";
    switch (operacion) {
        case "sumar":
            total = op1 + op2;
            break;
        case "restar":
            total = op1 - op2;
            break;
        case "multiplicar":
            total = op1 * op2;
            break;
        case "dividir":
            if (op2 != 0) {
                total = op1 / op2;
            } else alert("EL DIVISOR NO PUEDE SER 0")
            break;
    }

    document.getElementById("pantalla").innerHTML = total;
}

