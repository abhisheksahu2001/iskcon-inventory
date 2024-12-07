import express from 'express'
import  categoryControler  from '../controlers/category.controler.js'

const route = express.Router();
const categoryControllerFunctions = new categoryControler();

route.post('/create', (req, res) =>  categoryControllerFunctions.createCategory(req, res) )
route.post('/get', categoryControllerFunctions.createCategory )

export default route;