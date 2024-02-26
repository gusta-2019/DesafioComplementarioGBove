const express = require("express");
const router = express.Router();
const CartManager = require("../controllers/cart-manager-db.js");
const cartManager = new CartManager();


//Creo un nuevo carrito: 

router.post("/", async (req, res) => {
    try {
        const newCarts = await cartManager.crearCarrito();
        res.json(newCarts);
    } catch (error) {
        console.error("Error al crear un nuevo carrito", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

//Listado de productos que pertenecen a un carrito. 

router.get("/:cid", async (req, res) => {
    const cartId = req.params.cid;

    try {
        const carrito = await cartManager.getCarritoById(cartId);
        res.json(carrito.products);
    } catch (error) {
        console.error("Error al obtener el carrito", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});


//Agrego productos a diferentes carritos.

router.post("/:cid/product/:pid", async (req, res) => {
    const cartId = req.params.cid;
    const productId = req.params.pid;
    const quantity = req.body.quantity || 1;

    try {
        const actualizarCarrito = await cartManager.agregarProductoAlCarrito(cartId, productId, quantity);
        res.json(actualizarCarrito.products);
    } catch (error) {
        console.error("Error al agregar producto al carrito", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

module.exports = router;
