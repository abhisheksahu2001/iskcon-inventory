import ProductRepo from "../Repo/product";

class ProductService {
    private productRepo: ProductRepo;
    constructor() {
        this.productRepo = new ProductRepo();
    }
    async createProduct(payload) {
        try {
            const { name, categoryId, price, measureId, productQuantity } = payload;
            const isProductPresent = await this.productRepo.findProductByName(name);
            if (isProductPresent.length > 0) {
                return "Product already exists";
            }
            const result = await this.productRepo.addProduct({name, categoryId:categoryId.id, price, measureId:measureId.id, productQuantity});
            return result;
        } catch (err) {
            console.log(err);
            return err;
        }

    }
    async getProductByName(name:string) {
        try {
            const result = await this.productRepo.findProductByName(name);
            return result;
        }catch(err){

            console.log(err);
            return err;
        }
    }
    async getProductById(id:string) {
        try {
            const result = await this.productRepo.findProductById(id);
            return result;
        }catch(err){
            console.log(err);
            return err;
        }
    }

    async getAllProducts() {
        try {
            const result = await this.productRepo.getAllProducts();
            return result;
        }catch(err){
            console.log(err);
            return err;
        }
    }

    async updateProduct(id:string, payload:{[key:string]:string}) {
        const { categoryId, price, measureId, productQuantity } = payload;
        let name = payload.name.toLowerCase();
        try {
            const result = await this.productRepo.updateProduct(id,{name, categoryId, price, measureId, productQuantity});
            return result;
        }catch(err){
            console.log(err);
            return err;
        }
    }

    async deleteProduct(id:string) {
        try {
            const result = await this.productRepo.deleteProduct(id);
            return result;
        }catch(err){
            console.log(err);
            return err;
        }
    }
}

export default ProductService
