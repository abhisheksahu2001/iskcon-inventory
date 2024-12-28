import { sql } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid'
import { drizzle } from 'drizzle-orm/libsql';
import {varchar, boolean, integer, text, real } from 'drizzle-orm/pg-core';
import { sqliteTable, index } from 'drizzle-orm/sqlite-core';


// Category Table
export const Category = sqliteTable('Category', {
    id: text('id').primaryKey().$defaultFn(()=> uuidv4()),
    name: text('name', { length: 50 }).notNull().unique(),
    is_deleted: integer('is_deleted', { mode: 'boolean' }).notNull().default(0),
    created_at: text('created_at').default(sql`CURRENT_TIMESTAMP`),
    updated_at: text('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
}, (table) => ({
    nameIdx: index('category_name_idx').on(table.name),
    idIdx: index('category_id_idx').on(table.id)
  }));

// Measure Table
export const Measure = sqliteTable('Measure', {
    id: text('id').primaryKey().$defaultFn(()=> uuidv4()),
    unit: text('unit', { length: 50 }).notNull().unique(),
    is_deleted: integer('is_deleted', { mode: 'boolean' }).notNull().default(0),
    created_at: text('created_at').default(sql`CURRENT_TIMESTAMP`),
    updated_at: text('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
}, (table) => ({
    nameIdx: index('measure_unit_idx').on(table.unit),
    idIdx: index('measure_id_idx').on(table.id)
  }));

 // Receipt Table
export const Receipt = sqliteTable('Receipt', {
    id: text('id').primaryKey().$defaultFn(()=> uuidv4()),
    image: text('image'),
    is_deleted: integer('is_deleted', { mode: 'boolean' }).notNull().default(0),
    created_at: text('created_at').default(sql`CURRENT_TIMESTAMP`),
    updated_at: text('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
},(table) => ({
    idIdx: index('receipt_id_idx').on(table.id)
  }));
 
// Product Table
export const Product = sqliteTable('Product', {
    id: text('id').primaryKey().$defaultFn(()=> uuidv4()),
    name: text('name', { length: 50 }).notNull(),
    category_id: text('category_id').notNull().references(() => Category.id, { onDelete: 'set null' }),
    price: real('price').notNull().default(0),
    measure_id: text('measure_id').notNull().references(() => Measure.id, { onDelete: 'set null' }),
    product_quantity: integer('product_quantity').notNull().default(0),
    is_deleted: integer('is_deleted', { mode: 'boolean' }).notNull().default(0),
    created_at: text('created_at').default(sql`CURRENT_TIMESTAMP`),
    updated_at: text('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
}, (table) => ({
    nameIdx: index('product_name_idx').on(table.name),
    idIdx: index('product_id_idx').on(table.id),
    categoryIdx: index('product_category_idx').on(table.category_id),
    measureIdx: index('product_measure_idx').on(table.measure_id)
  }));


// Transactions Table
export const Transactions = sqliteTable('Transactions', {
    id: text('id').primaryKey().$defaultFn(()=> uuidv4()),
    receipt_id: text('receipt_id').references(() => Receipt.id, { onDelete: 'set null' }),
    transactions_mode: text('transactions_mode', { length: 50 }),
    transaction_date: text('transaction_date').notNull().default(sql`(CURRENT_DATE)`),
    product_id: text('product_id').references(() => Product.id, { onDelete: 'set null' }),
    rate:real('rate').notNull(),
    gst: real('gst').default(0),
    product_quantity: integer('product_quantity').notNull().default(0),
    discount: real('discount').default(0),
    amount: real('amount').notNull(),
    note: text('note', { length: 255 }),
    is_deleted: integer('is_deleted', { mode: 'boolean' }).notNull().default(0),
    created_at: text('created_at').default(sql`CURRENT_TIMESTAMP`),
    updated_at: text('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
}, (table) => ({
    idIdx: index('transactions_id_idx').on(table.id),
    receiptIdx: index('transactions_receipt_idx').on(table.receipt_id),
    productIdx: index('transactions_product_idx').on(table.product_id),
    dateIdx: index('transactions_date_idx').on(table.transaction_date)
  }));

// Orders Table
export const Orders = sqliteTable('Orders', {
    id: text('id').primaryKey().$defaultFn(()=> uuidv4()),
    name: text('name', { length: 50 }).notNull(),
    purpose: text('purpose', { length: 50 }).notNull(),
    order_date: text('order_date').notNull().default(sql`(CURRENT_DATE)`),
    product_id: text('product_id').references(() => Product.id, { onDelete: 'set null' }),
    product_quantity: integer('product_quantity').notNull().default(0),
    description: text('description', { length: 500 }),
    discount: real('discount').default(0),
    amount: real('amount').notNull(),
    receipt_id: text('receipt_id').references(() => Receipt.id, { onDelete: 'set null' }),
    is_deleted: integer('is_deleted', { mode: 'boolean' }).notNull().default(0),
    created_at: text('created_at').default(sql`CURRENT_TIMESTAMP`),
    updated_at: text('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
}, (table) => ({
    idIdx: index('orders_id_idx').on(table.id),
    nameIdx: index('orders_name_idx').on(table.name),
    productIdx: index('orders_product_idx').on(table.product_id),
    receiptIdx: index('orders_receipt_idx').on(table.receipt_id),
    dateIdx: index('orders_date_idx').on(table.order_date)
  }));
