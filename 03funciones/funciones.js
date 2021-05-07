// Dos tipos de funciones
// 1- Declarativas
function miFuncion1() {
    return 3;
}

miFuncion1();

//2- Expresion o Anonimas
var miFuncion2 = function(a,b) {
    return a + b;
}

miFuncion2();

function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}

//Scope Global y Local
var miNombre = "Mauricio";

function nombre() {
    var miApellido = "Ramirez";
    console.log(miNombre + " " + miApellido);
}

//Hoisting

var miNombre2;
miNombre2 = "Mauricio";