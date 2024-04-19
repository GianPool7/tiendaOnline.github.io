/*
const productos={
    name:'Mouse',
    precio:15.00,
    img:'https://store.perudataconsult.net/cdn/shop/products/104338_0.jpg?v=1622061443'
}

console.log(productos.name);

console.log(p1);

let img_producto=document.querySelector('.imgproducto');
let mostrar_producto=document.createElement('center');
mostrar_producto.innerHTML=`<img src=${p2.img}>`;
img_producto.appendChild(mostrar_producto);

let caja_producto=document.querySelector('.txtproducto');
let mostrar_nombre=document.createElement('h3');
mostrar_nombre.innerHTML=`${p2.nombre}`;
caja_producto.appendChild(mostrar_nombre);

let mostrar_precio=document.createElement('p');
mostrar_precio.innerHTML=`${p2.precio}`;
caja_producto.appendChild(mostrar_precio);


img_producto.insertAdjacentElement('afterbegin',mostrar_nombre);
caja_producto.insertAdjacentElement('afterbegin',mostrar_nombre);
mostrar_nombre.insertAdjacentElement('afterend',mostrar_precio);

//

const producto1={
    nombre:'Mouse',
    descripcion:'Descripcion 1',
    img:'mouse.jpg'
}

console.log(producto1.nombre);

class Producto{

    constructor(name,prec,img){
        this.nombre=name;
        this.precio=prec;
        this.img=img;
    }

}

const productos=[
    new Producto('Mouse',14.50,'https://rymportatiles.com.pe/cdn/shop/files/Mouse-Logitech-G203-lila.jpg?v=1696019954'),
    new Producto('Memoria RAM',25.80,'https://oechsle.vteximg.com.br/arquivos/ids/14220444-1000-1000/image-18f0bc04ee514df6b5c97a2d42724ce0.jpg?v=638153267301670000'),
    new Producto('SSD',167.90,'https://www.inversioneslegerdan.pe/wp-content/uploads/2021/11/legerdan.ktc-product-ssd-snvs-1000g-3-zm-lg.2.jpg')

];

function mostrarProductos() {
    const listaProductos = document.querySelector(".imgproducto");

    productos.forEach(producto => {
        const item = document.createElement("center");
        item.textContent = `<img src='${producto.img}'> `;
        listaProductos.appendChild(item);
    });
}
//

function mostrarDatos() {
    const texto=document.querySelector('.txtproducto');

    productos.forEach(datos=>{
        const txt=document.createElement("p");
        txt.innerHTML=`Nombre: ${datos.nombre} <br> precio: ${datos.precio},`;
        texto.appendChild(txt);
    })

}

// Llamamos a la función para mostrar los datos al cargar la página
mostrarProductos();
mostrarDatos();

//
class Persona {
    constructor(nombre, edad, ciudad) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }
}

// Creamos algunos objetos de la clase Persona
const personas = [
    new Persona("Juan", 25, "Madrid"),
    new Persona("María", 30, "Barcelona"),
    new Persona("Pedro", 28, "Sevilla")
];

// Función para mostrar los datos de las personas en el HTML
function mostrarDatosPersonas() {
    const listaDatos = document.getElementById("datos-personas");

    personas.forEach(persona => {
        const item = document.createElement("li");
        item.textContent = `Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`;
        listaDatos.appendChild(item);
    });
}

// Llamamos a la función para mostrar los datos al cargar la página
mostrarDatosPersonas();

let txt=document.querySelector('.nombre');

const boton=document.querySelector('.add');
boton.addEventListener('click',()=>{
    alert(txt.innerHTML);   
}) 
*/

//alert(txt.innerHTML);
/*
function btn_agregar() {
    let txt=document.querySelector('.nombre').innerHTML;
    alert(txt); 
}

function btn_agregar3() {
    let txt3=document.querySelector('.nombres').innerHTML;
    alert(txt3); 
}

const producto1=['mouse',14.80,'img.jpg'];

let a=document.querySelector('.nombre').innerHTML;

//alert('console : '+a);


const boton=document.querySelector('.add');

boton.addEventListener('click',()=>{
    alert('nombre es : '+a)
})

let txt=document.querySelector('.nombre').innerHTML;


let boton1=document.querySelector('.add').addEventListener('click',()=>{
    alert(txt);
});

let boton2=document.querySelector('.add').addEventListener('click',()=>{
    alert(txt);
});;
let boton3=document.querySelector('.add')[2];
*/

