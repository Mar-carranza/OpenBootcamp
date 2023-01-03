//Listas array o arreglo conjunto de variables
const lista1 = [1, 'hola', true, undefined, null];
const lista2 = new Array(2, 'hola', true, undefined, null);
const lista3 = new Array(3);
lista3[0] = 'soy el primer elemnto, index 0';
const lista4 = [lista1,lista2,lista3];


console.log(lista1);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Objetos con diferentes atributos
const movil =  {
    altura: 10,
    anchura: 5,
    marca: 'xiaomi',
    isWhite: false,
    contactos: ['Gorka', 'Martin', 'Raul'],
    tarjeta: {
        marca: 'Sandisk',
        almacenamiento: 32
    },
    'altura-tajeta': 4
};
//agregar atributos
movil.anyo = 2019;
//cambiar atributos
movil.marca = 'Samsung';
console.log(movil.tarjeta.marca);
console.log(movil.anyo);
console.log(movil.marca);


//Fechas
//Librerias de apoyo moment.js
const ahora = new Date(); //fecha en el momento que se definio la variable

console.log(ahora);

const fecha_milis = new Date(10); //utilizando los milisegunbdos
console.log(fecha_milis)

const fecha_cadena = new Date('march 25 2020');
console.log(fecha_cadena)

const fecha_valores = new Date (2022,0, 15);
console.log(fecha_valores);

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const anyo = ahora.getFullYear()

console.log(dia,mes,anyo)