import express from 'express'
import { Express } from 'express'
import CategoryRoutes from './category-api'
import productRoutes from './product-api'
import measureRoutes from './measure-api'

const route = express.Router()
route.use('/category' , CategoryRoutes());
route.use('/product', productRoutes())
route.use('/measure', measureRoutes())

export default route ;