let contenedor_cabeza=document.querySelector('.cabeza')

//

let nombreProducto=document.createElement('h3');
nombreProducto.innerHTML='Memoria ram';

let descripcionProducto=document.createElement('span');
descripcionProducto.innerHTML='<center>para mejorar tu computadora</center>';

let contenedorTxt=document.querySelector('.txtproducto');
contenedorTxt.appendChild(nombreProducto);

contenedorTxt.insertAdjacentElement('afterbegin',descripcionProducto);
contenedorTxt.insertAdjacentElement('afterbegin',nombreProducto);

//

let nombreProducto2=document.createElement('h3');
nombreProducto2.innerHTML='Disco Solido';

let descripcionProducto2=document.createElement('span');
descripcionProducto2.innerHTML='<center>para mejorar la velocidad</center>';

let contenedorTxt2=document.querySelector('.txtproductos');
contenedorTxt2.appendChild(nombreProducto2);

contenedorTxt2.insertAdjacentElement('afterbegin',descripcionProducto2);
contenedorTxt2.insertAdjacentElement('afterbegin',nombreProducto2);

//

let nombreProducto3=document.createElement('h3');
nombreProducto3.innerHTML='CPU';

let descripcionProducto3=document.createElement('span');
descripcionProducto3.innerHTML='<center>cerebritos de CPU</center>';

let contenedorTxt3=document.querySelector('.txtproductoss');
contenedorTxt3.appendChild(nombreProducto3);

contenedorTxt3.insertAdjacentElement('afterbegin',descripcionProducto3);
contenedorTxt3.insertAdjacentElement('afterbegin',nombreProducto3);

/*  AGREGAR A CARRITO  */

let contenido_carrito=document.getElementById('mensaje');
let parrafo=document.getElementById('pa');
let parrafos=document.getElementById('par');
let parrafoss=document.getElementById('parr');

//

let contador=0;

let contarbtn=document.getElementById('btnUno').addEventListener('click',()=>{

    contador++;


    let prod=document.getElementById('nameProducto');
    prod.innerHTML=`${nombreProducto.innerHTML}`;

    let cant=document.getElementById('cant');
    cant.innerHTML=`${contador}`;

    //let pro=document.createElement('p');
    //pro.innerHTML=`El producto seleccionado es : <span>(${nombreProducto3})</span> <span>(${contador})</span>`;

    contenido_carrito.style.cssText="background:yellowgreen;";
    parrafo.style.cssText="display:flex";


    actualizarContador();

})

function actualizarContador() {

    contadorProductos.textContent = contador;   

}

//

let contadorr=0;

let contarbtn2=document.getElementById('btnDos').addEventListener('click',()=>{

    contadorr++;

    let prod=document.getElementById('nameProductos');
    prod.innerHTML=`${nombreProducto2.innerHTML}`;

    let cant=document.getElementById('cants');
    cant.innerHTML=`${contadorr}`;

    contenido_carrito.style.cssText="background:yellowgreen;";
    parrafos.style.cssText="display:flex";

    actualizarContadorr();

})

function actualizarContadorr() {

    contadorProductos.textContent = contadorr;   

}
//

let contadorrr=0;


let contarbtn3=document.getElementById('btnTres').addEventListener('click',()=>{

    contadorrr++;

    let prod=document.getElementById('nameProductoss');
    prod.innerHTML=`${nombreProducto3.innerHTML}`;

    let cant=document.getElementById('cantss');
    cant.innerHTML=`${contadorrr}`;

    contenido_carrito.style.cssText="background:yellowgreen;";
    parrafoss.style.cssText="display:flex";

    actualizarContadorrr();

})

function actualizarContadorrr() {

    contadorProductos.textContent = contadorrr;   

}


