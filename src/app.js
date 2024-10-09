/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Objeto que recoge todos combinaciones del generador de excusas agrupadas en arrays.
  var excuses = {
    who: ["The dog", "My grandma", "The mailman", "My bird"],
    action: ["ate", "peed", "crushed", "broke"],
    what: ["my homework", "my phone", "the car"],
    when: [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ]
  };

  //Le llega un array de elementos y devuelve un elemento del array usando la función aleatoria.
  const randomExcuseEl = arr => arr[Math.floor(Math.random() * arr.length)];

  // Recorre el objeto "excuse" del primero al último elemento y en cada uno llama a la funcion "randomExcuseEl"
  // Luego almacena el valor devuelto en una variable "excuseFrase" para devolverla como respuesta final del ejercicio.
  function excusesGenerator() {
    let excuseFrase = "";

    for (let key in excuses) {
      let randomEl = randomExcuseEl(excuses[key]);
      excuseFrase += `${randomEl} `;
    }
    return excuseFrase;
  }

  console.log(excusesGenerator());

  document.getElementById("excuse").textContent = excusesGenerator();
};
