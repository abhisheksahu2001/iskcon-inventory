import { sql } from 'drizzle-orm';
import { pgTable ,uuid, varchar, boolean, timestamp, integer, decimal, text, date, foreignKey, real } from 'drizzle-orm/pg-core';
import { sqliteTable } from 'drizzle-orm/sqlite-core';
import crypto from "crypto";

const generateUUID = () => crypto.randomUUID();

// Category Table
export const Category = sqliteTable('Category', {
    id: uuid('id').primaryKey().$defaultFn(generateUUID),
    name: varchar('name', { length: 50 }).notNull().unique(),
    isDeleted: boolean('is_deleted').notNull().default(false),
    createdAt: text('created_at').default(sql(`(CURRENT_TIMESTAMP)`)),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => (new Date()).toISOString()),
});

// Measure Table
export const Measure = sqliteTable('Measure', {
    id: uuid('id').primaryKey().$defaultFn(generateUUID),
    unit: text('unit', { length: 50 }).notNull().unique(),
    isDeleted: integer('is_deleted', { mode: 'boolean' }).notNull().default(0),
    createdAt: text('created_at').default(sql(`(CURRENT_TIMESTAMP)`)),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => (new Date()).toISOString()),
});

// Product Table
export const Product = sqliteTable('Product', {
    id: uuid('id').primaryKey().$defaultFn(generateUUID),
    name: text('name', { length: 50 }).notNull(),
    categoryId: text('category_id').notNull().references(() => Category.id, { onDelete: 'set null' }),
    price: real('price').notNull().default(0),
    measureId: text('measure_id').notNull().references(() => Measure.id, { onDelete: 'set null' }),
    productQuantity: integer('product_quantity').notNull().default(0),
    isDeleted: integer('is_deleted', { mode: 'boolean' }).notNull().default(0),
    createdAt: text('created_at').default(sql(`(CURRENT_TIMESTAMP)`)),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => (new Date()).toISOString()),
});

// Receipt Table
export const Receipt = sqliteTable('Receipt', {
    id: uuid('id').primaryKey().$defaultFn(generateUUID),
    image: text('image'),
    isDeleted: integer('is_deleted', { mode: 'boolean' }).notNull().default(0),
    createdAt: text('created_at').default(sql(`(CURRENT_TIMESTAMP)`)),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => (new Date()).toISOString()),
});

// Transactions Table
export const Transactions = sqliteTable('Transactions', {
    id: uuid('id').primaryKey().$defaultFn(generateUUID),
    receiptId: text('receipt_id').references(() => Receipt.id, { onDelete: 'set null' }),
    transactionsMode: text('transactions_mode', { length: 50 }),
    transactionDate: text('transaction_date').notNull().default(sql`(CURRENT_DATE)`),
    productId: text('product_id').references(() => Product.id, { onDelete: 'set null' }),
    rate:real('rate').notNull(),
    gst: real('gst').default(0),
    productQuantity: integer('product_quantity').notNull().default(0),
    discount: real('discount').default(0),
    amount: real('amount').notNull(),
    note: text('note', { length: 255 }),
    isDeleted: integer('is_deleted', { mode: 'boolean' }).notNull().default(0),
    createdAt: text('created_at').default(sql(`(CURRENT_TIMESTAMP)`)),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => (new Date()).toISOString()),
});

// Orders Table
export const Orders = sqliteTable('Orders', {
    id: uuid('id').primaryKey().$defaultFn(generateUUID),
    name: text('name', { length: 50 }).notNull(),
    purpose: text('purpose', { length: 50 }).notNull(),
    orderDate: text('order_date').notNull().default(sql`(CURRENT_DATE)`),
    productId: text('product_id').references(() => Product.id, { onDelete: 'set null' }),
    productQuantity: integer('product_quantity').notNull().default(0),
    description: text('description', { length: 500 }),
    discount: real('discount').default(0),
    amount: real('amount').notNull(),
    receiptId: text('receipt_id').references(() => Receipt.id, { onDelete: 'set null' }),
    isDeleted: integer('is_deleted', { mode: 'boolean' }).notNull().default(0),
    createdAt: text('created_at').default(sql(`(CURRENT_TIMESTAMP)`)),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => (new Date()).toISOString()),
});