import express from 'express'
import  categoryControler  from '../controlers/category.controler'

const route = express.Router();
const categoryControllerFunctions = new categoryControler();

route.post('/create', categoryControllerFunctions.createCategory )

export default route;