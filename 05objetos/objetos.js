let miAuto = {
    marca: "Hyundai",
    modelo: "Elantra",
    annio: 2021,
    detalleDelAuto: function() {
        console.log(`Auto ${this.marca} ${this.modelo}`);
    }
};

console.log("El año de mi carro es del "+miAuto.annio);
console.log("Otras de sus caracteristicas son:");
miAuto.detalleDelAuto();

// Objeto constructor
function carro(marca,modelo,annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

let carroNuevo = new carro("Tesla","Model 3",2021);
let carroNuevo2 = new carro("Toyota","Corolla",2018);
let carroNuevo3 = new carro("Hyundai","Elantra",2017);
