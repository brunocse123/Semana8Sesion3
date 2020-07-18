/*

*/
console.log(document.querySelector("button"));
//alert('Hola');
document.querySelector("button").onclick = function () {
  alert("Hola Mundo");
};

let valor = "bruno";
valor = "Prueba2";
console.log(valor);

const valor1 = "valor1prueba";

console.log(valor1);

let numero1 = 20;
let numero2 = 20;

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

console.warn(suma(2, 9));
console.error(resta(2, 9));

let variable = {
  valor: "Bruno",
  nombre: "Prue",
};
console.warn(variable);


var x = {};
console.log(typeof x, x);


//let number1 = prompt("Ingresa el primer numero");
//let number2 = prompt("Ingresa otro numero");

function sumar(a,b){
    
    return parseFloat(a)+parseFloat(b);
}
//debugger
//alert(sumar(number1,number2))
//console.log(sumar(number1,number2))


function sumar(a,b){    
    return parseFloat(a)+parseFloat(b);

}

function restar(a,b){    
    return a-b;
}

function dividir(a,b){    
    return a/b;
}

function multiplicar(a,b){    
    return a*b;
}

function resto(a,b){    
    return a%b;
}

console.log("La suma de 2 + 2 es = ",dividir(2,0));