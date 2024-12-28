import db from "../db";
import { Product } from "./database";
import { eq, sql } from "drizzle-orm";
class ProductRepo {
    constructor() {
        this.db = db;
    }
    async addProduct(data) {
        let res = await this.db.insert(Product).values({
            ...data,
            createdAt: sql `(datetime('now'))`,
        });
        return res;
    }
    async findProductById(id) {
        return await this.db.select().from(Product).where(eq(Product.id, id));
    }
    async findProductByName(name) {
        return await this.db.select().from(Product).where(eq(Product.name, name));
    }
    async deleteProduct(id) {
        return await this.db.update(Product).set(Product.isDeleted, true).where(eq(Product.id, id));
    }
    async updateProduct(id, data) {
        return await this.db.update(Product).set(Product, data).where(eq(Product.id, id));
    }
}
export default ProductRepo;
