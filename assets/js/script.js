
const numInicio = 1;
const numUsuario = parseInt(prompt("Ingrese un número del 1 al 20 para generar la tabla de multiplicar: "));

//funcion para calcular factorial (arrow function)

const factorial = n => n === 0 ? 1 : n * factorial(n - 1);
//se lee: factorial es igual a n y si n es idéntico a 0 retorna 1 sino (else) n*factorial de n-1

//Funcion original (antes de llevarla a arrow)
// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

if (numUsuario >= 1 && numUsuario <= 20) {
    //Ciclo for para obtener la tabla de multiplicar
    console.log(`-----TABLA DE MULTIPLICAR DEL ${numUsuario}-----`);
    for (let i = numInicio; i <= numUsuario; i++) {
        console.log(`${i} x ${numUsuario} = ${i * numUsuario}`);
    };


    // Ciclo for para obtener los factoriales aplicando función de arriba:
    console.log(`-----FACTORIALES HASTA EL ${numUsuario}-----`);
    for (let i = numInicio; i <= numUsuario; i++) {
        console.log(`Factorial de ${i} es: ${factorial(i)}`);
    };
}
else {
    alert(`número ingresado fuera de parámetros, vuelva a intentarlo (1 a 20)`)
}