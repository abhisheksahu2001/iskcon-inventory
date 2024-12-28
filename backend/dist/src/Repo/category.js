import db from "../db";
import { Category } from "./database";
import { eq, like, sql } from "drizzle-orm";
class CategoryRepo {
    constructor() {
        this.db = db;
    }
    async addCategory(name) {
        let res = await this.db.insert(Category).values({
            name,
            createdAt: sql `(datetime('now'))`,
        });
        return res;
    }
    async findCategoryById(id) {
        return await this.db.select().from(Category).where(eq(Category.id, id));
    }
    async findCategoryByName(name) {
        return await this.db.select().from(Category).where(like(Category.name, `%${name}%`));
    }
    async getAllCategory() {
        return await this.db.select().from(Category).where(eq(Category.isDeleted, false));
    }
    async deleteCategory(id) {
        return await this.db.update(Category).set(Category.isDeleted, true).where(eq(Category.id, id));
    }
    async updateCategory(id, name) {
        return await this.db.update(Category).set(Category.name, name).where(eq(Category.id, id));
    }
}
export default CategoryRepo;
