import { LibSQLDatabase } from "drizzle-orm/libsql";
import { Category, Measure, Orders, Product } from "./database";
import { Schema } from "./index"
import db  from "../db";

class OrdersRepo {
    private db: LibSQLDatabase<Schema>
    constructor() {
        this.db = db;
    }

    async addOrder(data) {
        return await this.db.insert(Orders).values(data);
    }
    async getAllOrders() {
        return await this.db.select().from(Orders).innerJoin(Product, eq(Orders.productId, Product.id)).innerJoin(Category, eq(Product.categoryId, Category.id)).innerJoin(Measure, eq(Product.measureId, Measure.id)).all();
    }
    async getOrderById(id) {
        return await this.db.select().from(Orders).innerJoin(Product, eq(Orders.productId, Product.id)).innerJoin(Category, eq(Product.categoryId, Category.id)).innerJoin(Measure, eq(Product.measureId, Measure.id)).where({ id });
    }
    async updateOrder(id, data) {
        return await this.db.update(Orders).set(data).where({ id });
    }
    async deleteOrder(id) {
        return await this.db.update(Orders).set(Orders.isDeleted, true).where({ id });
    }

}
export default OrdersRepo;