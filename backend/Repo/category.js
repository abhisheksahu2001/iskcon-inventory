import { db } from "../db/config.js"
import { Category } from "./database.js";
import { eq, sql } from "drizzle-orm";

class CategoryRepo {
    constructor() {
        this.db = db;
    }

    async addCategory(name) {
        let res = await this.db.insert(Category).values({
            name,
            createdAt: sql`(datetime('now'))`,
            updatedAt: sql`(datetime('now'))`,
        })
        return res

    }

    async findCategoryById(id) {
        return await this.db.select().from(Category).where(eq(Category.id, id))
    }
    async findCategoryByName(name) {
        return await this.db.select().from(Category).where(eq(Category.name, name))

    }

    async deleteCategory(id) {
        return await this.db.delete(Category).where(eq(Category.id, id))

    }

    async updateCategory(id, name) {
        return await this.db.update(Category).set(Category.name, name).where(eq(Category.id, id))

    }
}

export default CategoryRepo;