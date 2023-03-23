let inventarioProductos = [
    { id: 1, nombre: "BARRITA DE CEREAL", sabor: "COCO", presentacion: "30 GRAMOS", stock: 100, img: './assets/img/coco_barrita.png', alt: "Barrita coco", descripcion: "Con mani, coco y miel. Todo 100% natural", precio: 200 },
    { id: 2, nombre: "BARRITA DE CEREAL", sabor: "ORIGINAL", presentacion: "30 GRAMOS", stock: 100, img: './assets/img/original_barrita.png', alt: "Barrita miel", descripcion: "Con mani, avena, miel y amaranto. Todo 100% natural", precio: 200 },
    { id: 3, nombre: "BARRITA DE CEREAL", sabor: "CHOCOLATE", presentacion: "30 GRAMOS", stock: 100, img: './assets/img/chocolate_barrita.png', alt: "Barrita chocolate", descripcion: "Con cacao amargo y chips de chocolate. Todo 100% natural", precio: 200 },
    { id: 4, nombre: "BARRITAS DE CEREAL", sabor: "COCO", presentacion: "4 x 30 GRAMOS", stock: 30, img: './assets/img/cocoCaja.png', alt: "Caja barritas coco", descripcion: "Con mani, coco y miel. Todo 100% natural", precio: 750 },
    { id: 5, nombre: "BARRITAS DE CEREAL", sabor: "ORIGINAL", presentacion: "4 x 30 GRAMOS", stock: 30, img: './assets/img/originalCaja.png', alt: "Caja barritas miel", descripcion: "Con mani, avena, miel y amaranto. Todo 100% natural", precio: 750 },
    { id: 6, nombre: "BARRITAS DE CEREAL", sabor: "CHOCOLATE", presentacion: "4 x 30 GRAMOS", stock: 30, img: './assets/img/chocolateCaja.png', alt: "Cajas barritas chocolate", descripcion: "Con cacao amargo y chips de chocolate. Todo 100% natural", precio: 750 },
    { id: 7, nombre: "PASTA DE MANI", sabor: "", presentacion: "250 GRAMOS", stock: 50, img: './assets/img/pastaChica.png', alt: "Pasta de mani", descripcion: "100% fuente natural de proteinas sin sal", precio: 400 },
    { id: 8, nombre: "PASTA DE MANI", sabor: "", presentacion: "500 GRAMOS", stock: 50, img: './assets/img/pastaGrande.png', alt: "Pasta de mani", descripcion: "100% fuente natural de proteinas sin sal", precio: 700 },
    { id: 9, nombre: "PASTA DE MANI", sabor: "", presentacion: "1000 GRAMOS", stock: 40, img: './assets/img/pastaGrande.png', alt: "Pasta de mani", descripcion: "100% fuente natural de proteinas sin sal", precio: 1200 },
    { id: 10, nombre: "CHIPS DE BANANA", sabor: "", presentacion: "250 GRAMOS", stock: 50, img: "./assets/img/banana-chips.jpg", alt: "Chips banana", descripcion: "Chips de banana sin azúcar", precio: 600 },
    { id: 11, nombre: "MIX FRUTOS SECOS", sabor: "", presentacion: "500 GRAMOS", stock: 50, img: './assets/img/mix_frutos_secos.jpg', alt: "Frutos secos", descripcion: "Contiene nueces, almendras, mani y pasas de uva", precio: 1100 },
    { id: 12, nombre: "CASTAÑAS DE CAJU", sabor: "", presentacion: "250 GRAMOS", stock: 50, img: './assets/img/castañas.jpg', alt: "Castañas de cajú", descripcion: "Castañas de cajú tostadas con sal", precio: 800 },
    { id: 13, nombre: "SEMILLAS DE GIRASOL", sabor: "", presentacion: "500 GRAMOS", stock: 40, img: './assets/img/semillas_de-girasol.jpg', alt: "Semillas de girasol", descripcion: "Semillas de girasol tostadas sin sal", precio: 700 },
    { id: 14, nombre: "PASAS DE UVA", sabor: "", presentacion: "250 GRAMOS", stock: 50, img: './assets/img/pasas_uva.jpg', alt: "Pasas de uva", descripcion: "", precio: 500 },
    { id: 15, nombre: "SEMILLAS DE CHIA", sabor: "", presentacion: "250 GRAMOS", stock: 50, img: './assets/img/chia.jpg', alt: "Semillas de chia", descripcion: "", precio: 450 },
    { id: 16, nombre: "PISTACHOS", sabor: "", presentacion: "500 GRAMOS", stock: 50, img: './assets/img/pistachos.jpeg', alt: "Pistachos", descripcion: "Pistachos con su cáscara", precio: 1300 },
]

const arrEnFormatoJSON = JSON.stringify(inventarioProductos)

localStorage.setItem("inventarioProductos",arrEnFormatoJSON)

