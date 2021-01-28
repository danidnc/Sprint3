/* 
//EXERCICI 1 
console.log('Hola Mundo');

//EXERCICI 2
alert('Me llamo Dani');

//EXERCICI 3
let nom = "Dani";
let cognom = 'Navarro';
console.log(`Mi nombre es ${nom} ${cognom}`);


//EXERCICI 4
let num1, num2;
num1 = 34; num2 = 56;
sum = num1 + num2;
console.log(`La suma de ${num1} i ${num2} és ${sum}`);

//EXERCICI 5
let nota_examen = 5;

if (nota_examen < 5) {
    alert(`Oh , has suspendido el exament con una nota de ${nota_examen}`);
} else if ((nota_examen >= 5) && (nota_examen <= 10)) {
    alert(`Felicidades, has aprobado con una nota de ${nota_examen}`);
} else alert(`La nota de examen ${nota_examen} no es correcta.`);

//EXERCICI 6
let frase1 = "Tinc un cotxe de color blau";
let frase2;
console.log(frase1);

frase2 = frase1.replace('blau', 'verd');
console.log(frase2);

frase2 = frase1.replace(/o/g, 'u');
console.log(frase2);

//EXERCICI 7
const arrOficina = ['taula', 'cadira', 'ordinador', 'llibreta'];
let resultat = "";

for (i = 0; i < arrOficina.length; i++) {
    resultat += ("L'objecte " + arrOficina[i] + " és a la posició " + i + "<br>"); //No entenc perque no em funciona el codi "\n" de nova linea
}
document.getElementById("text").innerHTML = resultat;*/

//EXERCICI 8

let operador = parseInt(prompt("Benvingut a la calculadora, introdueix quina operació vols efectuar:\n1.Sumar\n2.Restar\n3.Multiplicar\n4.Dividir\nQualsevol altre tecla sortirà del programa."));
let op1, op2, total = 0;
switch (operador) {
    case 1:
        op1 = parseInt(prompt("Introdueix 1er operand"));
        op2 = parseInt(prompt("Introdueix 2on operand"));
        total = calculadora(op1, op2, operador);
        alert(`El resultat de sumar ${op1} i ${op2} és ${total}.`)
        break;
    case 2:
        op1 = parseInt(prompt("Introdueix 1er operand"));
        op2 = parseInt(prompt("Introdueix 2on operand"));
        total = op1 - op2;
        alert(`El resultat de restar ${op1} i ${op2} és ${total}.`)
        break;
    case 3:
        op1 = parseInt(prompt("Introdueix 1er operand"));
        op2 = parseInt(prompt("Introdueix 2on operand"));
        total = calculadora(op1, op2, operador);
        alert(`El resultat de multiplicar ${op1} i ${op2} és ${total}.`)
        break;
    case 4:
        op1 = parseInt(prompt("Introdueix 1er operand"));
        op2 = parseInt(prompt("Introdueix 2on operand"));
        if ((op2) === 0) {
            alert(`Tota divisió per 0 dóna infinit !  Pulsa F5 per fer anar la calculadora de nou.`);
        } else {
            total = calculadora(op1, op2, operador);
            alert(`El resultat de dividir ${op1} entre ${op2} és de ${total}.`)
        }
        break;
    default:
        alert(`Recargue la página para cargar la calculadora`)
}

function calculadora(op1, op2, operador) {
    switch (operador) {
        case 1:
            return op1 + op2;
        case 2:
            return op1 - op2;
        case 3:
            return op1 * op2;
        case 4:
            return op1 / op2;
    }
}