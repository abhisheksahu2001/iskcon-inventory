import CategoryService from '../service/category'

class categoryController {
    constructor() {
    this.CategoryService = new CategoryService();
  }

  async createCategory(req,res){
    try{
      const { name } = await req.body;
      const category = await this.CategoryService.createCategory(name);
      return req.send({status:200 , data:category });
    }catch(error){
      console.log(error);
    }
  }

}

export default categoryController;