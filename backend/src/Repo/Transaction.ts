import { LibSQLDatabase } from "drizzle-orm/libsql/driver-core.js";
import { Transactions } from "./database";
import { Schema } from "./index.js";
import db  from "../db";

class TransactionsRepo {
    private db: LibSQLDatabase<Schema>
    constructor() {
        this.db = db;
    }


    async addTransaction(data) {
        return await this.db.insert(Transactions).values(data);
    }
    async getAllTransactions() {
        return await this.db.select().from(Transactions);
    }
    async getTransactionById(id) {
        return await this.db.select().from(Transactions).where({ id });
    }
    async updateTransaction(id, data) {
        return await this.db.update(Transactions).set(data).where({ id });
    }
    async deleteTransaction(id) {
        return await this.db.update(Transactions).set(Transactions.isDeleted, true).where({ id });
    }

}
export default TransactionsRepo;