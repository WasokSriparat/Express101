const express = require('express');
const app = express();
const productController = require("../controllers/productController")

app.get("/",productController.getProducts);
app.get("/:id",productController.getProductById);
app.get("/name/:name",productController.getProductByName);

app.post("/",productController.addProduct);

app.put("/:id",productController.editWholeProduct);

app.patch("/:id",productController.editProduct);

app.delete("/:id",productController.deleteProductById);

module.exports = app;
