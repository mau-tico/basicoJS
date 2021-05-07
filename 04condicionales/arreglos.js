//Array o Arreglo
let frutas = ["Manzana","Uva","Banano","Sandia"];
let masFrutas = frutas.push("Cereza");

console.log(frutas);
console.log(frutas.length);
console.log(frutas[1],frutas[3]);

let remover = frutas.pop("Cereza");
console.log(frutas);

let frutaInicio = frutas.unshift("Pera");
console.log(frutas);

let removerInicio = frutas.shift("Pera");
console.log(frutas);

let posicion = frutas.indexOf("Banano");
console.log("Banano esta en la posicion numero " + posicion + " del Arreglo.");