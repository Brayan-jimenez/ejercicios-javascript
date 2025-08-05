// Pide dos números y muestra cuál es mayor
let numero1 = Number(prompt("Ingresa el primer número:"));
let numero2 = Number(prompt("Ingresa el segundo número:"));

if (numero1 > numero2) {
  console.log(`${numero1} es mayor que ${numero2}`);
} else if (numero2 > numero1) {
  console.log(`${numero2} es mayor que ${numero1}`);
} else {
  console.log("Ambos números son iguales.");
}

// Verifica si es mayor de edad
let edad = Number(prompt("Ingresa tu edad:"));

if (edad >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}

// Función que determina si un número es par o impar
function verificarParidad(numero) {
  if (numero % 2 === 0) {
    console.log(`${numero} es par`);
  } else {
    console.log(`${numero} es impar`);
  }
}

// Ejemplo de uso:
let numUsuario = Number(prompt("Ingresa un número:"));
verificarParidad(numUsuario);
