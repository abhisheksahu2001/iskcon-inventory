import express from 'express';
import categoryController from '../controllers/category-controller';
const route = express.Router();
const categoryControllerFunctions = new categoryController();
route.post('/create', (req, res) => categoryControllerFunctions.createCategory(req, res));
route.get('/get', (res, req) => categoryControllerFunctions.getCategory(res, req));
route.get('/getall', (res, req) => categoryControllerFunctions.getAllCategory(res, req));
route.patch('/update/:id', (res, req) => categoryControllerFunctions.updateCategory(res, req));
route.delete('/delete/:id', (res, req) => categoryControllerFunctions.deleteCategory(res, req));
export default route;
