// index.js

// Variables para el contador de productos
let contadorProductos = 0;
// Variables para el carrito de compra
const carrito = [];
let totalPrecio = 0;

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    totalPrecio += precio;
    actualizarCarrito();
    alert(`Producto agregado al carrito. Total de productos: ${carrito.length}`);
}

// Función para actualizar el carrito 
function actualizarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    const totalCarrito = document.getElementById('totalCarrito');
    const cantidadCarrito = document.getElementById('cantidadCarrito');
    const totalPagar = document.getElementById('totalPagar');

    //vaciar carro
    listaCarrito.innerHTML = '';
    // Agrega cada producto al carrito
    carrito.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(listItem);
    });

    // Actualiza el total del carrito
    cantidadCarrito.textContent = carrito.length;
    totalCarrito.textContent = `$${totalPagar}`;
}


//  botones "Agregar" 
const botonesAgregar = document.querySelectorAll(".btn-agregar");

// evento de clic en botón
botonesAgregar.forEach((boton) => {
    boton.removeEventListener("click", agregarProducto); 
    boton.addEventListener("click", agregarAlCarrito);
})

// Función para mostrar u ocultar el carrito al hacer clic en el icono
function toggleCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.style.display = carritoDiv.style.display === 'block' ? 'none' : 'block';
}

function calcularTotal() {
    let total = 0;
    
    const items = document.querySelectorAll('.item');
    function calcularTotalAPagar() {
    return totalPrecio;
}
function calcularTotalCarrito() {
    const totalCarrito = carrito.reduce((total, item) => total + item.precio, 0);
    return totalCarrito;
}

function vaciarCarrito() {
    carrito.length = 0; // Vacía el arreglo de productos en el carrito
    totalPrecio = 0; // Reinicia el total de precios a 0
    actualizarCarrito(); // Actualiza la interfaz para reflejar el carrito vacío
}
const botonVaciarCarrito = document.getElementById('botonVaciarCarrito');

botonVaciarCarrito.addEventListener('click', () => {
    vaciarCarrito();
});

/*:::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::*/

const iconoCarrito = document.querySelector('.bi-bag');

// Agrega un evento de clic al icono del carrito
iconoCarrito.addEventListener("click", () => {
    toggleCarrito();
    actualizarCarrito();
    const totalAPagar = calcularTotal();
    document.getElementById('totalPagar').textContent = `Total a pagar: $${totalAPagar}`;
});  
    items.forEach(item => {
        const precio = parseInt(item.dataset.precio); // Obtiene el precio del producto
        total += precio; // Suma el precio al total
    });

    return total;
}
