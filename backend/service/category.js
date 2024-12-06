import CategoryRepo from "../Repo/category";



class CategoryService{
    constructor (){
        this.categoryRepo = new CategoryRepo();
    }
    async  addCategoryService(name){
        try{    
            const isCategoryPresent = await this.categoryRepo.findCategoryByName(name);
            if(isCategoryPresent.rows.length > 0){
                return "Category already exists";
            }
            const result = await this.categoryRepo.addCategory(name);
        return result;
    }catch (err){
        console.log(err);
        return err;
    }
}
}

export default CategoryService
