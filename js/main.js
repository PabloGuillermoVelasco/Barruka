class ControladorProductos {
    constructor() {
        this.inventarioProductos = []
        this.contenedor_productos = document.getElementById("contenedor_productos")
    }

    async levantarJSON () {
        let respuesta = await fetch ("./js/apiLocal.json")
        this.inventarioProductos = await respuesta.json()
        this.mostrarEnDom()
        this.eventoAnadirCarrito(controladorCarrito)
    }

    mostrarEnDom() {
        contenedor_productos.innerHTML = ""
        this.inventarioProductos.forEach(producto => {
            contenedor_productos.innerHTML += `
            <div class="card" style="width: 18rem;">
                        <img src=${producto.img} class="card-img-top img-fluid" alt=${producto.alt}>
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre} ${producto.sabor} ${producto.presentacion}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <p class = text-center><strong>$${producto.precio}</strong></p>
                            <div class="d-flex">
                            <button class="btn btn-warning mx-auto botonAgregarCarrito" id= "producto${producto.id}">Agregar al carrito</button>
                        </div>
                        </div>
                    </div>
            `
        });
    }

    eventoAnadirCarrito(controladorCarrito){
        this.inventarioProductos.forEach(producto => {
            const producto_en_espera = document.getElementById(`producto${producto.id}`)
        
            producto_en_espera.addEventListener("click", () => {
                
                controladorCarrito.anadirCarrito(producto)
        
                controladorCarrito.levantarCarrito()
        
                controladorCarrito.limpiarDom()
        
                controladorCarrito.mostrarEnDom()
        
                Toastify({
                    text: "Agregado",
                    duration: 2000,
                    gravity: 'bottom', 
                    position: 'right',
                    style: {
                        
                    background: "linear-gradient(to right, #f1ee13, #f1b317)",
                    color: 'black',
                    fontWeight: 'bold'
                    }
                }).showToast();
            })
        
        });
        
    }
}

class ControladorCarrito {
    constructor() {
        this.listaCarrito = []
        this.contenedor_carrito = document.getElementById("contenedor_carrito")
        this.subtotal = document.getElementById("subtotal")
        this.iva = document.getElementById("iva")
        this.total = document.getElementById("total")
        

    }

    borrar(producto){
        let indice = this.listaCarrito.indexOf(producto)
        this.listaCarrito.splice(indice,1)
    }

    levantarCarrito() {
        let obtenerListaJSON = localStorage.getItem("listaCarrito")

        if (obtenerListaJSON) {
            this.listaCarrito = JSON.parse(obtenerListaJSON)
            return true
        }
        return false
    }

    anadirCarrito(producto) {
        let existe = this.listaCarrito.some(elemento => elemento.id == producto.id)

        if (existe){
            const productoEncontrado = this.buscar(producto.id)
            productoEncontrado.cantidad += 1
        }else{
            this.listaCarrito.push(producto)
        }

        let arrEnFormatoJSON = JSON.stringify(this.listaCarrito)
        localStorage.setItem("listaCarrito", arrEnFormatoJSON)
    }

    vaciarCarrito() {
        this.listaCarrito = []
        localStorage.removeItem("listaCarrito")
    }

