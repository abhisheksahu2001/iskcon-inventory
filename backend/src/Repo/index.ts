import { LibSQLDatabase } from "drizzle-orm/libsql";
import { tursoClient } from "../db";

// Import your schema
import { Category, Measure, Receipt, Product, Transactions, Orders } from "./database";
import CategoryRepo from "./category";
import MeasureRepo from "./measure";
import ProductRepo from "./product";
import OrdersRepo from "./Order";
import TransactionsRepo from "./Transaction";

// Define the schema type for the database
export interface Schema extends Record<string, unknown> {
    Category: typeof Category;
    Measure: typeof Measure;
    Receipt: typeof Receipt;
    Product: typeof Product;
    Transactions: typeof Transactions;
    Orders: typeof Orders;
}

// Define the DatabaseTables class
const DatabaseTables = () => {
    console.log("Initializing Database")
    const db:LibSQLDatabase<Schema> = tursoClient();
    return db
}

export default DatabaseTables;