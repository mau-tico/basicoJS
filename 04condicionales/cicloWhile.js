// Ciclo While
let alumnos = ["Stalin", "Hirohito", "Mussolini", "Hitler"];

function saludaAlumnos(alumno) {
    console.log("Hola "+alumno+" disfrute su clase.");
}

while(alumnos.length > 0) {
    let alumno = alumnos.shift();
    saludaAlumnos(alumno);
}