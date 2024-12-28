import CategoryService from '../service/category-service';
class categoryController {
    constructor() {
        this.CategoryService = new CategoryService();
    }
    async createCategory(req, res) {
        try {
            const { name } = await req.body;
            console.log(name);
            const category = await this.CategoryService.createCategory(name);
            return res.send({ status: 200, data: category });
        }
        catch (error) {
            console.log(error);
        }
    }
    async getCategory(req, res) {
        try {
            const { name, id } = await req.query;
            console.log(name, id);
            let category;
            if (name) {
                category = await this.CategoryService.getCategoryByName(name);
            }
            else if (id) {
                category = await this.CategoryService.getCategoryById(id);
            }
            return res.send({ status: 200, data: category });
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAllCategory(req, res) {
        try {
            const categories = await this.CategoryService.getAllCategory();
            return res.send({ status: 200, data: categories });
        }
        catch (error) {
            console.log(error);
        }
    }
    async updateCategory(req, res) {
        try {
            const { id } = await req.params;
            const { name } = await req.body;
            const category = await this.CategoryService.updateCategory(id, name);
            return res.send({ status: 200, data: category });
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteCategory(req, res) {
        try {
            const { id } = await req.params;
            const category = await this.CategoryService.deleteCategory(id);
            return res.send({ status: 200, data: category });
        }
        catch (error) {
            console.log(error);
        }
    }
}
export default categoryController;
