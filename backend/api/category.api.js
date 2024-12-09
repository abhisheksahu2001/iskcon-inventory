import express from 'express'
import  categoryController  from '../controllers/category.controller.js'

const route = express.Router();
const categoryControllerFunctions = new categoryController();

route.post('/create', (req, res) =>  categoryControllerFunctions.createCategory(req, res) )
route.get('/get', (res, req) => categoryControllerFunctions.createCategory(res, req))
route.patch('/update', (res, req) =>  categoryControllerFunctions.updateCategory(res, req))
route.delete('/delete', (res, req) =>  categoryControllerFunctions.deleteCategory(res, req))

export default route;