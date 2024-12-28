import express from 'express';
import categoryApi from './category-api';
import productApi from './product-api';
const route = express.Router();
route.use('/category', categoryApi);
route.use('/product', productApi);
export default route;
