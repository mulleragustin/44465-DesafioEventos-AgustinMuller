import { productos } from "./stock.js";

//-------------
let carrito = [];
const mostrarproductos = (productos) => {
    const divproductos = document.getElementById("listaproductos");

    productos.forEach(producto => {
        const div = document.createElement(`div`)
        div.classList.add("col-sm-3")
        div.innerHTML += `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title text-center"><img id="img_obs" src="${producto.img}"></h5>
                        <p class="card-text"><br>${producto.nombre}<br>$  ${producto.precio}</p>
                        <p class="card-text text-center">
                        <a data-toggle="modal" data-target="#exampleModal3" id=boton${producto.id}  href="#" class="btn btn-primary">Añadir al Carrito</a>
                        </p>
                    </div>
                </div>
        `
        divproductos.appendChild(div)
        
        const boton = document.getElementById(`boton${producto.id}`)
        boton.addEventListener('click', ()=>{
        agregarAlCarrito(producto.id)
        alert(`Se agrego ${producto.nombre}`) })
    })
}
const agregarAlCarrito = (prodId) => {
    const item = productos.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)
}

mostrarproductos(productos);


