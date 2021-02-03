let num1, num2, operador, resultado = 0;

operador = parseInt(prompt("Indica operación a relizar:\n1.Sumar\n2.Restar\n3.Multiplicar\n4.Dividir\nCualquier tecla, SALIR"));

if ((operador > 0) && (operador < 5)) {
    num1 = parseInt(prompt("Introduce 1er operando:"));
    num2 = parseInt(prompt("Introduce 2o operando:"));
    resultado = calculadora(num1, num2, operador)
} else alert("Pulsa F5 para reiniciar la calculadora");


function calculadora(n1, n2, op) {
    let total;
    switch (op) {
        case 1:
            total = n1 + n2;
            alert(`El resultado de sumar ${n1} + ${n2} es ${total}`);
            break;
        case 2:
            total = n1 - n2;
            alert(`El resultado de restar ${n1} - ${n2} es ${total}`);
            break;
        case 3:
            total = n1 * n2;
            alert(`El resultado de multiplicar ${n1} X ${n2} es ${total}`);
            break;
        case 4:
            if (n2 === 0) {
                if (n1 === 0) alert('No se puede divir 0 entre 0')
                else alert(`El resultado de dividir ${n1} entre 0 es INFINITO`);
            } else {
                total = n1 / n2;
                total = total.toFixed(3);
                alert(`El resultado de dividir ${n1} / ${n2} es ${total}`);
            }
    }
    return total;
}