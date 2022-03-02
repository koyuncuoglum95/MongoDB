import { addNewProduct, getAllProduct, getIdProduct, updateProduct, deleteProduct } from "../controllers/productController";

const productRoutes = (app) => {
    app.route('/product')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getAllProduct)

        .post(addNewProduct);


    app.route('/product/:productID')
        .get(getIdProduct)
        .put(updateProduct)
        .delete(deleteProduct)
    }


export default productRoutes;