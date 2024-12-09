import { db } from "../db/config.js"
import { Product } from "./database.js";
import { eq, sql } from "drizzle-orm";

class ProductRepo {
    constructor() {
        this.db = db;
    }

    async addProduct(data) {
        let res = await this.db.insert(Product).values({
            ...data,
            updatedAt: sql`(datetime('now'))`,
            createdAt: sql`(datetime('now'))`,
        })
        return res

    }

    async findProductById(id) {
        return await this.db.select().from(Product).where(eq(Product.id, id))
    }
    async findProductByName(name) {
        return await this.db.select().from(Product).where(eq(Product.name, name))

    }

    async deleteProduct(id) {
        return await this.db.delete(Product).where(eq(Product.id, id))

    }

    async updateProduct(id, name) {
        return await this.db.update(Product).set(Product.name, name).where(eq(Product.id, id))

    }
}

export default ProductRepo;