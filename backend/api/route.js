import express from 'express'
import categoryApi from './category.api.js'
import productApi from './product.api.js'
const route = express.Router()
route.use('/category' , categoryApi );
route.use('/product', productApi)

export default route;