//EJERICIO 1
const arrNombre = ['D', 'A', 'N', '1', 'E', 'L']; //inicializa array con el nombre

for (i = 0; i < arrNombre.length; i++) { //bucle que imprime por consola posición y valor del array
    console.log(`Letra en posición ${i} -> ${arrNombre[i]}`)
}

//EJERCICIO 2

let nombre = arrNombre.join(""); //asigna el valor del array en una variable, sin separadores
console.log("Partiremos del nombre : " + nombre); //imprime por consola el nombre a procesar

arrNombre.forEach(comprobarArray); //envía el array a una función que discriminará entre números, vocales y consonantes

function comprobarArray(valor, indice, arrNombre) { //la función recibe 3 parámetros del método forEach, valor de la posición, el índice y el array 
    letra = valor.toLowerCase(); //convierte el valor a minúsculas para reducir las condiciones a controlar en el IF
    if ((valor.charCodeAt() >= 48) && (valor.charCodeAt() <= 57)) { //controla que el unicode del valor esté entre 48 y 57, indicando que es un dígito
        console.log(`He econtrado el número ${valor}, los nombres no contienen números si no eres un Youtuber.`) //mensaje por consola si el valor es un número
    } else if ((letra.charCodeAt() == 97) || (letra.charCodeAt() == 101) || (letra.charCodeAt() == 105) || (letra.charCodeAt() == 111) || (letra.charCodeAt() == 117)) { //controla que la letra sea una vocal
        console.log(`He encontrado una vocal : ${valor}`); //imprime por consola que ha encontrado una vocal
    } else if ((letra.charCodeAt() > 96) && (letra.charCodeAt() < 123)) { //controla que el código unicode corresponda a una consonante minúscula
        console.log(`He encontrado una consonante : ${valor}`); //imprime el valor original
    }
}

