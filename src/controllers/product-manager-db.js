const ProductModel = require("../models/product.model.js");

class ProductManager {

    async addProduct({winery, wine, location, image, category, stock, price, code, thumbnails}) {
        try {
            if(!winery|| !wine || !location || !image || !category || !stock || !price || !code) {
                console.log("Todos los campos son obligatorios");
                return; 
            }

            const existeProducto = await ProductModel.findOne({code: code});

            if(existeProducto) {
                console.log("El código de producto debe ser unico");
                return;
            }

            const nuevoProducto = new ProductModel({
                winery, 
                wine, 
                location, 
                image, 
                category,
                stock, 
                price, 
                code,
                status: true, 
                thumbnails: thumbnails || []
            });

            await nuevoProducto.save(); 

        } catch (error) {
            console.log("No se pudo agregar un producto", error); 
            throw error; 
        }
    }

    async getProducts() {
        try {
            const productos = await ProductModel.find(); 
            return productos;
        } catch (error) {
            console.log("Error al recuperar los productos", error); 
            throw error; 
        }
    }

    async getProductById(id) {
        try {
            const producto = await ProductModel.findById(id);
            if(!producto) {
                console.log("Producto no encontrado!!");
                return null; 
            }

            console.log("Producto encontrado");
            return producto;
        } catch (error) {
            console.log("No se pudo recuperar el producto por ID", error); 
            throw error; 
        }
    }

    async updateProduct(id, productoActualizado) {
        try {
            const updateProduct =  await ProductModel.findByIdAndUpdate(id, productoActualizado);

            if(!updateProduct) {
                console.log("Producto no encontrado, vamos a morir");
                return null; 
            }
            console.log("Producto actualizado");
            return updateProduct;

        } catch (error) {
            console.log("No se pudo actualizar producto por ID", error); 
            throw error; 
        }
    }

    async deleteProduct(id) {
        try {
            const deleteProduct = await ProductModel.findByIdAndDelete(id);

            if(!deleteProduct) {
                console.log("Producto no encontrado");
                return null; 
            }
            console.log("Producto eliminado");
            

        } catch (error) {
            console.log("No se pudo eliminar producto por ID", error); 
            throw error; 
        }
    }
}

module.exports = ProductManager;