    cardProductos(producto){
        return `
            <section class="h-100 fondoCarrito">
                            <div class="container h-100 py-2 ">
                                <div class="card rounded-3 mb-1" >
                                    <div class="card-body p-3">
                                        <div class="row d-flex justify-content-between align-items-center" >
                                            <div class="col-md-2 col-lg-2 col-xl-2">
                                                <img src=${producto.img} class="img-fluid rounded-start" alt=${producto.alt}>
                                            </div>
                                            <div class="col-md-3 col-lg-3 col-xl-3">
                                                <p class="lead fw-normal mb-2">${producto.nombre} ${producto.sabor}
                                                    ${producto.presentacion}</p>
                                            </div>
                                            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                <button id= "minus" class="btn btn-link px-2"
                                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                    <i class="fas fa-minus"></i>
                                                </button>
                                                <input id="cantidadItem${producto.id}" inputmode="numeric" min="1" name="quantity" value="1" type="number"
                                                    class="form-control form-control-sm text-center"/>
                                                <button id="plus" class="btn btn-link px-2"
                                                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                    <i class="fas fa-plus"></i>
                                                </button>
                                            </div>
                                            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h5 class="mb-0" id="precioProductoIndividual">$</h5>
                                            </div>
                                            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                                <button id="borrar${producto.id}" class="botonEliminar"><i class="fa-solid fa-trash-can"></i></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </section>
                        `
    }
//METODO ACTUALIZAR PRECIO*CANTIDAD
    /*actualizarPrecios(){
        const cantidadItems = document.getElementById('cantidadItem${producto.id}').value;
        const precio = document.getElementById ('${producto.precio}')
        cantidadItems.addEventListener('change', () => {
            document.getElementById('precioProductoIndividual').innerHTML = cantidadItems*precio
        })

    }*/

    limpiarDom(){
        this.contenedor_carrito.innerHTML = ""
    }

    eventoBorrar(){
        this.listaCarrito.forEach(producto =>{
            document.getElementById(`borrar${producto.id}`).addEventListener("click", () => {
                this.borrar(producto)
                localStorage.setItem("listaCarrito", JSON.stringify(this.listaCarrito))
                this.mostrarEnDom()
                this.mostrarPreciosEnDom()
            })
        })
    }

    eventoVaciarCarrito(){
        const vaciarCarrito = document.getElementById('vaciarCarrito');
        vaciarCarrito.addEventListener('click', () => {
            this.vaciarCarrito();
            this.mostrarEnDom();
        });
    }

    mostrarEnDom() {
        this.limpiarDom()
        this.listaCarrito.forEach(producto => {
            this.contenedor_carrito.innerHTML += this.cardProductos(producto)
        })

        this.eventoBorrar()

        this.eventoVaciarCarrito()

        this.mostrarPreciosEnDom()

        //this.actualizarPrecios()
        
    }
    
    buscar(id){
        return this.listaCarrito.find(producto => producto.id == id)
    }
    
    //ACA ESTA TODO PARA EL CALCULO DE LOS TOTALES
    mostrarPreciosEnDom(){
        this.subtotal.innerHTML = "Subtotal: $" + this.calcularSubtotal()
        this.iva.innerHTML = "IVA: $" + this.calcularIva ()
        this.total.innerHTML = "Total: $" + this.calcularTotal()
    }

    calcularSubtotal(){
        return this.listaCarrito.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad ,0)
    }

    calcularIva(){
        return this.calcularSubtotal()*0.21
    }

    calcularTotal(){
        return this.calcularSubtotal() + this.calcularIva()
    }

}

//OBJETOS CONTROLADORES
const controladorProductos = new ControladorProductos()
const controladorCarrito = new ControladorCarrito()

//VERIFICA STORAGE
const levantoLista = controladorCarrito.levantarCarrito()

//LEVANTO JSON
controladorProductos.levantarJSON (controladorCarrito)


//DOM
const finalizarCompra = document.getElementById("finalizarCompra")

//CODIGO

controladorProductos.mostrarEnDom(contenedor_productos)
controladorCarrito.mostrarEnDom()
controladorProductos.eventoAnadirCarrito(controladorCarrito)
finalizarCompra.addEventListener("click", () =>{

    if(controladorCarrito.listaCarrito.length > 0){

        controladorCarrito.vaciarCarrito()
        controladorCarrito.mostrarEnDom()
        controladorCarrito.mostrarPreciosEnDom()

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Muchas gracias por su compra!',
            text: "En breve será redirigido a la plataforma de pagos",
            showConfirmButton: false,
            timer: 3000
    })
    }else{
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Su carrito esta vacío!',
            showConfirmButton: false,
            timer: 2700
    })
}
})