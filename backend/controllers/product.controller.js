import ProductService from "../service/product.service.js";
class productController {
    constructor() {
    this.productService = new ProductService();
  }

  async createProduct(req,res){
    try{
      const payload= await req.body;
      const category = await this.productService.createProduct(payload);
      return res.send({status:200 , data:category });
    }catch(error){
      console.log(error);
    }
  }
  async getProductByName(req,res){
    try{
      const { name } = await req.params;
      const category = await this.productService.getProductByName(name);
      return res.send({status:200 , data:category });
    }catch(error){
      console.log(error);
    }
  }
  async getProductById(req,res){
    try{
      const { id } = await req.params;
      const category = await this.productService.getProductById(id);
      return res.send({status:200 , data:category });
    }catch(error){
      console.log(error);
    }
  }
  async updateProduct(req,res){
    try{
      const { id } = await req.params;
      const payload= await req.body;
      const category = await this.productService.updateProduct(id, payload);
      return res.send({status:200 , data:category });
    }catch(error){
      console.log(error);
    }
  }

  async deleteProduct(req,res){
    try{
      const { id } = await req.params;
      const category = await this.productService.deleteProduct(id);
      return res.send({status:200 , data:category });
    }catch(error){
      console.log(error);
    }
  }

}

export default productController;