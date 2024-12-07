import CategoryService from '../service/category.js'

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
  async getCategory(req,res){
    try{
      const { name } = await req.params;
      const category = await this.CategoryService.getCategoryByName(name);
      return res.send({status:200 , data:category });
    }catch(error){
      console.log(error);
    }
  }

}

export default categoryController;