let estudiantes = ["Vanessa","Erick","Rosa","Menganito"];

function saludarEstudiantes(estudiante) {
    console.log("Hola "+estudiante);
}

for(let i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

// For of
for(let estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}