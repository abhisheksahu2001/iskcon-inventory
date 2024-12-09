import CategoryService from '../service/category.service.js'

class categoryController {
    constructor() {
    this.CategoryService = new CategoryService();
  }

  async createCategory(req,res){
    try{
      const { name } = await req.body;
      console.log(name);
      const category = await this.CategoryService.createCategory(name);
      return res.send({status:200 , data:category });
    }catch(error){
      console.log(error);
    }
  }
  async getCategoryByName(req,res){
    try{
      const { name } = await req.params;
      const category = await this.CategoryService.getCategoryByName(name);
      return res.send({status:200 , data:category });
    }catch(error){
      console.log(error);
    }
  }
  async getCategoryById(req,res){
    try{
      const { id } = await req.params;
      const category = await this.CategoryService.getCategoryById(id);
      return res.send({status:200 , data:category });
    }catch(error){
      console.log(error);
    }
  }
  async updateCategory(req,res){
    try{
      const { id } = await req.params;
      const { name } = await req.body;
      const category = await this.CategoryService.updateCategory(id, name);
      return res.send({status:200 , data:category });
    }catch(error){
      console.log(error);
    }
  }

  async deleteCategory(req,res){
    try{
      const { id } = await req.params;
      const category = await this.CategoryService.deleteCategory(id);
      return res.send({status:200 , data:category });
    }catch(error){
      console.log(error);
    }
  }

}

export default categoryController;