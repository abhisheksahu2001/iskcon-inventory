import ProductService from "../service/product-service";
import { Request, Response } from "express";

class productController {
  private productService: ProductService;
    constructor() {
    this.productService = new ProductService();
  }

  async createProduct(req:Request,res:Response){
    try{
      const payload= await req.body;
      const product = await this.productService.createProduct(payload);
      return res.send({status:200 , data:product });
    }catch(error){
      console.log(error);
    }
  }
  async getProductByName(req:Request,res:Response){
    try{
      const { name } = await req.params;
      const product = await this.productService.getProductByName(name);
      return res.send({status:200 , data:product });
    }catch(error){
      console.log(error);
    }
  }
  async getProductById(req:Request,res:Response){
    try{
      const { id } = await req.params;
      const product = await this.productService.getProductById(id);
      return res.send({status:200 , data:product });
    }catch(error){
      console.log(error);
    }
  }

  async getAllProducts(req:Request,res:Response){
    try{
      const products = await this.productService.getAllProducts();
      return res.send({status:200 , data:products });
    }catch(error){
      console.log(error);
    }
  }

  async updateProduct(req:Request,res:Response){
    try{
      const { id } = await req.params;
      const payload= await req.body;
      const product = await this.productService.updateProduct(id, payload);
      return res.send({status:200 , data:product });
    }catch(error){
      console.log(error);
    }
  }

  async deleteProduct(req:Request,res:Response){
    try{
      const { id } = await req.params;
      const product = await this.productService.deleteProduct(id);
      return res.send({status:200 , data:product });
    }catch(error){
      console.log(error);
    }
  }

}

export default productController;