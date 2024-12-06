import { turso } from "../db/config"

class CategoryRepo {
    constructor() {
        this.turso = turso;
    }

    async addCategory(name) {
        return await this.turso.execute(
            `
            INSERT INTO Category (name) VALUES (${name});
        `
        )
        
    }

    async findCategoryById(id) {
        return await this.turso.execute(
            `
            Select * from Category where id = ${id};
        `
        )
    }
    async findCategoryByName(name) {
        return await this.turso.execute(
            `
            Select * from Category where name = ${name};
        `
        )
    }

    async deleteCategory(id) {
        return await this.turso.execute(
            `
            Update Category set is_deleted = true where id = ${id};
        `
        )
    }

    async updateCategory(id, name) {
        return await this.turso.execute(
            `
            Update Category set name = ${name} where id = ${id};
        `
        )
    }
}

export default CategoryRepo;