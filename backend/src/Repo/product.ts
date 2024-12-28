import { LibSQLDatabase } from "drizzle-orm/libsql";
import { Product } from "./database";
import { eq, sql, like } from "drizzle-orm";
import { Schema } from './index'
import db  from "../db";

class ProductRepo {
    private db: LibSQLDatabase<Schema>
    constructor() {
        this.db = db;
    }


    async addProduct(data) {
        let res = await this.db.insert(Product).values({
            ...data,
            createdAt: sql`(datetime('now'))`,
        })
        return res

    }

    async findProductById(id) {
        return await this.db.select().from(Product).where(eq(Product.id, id))
    }
    async findProductByName(name) {
        return await this.db.select().from(Product).where(like(Product.name, `%${name}%`))

    }

    async getAllProducts(){
            return await this.db.select().from(Product).where(eq(Product.is_deleted, false))
        }

    async deleteProduct(id:string) {
        return await this.db.update(Product).set({is_deleted:true}).where(eq(Product.id, id))

    }

    async updateProduct(id:string, data) {
        return await this.db.update(Product).set(...data).where(eq(Product.id, id)).returning();

    }
}

export default ProductRepo;