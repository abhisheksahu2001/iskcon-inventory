import CategoryRepo from "../Repo/category.js";

class CategoryService {
    constructor() {
        this.categoryRepo = new CategoryRepo();
    }
    async createCategory(name) {
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
    async getCategoryByName(name) {
        try {
            const result = await this.categoryRepo.findCategoryByName(name.toLowerCase());
            return result;
        }catch(err){

            console.log(err);
            return err;
        }
    }
    async getCategoryById(id) {
        try {
            const result = await this.categoryRepo.findCategoryById(id);
            return result;
        }catch(err){
            console.log(err);
            return err;
        }
    }
    async updateCategory(id, name) {
        try {
            const result = await this.categoryRepo.updateCategory(id,name);
            return result;
        }catch(err){
            console.log(err);
            return err;
        }
    }

    async deleteCategory(id) {
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
