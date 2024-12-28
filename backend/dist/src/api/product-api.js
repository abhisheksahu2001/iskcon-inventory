import express from 'express';
import productController from '../controllers/product-controller';
const route = express.Router();
const productControllerFunctions = new productController();
route.post('/create', (req, res) => productControllerFunctions.createProduct(req, res));
route.get('/get', (res, req) => productControllerFunctions.createProduct(res, req));
route.patch('/update', (res, req) => productControllerFunctions.updateProduct(res, req));
route.delete('/delete', (res, req) => productControllerFunctions.deleteProduct(res, req));
export default route;
