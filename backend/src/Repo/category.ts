import { LibSQLDatabase } from "drizzle-orm/libsql";
import { Category } from "./database";
import { eq, like, sql } from "drizzle-orm";
import { Schema } from "./index"
import db  from "../db";


class CategoryRepo {
    private db:LibSQLDatabase<Schema>
    constructor() {
        this.db = db;
    }
    async addCategory(name:string) {
        let res = await this.db.insert(Category).values({
            name,
            createdAt: sql`(datetime('now'))`,
        }).returning()
        return res

    }

    async findCategoryById(id:string) {
        return await this.db.select().from(Category).where(eq(Category.id, id))
    }
    async findCategoryByName(name:string) {
        return await this.db.select().from(Category).where(like(Category.name, `%${name}%`))
    }
    async getAllCategory(){
        return await this.db.select().from(Category).where(eq(Category.is_deleted, false))
    }
    async deleteCategory(id:string) {
        return await this.db.update(Category).set({is_deleted:true}).where(eq(Category.id,id))

    }

    async updateCategory(id:string, name:string) {
        return await this.db.update(Category).set({name}).where(eq(Category.id, id)).returning()

    }
}

export default CategoryRepo;