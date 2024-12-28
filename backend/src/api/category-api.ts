import express , { Router, Request } from 'express'
import categoryController from '../controllers/category-controller'

const CategoryRoutes = () => {
    const route = express.Router()
    const categoryControllerFunctions = new categoryController();
    route.post('/create', (req, res) => categoryControllerFunctions.createCategory(req, res))
    route.get('/get', (req:Request<{},{},{},{name:string,id:string}>,res) => categoryControllerFunctions.getCategory(req,res))
    route.get('/getall', (req,res) => categoryControllerFunctions.getAllCategory(req,res))
    route.patch('/update/:id', (req,res) => categoryControllerFunctions.updateCategory(req,res))
    route.delete('/delete/:id', (req,res) => categoryControllerFunctions.deleteCategory(req,res))
    return route
}
export default CategoryRoutes;