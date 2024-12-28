import CategoryService from '../service/category-service'
import { Request, Response } from 'express';
class categoryController {
    private categoryService: CategoryService
    constructor() {
    this.categoryService = new CategoryService();
  }

  async createCategory(req:Request,res:Response){
    try{
      const { name } = await req.body;
      console.log(name);
      const category = await this.categoryService.createCategory(name);
      return res.send({status:200 , data:category });
    }catch(error){
      console.log(error);
    }
  }
  async getCategory(req:Request<{},{},{},{name:string, id:string}>,res:Response){
    try{
      const { name , id } = await req.query;
      console.log(name , id)
      let category;
      if(name){
        category = await this.categoryService.getCategoryByName(name);
      }else if (id){
        category = await this.categoryService.getCategoryById(id);
      }
      return res.send({status:200 , data:category });
    }catch(error){
      console.log(error);
    }
  }

  async getAllCategory(req:Request,res:Response){
    try{
      const categories = await this.categoryService.getAllCategory();
      return res.send({status:200 , data:categories });
    }catch(error){
      console.log(error);
    }
  }

  async updateCategory(req:Request,res:Response){
    try{
      const { id } = await req.params;
      const { name } = await req.body;
      const category = await this.categoryService.updateCategory(id, name);
      return res.send({status:200 , data:category });
    }catch(error){
      console.log(error);
    }
  }

  async deleteCategory(req:Request,res:Response){
    try{
      const { id } = await req.params;
      const category = await this.categoryService.deleteCategory(id);
      return res.send({status:200 , data:category });
    }catch(error){
      console.log(error);
    }
  }

}

export default categoryController;