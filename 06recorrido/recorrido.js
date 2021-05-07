// Arrays con Objetos dentro y recorrerlos
//Metodo 1 FILTER
let articulos = [
    {nombre: "Bici", costo: 300},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 150},
    {nombre: "Celular", costo: 1500},
    {nombre: "Portatil", costo: 2200},
    {nombre: "Teclado", costo:80},
    {nombre: "Audifonos", costo: 115},
];

let articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 300;
});

articulosFiltrados;

//Metodo 2 MAP
let articles = [
    {nombre: "Bici", costo: 300},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 150},
    {nombre: "Celular", costo: 1500},
    {nombre: "Portatil", costo: 2200},
    {nombre: "Teclado", costo:80},
    {nombre: "Audifonos", costo: 115},
];

let nombreArticles = articles.map(function(article) {
    return article.nombre;
});

nombreArticles;

//Metodo 3 FIND
let productos = [
    {nombre: "Bici", costo: 300},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 150},
    {nombre: "Celular", costo: 1500},
    {nombre: "Portatil", costo: 2200},
    {nombre: "Teclado", costo:80},
    {nombre: "Audifonos", costo: 115},
];

let encuentraProducto = productos.find(function(producto) {
    return producto.nombre === "Portatil";
});

encuentraProducto;

//Metodo 4 forEach()
let products = [
    {nombre: "Bici", costo: 300},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 150},
    {nombre: "Celular", costo: 1500},
    {nombre: "Portatil", costo: 2200},
    {nombre: "Teclado", costo:80},
    {nombre: "Audifonos", costo: 115},
];

products.forEach(function(product) {
    console.log(product.nombre);
});


//Metodo 5 some()
// Solo regresa un True o False
let cosas = [
    {nombre: "Bici", costo: 300},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 150},
    {nombre: "Celular", costo: 1500},
    {nombre: "Portatil", costo: 2200},
    {nombre: "Teclado", costo:80},
    {nombre: "Audifonos", costo: 115},
];

let cosasBaratas = cosas.some(function(cosa) {
    return cosa.costo <= 300;
});

cosasBaratas;

//Metodo

