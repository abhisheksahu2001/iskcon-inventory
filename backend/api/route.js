import express from 'express'
import categoryApi from './category.api'

const route = express.Router()
route.use('/category' , categoryApi );

export default route;