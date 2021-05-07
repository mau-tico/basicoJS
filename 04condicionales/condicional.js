// IF
if (true) {
    console.log("Hola");
} else {
    console.log("Adios");
}

let edad = 18;
if (edad === 18) {
    console.log("Puede votar, es su primera vez");
} else if (edad > 18) {
    console.log("Puede votar nuevamente");
} else {
    console.log("No puede votar")
}

// Operador Terneario IF
// condicion ? true : False;

let numero = 1;

let resultado = numero === 1 ? console.log("Soy el numero UNO") : console.log("Es diferente al numero UNO");

//Switch
let number = 1;
switch (number) {
    case 1:
        console.log("Soy un UNO");
        break;
    case 10:
        console.log("Soy un Diez");
        break;
    default:
        console.log("No es un numero reconocido");
}