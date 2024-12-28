import CategoryRepo from "../Repo/category";

class CategoryService {
    private categoryRepo: CategoryRepo;
    constructor() {
        this.categoryRepo = new CategoryRepo();
    }
    async createCategory(name:string) {
        try {
            const isCategoryPresent = await this.categoryRepo.findCategoryByName(name.toLowerCase());
            if (isCategoryPresent.length > 0) {
                return "Category already exists";
            }
            const result = await this.categoryRepo.addCategory(name.toLowerCase());
            return result;
        } catch (err) {
            console.log(err);
            return err;
        }

    }
    async getCategoryByName(name:string) {
        try {
            const result = await this.categoryRepo.findCategoryByName(name.toLowerCase());
            return result;
        }catch(err){

            console.log(err);
            return err;
        }
    }
    async getCategoryById(id:string) {
        try {
            const result = await this.categoryRepo.findCategoryById(id);
            return result;
        }catch(err){
            console.log(err);
            return err;
        }
    }

    async getAllCategory(){
        try{
            const result = await this.categoryRepo.getAllCategory();
            return result;
        }catch(err){
            console.log(err);
            return err;
        }
    }

    async updateCategory(id:string, name:string) {
        try {
            const result = await this.categoryRepo.updateCategory(id,name.toLowerCase());
            return result;
        }catch(err){
            console.log(err);
            return err;
        }
    }

    async deleteCategory(id:string) {
        try {
            const result = await this.categoryRepo.deleteCategory(id);
            return result;
        }catch(err){
            console.log(err);
            return err;
        }
    }
}

export default CategoryService
